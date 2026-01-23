import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiFilter } from 'react-icons/fi';
import projects from '../data/portfolioProjects.js';

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      className={`group relative mb-12 break-inside-avoid`}
    >
      <Link to={`/portfolio/${project.id}`} state={{ from: 'portfolio' }}>
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
          {' '}
          {/* Image Hover Effect */}
          <div className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              src={project.image}
              alt={project.appName}
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-[16/10]" // Adjust aspect ratio as needed
            />
          </div>
          {/* Overlay Button */}
          <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
              <FiArrowUpRight className="text-xl text-black" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 flex items-start justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-gray-300">
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
            {project.year || '2024'}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

// --- Page ---

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  // Extract unique categories (sections) + Add 'All'
  const categories = ['All', 'UI/UX', 'Website'];

  // const filteredProjects =
  //   filter === 'All' ? projects : projects.filter((p) => p.section === filter);

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.section === 'UI/UX' && b.section !== 'UI/UX') {
      return -1;
    }
    if (a.section !== 'UI/UX' && b.section === 'UI/UX') {
      return 1;
    }
    return 0;
  });

  const filteredProjects =
    filter === 'All'
      ? sortedProjects
      : projects.filter((p) => p.section === filter);

  return (
    <div className="bg-[#FDFCFB] min-h-screen w-full selection:bg-black selection:text-white pt-32 pb-24 px-4 md:px-12">
      <div className="max-w-screen-2xl mx-auto mb-24 md:mb-32">
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter text-gray-900 mb-8">
          Selected Works.
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              A curated collection of digital experiences, crafted with
              precision and passion for the details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            // Style Container disamakan dengan Navbar
            className="
        flex items-center gap-1 sm:gap-2
        h-[50px] md:h-[60px]
        px-2
        rounded-full 
        bg-white/70
        shadow-[0_0.241px_1.207px_-1.25px_rgba(110,110,110,0.20),0_2px_10px_-2.5px_rgba(110,110,110,0.20)]
        backdrop-blur-[2.5px]
        border border-[rgba(148,148,148,0.17)]
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
          </motion.div>
        </div>
      </div>
      {/* 2. Masonry Grid */}
      <motion.div layout className="max-w-screen-2xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="columns-1 md:columns-2 gap-12 space-y-12"
          >
            {filteredProjects.map((project, i) => (
              <PortfolioItem key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 3. Empty State */}
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
