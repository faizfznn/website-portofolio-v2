// src/components/Navbar.jsx
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Me", path: "/about" },
  ];

  const location = useLocation();

  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
      "
    >
      <div className="flex items-center gap-3">
        {/* === Logo === */}
        <div
          className="
            flex h-[60px] w-[60px] items-center justify-center rounded-full
            bg-white/70
            shadow-[0_0.241px_1.207px_-1.25px_rgba(110,110,110,0.20),0_2px_10px_-2.5px_rgba(110,110,110,0.20)]
            backdrop-blur-[2.5px] 
            border border-[rgba(148,148,148,0.17)]
          "
        >
          <img src={Logo} alt="Logo" className="w-[29px] h-[21.3px]" />
        </div>

        {/* === Navbar Links === */}
        <div
          className="
            flex items-center justify-center gap-7
            h-[60px]
            px-2
            rounded-full 
            bg-white/70
            shadow-[0_0.241px_1.207px_-1.25px_rgba(110,110,110,0.20),0_2px_10px_-2.5px_rgba(110,110,110,0.20)]
            backdrop-blur-[2.5px]
            border border-[rgba(148,148,148,0.17)]
          "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `
                flex h-11 px-[18px] py-3 justify-center items-center gap-2.5
                rounded-[49px] text-[16px] font-medium transition-all duration-300
                ${isActive ? "bg-[#F6F6F6] text-black" : "text-[#4B4B4B]"}
                hover:bg-[#F6F6F6]/60 hover:text-black
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;