import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiFilter, FiLock } from 'react-icons/fi';
import projects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js';
import { supabase } from '../lib/supabaseClient';

// --- Animations ---
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// --- Components ---

const FilterButton = ({ active, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex h-[32px] lg:h-[36px] px-3.5 sm:px-4 lg:px-5
        justify-center items-center
        rounded-full text-[13px] lg:text-[14px] font-medium transition-all duration-300 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950
        ${
          active
            ? 'bg-black/[0.06] text-black font-semibold shadow-xs'
            : 'text-[#4B4B4B] hover:text-black hover:bg-black/[0.03]'
        }
      `}
    >
      {label}
    </button>
  );
};

const PortfolioItem = ({ project, index, isDetailAvailable }) => {
  const Wrapper = isDetailAvailable ? Link : 'div';
  const wrapperProps = isDetailAvailable
    ? {
        to: `/portfolio/${project.id}`,
        state: { from: 'portfolio' },
        'data-cursor-project': 'true',
        'data-cursor-text': 'View',
        className: 'group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-3xl',
      }
    : { className: 'cursor-not-allowed group block opacity-75' };

  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      className="relative"
    >
      <Wrapper {...wrapperProps}>
        {/* Container Image */}
        <div
          className="relative overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200/80 shadow-xs transition-all duration-300 group-hover:shadow-xl group-hover:border-zinc-300"
        >
          {/* Image */}
          <div className="overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-zinc-50 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.appName}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                !isDetailAvailable ? 'grayscale-[0.4] opacity-80' : ''
              }`}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Overlay button */}
          {isDetailAvailable ? (
            <div className="absolute top-4 right-4 z-[2] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/80 flex items-center justify-center shadow-md">
                <FiArrowUpRight className="text-lg text-zinc-950" aria-hidden="true" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
              <div className="bg-white/95 backdrop-blur-md border border-zinc-200/80 px-4 py-1.5 rounded-full shadow-md">
                <span className="text-xs font-semibold text-zinc-800 tracking-wider uppercase">
                  Case Study Coming Soon
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Description */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3
              className={`text-xl sm:text-2xl font-semibold tracking-tight mb-2 leading-tight transition-colors duration-200 ${
                isDetailAvailable
                  ? 'text-zinc-950 group-hover:text-black'
                  : 'text-zinc-500'
              }`}
            >
              {project.appName}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-zinc-600 bg-zinc-50 border border-zinc-200/80 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="font-mono text-xs sm:text-sm text-zinc-400 font-medium tabular-nums group-hover:text-zinc-950 transition-colors">
            {project.year}
          </span>
        </div>
      </Wrapper>
    </motion.div>
  );
};

// --- Page ---

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'UI/UX', 'Website'];

  const [dbProjects, setDbProjects] = useState(projects);
  const [availableDetailIds, setAvailableDetailIds] = useState(Object.keys(projectDetails));

  useEffect(() => {
    async function loadDynamicPortfolio() {
      try {
        const { data: projData, error: projErr } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        if (projErr) throw projErr;

        const { data: detData, error: detErr } = await supabase
          .from('project_details')
          .select('project_id');
        if (detErr) throw detErr;

        if (projData && projData.length > 0) {
          const mapped = projData.map(item => ({
            id: item.id,
            appName: item.app_name,
            year: item.year,
            title: item.title,
            primaryColor: item.primary_color,
            tags: item.tags || [],
            description: item.description,
            image: item.image_url,
            logo: item.logo_url,
            section: item.section
          }));
          setDbProjects(mapped);

          const detailIds = detData.map(d => d.project_id);
          setAvailableDetailIds(detailIds);
        }
      } catch (err) {
        console.warn('Could not load dynamic portfolio from Supabase. Using local projects fallback.', err);
      }
    }
    loadDynamicPortfolio();
  }, []);

  // Sorting Logic: UI/UX di atas, Website di bawah
  const sortedProjects = [...dbProjects].sort((a, b) => {
    if (a.section === 'UI/UX' && b.section !== 'UI/UX') return -1;
    if (a.section !== 'UI/UX' && b.section === 'UI/UX') return 1;
    return 0;
  });

  const filteredProjects =
    filter === 'All'
      ? sortedProjects
      : dbProjects.filter((p) => p.section === filter);

  return (
    <div className="min-h-screen w-full selection:bg-black selection:text-white pt-32 pb-24 px-4 md:px-12">
      <div className="max-w-screen-2xl mx-auto mb-16 md:mb-20">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-bold tracking-tight text-gray-900 mb-6">
            Selected Works.
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A curated collection of digital experiences, crafted with
              precision and passion for the details.
            </p>
          </motion.div>
        </div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start"
        >
          <div
            className="
              inline-flex items-center justify-center 
              gap-1
              p-1
              rounded-full 
              bg-white/75
              shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]
              backdrop-blur-xl
              border border-black/[0.08]
            "
          >
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                active={filter === cat}
                label={cat === 'All' ? 'View All' : cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div layout className="max-w-screen-2xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {filteredProjects.map((project, i) => (
              <PortfolioItem 
                key={project.id} 
                project={project} 
                index={i} 
                isDetailAvailable={availableDetailIds.includes(project.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-32">
          <p className="text-gray-400 text-xl">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
