import React, { useEffect, useState } from 'react';

/**
 * Sidebar component that lists page sections and highlights the active one.
 *
 * Props:
 * - sections: Array of objects with `id` and `label` for each section on the page.
 */
const Sidebar = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Trigger when section crosses the middle of the viewport
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  return (
    <nav className="sticky top-24">
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-base font-medium transition-colors ${
                activeId === section.id ? 'text-black dark:text-white font-semibold' : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
