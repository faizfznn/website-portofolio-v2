import { Link } from "react-router-dom";

/**
 * Komponen kartu proyek untuk halaman portofolio.
 * Menampilkan judul, deskripsi singkat, tags, dan gambar pratinjau.
 * Kartu menggunakan gradien berdasarkan warna utama project.
 * Pada hover, kartu terangkat sedikit dan bayangannya bertambah.
 */
export default function ProjectCard({ project }) {
  /*
   * Desain ulang kartu proyek agar lebih sederhana sesuai referensi:
   * hanya menampilkan nama aplikasi, deskripsi singkat, baris tags, dan
   * mockup gambar. Tanpa logo dan tanpa area gradien. Kartu memiliki
   * latar belakang terang dengan bayangan halus dan animasi hover.
   */
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="block rounded-3xl overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/*
        Kartu proyek: latar belakang terang (light grey) di light mode dan gelap di dark mode.
        Menggunakan padding generoso untuk spasi, serta bayangan lembut yang
        meningkat ketika di‑hover untuk efek terangkat.
      */}
      <div className="rounded-3xl bg-[#FAFAFA] h-[612px] pb-0 p-6 shadow-md dark:shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
        <div>
          {/* Nama aplikasi */}
          <h3 className="text-lg md:text-2xl font-bold text-black">
            {project.appName}
          </h3>
          {/* Deskripsi singkat */}
          <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600  leading-relaxed">
            {project.description}
          </p>
          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              // Tag 'Live' diberi warna hijau, tag lainnya berwarna abu muda
              const isLive =
                tag.toLowerCase() === "live" || tag.toLowerCase() === "figma";
              const tagClasses = isLive
                ? "bg-green-500 text-white"
                : "bg-[#D8D8DA] text-[##555556]";
              return (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${tagClasses}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        {/* Gambar mockup */}
        <div className="mt-6 w-full h-64 rounded-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.appName}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
}
