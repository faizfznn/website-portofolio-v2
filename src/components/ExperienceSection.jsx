// src/components/ExperienceSection.jsx

// --- Data untuk Pengalaman (Telah Disesuaikan) ---
const organizationalExperience = [
  {
    date: "Feb 2025 - Present",
    company: "RAION Community",
    role: "Staff of UI/UX Designer Division",
  },
  {
    date: "Jan 2025 - Present",
    company: "BEM Faculty of Computer Science, Brawijaya University",
    role: "Staff of Internal Resources Development",
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
const TimelineItem = ({ date, company, role }) => (
  <div className="relative pl-8 group">
    <div className="absolute left-0 top-2 w-2 h-2 bg-gray-400 rounded-full transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-600"></div>
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
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Achievements */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <h3 className="text-xl font-bold text-gray-500 mb-8">Achievements</h3>
          <div className="space-y-10">
            {achievements.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;
