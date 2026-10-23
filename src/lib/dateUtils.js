// src/lib/dateUtils.js

const MONTH_MAP = {
  jan: 1, january: 1, januari: 1,
  feb: 2, february: 2, februari: 2,
  mar: 3, march: 3, maret: 3,
  apr: 4, april: 4,
  may: 5, mei: 5,
  jun: 6, june: 6, juni: 6,
  jul: 7, july: 7, juli: 7,
  aug: 8, august: 8, agustus: 8, agu: 8, agt: 8,
  sep: 9, sept: 9, september: 9,
  oct: 10, october: 10, oktober: 10, okt: 10,
  nov: 11, november: 11,
  dec: 12, december: 12, desember: 12, des: 12,
};

/**
 * Parses an individual date part like "Oct 2026", "2023", "Mei 2024", or "Present".
 */
export function parseDatePart(part, isEnd = false) {
  if (!part) return null;
  const trimmed = String(part).trim().toLowerCase();

  if (['present', 'saat ini', 'sekarang', 'current', 'now', 'aktif'].includes(trimmed)) {
    return { isPresent: true, year: 9999, month: 12, value: 999912 };
  }

  // Look for 4-digit year (1900-2099)
  const yearMatch = trimmed.match(/\b(19\d{2}|20\d{2})\b/);
  if (!yearMatch) {
    return null;
  }

  const year = parseInt(yearMatch[1], 10);

  // Look for month
  let month = isEnd ? 12 : 1;
  const words = trimmed.replace(yearMatch[0], '').split(/[^a-z]+/);
  for (const word of words) {
    if (word && MONTH_MAP[word]) {
      month = MONTH_MAP[word];
      break;
    }
  }

  return {
    isPresent: false,
    year,
    month,
    value: year * 100 + month,
  };
}

/**
 * Parses full date range string like "Oct 2026 - Present", "2020 - 2023", "2025".
 */
export function parseTimelineDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') {
    return {
      hasPresent: false,
      start: { value: 0, year: 0, month: 0, isPresent: false },
      end: { value: 0, year: 0, month: 0, isPresent: false },
    };
  }

  const isPresentKeyword = /present|saat ini|sekarang|current|aktif/i.test(dateStr);

  const parts = dateStr.split(/\s*[-–—/]|(?:\s+to\s+)\s*/i);
  const startPart = parts[0]?.trim();
  const endPart = parts[1]?.trim();

  const startParsed = parseDatePart(startPart, false);
  const endParsed = endPart ? parseDatePart(endPart, true) : null;

  const hasPresent =
    isPresentKeyword ||
    Boolean(startParsed?.isPresent) ||
    Boolean(endParsed?.isPresent);

  const start = startParsed || { value: 0, year: 0, month: 0, isPresent: false };
  const end = endParsed || (hasPresent ? { value: 999912, year: 9999, month: 12, isPresent: true } : start);

  return {
    hasPresent,
    start,
    end,
  };
}

/**
 * Checks whether an item represents an active role/position/education.
 */
export function isItemActive(item) {
  if (!item) return false;
  if (item.isActive === true || item.is_active === true) return true;
  if (typeof item.date === 'string' && /present|saat ini|sekarang|current|aktif/i.test(item.date)) {
    return true;
  }
  return false;
}

/**
 * Comparator for timeline items (Work, Education, Experiences, Achievements).
 * Prioritizes:
 * 1. Active items at the very top (isActive / is_active / "Present")
 * 2. If both active: newest start date first (e.g. Oct 2026 > Feb 2025)
 * 3. If both inactive: newest end date first (e.g. Sep 2026 > Dec 2025), then start date
 * 4. Tie-breaker: most recently added / created_at descending ("dari yang paling baru ditambahin")
 */
export function compareTimelineItems(a, b) {
  const aActive = isItemActive(a);
  const bActive = isItemActive(b);

  // 1. Active items on top
  if (aActive && !bActive) return -1;
  if (!aActive && bActive) return 1;

  const aDate = parseTimelineDate(a?.date);
  const bDate = parseTimelineDate(b?.date);

  // 2. Both active: sort by start date descending
  if (aActive && bActive) {
    if (bDate.start.value !== aDate.start.value) {
      return bDate.start.value - aDate.start.value;
    }
  } else {
    // 3. Both inactive: sort by end date descending
    if (bDate.end.value !== aDate.end.value) {
      return bDate.end.value - aDate.end.value;
    }
    // If end dates equal, sort by start date descending
    if (bDate.start.value !== aDate.start.value) {
      return bDate.start.value - aDate.start.value;
    }
  }

  // 4. Tie-breaker: created_at descending (most recently added first)
  if (a?.created_at && b?.created_at) {
    const timeDiff = new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    if (timeDiff !== 0) return timeDiff;
  }

  if (typeof a?.id === 'number' && typeof b?.id === 'number') {
    return b.id - a.id;
  }

  return 0;
}

/**
 * Returns a new sorted array of timeline items.
 */
export function sortTimelineItems(items) {
  if (!Array.isArray(items)) return [];
  return [...items].sort(compareTimelineItems);
}
