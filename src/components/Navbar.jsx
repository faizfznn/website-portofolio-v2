import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Me', path: '/about' },
  ];

  return (
    <>
      {/* === Ambient Top Blur Layer (blurs any content scrolling beneath the top navbar area) === */}
      <div
        aria-hidden="true"
        className="
          fixed top-0 left-0 right-0 
          h-20 sm:h-24 lg:h-28 
          pointer-events-none z-40
          backdrop-blur-md
          bg-gradient-to-b from-[#fafafa]/85 via-[#fafafa]/45 to-transparent
          [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]
        "
      />

      {/* === Floating Slender Navbar === */}
      <nav
        className="
          fixed z-50 flex justify-center
          top-3 sm:top-4 lg:top-5 left-0 right-0 w-full px-4
        "
      >
        <div
          className="
            flex items-center gap-2 sm:gap-2.5 lg:gap-3 
            w-fit max-w-full
            justify-center
          "
        >
          {/* === Logo (Slender & Proportional) === */}
          <Link
            to="/"
            className="
              flex h-[42px] w-[42px] lg:h-[46px] lg:w-[46px] 
              items-center justify-center rounded-full
              shrink-0
              bg-white/75 hover:bg-white/95
              shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]
              backdrop-blur-xl
              border border-black/[0.08]
              transition-all duration-300 hover:scale-105 active:scale-95
            "
          >
            <img
              src={Logo}
              alt="Logo"
              width="24"
              height="18"
              className="w-[22px] h-[16px] lg:w-[24px] lg:h-[17.5px] object-contain"
            />
          </Link>

          {/* === Navbar Links (Slender & Sleek) === */}
          <div
            className="
              flex items-center justify-center 
              gap-1
              p-1
              rounded-full 
              bg-white/75
              shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]
              backdrop-blur-xl
              border border-black/[0.08]
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `
                  flex h-[32px] lg:h-[36px] px-3.5 sm:px-4 lg:px-5
                  justify-center items-center
                  rounded-full text-[13px] lg:text-[14px] font-medium transition-all duration-300
                  ${
                    isActive
                      ? 'bg-black/[0.06] text-black font-semibold shadow-xs'
                      : 'text-[#4B4B4B] hover:text-black hover:bg-black/[0.03]'
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
