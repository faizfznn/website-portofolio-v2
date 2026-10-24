import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { FiCopy, FiCheck, FiArrowUp } from 'react-icons/fi';
import { HiChevronLeft, HiExternalLink } from 'react-icons/hi';
import portfolioProjects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js';
import Reveal from '../components/Reveal';
import Sidebar from '../components/Sidebar';
import NotFoundPage from './NotFoundPage.jsx';
import { supabase } from '../lib/supabaseClient';

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
  Figma: <SiFigma className="text-[#F24E1E]" />,
  Miro: <SiMiro className="text-[#050038]" />,
  Notion: <SiNotion className="text-[#000000]" />,
  'Google Forms': <SiGoogleforms className="text-[#673AB7]" />,
  Maze: <SiMaze className="text-[#101828]" />,
  ClickUp: <SiClickup className="text-[#7B68EE]" />,
  Inkscape: <SiInkscape className="text-[#000000]" />,
  'React.js': <SiReact className="text-[#61DAFB]" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Golang: <SiGo className="text-[#00ADD8]" />,
  PHP: <SiPhp className="text-[#777BB4]" />,
  Laravel: <SiLaravel className="text-[#FF2D20]" />,
};

// --- Sub Component: InfoRow (Original) ---
const InfoRow = ({ label, children }) => (
  <div className="flex flex-col md:flex-row border-b border-gray-200 py-4">
    <span className="w-full md:w-1/4 font-semibold text-gray-500 mb-2 md:mb-0">
      {label}
    </span>
    <div className="w-full md:w-3/4 text-black">{children}</div>
  </div>
);

// --- Sub Component 1: Circular Progressive Scroll to Top ---
const ScrollToTopProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const isVisibleRef = useRef(false);

  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const updateProgress = useCallback((progressPercent, currentScroll) => {
    const p = Math.min(Math.max(progressPercent, 0), 100);
    const offset = circumference - (p / 100) * circumference;
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${offset}px`;
    }

    const shouldShow = currentScroll > 120;
    if (shouldShow !== isVisibleRef.current) {
      isVisibleRef.current = shouldShow;
      setIsVisible(shouldShow);
    }
  }, [circumference]);

  // Synchronize directly with Lenis smooth scroll engine without React re-render overhead
  const lenis = useLenis((instance) => {
    if (instance) {
      updateProgress((instance.progress || 0) * 100, instance.scroll || 0);
    }
  });

  // Fallback for native scroll when Lenis is not active
  useEffect(() => {
    if (lenis) return;
    const handleNativeScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      updateProgress(progress, totalScroll);
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    handleNativeScroll();
    return () => window.removeEventListener('scroll', handleNativeScroll);
  }, [lenis, updateProgress]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-transparent hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 group cursor-pointer"
          aria-label="Back to top"
        >
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 -rotate-90 pointer-events-none"
          >
            {/* Background disc + light track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E4E4E7"
              strokeWidth={strokeWidth}
              fill="#FFFFFF"
            />
            {/* Real-time progressive stroke updated via direct DOM ref */}
            <circle
              ref={circleRef}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#18181B"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
            />
          </svg>
          <FiArrowUp className="relative z-10 w-4 h-4 text-zinc-800 group-hover:text-black group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Sub Component: ColorPalette (Original Accordion Ribbon) ---
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
      // ignore
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
                <span className="absolute left-1/2 top-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#2B2B2B] shadow-lg border border-black/10 backdrop-blur transition-transform duration-200 group-hover:scale-95">
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

  const [projectState, setProjectState] = useState(null);
  const [detailState, setDetailState] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    async function loadDynamicDetail() {
      setIsLoading(true);
      try {
        const { data: projData, error: projErr } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        if (projErr) throw projErr;

        const { data: detData, error: detErr } = await supabase
          .from('project_details')
          .select('*')
          .eq('project_id', id)
          .single();

        if (detErr) throw detErr;

        if (projData) {
          setProjectState({
            id: projData.id,
            appName: projData.app_name,
            year: projData.year,
            title: projData.title,
            primaryColor: projData.primary_color,
            tags: projData.tags || [],
            description: projData.description,
            image: projData.image_url,
            logo: projData.logo_url,
            section: projData.section,
          });
        }

        if (detData) {
          setDetailState({
            overview: detData.overview,
            team: detData.team || [],
            role: detData.role_list || [],
            timeline: detData.timeline,
            tools: detData.tools,
            problems: detData.problems || [],
            solutions: detData.solutions || [],
            colors: detData.colors || [],
            typography: detData.typography || { fontFamily: 'Inter', description: '' },
            designSystemImages: detData.design_system_images || [],
            logoImages: detData.logo_images || [],
            bentoImages: detData.bento_images || [],
            figmaLink: detData.figma_link,
            websiteLink: detData.website_link,
            githubLink: detData.github_link,
          });
        }

        const { data: allProjData } = await supabase
          .from('projects')
          .select('id, app_name, section, primary_color, logo_url');

        if (allProjData) {
          const sorted = [...allProjData].sort((a, b) => {
            if (a.section === 'UI/UX' && b.section !== 'UI/UX') return -1;
            if (a.section !== 'UI/UX' && b.section === 'UI/UX') return 1;
            return 0;
          });
          setAllProjects(
            sorted.map((p) => ({
              id: p.id,
              appName: p.app_name,
              primaryColor: p.primary_color,
              logo: p.logo_url,
            }))
          );
        }
      } catch (err) {
        console.warn(
          'Could not load dynamic project details from Supabase. Falling back to local static data.',
          err
        );
        const staticProj = portfolioProjects.find((p) => p.id === id);
        const staticDetail = projectDetails[id];
        if (staticProj) {
          setProjectState(staticProj);
        }
        if (staticDetail) {
          setDetailState({
            ...staticDetail,
            role: staticDetail.role || [],
          });
        }
        setAllProjects(
          portfolioProjects.map((p) => ({
            id: p.id,
            appName: p.appName,
            primaryColor: p.primaryColor,
            logo: p.logo,
          }))
        );
      } finally {
        setIsLoading(false);
      }
    }
    loadDynamicDetail();
  }, [id]);

  const portfolioProject = projectState;
  const detail = detailState;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Loading details...</p>
        </div>
      </div>
    );
  }

  if (!portfolioProject || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-gray-600 mt-[92px]">
        <NotFoundPage />
      </div>
    );
  }

  // --- Condition Checks & Section Visibility ---
  const hasProblems = detail.problems && detail.problems.length > 0;
  const hasSolutions = detail.solutions && detail.solutions.length > 0;
  const showChallenge = hasProblems || hasSolutions;

  const isDummyColor = detail.colors?.[0]?.hex === '#2C3E50';
  const hasColors = detail.colors && detail.colors.length > 0 && !isDummyColor;
  const hasTypography = detail.typography && detail.typography.fontFamily;
  const hasDesignImages = detail.designSystemImages && detail.designSystemImages.length > 0;
  const showDesignSystemContent = hasColors || hasTypography || hasDesignImages;

  const showLogoContent =
    (detail.logoImages && detail.logoImages.length > 0) || portfolioProject.logo;
  const showVisuals = showDesignSystemContent || showLogoContent;

  const showResult = detail.bentoImages && detail.bentoImages.length > 0;
  const showPrototype = detail.figmaLink && detail.figmaLink !== '#';

  // --- Sidebar Items Construction ---
  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    ...(showChallenge ? [{ id: 'challenge', label: 'Problem & Solution' }] : []),
    ...(showVisuals ? [{ id: 'visuals', label: 'Design System' }] : []),
    ...(showResult ? [{ id: 'design-result', label: 'Design Result' }] : []),
    ...(showPrototype ? [{ id: 'prototype', label: 'Prototype' }] : []),
  ];

  const getGridColsClass = (count) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  const designSystemGridClass = getGridColsClass(
    detail.designSystemImages ? detail.designSystemImages.length : 0
  );

  const logoImagesToRender =
    detail.logoImages && detail.logoImages.length > 0
      ? detail.logoImages.map((item) => ({ ...item, src: portfolioProject.logo || item.src }))
      : portfolioProject.logo
        ? [{ src: portfolioProject.logo, label: 'Primary Brandmark' }]
        : [];

  return (
    <main
      className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-[92px]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* === Left Sticky Sidebar Navigation === */}
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

      {/* === Right Content === */}
      <section className="lg:col-span-3 space-y-20">
        {/* --- Hero Image (Original) --- */}
        <Reveal>
          <div className="w-full h-auto md:h-[500px] overflow-hidden rounded-3xl bg-[#FAFAFA]">
            <img
              src={portfolioProject.image}
              alt={portfolioProject.appName}
              className="w-full h-full object-cover"
              decoding="async"
              loading="eager"
            />
          </div>
        </Reveal>

        {/* --- Overview Section (Original Layout & InfoRows) --- */}
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
                      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                        Visit Website
                        <HiExternalLink className="text-lg" />
                      </span>
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
                      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                        Visit Github
                        <HiExternalLink className="text-lg" />
                      </span>
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
                      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max whitespace-nowrap bg-white rounded-xl shadow-md p-3 scale-0 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
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
                    const toolName = tool.trim();
                    const icon = toolIcons[toolName];

                    return (
                      <div
                        key={toolName}
                        className="group relative flex flex-col items-center"
                      >
                        <div className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          {icon || (
                            <span className="text-[14px] font-medium text-gray-400">
                              {toolName}
                            </span>
                          )}
                        </div>
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

        {/* --- 2. PROBLEMS & SOLUTION CARD (Kept & Clean, tanpa "02 / Strategic Alignment") --- */}
        {showChallenge && (
          <Reveal>
            <article id="challenge" className="scroll-mt-32 space-y-8">
              <div className="flex flex-col gap-2 pb-6 border-b border-zinc-200/80">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">
                  Problem & Solution
                </h2>
                <p className="text-base text-zinc-600 max-w-2xl mt-1">
                  Identifying structural friction within the user journey and implementing deliberate, scalable design interventions.
                </p>
              </div>

              {/* Comparative Dual Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                {/* Friction Points (Problems) */}
                {hasProblems && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                      <span className="text-xs font-semibold text-zinc-800 font-mono">
                        Identified Friction Points
                      </span>
                      <span className="font-mono text-xs text-zinc-400 tabular-nums">
                        0{detail.problems.length} Items
                      </span>
                    </div>

                    <div className="space-y-4">
                      {detail.problems.map((item, i) => (
                        <div
                          key={i}
                          className="group relative rounded-2xl p-6 bg-zinc-50/70 border border-zinc-200/80 shadow-2xs transition-all duration-300 hover:bg-white hover:shadow-md hover:border-zinc-300"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xs font-bold text-zinc-500 tabular-nums px-2.5 py-0.5 rounded-md bg-zinc-200/60">
                              Challenge 0{i + 1}
                            </span>
                            {/* <span className="w-2 h-2 rounded-full bg-amber-500/80" /> */}
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2 group-hover:text-black">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Strategic Interventions (Solutions) */}
                {hasSolutions && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                      <span className="text-xs font-semibold text-emerald-800 font-mono">
                        Strategic Interventions
                      </span>
                      <span className="font-mono text-xs text-emerald-600 tabular-nums">
                        0{detail.solutions.length} Solutions
                      </span>
                    </div>

                    <div className="space-y-4">
                      {detail.solutions.map((item, i) => (
                        <div
                          key={i}
                          className="group relative rounded-2xl p-6 bg-white border border-zinc-200/80 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-zinc-950/20"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xs font-bold text-emerald-800 tabular-nums px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/60">
                              Solution 0{i + 1}
                            </span>
                            {/* <span className="w-2 h-2 rounded-full bg-emerald-500" /> */}
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-950 tracking-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        )}

        {/* --- GROUP 2: VISUAL IDENTITY (Design System + Logo) --- */}
        {showVisuals && (
          <div id="visuals" className="scroll-mt-32 space-y-16">
            {/* Design System Content (Colors & Typography Reverted to Original Style) */}
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

                  {/* 4. UI Components & Icons (Kept) */}
                  {hasDesignImages && (
                    <div className="mt-8 flex flex-col">
                      <h3 className="text-xl font-semibold mb-6">
                        Components & Icons
                      </h3>
                      <div className={`grid ${designSystemGridClass} gap-6`}>
                        {detail.designSystemImages.map((imgSrc, i) => (
                          <div
                            key={i}
                            className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-4/3 flex items-center justify-center p-4"
                          >
                            <img
                              src={imgSrc}
                              alt={`Design System ${i + 1}`}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            )}

            {/* 3. Brand Identity & Logomark (Kept: Dual Light & Dark Canvas Exhibition Frames) */}
            {showLogoContent && (
              <Reveal>
                <article className="flex flex-col">
                  <h2 className="text-xl font-semibold mb-6">
                    Logo
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {logoImagesToRender.map((logo, idx) => (
                      <React.Fragment key={logo.label + '-' + idx}>
                        {/* Light Canvas Frame */}
                        <div className="group relative rounded-3xl p-8 sm:p-12 bg-zinc-50/80 border border-zinc-200/80 shadow-xs flex flex-col items-center justify-center min-h-[220px] overflow-hidden transition-all duration-300 hover:shadow-md">
                          <div className="absolute top-4 left-4 font-mono text-[11px] text-zinc-400 font-medium">
                            {logo.label || 'Brandmark'} — Light Surface
                          </div>
                          <img
                            src={logo.src}
                            alt={logo.label}
                            className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute bottom-4 right-4 font-mono text-[11px] text-zinc-400 font-medium">
                            Vector / Lossless
                          </div>
                        </div>

                        {/* Dark Canvas Frame */}
                        <div className="group relative rounded-3xl p-8 sm:p-12 bg-zinc-950 border border-zinc-800 shadow-md flex flex-col items-center justify-center min-h-[220px] overflow-hidden transition-all duration-300 hover:shadow-xl">
                          <div className="absolute top-4 left-4 font-mono text-[11px] text-zinc-500 font-medium">
                            {logo.label || 'Brandmark'} — Dark Surface
                          </div>
                          <img
                            src={logo.src}
                            alt={logo.label}
                            className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute bottom-4 right-4 font-mono text-[11px] text-zinc-500 font-medium">
                            High Contrast
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        )}

        {/* --- 5. DESIGN RESULT (Kept: Expansive Showcase without squishing) --- */}
        {showResult && (
          <Reveal>
            <article id="design-result" className="scroll-mt-24">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">
                  Design Result
                </h2>
                <p className="text-base text-zinc-600 max-w-2xl">
                  Final production screens and key user flows engineered with pixel-level precision.
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Primary Hero Feature (Full Width) */}
                {detail.bentoImages[0] && (
                  <div className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-md transition-all duration-500 hover:shadow-xl">
                    <div className="overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-50 flex items-center justify-center">
                      <img
                        src={detail.bentoImages[0]}
                        alt="Design Result Primary Hero"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                )}

                {/* Secondary Dual Showcase (2-Column) */}
                {(detail.bentoImages[1] || detail.bentoImages[2]) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {detail.bentoImages[1] && (
                      <div className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm transition-all duration-500 hover:shadow-lg">
                        <div className="overflow-hidden aspect-[4/3] w-full bg-zinc-50 flex items-center justify-center">
                          <img
                            src={detail.bentoImages[1]}
                            alt="Design Result Flow 2"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    )}

                    {detail.bentoImages[2] && (
                      <div className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm transition-all duration-500 hover:shadow-lg">
                        <div className="overflow-hidden aspect-[4/3] w-full bg-zinc-50 flex items-center justify-center">
                          <img
                            src={detail.bentoImages[2]}
                            alt="Design Result Flow 3"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Images (if any) */}
                {detail.bentoImages.length > 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {detail.bentoImages.slice(3).map((img, extraIdx) => (
                      <div
                        key={extraIdx}
                        className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm transition-all duration-500 hover:shadow-lg"
                      >
                        <div className="overflow-hidden aspect-[4/3] w-full bg-zinc-50 flex items-center justify-center">
                          <img
                            src={img}
                            alt={`Design Result ${extraIdx + 4}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        )}

        {/* --- Prototype (Original) --- */}
        {showPrototype && (
          <Reveal>
            <article id="prototype" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mb-6">
                Prototype
              </h2>
              {/* <p className="text-base text-zinc-600 max-w-2xl mb-6">
                Explore the interactive prototype of the latest design.
              </p> */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  style={{ border: 'none' }}
                  width="100%"
                  height="600"
                  src={detail.figmaLink}
                  allowFullScreen
                  loading="lazy"
                  title="Figma Prototype"
                />
              </div>
            </article>
          </Reveal>
        )}

        {/* --- Footer Navigation (Next Project Card - Slimmer, No Circle behind Logo) --- */}
        {allProjects.length > 0 && (
          <Reveal>
            <section className="pt-4 sm:pt-6">
              {(() => {
                const currentIndex = allProjects.findIndex(
                  (p) => p.id === id
                );
                if (currentIndex === -1) return null;
                const nextIndex = (currentIndex + 1) % allProjects.length;
                const nextProject = allProjects[nextIndex];
                if (!nextProject) return null;

                const rawColor = nextProject.primaryColor || '#18181B';
                const bgHex = rawColor.startsWith('#') ? rawColor : `#${rawColor}`;

                return (
                  <Link
                    to={`/portfolio/${nextProject.id}`}
                    className="group relative block w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{ backgroundColor: bgHex }}
                  >
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />

                    {/* Card Content Layout (Slim & Compact) */}
                    <div className="relative z-10 flex flex-row items-center justify-between px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-6 gap-6">
                      {/* Left Side: Up next + Title + Action */}
                      <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-medium text-white/80">
                            Up Next
                          </span>
                          <span className="w-5 h-[1.5px] bg-white/40 rounded-full" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                          {nextProject.appName}
                        </h2>

                        <div className="pt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                          <span>Explore Case Study</span>
                          <HiExternalLink className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Right Side: Clean Brand Logo directly on card (No circle) */}
                      {nextProject.logo && (
                        <div className="shrink-0 flex items-center justify-center">
                          <img
                            src={nextProject.logo}
                            alt={`${nextProject.appName} logo`}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })()}
            </section>
          </Reveal>
        )}
      </section>

      {/* 1. Progressive Scroll to Top (Kept) */}
      <ScrollToTopProgress />
    </main>
  );
}
