import instagram from "../assets/instagram.jpg";
import linked from "../assets/linked.png";
import twitter from "../assets/twitter.jpg";
import { LuSend } from "react-icons/lu"; // <-- 1. Import ikon untuk email

function Footer() {
  return (
    <footer className="mb-10 flex flex-col md:flex-row gap-12 md:gap-0 h-auto md:h-28 w-full px-8 py-6 justify-between items-center rounded-4xl bg-[#F2F2F2]">
      {/* Email Section */}
      <div className="flex items-center gap-3">
        <LuSend className="w-7 h-7 text-black" /> {/* <-- 2. Ikon ditambahkan */}
        <p className="text-black text-center text-2xl md:text-3xl font-medium">
          faiz150605@gmail.com
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-8">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/faizfznn"
          target="_blank"
          rel="noopener noreferrer"
          // --- 1. Container dibuat 'relative' dan diberi ukuran ---
          className="relative group w-16 h-16 md:w-20 md:h-20 flex justify-center items-center"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="
              relative z-10 // <-- 2. Gambar diberi z-index agar di atas
              w-16 h-16 md:w-20 md:h-20 rounded-3xl
              transform rotate-[13deg]
              transition-all duration-300
              group-hover:-translate-y-9 group-hover:rotate-0
            "
          />
          <span
            className="
              absolute inset-8 flex items-center justify-center 
              text-sm text-black font-medium
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-10
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
          className="relative group w-16 h-16 md:w-20 md:h-20 flex justify-center items-center"
        >
          <img
            src={linked}
            alt="LinkedIn"
            className="
              relative z-10 
              w-16 h-16 md:w-20 md:h-20 rounded-3xl
              transform rotate-3
              transition-all duration-300
              group-hover:-translate-y-9 group-hover:rotate-12
            "
          />
          <span
            className="
              absolute inset-8 flex items-center justify-center 
              text-sm text-black font-medium
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-10
            "
          >
            LinkedIn
          </span>
        </a>

        {/* Twitter */}
        <a
          href="https://www.twitter.com/faizfznn"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-16 h-16 md:w-20 md:h-20 flex justify-center items-center"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="
              relative z-10
              w-16 h-16 md:w-20 md:h-20 rounded-3xl
              transform -rotate-6
              transition-all duration-300
              group-hover:-translate-y-9 group-hover:rotate-4
            "
          />
          <span
            className="
              absolute inset-8 flex items-center justify-center 
              text-sm text-black font-medium
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              mt-10
            "
          >
            Twitter
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;