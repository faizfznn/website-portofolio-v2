import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import fotoFaiz from '../assets/formal.webp';
import indoFlag from '../assets/bendera.png';
import stars from '../assets/stars.png';
import Logo from '../assets/Logo.png';

const HEADLINE_WORDS = 'Selected Work digital experiences, from pixel to code.'.split(' ');

const Hero = ({ onGetInTouchClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!isHovering) return;
    const handleMouseMove = (e) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transform = `translate3d(${e.clientX - 100}px, ${e.clientY - 25}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <section className="flex flex-col-reverse lg:flex-row w-full px-0 sm:px-2 lg:px-6 justify-between items-center gap-12 lg:gap-16 xl:gap-24">
      {isHovering && !isFlipped && (
        <div
          ref={tooltipRef}
          className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 ease-out will-change-transform"
        >
          <div className="bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border border-gray-200 animate-in fade-in zoom-in-95 duration-150">
            UI/UX Designer & Frontend Developer
          </div>
        </div>
      )}

      {/* Left Content */}
      <div className="flex flex-col items-start gap-8 lg:gap-12 text-left w-full lg:max-w-[620px]">
        <div className="w-full">
          {/* Char-by-char Text Reveal */}
          <h1
            className="text-[clamp(2.2rem,5.4vw,4rem)] font-medium text-black leading-[1.2] md:leading-tight"
            style={{
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {HEADLINE_WORDS.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.3em]">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: wordIndex * 0.1 + charIndex * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-2 w-full"
        >
          <button
            onClick={onGetInTouchClick}
            className="
                relative group flex w-full sm:w-fit h-14 px-10 justify-center items-center 
                rounded-full overflow-hidden border border-[rgba(0,0,0,0.2)] 
                text-white text-base font-medium 
                bg-linear-to-b from-[#323232] to-[#000000] 
                shadow-[inset_0_0_8px_0_#FFFFFF] 
                transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] 
                hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]
                hover:scale-105
              "
          >
            <img
              src={stars}
              alt="stars"
              className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 animate-[spin_7s_linear_infinite] group-hover:paused pointer-events-none"
            />
            <span className="relative z-10">Get in touch</span>
          </button>

          <Link
            to="/portfolio"
            className="
                relative w-full sm:w-fit h-14 px-10 rounded-full 
                border border-[#CAD3DC] bg-white text-black 
                text-base font-medium group inline-flex items-center justify-center
                hover:border-black hover:shadow-lg transition-all duration-300
              "
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
        </motion.div>
      </div>

      {/* 3D Flip Profile Card with Original Styling */}
      <div
        className="
          relative w-[212px] sm:w-[232px] h-[330px] sm:h-[352px]
          transform rotate-3
          transition-transform duration-500 ease-in-out
          hover:rotate-2 hover:translate-x-2 hover:scale-105
          cursor-pointer select-none
        "
        style={{ perspective: 1000 }}
        onClick={() => setIsFlipped((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label="Klik untuk membalik kartu profil"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
          }
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* SISI DEPAN (Style Kartu Asli) */}
          <div
            className="
              absolute inset-0 w-full h-full
              p-4 flex flex-col items-center justify-between
              border border-white 
              shadow-[0_0_40px_0_rgba(0,0,0,0.03)]
              bg-[rgba(242,244,246,0.5)] rounded-[44px]
            "
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <img
              src={fotoFaiz}
              alt="Faiz Fauzan formal photo"
              width="200"
              height="200"
              loading="eager"
              fetchpriority="high"
              className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-[28px] object-cover"
            />

            <div className="flex flex-col items-center gap-3 w-full">
              <div
                className="inline-flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full shadow-2xs"
                onMouseEnter={() => !isFlipped && setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-700" />
                </span>
                <span className="text-[13px] sm:text-[14px] text-green-700 font-normal whitespace-nowrap">
                  Available for opportunity
                </span>
              </div>

              <div className="inline-flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full shadow-2xs">
                <img
                  src={indoFlag}
                  alt="Indonesian Flag"
                  className="w-5 h-5 rounded-xs object-cover"
                  width="20"
                  height="20"
                />
                <span className="text-[13px] sm:text-[14px] text-black font-normal whitespace-nowrap">
                  Malang, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* SISI BELAKANG (Style Kartu Asli + Logo & Kontak) */}
          <div
            className="
              absolute inset-0 w-full h-full
              p-6 flex flex-col items-center justify-between
              border border-white 
              shadow-[0_0_40px_0_rgba(0,0,0,0.03)]
              bg-[rgba(242,244,246,0.65)] backdrop-blur-xs rounded-[44px]
            "
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Logo Faiz di bagian atas */}
            <div className="flex-1 flex flex-col items-center justify-center pt-2">
              <img
                src={Logo}
                alt="Faiz Fauzan Logo"
                className="w-16 sm:w-20 h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Handle Sosial Media (Sesuai Referensi Gambar) */}
            <div className="w-full flex flex-col items-center text-center gap-4 pb-4">
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-[13px] text-zinc-500 font-normal">
                  Instagram:
                </span>
                <a
                  href="https://www.instagram.com/faizfznn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm sm:text-[15px] font-bold text-zinc-900 hover:text-black hover:underline transition-colors mt-0.5"
                >
                  @faizfznn
                </a>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-[13px] text-zinc-500 font-normal">
                  LinkedIn:
                </span>
                <a
                  href="https://www.linkedin.com/in/mfaizfauzan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm sm:text-[15px] font-normal text-zinc-800 hover:text-black hover:underline transition-colors mt-0.5"
                >
                  mfaizfauzan
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
