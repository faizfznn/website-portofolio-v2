import React from 'react';
import { Trophy, Briefcase, Award, Sparkles, BookOpen } from 'lucide-react';
import ubLogo from '../assets/Logo_Universitas_Brawijaya.svg';

const getMedalBadgeStyle = (badge) => {
  const b = (badge || '').toLowerCase();
  if (b.includes('1st') || b.includes('1')) {
    // Emas / Gold
    return 'text-amber-800 bg-amber-50 border-amber-300';
  }
  if (b.includes('2nd') || b.includes('2')) {
    // Perak / Silver
    return 'text-slate-700 bg-slate-100 border-slate-300';
  }
  if (b.includes('3rd') || b.includes('3')) {
    // Perunggu / Bronze
    return 'text-[#9A3412] bg-[#9A3412]/10 border-[#9A3412]/30';
  }
  return 'text-zinc-700 bg-zinc-100 border-zinc-200';
};

export default function BrawijayaStatCard() {
  const highlights = [
    {
      title: '1st Place, National UI/UX Competition',
      event: 'Universitas Majalengka',
      badge: '1st Place',
    },
    {
      title: '1st Place, National UI/UX Competition',
      event: 'Universitas Muhammadiyah Riau',
      badge: '1st Place',
    },
    {
      title: '3rd Place, National UI/UX HOLOGY 9.0',
      event: 'Universitas Brawijaya',
      badge: '3rd Place',
    },
  ];

  return (
    <div
      className="relative w-[340px] sm:w-[380px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden text-left p-4 sm:p-5 select-none"
      role="tooltip"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0D2342]/5 border border-[#0D2342]/15 flex items-center justify-center p-1 overflow-hidden shrink-0">
            <img
              src={ubLogo}
              alt="Universitas Brawijaya"
              className="w-full h-full object-contain drop-shadow-xs"
            />
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-950 tracking-tight leading-none">
              Universitas Brawijaya
            </h4>
            <p className="text-[10px] text-[#0D2342]/80 font-medium mt-0.5">
              Faculty of Computer Science (FILKOM)
            </p>
          </div>
        </div>
      </div>

      {/* Program Summary */}
      <div className="pt-3 pb-3">
        <p className="text-xs font-semibold text-zinc-900 leading-snug">
          Bachelor of Computer Science (Informatics)
        </p>
        <p className="text-[11px] text-zinc-500 mt-0.5">
          Specializing in Software Engineering, UI/UX Design, &amp; HCI
        </p>
      </div>

      {/* 3 Core Highlight Metric Cards styled in UB Navy */}
      <div className="grid grid-cols-3 gap-2 mb-3.5">
        {/* Metric 1: GPA 3.8 */}
        <div className="p-2.5 rounded-xl bg-[#0D2342]/[0.04] border border-[#0D2342]/15 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-[#0D2342] mb-0.5">
            <Sparkles className="w-3 h-3 text-[#0D2342]" />
            <span>Current GPA</span>
          </div>
          <div className="text-lg font-black text-[#0D2342] tabular-nums leading-none">
            3.8
            <span className="text-[10px] font-semibold text-[#0D2342]/70">/4.0</span>
          </div>
          <p className="text-[9px] font-semibold text-[#0D2342]/80 mt-1">
            High Distinction
          </p>
        </div>

        {/* Metric 2: 5+ Competitions */}
        <div className="p-2.5 rounded-xl bg-[#0D2342]/[0.04] border border-[#0D2342]/15 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-[#0D2342] mb-0.5">
            <Trophy className="w-3 h-3 text-[#0D2342]" />
            <span>Competitions</span>
          </div>
          <div className="text-lg font-black text-[#0D2342] tabular-nums leading-none">
            5+
          </div>
          <p className="text-[9px] font-semibold text-[#0D2342]/80 mt-1">
            Awards Won
          </p>
        </div>

        {/* Metric 3: 10+ Projects */}
        <div className="p-2.5 rounded-xl bg-[#0D2342]/[0.04] border border-[#0D2342]/15 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-[#0D2342] mb-0.5">
            <Briefcase className="w-3 h-3 text-[#0D2342]" />
            <span>Projects</span>
          </div>
          <div className="text-lg font-black text-[#0D2342] tabular-nums leading-none">
            10+
          </div>
          <p className="text-[9px] font-semibold text-[#0D2342]/80 mt-1">
            Delivered Works
          </p>
        </div>
      </div>

      {/* Featured Competition Wins */}
      <div className="rounded-xl bg-[#0D2342]/[0.03] border border-[#0D2342]/15 p-2.5 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold text-[#0D2342] flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-[#0D2342]" />
            Key Honors &amp; Awards
          </span>
          <span className="text-[10px] font-medium text-zinc-500">
            National Level
          </span>
        </div>

        <div className="space-y-1.5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-[11px] py-1 px-2 rounded-lg bg-white border border-[#0D2342]/10"
            >
              <div className="truncate pr-2">
                <p className="font-medium text-zinc-900 truncate text-[11px]">
                  {item.title}
                </p>
                <p className="text-[9px] text-zinc-500 leading-none mt-0.5">
                  {item.event}
                </p>
              </div>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${getMedalBadgeStyle(
                  item.badge
                )}`}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Pill */}
      <div className="pt-1 flex items-center gap-1.5 text-[10px] text-zinc-500">
        <BookOpen className="w-3.5 h-3.5 text-[#0D2342] shrink-0" />
        <span>
          Applied research &amp; real-world product delivery in UI/UX &amp; Frontend
        </span>
      </div>
    </div>
  );
}
