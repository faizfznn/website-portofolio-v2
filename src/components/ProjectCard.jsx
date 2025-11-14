import { Link } from 'react-router-dom';

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
        PERUBAHAN: Menghapus 'h-[612px]' dan 'justify-between'
        Ini akan membuat tinggi kartu dinamis sesuai kontennya.
      */}
      <div className="rounded-3xl bg-[#FAFAFA] shadow-md dark:shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="pb-6 p-6">
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
                tag.toLowerCase() === 'live' || tag.toLowerCase() === 'figma';
              const tagClasses = isLive
                ? 'bg-[#2A9F47] text-white'
                : 'bg-[#f2efef] text-gray-600';
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

        {/* PERUBAHAN: Mengganti 'h-64' (256px) menjadi 'h-96' (384px)
          Ini membuat gambar Anda jauh lebih besar.
        */}
        <div className="mt-6 w-full h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.appName}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            height="384" // Sesuai dengan kelas h-96
          />
        </div>
      </div>
    </Link>
  );
}
