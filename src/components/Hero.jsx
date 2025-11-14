// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import fotoFaiz from '../assets/formal.webp';
import indoFlag from '../assets/bendera.png';
import stars from '../assets/stars.png';
import { useState, useEffect } from 'react';

const Hero = ({ onGetInTouchClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="        flex flex-col-reverse md:flex-row 
        w-full px-6 md:px-[50px] 
        justify-center items-center 
        gap-12 md:gap-[138px]"
    >
      {/* Custom Cursor with Text (follows mouse) */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border border-gray-200">
            UI/UX Designer & Frontend Developer
          </div>
        </div>
      )}
      {/* === Left Section === */}
      <div className="flex flex-col items-start gap-8 md:gap-12 text-center md:text-left">
        {/* Static Designer Tag (doesn't follow cursor) */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-800 text-sm font-semibold shadow-lg border border-gray-200 animate-float">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#EA4335]"></div>
            <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
            <div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div>
            <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
          </div>
          <span>I'm a Designer</span>
        </div> */}
        <div className="w-full md:w-[646px]">
          <h1
            className="text-3xl md:text-5xl font-normal text-black leading-snug md:leading-[1.4]"
            style={{ fontFamily: '"Lato", sans-serif' }}
          >
            Crafting seamless digital experiences, from pixel to code.
          </h1>
        </div>

        {/* Buttons */}
        <div
          className="
            flex flex-col sm:flex-row items-start 
            gap-4 lg:gap-2 
            w-full sm:w-auto
          " // [RESPONSIVE] flex-col di mobile terkecil, gap, & width disesuaikan
        >
          {/* === Tombol Get in Touch === */}
          <button
            onClick={onGetInTouchClick}
            className="
              relative group flex w-full sm:w-fit h-[56px] px-10 justify-center items-center 
              rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.2)] 
              text-white text-[16px] font-normal 
              bg-gradient-to-b from-[#323232] to-[#000000] 
              shadow-[inset_0_0_8px_0_#FFFFFF] 
              transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] 
              hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]
            " // [RESPONSIVE] w-full di mobile
          >
            <img
              src={stars}
              alt="stars"
              className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 animate-[spin_7s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none"
            />
            <span className="relative z-10">Get in touch</span>
          </button>

          {/* === Tombol See Portfolio === */}
          <Link
            to="/portfolio"
            className="
              relative w-full sm:w-fit h-[56px] px-10 rounded-[24px] 
              border-[1px] border-[#CAD3DC] bg-white text-black 
              text-[16px] font-normal group inline-flex items-center justify-center
            " // [RESPONSIVE] w-full di mobile
          >
            <span className="relative inline-block overflow-hidden h-[1.2em]">
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                See portfolio
              </span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                See portfolio
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* === Right Card === */}
      <div
        className="
          inline-flex p-4 flex-col items-center gap-3
          border border-white 
          shadow-[0_0_40px_0_rgba(0,0,0,0.03)]
          transition-transform duration-500 ease-in-out
          hover:rotate-2 hover:translate-x-2 hover:scale-105 cursor-pointer
          bg-[rgba(242,244,246,0.5)] rounded-[44px]
          transform rotate-3
          w-[240px] sm:w-[280px]
        "
      >
        <img
          src={fotoFaiz}
          alt="Faiz Fauzan formal photo"
          width="200"
          height="200"
          loading="eager"
          fetchpriority="high"
          className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-[28px] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
        />

        <div
          className="flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
          </span>
          <span className="text-[14px] text-green-600 font-normal">
            Available for freelance
          </span>
        </div>

        <div className="flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full">
          <img
            src={indoFlag}
            alt="Indonesian Flag"
            className="w-5 h-5 rounded-sm object-cover"
            width="20"
            height="20"
          />
          <span className="text-[14px] text-black font-normal">
            Malang, Indonesia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
