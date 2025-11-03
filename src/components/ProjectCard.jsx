import { Link } from "react-router-dom";

/**
 * Komponen kartu proyek untuk halaman portofolio.
 * Menampilkan judul, deskripsi singkat, tags, tools, dan gambar pratinjau.
 * Pada hover, kartu terangkat sedikit dan bayangannya bertambah.
 */
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      <div
        className="rounded-3xl bg-[#EBEBEC] p-6 md:p-8
          transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl"
      >
        {/* Judul dan deskripsi */}
        <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
        <p className="text-sm md:text-base text-[#4A4A4A] mt-1">
          {project.description}
        </p>
        <div className="flex flex-row items-center">
          {/* Tags kategori dan status */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="bg-[#D8D8DA] text-[#3D3D3E] text-xs md:text-sm px-3 py-1 rounded-full"
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
                className="bg-[#D8D8DA] text-[#3D3D3E] text-xs md:text-sm px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
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
