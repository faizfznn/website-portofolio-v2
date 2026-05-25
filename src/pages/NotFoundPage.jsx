import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import pinImg from '../assets/pin.webp';
import stars from '../assets/stars.png';
import bintang from '../assets/bintang.png';
import clipImg from '../assets/clip.webp';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[75vh] w-full flex flex-col items-center justify-center py-20 px-4 select-none">
      {/* Glow background element */}


      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-sm w-full bg-white dark:bg-zinc-950 border border-gray-200/80 dark:border-zinc-800 shadow-2xl p-8 rounded-3xl text-center"
      >

        {/* Rotating Star icon inside the card */}
        <div className="absolute right-4 top-4 opacity-10 pointer-events-none">
          <img src={bintang} alt="Star decorative" className="w-12 h-12 animate-spin-slow" />
        </div>

        {/* Giant "404" in Outfit/Serif font */}
        <h1
          className="text-8xl md:text-9xl font-black text-black dark:text-white tracking-tighter"
          style={{ fontFamily: '"Outfit", sans-serif' }}
        >
          404
        </h1>

        {/* Handwritten subtitle using font3 (Gloria Hallelujah) */}
        <h2 className="font3 text-2xl mt-2 mb-4">
          Oops! Page Lost...
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          It seems the page you are looking for has drifted into the digital void or the link is broken.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <Link
            to="/"
            className="
              relative group flex w-full h-12 px-6 justify-center items-center 
              rounded-full overflow-hidden border border-black/10 dark:border-white/10
              text-white text-sm font-semibold 
              bg-linear-to-b from-[#323232] to-[#000000] 
              shadow-[inset_0_0_8px_0_rgba(255,255,255,0.2)] 
              transition-all duration-300 
              hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]
              hover:scale-102
            "
          >
            <img
              src={stars}
              alt=""
              className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 animate-[spin_8s_linear_infinite] group-hover:paused pointer-events-none"
            />
            <span className="relative z-10">Return Home</span>
          </Link>

          <Link
            to="/portfolio"
            className="
              relative w-full h-12 px-6 rounded-full 
              border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-black dark:text-white
              text-sm font-semibold group inline-flex items-center justify-center gap-2
              hover:border-black dark:hover:border-white hover:shadow-md transition-all duration-300
            "
          >
            <span className="relative inline-block overflow-hidden h-[1.2em]">
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                See Portfolio
              </span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                See Portfolio
              </span>
            </span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
