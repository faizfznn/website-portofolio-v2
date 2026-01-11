import React, { useEffect, useState, useRef } from 'react'; // 1. Tambahkan useRef


const Sidebar = () => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'design-system', label: 'Design System' },
    { id: 'logo', label: 'Logo' },
    { id: 'design-result', label: 'Design Result' },
    { id: 'prototype', label: 'Prototype' },
  ];

  const [activeId, setActiveId] = useState(sections[0]?.id);
  
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

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

  useEffect(() => {
    const activeItemIndex = sections.findIndex((sec) => sec.id === activeId);
    const activeItem = itemsRef.current[activeItemIndex];

    if (activeItem && indicatorRef.current) {
      const topPosition = activeItem.offsetTop;
      indicatorRef.current.style.transform = `translateY(${topPosition}px) translateY(6px)`;
    }
  }, [activeId, sections]); 

  return (
    <nav className="relative">
      <div
        ref={indicatorRef}
        className="absolute left-2 top-1 w-1 h-1 bg-black rounded-full transition-transform duration-300 ease-in-out"
      />
      
      <ul className="space-y-3 pl-6"> 
        {sections.map((section, index) => (
          <li key={section.id} ref={(el) => (itemsRef.current[index] = el)}>
            <a
              href={`#${section.id}`}
              className={`block text-[14px] font-medium transition-colors ${ 
                activeId === section.id 
                  ? 'text-black font-bold' 
                  : 'text-gray-400 hover:text-black' 
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