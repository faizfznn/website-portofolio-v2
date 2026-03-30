import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Me', path: '/about' },
  ];

  return (
    <nav
      className="
        fixed z-50 flex justify-center
        
        /* === Mobile: Full-width dengan padding === */
        top-4 left-0 right-0 w-full px-4
        
        /* === Desktop: Kembali ke center & auto-width === */
        lg:top-6
      "
    >
      <div
        className="
          flex items-center gap-2 lg:gap-3 
          w-fit max-w-full
          justify-center
        "
      >
        {/* === Logo === */}
        <div
          className="
            flex h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full
            shrink-0 /* Mencegah logo menyusut */
            bg-white/70
            shadow-[0_0.241px_1.207px_-1.25px_rgba(110,110,110,0.20),0_2px_10px_-2.5px_rgba(110,110,110,0.20)]
            backdrop-blur-[2.5px] 
            border border-[rgba(148,148,148,0.17)]
          "
        >
          <img
            src={Logo}
            alt="Logo"
            width="29"
            height="21"
            className="w-[29px] h-[21.3px]"
          />
        </div>

        {/* === Navbar Links === */}
        <div
          className="
            flex items-center justify-center 
            gap-1 sm:gap-2 lg:gap-7
            h-[50px] lg:h-[60px]
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
                flex h-10 px-4 py-2
                lg:h-11 lg:px-[18px] lg:py-3 
                justify-center items-center gap-2.5
                rounded-[49px] text-[14px] lg:text-[16px] font-medium transition-all duration-300
                ${isActive ? 'bg-[#F6F6F6] text-black' : 'text-[#4B4B4B]'}
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
