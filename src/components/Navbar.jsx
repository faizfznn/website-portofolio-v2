// src/components/Navbar.jsx

import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink dan useLocation
import Logo from "../assets/Logo.png";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Me", path: "/about" },
  ];

  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);
  const location = useLocation(); // Dapatkan lokasi URL saat ini

  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.path === location.pathname);
    const activeItem = itemsRef.current[activeIndex];
    
    if (activeItem && indicatorRef.current) {
      const itemRect = activeItem.getBoundingClientRect();
      const parentRect = activeItem.parentElement.getBoundingClientRect();
      const centerPosition =
        itemRect.left - parentRect.left + itemRect.width / 2;

      indicatorRef.current.style.transform = `translateX(${centerPosition}px) translateX(-50%)`;
    }
  }, [location, navLinks]); // Jalankan efek saat lokasi berubah

  return (
    <nav className="w-fit h-[59px] bg-black border border-[#2A2A2A] rounded-full flex items-center justify-center space-x-4 px-6">
      <img src={Logo} alt="Logo" className="h-7" />

      <div className="relative flex items-center">
        <span
          ref={indicatorRef}
          className="absolute bottom-[-2px] left-0 h-[6px] w-[6px] bg-white rounded-full transition-transform duration-300 ease-in-out"
        />

        {navLinks.map((link, index) => (
          <NavLink
            key={link.name}
            ref={(el) => (itemsRef.current[index] = el)}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 text-[16px] font-medium transition-colors duration-300 relative z-10 ${
                isActive ? "text-white" : "text-[#939393] hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <img src={Logo} alt="Logo" className="h-7" />
    </nav>
  );
}

export default Navbar;