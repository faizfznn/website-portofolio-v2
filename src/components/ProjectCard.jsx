import { Link } from 'react-router-dom';

/**
 * Komponen kartu proyek untuk halaman portofolio.
 * Menampilkan judul, deskripsi singkat, tags, tools, dan gambar pratinjau.
 * Pada hover, kartu terangkat sedikit dan bayangannya bertambah.
 */
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="block rounded-3xl overflow-hidden group"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      <div
        className="rounded-3xl bg-[#F5F7FA] dark:bg-[#171717] p-6 md:p-8 shadow-md
          transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl"
      >
        {/* Judul dan deskripsi */}
        <h3 className="text-xl md:text-2xl font-semibold text-[#0C2340] dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#4A4A4A] dark:text-gray-400 mt-1">
          {project.description}
        </p>
        {/* Tags kategori dan status */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="bg-[#EAF0FF] dark:bg-[#0F1F39] text-[#0057FF] dark:text-[#9FB9FF] text-xs md:text-sm px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
          <span className="bg-[#E6F6F2] dark:bg-green-800/50 text-[#007C3E] dark:text-green-300 text-xs md:text-sm px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>
        {/* Tools */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="bg-[#F0F2F5] dark:bg-[#1f1f1f] text-[#4A4A4A] dark:text-gray-400 text-xs md:text-sm px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
        {/* Gambar */}
        <div className="mt-4 overflow-hidden rounded-2xl h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}