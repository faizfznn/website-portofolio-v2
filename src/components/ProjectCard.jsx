import { Link } from "react-router-dom";

/**
 * Komponen kartu proyek untuk halaman portofolio.
 * Menampilkan judul, deskripsi singkat, tags, dan gambar pratinjau.
 * Kartu menggunakan gradien berdasarkan warna utama project.
 * Pada hover, kartu terangkat sedikit dan bayangannya bertambah.
 */
export default function ProjectCard({ project }) {
  /*
   * Untuk setiap kartu, buat gradien dari warna utama ke warna yang lebih terang
   * dengan menambahkan transparansi. Kita menggunakan nilai alpha 0x99 (60%)
   * untuk menghasilkan efek gradient yang lembut pada area atas kartu. Ini
   * meniru gaya kartu referensi dengan latar berwarna namun tetap readable.
   */
  const gradientStyle = {
    background: `linear-gradient(180deg, #${project.primaryColor} 0%, #${project.primaryColor}99 100%)`,
  };
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="block rounded-3xl overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/*
        Kontainer kartu. Kita menggunakan bayangan default yang halus dan
        meningkatkan bayangan saat hover. Overflow disembunyikan untuk
        mempertahankan radius melengkung pada gambar.
      */}
      <div className="rounded-3xl shadow-md dark:shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
        {/*
          Area atas kartu: menampilkan logo, nama aplikasi, tag, dan deskripsi
          singkat di atas gradient warna. Bagian ini fleksibel untuk
          menampung konten yang lebih panjang.
        */}
        <div className="relative p-6 md:p-7" style={gradientStyle}>
          {/* Baris teratas: logo + nama aplikasi di kiri, tags di kanan */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/*
                Logo dibungkus dalam latar semi transparan agar terlihat
                jelas di atas gradient. Kita menggunakan ukuran 48px untuk
                menonjolkan logo.
              */}
              <div className="">
                <img
                  src={project.logo}
                  alt={`${project.appName} logo`}
                  className="w-14 h-14"
                />
              </div>
              {/* Nama aplikasi */}
              <span className="text-white text-2xl font-bold">
                {project.appName}
              </span>
            </div>
            {/* Daftar tags dengan wrap supaya tetap rapi di layar sempit */}
            <div className="flex flex-wrap gap-2 max-w-[50%] justify-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/30 text-white/90 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Deskripsi singkat sebagai tagline atau judul kedua */}
          <h3 className="mt-4 text-white text-lg md:text-xl font-semibold leading-snug">
            {project.description}
          </h3>
          {/*
          Area gambar hi-fi di bagian bawah kartu. Tinggi disesuaikan agar
          konten tampak proporsional di berbagai ukuran layar.
          */}
          <div className="h-56 md:h-72 overflow-hidden">
            <img
              src={project.image}
              alt={project.appName}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
