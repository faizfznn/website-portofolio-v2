import { useEffect, useState } from 'react';
import eyeIcon from '../assets/eye.webp'; // Memastikan path aset benar

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      // Mencari elemen terdekat dengan atribut trigger
      if (e.target.closest('[data-cursor-project]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-transform duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
        isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Kontainer Bentuk Kapsul/Tablet */}
      <div 
        className="bg-black text-white rounded-full shadow-2xl flex flex-row items-center justify-center gap-2 px-4 py-2 md:py-3 border border-white/10"
      >
        {/* Gambar mata kecil */}
        <img 
          src={eyeIcon} 
          alt="" 
          className="w-4 h-4 md:w-5 md:h-5 object-contain" 
        />
        {/* Teks View */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest">
            
          View
        </span>
      </div>
    </div>
  );
}