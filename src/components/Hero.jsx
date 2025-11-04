// src/components/Hero.jsx

import { Link } from "react-router-dom"; // Import Link
import aboutImage from "../assets/about.jpg";
import indoFlag from "../assets/bendera.png";
import stars from "../assets/stars.png";

// Terima prop onGetInTouchClick
const Hero = ({ onGetInTouchClick }) => {
  return (
    <section className="flex w-full px-[50px] h-fit justify-center items-center gap-[138px]">
      {/* === Bagian Kiri === */}
      <div className="flex flex-col items-start gap-12">
        <div className="w-[646px]">
          <h1
            className="text-5xl font-normal text-black leading-14"
            style={{ fontFamily: '"Lato", sans-serif' }}
          >
            Crafting seamless digital experiences, from pixel to code.{" "}
          </h1>
        </div>

        <div className="flex items-start gap-2">
          {/* === Tombol Get in Touch (diarahkan ke fungsi scroll) === */}
          <button
            onClick={onGetInTouchClick} // Tambahkan onClick di sini
            className="relative group flex w-fit h-[56px] px-10 justify-center items-center rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.2)] text-white text-[16px] font-normal bg-gradient-to-b from-[#323232] to-[#000000] shadow-[inset_0_0_8px_0_#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]"
          >
            <img
              src={stars}
              alt="stars"
              className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 animate-[spin_7s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none"
            />
            <span className="relative z-10">Get in touch</span>
          </button>

          {/* === Tombol See Portfolio (diubah menjadi Link) === */}
          <Link
            to="/portfolio"
            className="relative w-fit h-[56px] px-10 rounded-full border-[1px] border-[#CAD3DC] bg-white text-black text-[16px] font-normal group inline-flex items-center justify-center"
          >
            <span className="relative inline-block overflow-hidden h-[1.2em]">
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                See portfolio
              </span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                See portfolio
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* === CARD KANAN (Tidak ada perubahan) === */}
      <div
        className="inline-flex p-4 flex-col items-center gap-2 border border-white shadow-[0_0_40px_0_rgba(0,0,0,0.03)] transition-transform duration-500 ease-in-out hover:rotate-2 hover:translate-x-3 hover:scale-105 cursor-pointer"
        style={{
          borderRadius: "44px 44px 28px 28px",
          background: "rgba(242, 244, 246, 0.5)",
          transform: "rotate(3deg)",
        }}
      >
        <div
          className="w-[200px] h-[200px] rounded-[28px] bg-cover bg-center shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
        <div className="h-12 flex p-4 gap-2 justify-center items-center bg-white rounded-full self-stretch">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2A9F47]"></span>
          </span>
          <span className="text-[14px] text-[#2A9F47] font-normal">
            Available for freelance
          </span>
        </div>
        <div className="h-12 flex p-4 gap-2 justify-center items-center bg-white rounded-full self-stretch">
          <img
            src={indoFlag}
            alt="Indonesian Flag"
            className="w-5 h-5 rounded-sm object-cover"
          />
          <span className="text-[14px] text-black font-normal">
            Malang, Indonesia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
