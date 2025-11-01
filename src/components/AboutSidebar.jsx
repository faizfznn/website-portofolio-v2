// src/components/AboutSidebar.jsx
import { useEffect, useRef } from "react";

// Daftar bagian yang akan muncul di sidebar
const defaultSections = [
  { id: "intro", title: "Introduction" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  // Tambahkan bagian lain di sini jika perlu.
];

function AboutSidebar({ activeSection, sections = defaultSections }) {
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  // Efek ini akan menggerakkan titik indikator setiap kali bagian aktif berubah
  useEffect(() => {
    const activeItemIndex = sections.findIndex((sec) => sec.id === activeSection);
    const activeItem = itemsRef.current[activeItemIndex];

    if (activeItem && indicatorRef.current) {
      // Hitung posisi Y dari item yang aktif dan gerakkan indikator ke sana
      const topPosition = activeItem.offsetTop;
      indicatorRef.current.style.transform = `translateY(${topPosition}px)`;
    }
  }, [activeSection, sections]);

  return (
    <nav className="relative">
      {/* Titik Indikator yang Bergerak */}
      <div
        ref={indicatorRef}
        className="absolute left-0 top-0 mt-2 w-1.5 h-1.5 bg-black rounded-full transition-transform duration-300 ease-in-out"
      />
      
      {/* Daftar Tautan Navigasi */}
      <ul className="space-y-3 pl-6">
        {sections.map((section, index) => (
          <li key={section.id} ref={(el) => (itemsRef.current[index] = el)}>
            <a
              href={`#${section.id}`}
              className={`text-lg transition-colors duration-200 ${
                activeSection === section.id
                  ? 'font-bold text-black'
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AboutSidebar;
