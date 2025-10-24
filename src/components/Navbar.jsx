import { useState, useRef, useEffect } from "react";
import Logo from "../assets/Logo.png"; // Pastikan path logo sudah benar

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isHovering, setIsHovering] = useState(false);
  const navLinks = ["Home", "Portfolio", "About Me"];

  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const activeItem = itemsRef.current[navLinks.indexOf(active)];
    if (activeItem && indicatorRef.current) {
      const itemRect = activeItem.getBoundingClientRect();
      const parentRect = activeItem.parentElement.getBoundingClientRect();
      const centerPosition =
        itemRect.left - parentRect.left + itemRect.width / 2;

      // Logika untuk animasi naik-turun saat hover
      const verticalPosition = isHovering ? '-3px' : '0px';

      indicatorRef.current.style.transform = `translateX(${centerPosition}px) translateX(-50%) translateY(${verticalPosition})`;
    }
  }, [active, navLinks, isHovering]);

  return (
    <nav className="w-fit h-[59px] bg-black border border-[#2A2A2A] rounded-full flex items-center justify-center space-x-4 px-6">
      {/* Logo di Kiri */}
      <img src={Logo} alt="Logo" className="h-7" />

      <div className="relative flex items-center">
        {/* Indikator Titik */}
        <span
          ref={indicatorRef}
          className="absolute bottom-[-2px] left-0 h-[6px] w-[6px] bg-white rounded-full transition-transform duration-300 ease-in-out"
        />

        {/* Tautan Navigasi */}
        {navLinks.map((link, index) => (
          <a
            key={link}
            ref={(el) => (itemsRef.current[index] = el)}
            href={`#${link.toLowerCase()}`}
            onClick={() => setActive(link)}
            onMouseEnter={() => { if (link === active) setIsHovering(true); }}
            onMouseLeave={() => { if (link === active) setIsHovering(false); }}
            className={`px-4 py-2 text-[16px] font-medium transition-colors duration-300 relative z-10
              ${
                active === link
                  ? "text-white"
                  : "text-[#939393] hover:text-white"
              }
            `}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Logo di Kanan */}
      <img src={Logo} alt="Logo" className="h-7" />
    </nav>
  );
}

export default Navbar;