import instagram from '../assets/instagram.jpg';
import linked from '../assets/linked.png';
import github from '../assets/github.png';
import { LuSend } from 'react-icons/lu';
import { Skiper40 } from './skiper40';

function Footer() {
  return (
    <footer
      className="
        mb-10 flex flex-col md:flex-row gap-10 md:gap-0 
        h-auto md:h-20 w-full px-6 md:px-8 py-6 
        justify-between items-center 
        rounded-3xl bg-white/70
        shadow-sm border border-gray-200/80
      "
    >
      
      <Skiper40 />

      <div className="flex items-center gap-0">
        {' '}
        <a
          href="https://github.com/faizfznn"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative group w-14 h-16 md:w-16 md:h-16 
            flex justify-center items-center
          "
        >
          <img
            src={github}
            alt="GitHub"
            className="
              relative z-10 
              w-10 h-10 md:w-12 md:h-12 rounded-xl
              transform -rotate-4
              transition-all duration-300
              group-hover:-translate-y-8 md:group-hover:-translate-y-9 group-hover:rotate-10
            "
            width="48"
            height="48"
          />
          <span
            className="
              absolute inset-6 md:inset-8 flex items-center justify-center 
              text-xs md:text-sm text-black font-bold
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-4
            "
          >
            GitHub
          </span>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/faizfznn"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-16 md:w-16 md:h-16 flex justify-center items-center"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="
              relative z-10 
              w-10 h-10 md:w-12 md:h-12 rounded-xl
              transform rotate-13
              transition-all duration-300
              group-hover:-translate-y-8 md:group-hover:-translate-y-9 group-hover:rotate-0
            "
            width="48"
            height="48"
          />
          <span
            className="
              absolute inset-6 md:inset-8 flex items-center justify-center 
              text-xs md:text-sm text-black font-bold
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-4
            "
          >
            Instagram
          </span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammadfaizfauzan"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-16 md:w-16 md:h-16 flex justify-center items-center"
        >
          <img
            src={linked}
            alt="LinkedIn"
            className="
              relative z-10 
              w-10 h-10 md:w-12 md:h-12 rounded-xl
              transform rotate-3
              transition-all duration-300
              group-hover:-translate-y-8 md:group-hover:-translate-y-9 group-hover:rotate-12
            "
            width="48"
            height="48"
          />
          <span
            className="
              absolute inset-6 md:inset-8 flex items-center justify-center 
              text-xs md:text-sm text-black font-bold
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-4
            "
          >
            LinkedIn
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
