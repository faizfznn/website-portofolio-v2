// src/components/ExperienceSection.jsx

// --- Data untuk Pengalaman (Telah Disesuaikan) ---
const organizationalExperience = [
  {
    date: "Feb 2025 - Present",
    company: "RAION Community",
    role: "Staff of UI/UX Designer Division",
    isActive: true, // <-- Ditambahkan
  },
  {
    date: "Jan 2025 - Present",
    company: "BEM Faculty of Computer Science, Brawijaya University",
    role: "Staff of Internal Resources Development",
    isActive: true, // <-- Ditambahkan
  },
  {
    date: "May 2024 - Sep 2024",
    company: "Scholarship Festival",
    role: "Head of Public Relations Division",
  },
    {
    date: "Aug 2024 - Sep 2024",
    company: "Dewa Ngoding",
    role: "Chief Executive",
  },
];

const achievements = [
  {
    date: "2025",
    company: "Universitas Majalengka",
    role: "1st Place Winner, UI/UX Competition",
  },
  {
    date: "2025",
    company: "Universitas Muhammadiyah Riau",
    role: "1st Place Winner, UI/UX Competition",
  },
  {
    date: "2025",
    company: "Unipdu Jombang",
    role: "2nd Place Winner, UI/UX Competition",
  },
];

// --- Komponen Timeline Item (Dapat Digunakan Kembali) ---
// Menerima prop 'isActive' dan 'role' (untuk membedakan dari education)
const TimelineItem = ({ date, company, role, isActive = false }) => (
  <div className="relative pl-8 group">
    {/* --- Indikator Titik (Telah Diperbarui) --- */}
    <div className="absolute left-0 top-2">
      {isActive ? (
        // Versi Aktif (Berdenyut) - Ukuran w-2.5 h-2.5
        // Diberi translasi sedikit agar sejajar
        <span className="relative flex h-2.5 w-2.5 -translate-x-px -translate-y-px">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2A9F47]"></span>
        </span>
      ) : (
        // Versi Non-Aktif (Default) - Ukuran w-2 h-2
        <div className="w-2 h-2 bg-gray-400 rounded-full transition-transform duration-300 group-hover:scale-125"></div>
      )}
    </div>

    {/* --- Konten Teks --- */}
    <div className="transition-opacity duration-300 group-hover:opacity-70">
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-lg font-semibold text-black">{company}</h3>
      <p className="text-base text-gray-600">{role}</p>
    </div>
  </div>
);

// --- Komponen Utama Experience ---
function ExperienceSection() {
  return (
    <section id="experience" className="py-20 w-full scroll-mt-24">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Kolom Kiri: Organizational */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <h3 className="text-xl font-bold text-gray-500 mb-8">Organizational</h3>
          <div className="space-y-10">
            {organizationalExperience.map((exp, index) => (
              // 'isActive' akan otomatis ter-pass berkat spread operator (...)
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Achievements */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <h3 className="text-xl font-bold text-gray-500 mb-8">Achievements</h3>
          <div className="space-y-10">
            {achievements.map((exp, index) => (
              // Item achievement tidak memiliki 'isActive', jadi akan default ke false
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;