// src/pages/HomePage.jsx

import { useRef } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard.jsx";
import works from "../data/workProjects.js";
import aboutImg from "../assets/about.jpg";
import pinImg from "../assets/pin.png";
import handshake from "../assets/handshake.png";
import clipImg from "../assets/clip.png";
import powerImg from "../assets/power.png";
import signImg from "../assets/sign.png";
import ungu from "../assets/gradient.png";
import bintang from "../assets/bintang.png";
import stars from "../assets/stars.png";
import '../index.css';


import { SiJavascript, SiFigma, SiKotlin, SiReact } from "react-icons/si";

function HomePage() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
  ];
  const displayedProjects = works;

  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <Hero onGetInTouchClick={handleScrollToContact} />
      {/* Selected Work Section */}
      <section className="mt-40 mb-24">
        <div className="mb-4">
          <h1 className="">
            {/* Bagian '/' dibuat lebih tipis dan abu-abu */}
            <span className="font-bold text-4xl">/</span>
            {/* Bagian 'PORTFOLIO' dibuat bold dan diberi spasi antar huruf (tracking)
            'ml-2' memberi sedikit jarak dari '/'
          */}
            <span className="text-3xl font-bold"> Selected Work</span>
          </h1>
        </div>
        {/* Grid for selected projects. On medium screens and above, two columns
                  are used. The first and last items span both columns to create
                  visual rhythm. */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {displayedProjects.map((works, index) => {
            const isFirst = index === 0;
            const isLast = index === displayedProjects.length - 1;
            // Apply full-width span on medium+ screens for first and last items
            const colSpanClass =
              isFirst || isLast ? "h-[645px] md:col-span-2" : "";
            return (
              <div key={works.id} className={`${colSpanClass}`}>
                <ProjectCard project={works} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian Iam Faiz */}

      <div>
        <h3
          className="text-3xl font-semibold mb-6"
          // style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          Hello, I&apos;m Faiz
        </h3>
        {/* Introduction & Collaboration Section */}
        <section className="mb-12 flex flex-row items-start gap-12">
          {/* Left Side: Intro & Collage */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Kolase Gambar */}
            <div className="relative flex space-x-2 md:space-x-4 mb-6">
              <div className="flex w-fit justify-between items-center -space-x-10">
                <img
                  className="w-40 h-40 bg-cover bg-center rounded-3xl border-3 border-white rotate-4 shrink-0"
                  style={{ backgroundImage: `url(${aboutImg})` }}
                />
                <img
                  className="w-40 h-40 bg-cover bg-center rounded-3xl border-3 border-white -rotate-4 shrink-0"
                  style={{ backgroundImage: `url(${aboutImg})` }}
                />
                <img
                  className="w-40 h-40 bg-cover bg-center rounded-3xl border-3 border-white rotate-3 shrink-0"
                  style={{ backgroundImage: `url(${aboutImg})` }}
                />
                <img
                  className="w-40 h-40 bg-cover bg-center rounded-3xl border-3 border-white shrink-0"
                  style={{ backgroundImage: `url(${aboutImg})` }}
                />
              </div>
              {/* Lightning icon overlay */}
              <img
                src={powerImg}
                alt=""
                className="absolute -top-15 -right-15 w-2- h-2- rotate-10 animate-slide-slow"
              />
            </div>

            {/* Deskripsi */}
            <div className="flex inline-flex justify-center p-4 items-center gap-6 rounded-3xl bg-[#FAFAFA] mb-4">
              <img
                src={pinImg}
                alt=""
                className="absolute top-700 left-10 w-20 h-20"
              />
              <p className="text-black">
                <span className="font-semibold">
                  I am a Product Designer based in Indonesia.
                </span>{" "}
                I design to uncomplicate things and create joy in experiences
                that etch in one&apos;s memory. Most importantly, I design to
                make things more human, in a way that empowers.
              </p>
              <img
                src={clipImg}
                alt=""
                className="absolute -bottom-633 right-157 w-25 h-25"
              />
            </div>

            <div className="flex w-[528px] items-start gap-4 justify-start">
              {/* Lokasi & Waktu */}
              <div className="flex h-fit flex-col justify-center p-4 h-[100px] rounded-3xl bg-[#FAFAFA]">
                <div className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">📍</span>
                    <span className="text-black font-medium">
                      Malang, Indonesia
                    </span>
                  </div>
                  <span className="text-sm ml-9">
                    {new Date().toLocaleTimeString("id-ID", {
                      timeZone: "Asia/Jakarta",
                    })}
                  </span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 w-full max-w-[300px]">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-2xl border border-[#E4E9ED] bg-white text-black"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Collaboration Card */}
          <div className="w-full" ref={contactRef}>
            <div className="relative w-full h-[412px] rounded-[32px] p-10 bg-black text-white flex flex-col items-center text-center overflow-hidden">
              {/* === Background Glow Layer === */}
              <div className="absolute inset-0 flex justify-center items-center">
                {/* Gradient (lapisan bawah) */}
                <img
                  src={ungu}
                  alt="gradient"
                  className="absolute h-[400px] opacity-90 blur-3xl"
                />
                {/* Bintang (lapisan atas) */}
                <img
                  src={bintang}
                  alt="bintang"
                  className="absolute w-[300px] h-[300px] animate-[spin_7s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none"
                />
              </div>

              {/* === Konten === */}
              <h3 className="relative text-4xl font-bold flex items-center gap-3 mb-3 z-10">
                Let&apos;s collaborate
                <img
                  src={handshake}
                  alt="Handshake"
                  className="w-10 inline-block animate-bounce-slow"
                />
              </h3>

              <p className="relative text-base text-gray-200 mb-8 z-10">
                Write me an email and I will respond within 1 business day
              </p>

              {/* Email + Copy button */}
              <div className="relative w-full max-w-md mb-3 mt-4 z-10">
                <div className="flex items-center justify-between rounded-3xl px-2 py-2 border border-[#FFFFFF]/30 bg-black/40 backdrop-blur-sm">
                  <span className="px-4 py-3 text-left text-white">
                    faiz150605@gmail.com
                  </span>
                  {/* === Tombol Get in Touch (diarahkan ke fungsi scroll) === */}
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText("faiz150605@gmail.com")
                    }
                    className="relative group flex w-fit h-[48px] px-8 justify-center items-center rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.3)] text-white text-[16px] font-normal bg-gradient-to-b from-[#323232] to-[#000000] shadow-[inset_0_0_8px_0_#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:shadow-[inset_0_10px_29.1px_0_rgba(255,255,255,0.4)]"
                  >
                    <img
                      src={stars}
                      alt="stars"
                      className="absolute left-1/2 top-1/2 w-[600%] h-[600%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 animate-[spin_7s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none"
                    />
                    <span className="relative z-10">Copy</span>
                  </button>
                </div>
              </div>

              {/* Contact text with hand-drawn style */}
              <div className="relative flex flex-col items-center mt-10 z-10">
                <p className="font3 text-sm text-gray-300 mb-1">
                  or contact me
                </p>
                <p className="font3 text-sm text-gray-300 mb-1">
                  in social media
                </p>
                <img
                  src={signImg}
                  alt=""
                  className="absolute -bottom-13 right-5 w-10 h-10"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
