import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard.jsx';
import works from '../data/workProjects.js';
import pinImg from '../assets/pin.webp';
import handshake from '../assets/handshake.webp';
import clipImg from '../assets/clip.webp';
import powerImg from '../assets/power.webp';
import signImg from '../assets/sign.webp';
import bintang from '../assets/bintang.png';
import fotoFaiz from '../assets/formal.webp';
import foto1 from '../assets/foto1.webp';
import foto2 from '../assets/foto2.webp';
import foto3 from '../assets/foto3.webp';
import foto4 from '../assets/fotoDengod.webp';
import { Skiper40 } from '@/components/skiper40';

import '../index.css';

import { SiJavascript, SiFigma, SiKotlin, SiReact } from 'react-icons/si';
import Reveal from '../components/Reveal';
import TechStack from '../components/TechStack';
import techStack from '../data/techStack';
const timeOptions = {
  timeZone: 'Asia/Jakarta',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
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

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-GB', timeOptions)
  );

  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('faiz150605@gmail.com');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-GB', timeOptions));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Scattered Polaroid Photos Animation
  const photoVariants = [
    {
      initial: { x: -200, y: -100, rotate: -45, opacity: 0 },
      animate: { x: 0, y: 0, rotate: 4, opacity: 1 },
    },
    {
      initial: { x: 200, y: -150, rotate: 45, opacity: 0 },
      animate: { x: 0, y: 0, rotate: -4, opacity: 1 },
    },
    {
      initial: { x: -150, y: 100, rotate: -30, opacity: 0 },
      animate: { x: 0, y: 0, rotate: 3, opacity: 1 },
    },
    {
      initial: { x: 150, y: 150, rotate: 30, opacity: 0 },
      animate: { x: 0, y: 0, rotate: 0, opacity: 1 },
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <Reveal>
        <Hero onGetInTouchClick={handleScrollToContact} />
      </Reveal>

      {/* Tech Stack Carousel */}
      <div className="mt-20 md:mt-20 mb-24">
        <TechStack items={techStack} variant="carousel" title="Tech Stack" />
      </div>

      {/* Selected Work Section */}
      <Reveal>
        <section className="mt-24/mt-40 mb-40">
          <div className="mb-8">
            <h2>
              <span className="text-3xl md:text-4xl font-bold text-black">
                Selected Work
              </span>
            </h2>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {displayedProjects.map((project, index) => {
              const isFirst = index === 0;
              const isLast = index === displayedProjects.length - 1;
              const isFullWidth = isFirst || isLast;

              const colSpanClass = isFullWidth ? 'md:col-span-2' : '';

              return (
                <div key={project.id} className={colSpanClass}>
                  <ProjectCard project={project} isFullWidth={isFullWidth} />
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* Bottom Tech Stack Section */}
      {/* 
      <div className="mb-24 md:mb-32">
        <TechStack items={techStack} variant="panel" title="Tech Stack" />
      </div> 
      */}

      {/* Hello, I'm Faiz */}
      <div>
        <Reveal delay={0.15}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Hello, I&apos;m Faiz
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <section className="mb-12 flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* === Left Side === */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Kolase Gambar dengan Animasi & Drag */}
              <motion.div
                className="relative flex mb-8 w-full justify-center md:justify-start pt-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex w-fit items-center -space-x-8 sm:-space-x-10">
                  {[foto1, foto4, foto2, fotoFaiz].map((foto, index) => (
                    <motion.div
                      key={index}
                      drag
                      dragConstraints={{
                        left: -50,
                        right: 50,
                        top: -50,
                        bottom: 50,
                      }}
                      dragElastic={0.1}
                      initial={photoVariants[index].initial}
                      whileInView={photoVariants[index].animate}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 50,
                        transition: { duration: 0.3 },
                      }}
                      className="
            w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
            bg-cover bg-center rounded-3xl 
            border-4 border-white 
            shadow-xl cursor-grab active:cursor-grabbing
            shrink-0
          "
                      style={{
                        backgroundImage: `url(${foto})`,
                      }}
                    />
                  ))}
                </div>
                <img
                  src={powerImg}
                  alt=""
                  className="absolute -top-6 -right-2 md:-top-17 md:-right-15 w-10 h-10 md:w-[99px] md:h-[95px] rotate-10 animate-slide-slow"
                  width="99"
                  height="95"
                />
              </motion.div>

              {/* Deskripsi */}
              <div className="relative inline-flex justify-center p-6 items-center gap-6 rounded-3xl bg-[#FAFAFA] mb-6">
                <img
                  src={pinImg}
                  alt=""
                  className="object-contain
            absolute w-10 h-10 md:w-20 md:h-20 
            -top-32 left-2 
            md:-top-52 md:-left-7
          "
                  width="80"
                  height="80"
                />
                <p className="text-black text-base md:text-lg leading-relaxed">
                  <span className="font-bold text-lg md:text-xl">
                    I am a Product Designer based in Indonesia.
                  </span>{' '}
                  I design to uncomplicate things and create joy in experiences
                  that etch in one&apos;s memory. Most importantly, I design to
                  make things more human, in a way that empowers.
                </p>
                <img
                  src={clipImg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="object-contain
    absolute w-8 h-8 md:w-25 md:h-25
    -bottom-2 -right-1
    md:-bottom-9 md:-right-8
  "
                  width="100"
                  height="100"
                />
              </div>

              <div
                className="
          flex w-full md:w-[528px] items-stretch md:items-start gap-4 justify-start 
          flex-col sm:flex-row
        "
              >
                {/* Lokasi & Waktu */}
                <div className="flex flex-col justify-center p-4 rounded-3xl bg-[#FAFAFA] w-full sm:w-auto ">
                  {' '}
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
          "
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
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-2xl border border-gray-200/80 bg-white text-black shadow-sm"
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
              <div className="relative w-full h-[380px] md:h-[412px] rounded-4xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center text-center overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div
                    className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-90 blur-[120px] rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, #6E04C0 8%, rgba(110, 4, 192, 0) 60%)',
                    }}
                  />
                  <img
                    src={bintang}
                    alt="bintang"
                    className="object-contain absolute w-60 h-60 md:w-[300px] md:h-[300px] animate-[spin_7s_linear_infinite] pointer-events-none opacity-80"
                  />
                </div>

                <h3 className="relative text-center text-3xl md:text-4xl font-bold flex items-center gap-3 mb-3 z-10">
                  Let&apos;s collaborate
                  <img
                    src={handshake}
                    alt="Handshake"
                    className="w-8 md:w-10 inline-block animate-bounce-slow"
                    width="40"
                    height="40"
                  />
                </h3>

                <p className="relative text-center text-sm md:text-base text-gray-200 mb-6 md:mb-8 z-10">
                  Write me an email and I will respond within 1 business day
                </p>

                <div className="relative w-full max-w-md mb-3 mt-2 md:mt-4 z-10">
                  <div
                    className="
              flex rounded-3xl px-2 py-2 border border-white/30 bg-white/10 backdrop-blur-xl 
              flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-3 sm:gap-2
              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
            "
                  >
                    <span
                      className="
                px-4 py-3 text-white text-sm md:text-base 
                text-center sm:text-left
              "
                    >
                      faiz150605@gmail.com
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="
                relative group flex justify-center items-center rounded-3xl overflow-hidden 
                border border-white/40 text-white font-medium 
                bg-gradient-to-b from-white/20 to-white/5 
                shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] 
                transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] 
                hover:bg-gradient-to-b hover:from-white/30 hover:to-white/10
                hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_8px_16px_-4px_rgba(255,255,255,0.2)]
                backdrop-blur-sm
                w-full sm:w-fit 
                h-[42px] md:h-12 px-6 md:px-8 
                text-[14px] md:text-[16px]
              "
                    >
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
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="object-contain absolute -bottom-8 right-5 md:-bottom-14 md:right-5 w-8 h-8 md:w-10 md:h-10"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg flex items-center gap-2 border border-white/10 backdrop-blur-md"
          >
            <span>✅</span>
            <span className="font-medium text-sm">Email copied successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
