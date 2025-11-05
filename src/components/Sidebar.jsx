// src/components/Sidebar.jsx
import React, { useEffect, useState, useRef } from 'react'; // 1. Tambahkan useRef

/**
 * Sidebar component that lists page sections and highlights the active one.
 */
const Sidebar = () => {
  // 2. Definisikan sections di dalam komponen
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'design-system', label: 'Design System' },
    { id: 'logo', label: 'Logo' },
    { id: 'design-result', label: 'Design Result' },
    { id: 'prototype', label: 'Prototype' },
  ];

  const [activeId, setActiveId] = useState(sections[0]?.id);
  
  // 3. Tambahkan Refs untuk indikator dan item
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  // Logika IntersectionObserver (Tidak berubah)
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
        rootMargin: '0px 0px -50% 0px', // Memicu di tengah layar
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
  }, [sections]); // 'sections' aman di sini karena didefinisikan secara lokal

  // 4. EFEK BARU: Untuk menggerakkan titik indikator
  useEffect(() => {
    const activeItemIndex = sections.findIndex((sec) => sec.id === activeId);
    const activeItem = itemsRef.current[activeItemIndex];

    if (activeItem && indicatorRef.current) {
      // Hitung posisi Y dari item yang aktif
      const topPosition = activeItem.offsetTop;
      // Gerakkan indikator ke posisi tersebut (mt-1.5 = 6px, sesuai style di bawah)
      indicatorRef.current.style.transform = `translateY(${topPosition}px) translateY(6px)`;
    }
  }, [activeId, sections]); // Jalankan saat activeId berubah

  return (
    // 5. Tambahkan 'relative' untuk memposisikan titik
    <nav className="relative">
      {/* Titik Indikator yang Bergerak (BARU) */}
      <div
        ref={indicatorRef}
        className="absolute left-2 top-1 w-1 h-1 bg-black rounded-full transition-transform duration-300 ease-in-out"
      />
      
      {/* 6. Tambahkan pl-6 untuk memberi ruang bagi titik */}
      <ul className="space-y-3 pl-6"> 
        {sections.map((section, index) => (
          // 7. Tambahkan ref ke <li>
          <li key={section.id} ref={(el) => (itemsRef.current[index] = el)}>
            <a
              href={`#${section.id}`}
              // 8. Perbarui style agar sesuai dengan image_18c5e3.png
              className={`block text-[14px] font-medium transition-colors ${ 
                activeId === section.id 
                  ? 'text-black font-bold' // Aktif: Bold & Hitam
                  : 'text-gray-400 hover:text-black' // Non-aktif: Abu-abu
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