import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiFilter, FiLock } from 'react-icons/fi'; // Tambah icon Lock jika mau (opsional)
import projects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js'; // [IMPORT BARU] Import detail untuk pengecekan

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
      onClick={onClick}
      className={`
        flex h-10 px-4 py-2
        md:h-11 md:px-[18px] 
        justify-center items-center
        rounded-[49px] text-[14px] md:text-[16px] font-medium 
        transition-all duration-300 whitespace-nowrap
        ${
          active
            ? 'bg-[#F6F6F6] text-black'
            : 'text-[#4B4B4B] hover:bg-[#F6F6F6]/60 hover:text-black'
        }
      `}
    >
      {label}
    </button>
  );
};

const PortfolioItem = ({ project, index }) => {
  // [LOGIKA BARU] Cek apakah id project ada di dalam file projectDetails.js
  const isDetailAvailable = !!projectDetails[project.id];

  // Komponen pembungkus: Link jika ada detail, div biasa jika tidak ada
  const Wrapper = isDetailAvailable ? Link : 'div';

  // Props untuk pembungkus
  const wrapperProps = isDetailAvailable
    ? { to: `/portfolio/${project.id}`, state: { from: 'portfolio' } }
    : { className: 'cursor-not-allowed' }; // Ubah kursor jadi tanda stop/default

  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      className={`group relative`}
    >
      <Wrapper {...wrapperProps}>
        {/* Container Image */}
        <div
          className={`relative overflow-hidden rounded-[2rem] bg-gray-100 transition-all duration-500 ${
            isDetailAvailable
              ? 'group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]'
              : ''
          }`}
        >
          {/* Gradient Overlay on Hover */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
            }}
          />

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.appName}
              className={`w-full h-auto object-cover aspect-[4/3] md:aspect-[16/10] transition-all duration-300 ${
                !isDetailAvailable ? 'opacity-80 grayscale-[0.5]' : ''
              }`}
            />
          </div>

          {/* OVERLAY: Logic Tampilan */}
          {isDetailAvailable ? (
            // JIKA ADA DETAIL: Tampilkan tombol panah saat hover
            <div className="absolute top-6 right-6 z-[2] opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <FiArrowUpRight className="text-xl text-black" />
              </div>
            </div>
          ) : (
            // JIKA TIDAK ADA DETAIL: Tampilkan Badge "Coming Soon"
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10">
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Description */}
        <div className="mt-6 flex items-start justify-between">
          <div>
            <h3
              className={`text-2xl md:text-3xl font-bold mb-2 leading-tight transition-colors duration-300 ${
                isDetailAvailable
                  ? 'text-gray-900 group-hover:text-black'
                  : 'text-gray-500'
              }`}
            >
              {project.appName}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="font-mono text-sm text-gray-400 group-hover:text-black transition-colors">
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

  // Sorting Logic: UI/UX di atas, Website di bawah
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.section === 'UI/UX' && b.section !== 'UI/UX') return -1;
    if (a.section !== 'UI/UX' && b.section === 'UI/UX') return 1;
    return 0;
  });

  const filteredProjects =
    filter === 'All'
      ? sortedProjects
      : projects.filter((p) => p.section === filter);

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
          <div className="inline-flex items-center gap-1 sm:gap-2 h-[50px] md:h-[60px] px-2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm border border-gray-200/50">
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
              <PortfolioItem key={project.id} project={project} index={i} />
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
