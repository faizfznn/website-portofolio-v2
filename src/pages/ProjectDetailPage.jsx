import { useParams, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { HiChevronLeft, HiExternalLink } from 'react-icons/hi';
import portfolioProjects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js';
import Reveal from '../components/Reveal';
import Sidebar from '../components/Sidebar';
import NotFoundPage from './NotFoundPage.jsx';

import {
  SiFigma,
  SiMiro,
  SiNotion,
  SiGoogleforms,
  SiClickup,
  SiInkscape,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGo,
  SiPhp,
  SiLaravel,
  SiMaze,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';
const toolIcons = {
  // Design & Collaboration
  Figma: <SiFigma className="text-[#F24E1E]" />, // Asli: Kombinasi, tapi Orange-Red paling ikonik
  Miro: <SiMiro className="text-[#050038]" />, // Warna teks/logo gelap Miro lebih akurat (bg biasanya kuning)
  Notion: <SiNotion className="text-[#000000]" />,
  'Google Forms': <SiGoogleforms className="text-[#673AB7]" />, // Ungu khas Google Workspace
  Maze: <SiMaze className="text-[#101828]" />, // Maze sering menggunakan hitam pekat/dark navy

  // Management & Illustration
  ClickUp: <SiClickup className="text-[#7B68EE]" />,
  Inkscape: <SiInkscape className="text-[#000000]" />,

  // Frontend & Styling
  'React.js': <SiReact className="text-[#61DAFB]" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,

  // Backend & Languages
  Golang: <SiGo className="text-[#00ADD8]" />,
  PHP: <SiPhp className="text-[#777BB4]" />,
  Laravel: <SiLaravel className="text-[#FF2D20]" />,
};

// --- Sub Components (InfoRow, Card) Tetap Sama ---
const InfoRow = ({ label, children }) => (
  <div className="flex flex-col md:flex-row border-b border-gray-200 py-4">
    <span className="w-full md:w-1/4 font-semibold text-gray-500 mb-2 md:mb-0">
      {label}
    </span>
    <div className="w-full md:w-3/4 text-black">{children}</div>
  </div>
);

const ProblemSolutionCard = ({
  number,
  title,
  description,
  isDarkMode = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`p-6 md:p-8 rounded-2xl h-full transition-transform duration-300 hover:-translate-y-1 ${
      isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black border border-gray-200 shadow-sm'
    }`}
  >
    <span
      className={`block text-sm md:text-base font-bold mb-3 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}
    >
      {number}
    </span>
    <h4 className="text-xl md:text-2xl font-bold mb-4">{title}</h4>
    <p
      className={`text-sm md:text-base leading-relaxed ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}
    >
      {description}
    </p>
  </motion.div>
);

const RevealText = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ParallaxImage = ({ src, alt, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        style={{ y, scale: 1.1 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const ColorPalette = ({ colors }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copiedHex, setCopiedHex] = useState('');
  const hasManyColors = colors.length > 3;
  const activeGrow = hasManyColors ? 1.6 : 3;
  const panelPaddingClass = hasManyColors ? 'p-4 md:p-4' : 'p-5 md:p-7';
  const titleTextClass = hasManyColors
    ? 'text-[11px] md:text-[16px]'
    : 'text-[12px] md:text-[18px]';
  const hexTextClass = hasManyColors
    ? 'text-[9px] md:text-[11px]'
    : 'text-[8px] md:text-[12px]';

  const handleCopy = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(''), 1500);
    } catch {
      // Clipboard may fail on some browsers/devices without permission.
    }
  };

  return (
    <div
      className="w-full overflow-hidden rounded-2xl"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="flex h-[300px] overflow-hidden rounded-2xl">
        {colors.map((color, index) => {
          const isActive = activeIndex === index;
          const isLightColor = color.hex.toLowerCase() === '#ffffff';
          const wasCopied = copiedHex === color.hex;

          return (
            <button
              key={`${color.hex}-${index}`}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => handleCopy(color.hex)}
              className={`group relative flex h-full min-w-0 flex-1 ${panelPaddingClass} text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] focus:outline-none`}
              style={{
                backgroundColor: color.hex,
                color: isLightColor ? '#212121' : '#ffffff',
                flexGrow: isActive ? activeGrow : 1,
              }}
            >
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <h4
                  className={`${titleTextClass} pr-1 font-semibold leading-tight tracking-tight`}
                >
                  {color.name}
                </h4>

                <p className={`${hexTextClass} font-semibold`}>{color.hex}</p>
              </div>

              {isActive && (
                <span className="absolute left-1/2 top-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#2B2B2B] shadow-lg backdrop-blur transition-transform duration-200 group-hover:scale-95">
                  {wasCopied ? (
                    <FiCheck className="text-base" />
                  ) : (
                    <FiCopy className="text-base" />
                  )}
                  {wasCopied ? 'Copied' : 'Copy'}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const isFromHome = location.state?.from === 'home';
  const backPath = isFromHome ? '/' : '/portfolio';
  const backLabel = isFromHome ? 'Home' : 'Portfolio';

  const portfolioProject = portfolioProjects.find((p) => p.id === id);
  const detail = projectDetails[id];

  if (!portfolioProject || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-gray-600 mt-[92px]">
        <NotFoundPage />
      </div>
    );
  }

  // --- LOGIKA PENGECEKAN DATA & PENGELOMPOKAN ---

  // 1. Group: PROBLEMS & SOLUTIONS
  const hasProblems = detail.problems && detail.problems.length > 0;
  const hasSolutions = detail.solutions && detail.solutions.length > 0;
  const showChallenge = hasProblems || hasSolutions; // Tampil jika salah satu ada

  // 2. Group: DESIGN SYSTEM & LOGO
  const isDummyColor = detail.colors?.[0]?.hex === '#2C3E50';
  const hasColors = detail.colors && detail.colors.length > 0 && !isDummyColor;
  const hasTypography = detail.typography && detail.typography.fontFamily;
  const hasDesignImages =
    detail.designSystemImages && detail.designSystemImages.length > 0;
  const showDesignSystemContent = hasColors || hasTypography || hasDesignImages;

  const showLogoContent = detail.logoImages && detail.logoImages.length > 0;
  const showVisuals = showDesignSystemContent || showLogoContent; // Tampil jika salah satu ada

  // 3. Other Sections
  const showResult = detail.bentoImages && detail.bentoImages.length > 0;
  const showPrototype = detail.figmaLink && detail.figmaLink !== '#';

  // --- KONSTRUKSI SIDEBAR MENU (GABUNGAN) ---
  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    // Menu "Problem & Solution" (Mengarah ke Wrapper ID 'challenge')
    ...(showChallenge
      ? [{ id: 'challenge', label: 'Problem & Solution' }]
      : []),
    // Menu "Design System" (Mengarah ke Wrapper ID 'visuals', mencakup Logo)
    ...(showVisuals ? [{ id: 'visuals', label: 'Design System' }] : []),
    // Menu lainnya
    ...(showResult ? [{ id: 'design-result', label: 'Design Result' }] : []),
    ...(showPrototype ? [{ id: 'prototype', label: 'Prototype' }] : []),
  ];

  // Grid Styles Helpers
  const getGridColsClass = (count) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };
  const designSystemGridClass = getGridColsClass(
    detail.designSystemImages ? detail.designSystemImages.length : 0
  );
  const logoGridClass = getGridColsClass(
    detail.logoImages ? detail.logoImages.length : 0
  );

  return (
    <main
      className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-[92px]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* === Sidebar Kiri === */}
      <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-1/2 lg:-translate-y-1/2 self-start">
        <Sidebar items={sidebarItems} />
        <Link
          to={backPath}
          className="mt-8 flex items-center gap-1 text-[14px] text-gray-500 hover:text-black transition-colors"
        >
          <HiChevronLeft className="text-lg" />
          <span>Back to {backLabel}</span>
        </Link>
      </aside>

      {/* === Konten Kanan === */}
      <section className="lg:col-span-3 space-y-20">
        {/* Hero Image */}
        <Reveal>
          <div className="w-full h-auto md:h-[500px] overflow-hidden rounded-3xl bg-[#FAFAFA]">
            <img
              src={portfolioProject.image}
              alt={portfolioProject.appName}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* --- Overview --- */}
        <Reveal>
          <article id="overview" className="scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Overview
              </h2>
              <div className="flex flex-row gap-4">
                {detail.websiteLink && (
                  <a
                    href={detail.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    relative w-full sm:w-fit h-14 px-8 rounded-[24px] 
                    border border-[#CAD3DC] bg-white text-black 
                    text-[16px] font-normal group inline-flex items-center justify-center
                    overflow-hidden transition-colors duration-300 hover:border-black
                  "
                  >
                    <span className="relative inline-flex items-center overflow-hidden h-[1.5em]">
                      {/* Teks Normal (Akan geser ke atas saat hover) */}
                      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                        Visit Website
                        <HiExternalLink className="text-lg" />
                      </span>

                      {/* Teks Hover (Akan masuk dari bawah saat hover) */}
                      <span className="absolute left-0 top-0 w-full h-full inline-flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                        Visit Website
                        <HiExternalLink className="text-lg" />
                      </span>
                    </span>
                  </a>
                )}

                {detail.githubLink && (
                  <a
                    href={detail.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    relative w-full sm:w-fit h-14 px-8 rounded-[24px] 
                    border border-[#CAD3DC] bg-white text-black 
                    text-[16px] font-normal group inline-flex items-center justify-center
                    overflow-hidden transition-colors duration-300 hover:border-black
                  "
                  >
                    <span className="relative inline-flex items-center overflow-hidden h-[1.5em]">
                      {/* Teks Normal (Akan geser ke atas saat hover) */}
                      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                        Visit Github
                        <HiExternalLink className="text-lg" />
                      </span>

                      {/* Teks Hover (Akan masuk dari bawah saat hover) */}
                      <span className="absolute left-0 top-0 w-full h-full inline-flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                        Visit Github
                        <HiExternalLink className="text-lg" />
                      </span>
                    </span>
                  </a>
                )}
              </div>
            </div>
            <div className="pt-8">
              <InfoRow label="Description">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {detail.overview}
                </p>
              </InfoRow>
              <InfoRow label="Team">
                <div className="flex -space-x-2">
                  {detail.team.map((member, i) => (
                    <a
                      key={i}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        title={member.name}
                        className="w-12 h-12 rounded-full border-2 border-white object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max whitespace-nowrap bg-white rounded-xl shadow-md p-3 opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 z-10">
                        <p className="text-sm font-semibold text-black text-center">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-600 text-center">
                          {member.role}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </InfoRow>
              <InfoRow label="My Role">
                <ul className="list-disc pl-5 space-y-1">
                  {detail.role.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow label="Timeline">
                <p>{detail.timeline}</p>
              </InfoRow>
              <InfoRow label="Tools Used">
                <div className="flex flex-wrap gap-4 items-center mt-1">
                  {detail.tools.split(', ').map((tool) => {
                    // Membersihkan string jika ada spasi berlebih
                    const toolName = tool.trim();
                    const icon = toolIcons[toolName];

                    return (
                      <div
                        key={toolName}
                        className="group relative flex flex-col items-center"
                      >
                        {/* Tampilan Ikon */}
                        <div className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          {icon || (
                            <span className="text-[14px] font-medium text-gray-400">
                              {toolName}
                            </span>
                          )}
                        </div>

                        {/* Tooltip Nama Tool (Muncul saat Hover) */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-10">
                          {toolName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </InfoRow>
            </div>
          </article>
        </Reveal>

        {/* --- GROUP 1: PROBLEM & SOLUTION --- */}
        {showChallenge && (
          // Wrapper ini memiliki ID 'challenge' yang akan dideteksi oleh Sidebar
          <div id="challenge" className="scroll-mt-32 space-y-24">
            {/* Problems Section */}
            {hasProblems && (
              <Reveal>
                <article>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                    Problems
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {detail.problems.map((item, i) => (
                      <ProblemSolutionCard
                        key={i}
                        number={`0${i + 1}`}
                        title={item.title}
                        description={item.description}
                        isDarkMode={true}
                      />
                    ))}
                  </div>
                </article>
              </Reveal>
            )}

            {/* Solutions Section */}
            {hasSolutions && (
              <Reveal>
                <article>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                    Solutions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {detail.solutions.map((item, i) => (
                      <ProblemSolutionCard
                        key={i}
                        number={`0${i + 1}`}
                        title={item.title}
                        description={item.description}
                        isDarkMode={false}
                      />
                    ))}
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        )}

        {/* --- GROUP 2: VISUAL IDENTITY (Design System + Logo) --- */}
        {showVisuals && (
          // Wrapper ini memiliki ID 'visuals' yang akan dideteksi oleh Sidebar
          <div id="visuals" className="scroll-mt-32 space-y-24">
            {/* Design System Content */}
            {showDesignSystemContent && (
              <Reveal>
                <article className="flex flex-col">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
                    Design System
                  </h2>

                  {(hasColors || hasTypography) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {hasColors && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Color Palette
                          </h3>
                          <ColorPalette colors={detail.colors} />
                        </div>
                      )}
                      {hasTypography && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Typography
                          </h3>
                          <p
                            className="text-5xl font-bold mb-1"
                            style={{ fontFamily: detail.typography.fontFamily }}
                          >
                            Aa
                          </p>
                          <p className="text-lg font-semibold mb-2">
                            {detail.typography.fontFamily}
                          </p>
                          <p className="text-base text-gray-700">
                            {detail.typography.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {hasDesignImages && (
                    <div className="mt-8 flex flex-col">
                      <h3 className="text-xl font-semibold mb-6">
                        Components & Icons
                      </h3>
                      <div className={`grid ${designSystemGridClass} gap-6`}>
                        {detail.designSystemImages.map((imgSrc, i) => (
                          <div
                            key={i}
                            className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-4/3"
                          >
                            <img
                              src={imgSrc}
                              alt={`Design System ${i + 1}`}
                              className="w-full h-full object-contain p-4"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            )}

            {/* Logo Content */}
            {showLogoContent && (
              <Reveal>
                <article className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-black mb-6">
                    Logo
                  </h2>
                  <div className={`grid ${logoGridClass} gap-8`}>
                    {detail.logoImages.map((logo) => (
                      <div
                        key={logo.label}
                        className="flex flex-col items-center group"
                      >
                        <div
                          className={`flex justify-center items-center w-full aspect-square rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${logo.label.includes('Dark') ? 'bg-black' : 'bg-white border border-gray-200'}`}
                          style={{ minHeight: '200px' }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.label}
                            className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-700 text-center">
                          {logo.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        )}

        {/* --- Design Result (Bento) --- */}
        {showResult && (
          <Reveal>
            <article id="design-result" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Design Result
              </h2>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
                {detail.bentoImages[0] && (
                  <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative">
                    <img
                      src={detail.bentoImages[0]}
                      alt="Design 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {detail.bentoImages[1] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                    <img
                      src={detail.bentoImages[1]}
                      alt="Design 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {detail.bentoImages[2] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                    <img
                      src={detail.bentoImages[2]}
                      alt="Design 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        )}

        {/* --- Prototype --- */}
        {showPrototype && (
          <Reveal>
            <article id="prototype" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Prototype
              </h2>
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  style={{ border: 'none' }}
                  width="100%"
                  height="600"
                  src={detail.figmaLink}
                  allowFullScreen
                  loading="lazy"
                  title="Figma Prototype"
                ></iframe>
              </div>
            </article>
          </Reveal>
        )}

        {/* --- Footer Navigation --- */}
        <Reveal>
          <section className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              Next Project
            </h3>
            {(() => {
              const currentIndex = portfolioProjects.findIndex(
                (p) => p.id === id
              );
              const nextIndex = (currentIndex + 1) % portfolioProjects.length;
              const nextProject = portfolioProjects[nextIndex];
              return (
                <Link
                  to={`/portfolio/${nextProject.id}`}
                  className="group block"
                >
                  <h2 className="text-3xl font-semibold text-black group-hover:underline">
                    {nextProject.appName}
                  </h2>
                </Link>
              );
            })()}
          </section>
        </Reveal>
      </section>
    </main>
  );
}
