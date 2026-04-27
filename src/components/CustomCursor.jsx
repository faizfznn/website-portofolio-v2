import { useEffect, useState, useRef } from 'react';
import eyeIcon from '../assets/eye.webp';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('View');
  const rafRef = useRef(null);

  useEffect(() => {
    let lastX = 0,
      lastY = 0;

    const moveCursor = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      // Use RAF to batch position updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: lastX, y: lastY });
      });
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

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-9999 flex items-center justify-center transition-transform duration-300 ease-out ${
        isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: isHovering ? 'transform' : 'auto',
      }}
    >
      {/* Kontainer Bentuk Kapsul/Tablet */}
      <div className="bg-black text-white rounded-full shadow-2xl flex flex-row items-center justify-center gap-2 px-4 py-2 md:py-3 border border-white/10">
        {/* Gambar mata kecil */}
        <img
          src={eyeIcon}
          alt=""
          className="w-4 h-4 md:w-5 md:h-5 object-contain"
        />
        {/* Teks Label */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest">
          {cursorLabel}
        </span>
      </div>
    </div>
  );
}
