import instagram from "../assets/instagram.jpg";
import linked from "../assets/linked.png";
import twitter from "../assets/twitter.jpg";
import { LuSend } from "react-icons/lu";

function Footer() {
  return (
    <footer className="mb-10 flex flex-col md:flex-row gap-12 md:gap-0 h-auto md:h-20 w-full px-8 py-6 justify-between items-center rounded-3xl bg-[#F2F2F2]">
      
      {/* --- Email Section (Diperbarui) --- */}
      {/* 1. Mengubah <div> menjadi <a> */}
      <a
        href="mailto:faiz150605@gmail.com" // <-- 2. Menambahkan href mailto:
        className="flex items-center gap-3 transition-opacity hover:opacity-75" // <-- 3. Menambahkan hover effect
      >
        <LuSend className="w-6 h-6 text-black" />
        <p className="text-lg font-semibold text-black">
          faiz150605@gmail.com
        </p>
      </a>

      {/* Social Media Icons */}
      <div className="flex items-center gap-1">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/faizfznn"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-16 h-16 flex justify-center items-center"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="
              relative z-10 
              w-12 h-12 rounded-xl
              transform rotate-13
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
          className="relative group w-16 h-16 flex justify-center items-center"
        >
          <img
            src={linked}
            alt="LinkedIn"
            className="
              relative z-10 
              w-12 h-12 rounded-xl
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
              mt-4
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
          className="relative group w-16 h-16 flex justify-center items-center"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="
              relative z-10
              w-12 h-12 rounded-xl
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
              mt-4
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