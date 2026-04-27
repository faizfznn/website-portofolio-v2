import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import fotoFaiz from '../assets/formal.webp';
import indoFlag from '../assets/bendera.png';
import stars from '../assets/stars.png';

const Hero = ({ onGetInTouchClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      lastPosRef.current = { x: e.clientX, y: e.clientY };

      // Use RAF to batch updates and prevent forced reflows
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: lastPosRef.current.x, y: lastPosRef.current.y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Split text into characters for animation
  const headline = 'Selected Work digital experiences, from pixel to code.';
  const words = headline.split(' ');

  return (
    <section className="flex flex-col-reverse lg:flex-row w-full px-0 sm:px-2 lg:px-6 justify-between items-center gap-12 lg:gap-16 xl:gap-24">
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
          style={{
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 25}px`,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
          }}
        >
          <div className="bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border border-gray-200">
            UI/UX Designer & Frontend Developer
          </div>
        </motion.div>
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
            {words.map((word, wordIndex) => (
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

      <div
        className="
          inline-flex p-4 flex-col items-center gap-3
          border border-white 
          shadow-[0_0_40px_0_rgba(0,0,0,0.03)]
          transition-transform duration-500 ease-in-out
          hover:rotate-2 hover:translate-x-2 hover:scale-105 cursor-pointer
          bg-[rgba(242,244,246,0.5)] rounded-[44px]
          transform rotate-3
          w-fit max-w-full
        "
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

        <div className="flex flex-col items-center gap-3 min-w-max max-w-full">
          <div
            className="inline-flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-700"></span>
            </span>
            <span className="text-[14px] text-green-700 font-normal whitespace-nowrap">
              Available for opportunity
            </span>
          </div>

          <div className="inline-flex p-3 gap-2 justify-center items-center bg-white rounded-full w-full">
            <img
              src={indoFlag}
              alt="Indonesian Flag"
              className="w-5 h-5 rounded-sm object-cover"
              width="20"
              height="20"
            />
            <span className="text-[14px] text-black font-normal whitespace-nowrap">
              Malang, Indonesia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
