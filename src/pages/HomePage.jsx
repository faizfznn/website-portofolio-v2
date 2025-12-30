// src/pages/HomePage.jsx
import { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard.jsx';
import works from '../data/workProjects.js';
import pinImg from '../assets/pin.webp';
import handshake from '../assets/handshake.webp';
import clipImg from '../assets/clip.webp';
import powerImg from '../assets/power.webp';
import signImg from '../assets/sign.webp';
import ungu from '../assets/gradient.webp';
import bintang from '../assets/bintang.png';
import stars from '../assets/stars.png';
import fotoFaiz from '../assets/formal.webp';
import foto1 from '../assets/foto1.webp';
import foto2 from '../assets/foto2.webp';
import foto3 from '../assets/foto3.webp';

import '../index.css';

import { SiJavascript, SiFigma, SiKotlin, SiReact } from 'react-icons/si';
import Reveal from '../components/Reveal';
const timeOptions = {
  timeZone: 'Asia/Jakarta',
  hour: 'numeric', // Menampilkan jam sebagai angka (misal: 4, bukan 04)
  minute: '2-digit', // Menampilkan menit sebagai 2 digit (misal: 02)
  second: '2-digit', // Menampilkan detik sebagai 2 digit (misal: 15)
};

function HomePage() {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-blue-500" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  ];
  const displayedProjects = works;

  const contactRef = useRef(null);
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 2. Buat state untuk menyimpan waktu
  const [currentTime, setCurrentTime] = useState(
    // Gunakan 'en-GB' untuk mendapatkan format : (titik dua)
    new Date().toLocaleTimeString('en-GB', timeOptions)
  );
  // 3. Gunakan useEffect untuk memperbarui waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      // Gunakan 'en-GB' untuk mendapatkan format : (titik dua)
      setCurrentTime(new Date().toLocaleTimeString('en-GB', timeOptions));
    }, 1000);

    // Cleanup interval
    return () => {
      clearInterval(timer);
    };
  }, []); // Dependensi kosong

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <Reveal>
        <Hero onGetInTouchClick={handleScrollToContact} />
      </Reveal>
      {/* Selected Work Section */}
      <Reveal>
        <section className="mt-24 md:mt-40 mb-40 md:mb-40">
          <div className="mb-4">
            <h1>
              {/* <span className="font-bold text-3xl md:text-4xl">/</span> */}
              <span className="text-2xl md:text-3xl font-bold">
                {' '}
                Selected Work
              </span>
            </h1>
          </div>
          {/* src/pages/HomePage.jsx */}
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {displayedProjects.map((project, index) => {
              // Mengubah 'works' menjadi 'project' agar lebih jelas
              const isFirst = index === 0;
              const isLast = index === displayedProjects.length - 1;
              const isFullWidth = isFirst || isLast;

              const colSpanClass = isFullWidth ? 'md:col-span-2' : '';

              return (
                <div key={project.id} className={colSpanClass}>
                  <ProjectCard
                    project={project}
                    isFullWidth={isFullWidth} // Kirim prop baru ini
                  />
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* Hello, I'm Faiz */}
      <div className="md:mt-10">
        <Reveal delay={0.15}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hello, I&apos;m Faiz
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <section className="mb-12 flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* === Left Side === */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Kolase Gambar */}
              <div className="relative flex mb-6 w-full justify-center md:justify-start">
                {/* [RESPONSIVE] Dihapus space-x-2 md:space-x-4 yg tidak perlu, ditambah w-full justify-center */}
                <div
                  className="
            flex w-fit items-center 
            -space-x-8 sm:-space-x-10
          " // [RESPONSIVE] Mengurangi negative margin di mobile
                >
                  <div
                    className="
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
              bg-cover bg-center rounded-3xl border-3 border-white rotate-4 shrink-0
            " // [RESPONSIVE] Ukuran gambar dikecilkan
                    style={{ backgroundImage: `url(${foto1})` }}
                  />
                  <div
                    className="
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
              bg-cover bg-center rounded-3xl border-3 border-white -rotate-4 shrink-0
            " // [RESPONSIVE] Ukuran gambar dikecilkan
                    style={{ backgroundImage: `url(${foto2})` }}
                  />
                  <div
                    className="
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
              bg-cover bg-center rounded-3xl border-3 border-white rotate-3 shrink-0
            " // [RESPONSIVE] Ukuran gambar dikecilkan
                    style={{ backgroundImage: `url(${foto3})` }}
                  />
                  <div
                    className="
              w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
              bg-cover bg-center rounded-3xl border-3 border-white shrink-0
            " // [RESPONSIVE] Ukuran gambar dikecilkan
                    style={{ backgroundImage: `url(${fotoFaiz})` }}
                  />
                </div>
                <img
                  src={powerImg}
                  alt=""
                  className="absolute -top-6 -right-2 md:-top-17 md:-right-15 w-10 h-10 md:w-[99px] md:h-[95px] rotate-10 animate-slide-slow"
                  width="99"
                  height="95" // ✅ Tambahkan
                />
              </div>

              {/* Deskripsi */}
              <div className="relative inline-flex justify-center p-4 items-center gap-6 rounded-3xl bg-[#FAFAFA] mb-4">
                <img
                  src={pinImg}
                  alt=""
                  className="
            absolute w-10 h-10 md:w-20 md:h-20 
            -top-32 left-2 
            md:-top-52 md:-left-7
          " // [RESPONSIVE] Disesuaikan posisinya di mobile
                  width="80"
                  height="80" // ✅ Tambahkan
                />
                <p className="text-black text-sm md:text-base">
                  <span className="font-semibold">
                    I am a Product Designer based in Indonesia.
                  </span>{' '}
                  I design to uncomplicate things and create joy in experiences
                  that etch in one&apos;s memory. Most importantly, I design to
                  make things more human, in a way that empowers.
                </p>
                <img
                  src={clipImg}
                  alt=""
                  className="
            absolute w-8 h-8 md:w-25 md:h-25
            -bottom-2 -right-1
            md:-bottom-9 md:-right-8 object-contain
            
          " // [RESPONSIVE] Disesuaikan posisinya di mobile
                  width="40"
                  height="40" // ✅ Tambahkan
                />
              </div>

              <div
                className="
          flex w-full md:w-[528px] items-stretch md:items-start gap-4 justify-start 
          flex-col sm:flex-row
        " // [RESPONSIVE] Stacking di mobile (flex-col), side-by-side di sm+
              >
                {/* Lokasi & Waktu */}
                <div className="flex flex-col justify-center p-4 rounded-3xl bg-[#FAFAFA] w-full sm:w-auto ">
                  {' '}
                  {/* [RESPONSIVE] w-full di mobile */}
                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">📍</span>
                      <span className="text-black font-medium">
                        Malang, Indonesia
                      </span>
                    </div>
                    <span className="text-sm ml-9">{currentTime}</span>
                  </div>
                </div>

                {/* Skill Tags */}
                <div
                  className="
            flex flex-wrap gap-2 w-full 
            sm:max-w-[300px]
          " // [RESPONSIVE] w-full di mobile
                >
                  {[
                    {
                      name: 'JavaScript',
                      icon: <SiJavascript className="text-yellow-400" />,
                    },
                    {
                      name: 'Figma',
                      icon: <SiFigma className="text-pink-500" />,
                    },
                    {
                      name: 'Kotlin',
                      icon: <SiKotlin className="text-blue-500" />,
                    },
                    {
                      name: 'React',
                      icon: <SiReact className="text-cyan-400" />,
                    },
                  ].map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-2xl border border-[#E4E9ED] bg-white text-black shadow-sm border border-gray-200/80"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* === Right Side: Collaboration Card === */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0" ref={contactRef}>
              <div className="relative w-full h-[380px] md:h-[412px] rounded-4xl p-6 sm:p-8 md:p-10 bg-black text-white flex flex-col items-center text-center overflow-hidden">
                {/* [RESPONSIVE] padding p-6 di mobile terkecil */}
                {/* Background */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <img
                    src={ungu}
                    alt="gradient"
                    className="absolute h-[340px] md:h-[400px] opacity-90 blur-3xl"
                  />
                  <img
                    src={bintang}
                    alt="bintang"
                    className="absolute w-60 h-60 md:w-[300px] md:h-[300px] animate-[spin_7s_linear_infinite] pointer-events-none"
                  />
                </div>

                <h3 className="relative text-center text-3xl md:text-4xl font-bold flex items-center gap-3 mb-3 z-10">
                  Let&apos;s collaborate
                  <img
                    src={handshake}
                    alt="Handshake"
                    className="w-8 md:w-10 inline-block animate-bounce-slow"
                    width="40"
                    height="40" // ✅ Tambahkan
                  />
                </h3>

                <p className="relative text-center text-sm md:text-base text-gray-200 mb-6 md:mb-8 z-10">
                  Write me an email and I will respond within 1 business day
                </p>

                <div className="relative w-full max-w-md mb-3 mt-2 md:mt-4 z-10">
                  <div
                    className="
              flex rounded-3xl px-2 py-2 border border-[#FFFFFF]/30 bg-black/40 backdrop-blur-sm 
              flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-3 sm:gap-2
            " // [RESPONSIVE] flex-col, gap, dan items-stretch di mobile
                  >
                    <span
                      className="
                px-4 py-3 text-white text-sm md:text-base 
                text-center sm:text-left
              " // [RESPONSIVE] text-center di mobile
                    >
                      faiz150605@gmail.com
                    </span>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText('faiz150605@gmail.com')
                      }
                      className="
                relative group flex justify-center items-center rounded-3xl overflow-hidden 
                border border-[rgba(255,255,255,0.3)] text-white font-normal 
                bg-linear-to-b from-[#323232] to-[#000000] 
                shadow-[inset_0_0_8px_0_#FFFFFF] 
                transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] 
                hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]
                w-full sm:w-fit 
                h-[42px] md:h-12 px-6 md:px-8 
                text-[14px] md:text-[16px]
              " // [RESPONSIVE] w-full di mobile
                    >
                      <img
                        src={stars}
                        alt="stars"
                        className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 animate-[spin_7s_linear_infinite] pointer-events-none"
                      />
                      <span className="relative z-10">Copy</span>
                    </button>
                  </div>
                </div>

                <div className="relative flex flex-col items-center mt-8 md:mt-10 z-10">
                  <p className="font3 text-xs md:text-sm text-gray-300 mb-1">
                    or contact me
                  </p>
                  <p className="font3 text-xs md:text-sm text-gray-300 mb-1">
                    in social media
                  </p>
                  <img
                    src={signImg}
                    alt=""
                    className="absolute -bottom-8 right-5 md:-bottom-14 md:right-5 object-contain w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

export default HomePage;
