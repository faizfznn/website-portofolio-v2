import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrawijayaStatCard from './BrawijayaStatCard';

export default function BrawijayaTimelineItem({
  date = '2023 - Present',
  institution = 'Universitas Brawijaya',
  degree = "Bachelor's Degree, Computer Science",
  isActive = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const timeoutRef = useRef(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleTriggerMouseEnter = () => {
    clearTimer();
    setIsOpen(true);
  };

  const handleTriggerMouseLeave = () => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsCardHovered(false);
    }, 150);
  };

  const handleCardMouseEnter = () => {
    clearTimer();
    setIsOpen(true);
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => clearTimer();
  }, []);

  return (
    <div className="relative pl-7 group">
      {/* Timeline Bullet */}
      <div className="absolute left-[-4.5px] top-1.5 flex items-center justify-center pointer-events-none">
        {isActive ? (
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D2342] opacity-40" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D2342]" />
          </span>
        ) : (
          <div className="w-2 h-2 bg-zinc-300 rounded-full transition-transform duration-200 group-hover:scale-125 group-hover:bg-[#0D2342]" />
        )}
      </div>

      {/* Main Item Content - Hover is strictly bound to this box */}
      <div
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        className="w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="View academic stats and achievements at Universitas Brawijaya"
      >
        <p className="font-mono text-xs text-zinc-500 tabular-nums mb-0.5">
          {date}
        </p>

        <div className="flex items-center gap-1.5">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-950 group-hover:text-[#0D2342] transition-colors">
            {institution}
          </h3>
        </div>

        <p className="text-sm text-zinc-600 mt-0.5 group-hover:text-zinc-800 transition-colors">
          {degree}
        </p>
      </div>

      {/* Animated Popover Statistics Card */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="absolute left-0 top-full pt-2 z-50 origin-top-left"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 2.5 }}
              animate={{
                opacity: 1,
                scale: isCardHovered ? 1.02 : 1,
                rotate: isCardHovered ? 0 : 2.5,
              }}
              exit={{ opacity: 0, scale: 0, rotate: 2.5 }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto origin-top-left transform-gpu cursor-default"
            >
              <BrawijayaStatCard />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
