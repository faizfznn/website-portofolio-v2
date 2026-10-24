import { useEffect, useState, useRef } from 'react';
import eyeIcon from '../assets/eye.webp';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('View');
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleHover = (e) => {
      const target = e.target.closest('[data-cursor-project]');

      if (target) {
        const nextLabel = target.getAttribute('data-cursor-text') || 'View';
        setCursorLabel(nextLabel);
        setIsHovering(true);
      } else {
        setIsHovering(false);
        setCursorLabel('View');
      }
    };

    let scrollRafId = null;
    const handleScroll = () => {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        if (posRef.current.x < 0 || posRef.current.y < 0) return;
        const el = document.elementFromPoint(posRef.current.x, posRef.current.y);
        if (el) {
          const target = el.closest('[data-cursor-project]');
          if (target) {
            const nextLabel = target.getAttribute('data-cursor-text') || 'View';
            setCursorLabel(nextLabel);
            setIsHovering(true);
            return;
          }
        }
        setIsHovering(false);
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleHover, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      {/* Kontainer Kapsul: Pop in/out tepat di posisi kursor tanpa efek meluncur dari pojok */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full shadow-2xl flex flex-row items-center justify-center gap-2 px-4 py-2 md:py-3 border border-white/10 transition-all duration-200 ease-out origin-center ${
          isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Gambar mata kecil */}
        <img
          src={eyeIcon}
          alt=""
          className="w-4 h-4 md:w-5 md:h-5 object-contain"
        />
        {/* Teks Label */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest select-none">
          {cursorLabel}
        </span>
      </div>
    </div>
  );
}
