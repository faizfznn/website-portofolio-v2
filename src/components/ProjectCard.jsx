import { Link, useLocation } from 'react-router-dom';
/**
 * Komponen kartu proyek untuk halaman portofolio.
 * Menampilkan judul, deskripsi singkat, tags, dan gambar pratinjau.
 * Kartu menggunakan gradien berdasarkan warna utama project.
 * Pada hover, kartu terangkat sedikit dan bayangannya bertambah.
 */
export default function ProjectCard({ project, isFullWidth }) {
  const location = useLocation();
  const fromPage = location.pathname === '/' ? 'home' : 'portfolio';
  /*
   * Desain ulang kartu proyek agar lebih sederhana sesuai referensi:
   * hanya menampilkan nama aplikasi, deskripsi singkat, baris tags, dan
   * mockup gambar. Tanpa logo dan tanpa area gradien. Kartu memiliki
   * latar belakang terang dengan bayangan halus dan animasi hover.
   */
  return (
    <Link
      to={`/portfolio/${project.id}`}
      state={{ from: fromPage }} // Mengirim state "asal" halaman
      className="block rounded-3xl overflow-hidden shadow-md dark:shadow-lg group-hover:shadow-xl group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/*
        PERUBAHAN: Menghapus 'h-[612px]' dan 'justify-between'
        Ini akan membuat tinggi kartu dinamis sesuai kontennya.
      */}
      <div className="rounded-3xl bg-[#FAFAFA] transition-shadow duration-300 flex flex-col">
        <div className="pb-6 p-6">
          {/* Header: Nama Projek di kiri, Tahun & Role di kanan banget */}
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg md:text-2xl font-bold text-black">
              {project.appName}
            </h3>
            <span className="text-[12px] md:text-sm text-gray-500 font-medium whitespace-nowrap ml-4">
              {project.year || '2025'} • {project.role || 'Product Design'}
            </span>
          </div>
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
        <div
          className={`mt-6 overflow-hidden mx-auto transition-all duration-500 ${
            isFullWidth
              ? 'w-full md:w-[840px] h-96' // Ukuran spesifik 840x384 (h-96 = 384px)
              : 'w-full h-96' // Ukuran standar untuk card kecil
          }`}
        >
          <img
            src={project.image}
            alt={project.appName}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              isFullWidth
                ? 'object-contain object-center' // Agar gambar tidak ter-crop meski container lebar
                : 'object-cover object-center' // Standard fill untuk card kecil
            }`}
            loading="lazy"
            height="384"
          />
        </div>
      </div>
    </Link>
  );
}
