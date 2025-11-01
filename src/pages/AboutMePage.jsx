// src/pages/AboutMePage.jsx

// Import necessary components and assets
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpg"; // Your photo
import { FiArrowDown, FiArrowRight } from "react-icons/fi"; // Arrow icons
import { LuSparkle } from "react-icons/lu"; // Sparkle icon
import ExperienceSection from "../components/ExperienceSection"; // <-- Import the new component
import '../index.css';


function AboutMePage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4">
      <div className="flex w-full px-[50px] justify-center items-center gap-[58px] py-10">
        {/* ============================ */}
        {/* === COLUMN 1: YOUR IMAGE === */}
        {/* ============================ */}
        <div
          className="w-[485px] h-[559px] rounded-3xl bg-cover bg-center shadow-lg shrink-0"
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>

        {/* ==================================== */}
        {/* === COLUMN 2: TEXT AND BUTTONS === */}
        {/* ==================================== */}
        <div className="flex w-[456px] flex-col justify-between items-end self-stretch">
          {/* --- Main Content Card --- */}
          {/* This card wraps the main text description. It has a white background, soft corners, and a subtle shadow. */}
          <div className="flex p-4 flex-col justify-center items-start gap-7 self-stretch rounded-3xl bg-[#FAFAFA]">
            {/* --- Header Section ("Hello, I'm Faiz.") --- */}
            <div className="flex-col items-center gap-0.5 self-stretch">
              <h1 className="text-5xl font-bold">
                {/* "Hello," is styled to be blue and italic to match the reference */}
                <span className="nama-faiz text-blue-600 italic font-medium">Hello,</span>
                {/* Your name remains bold and black */}
                <span className="text-black"> I'm Faiz</span>
              </h1>
              <p className="text-lg text-gray-500 mt-1">/fa-eez/</p>
            </div>

            {/* --- Description Paragraphs --- */}
            {/* 'space-y-4' adds vertical spacing between each paragraph for better readability. */}
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p className="font-semibold text-black">
                I am a UI/UX Designer & Frontend Developer based in Indonesia.
              </p>
              <p>
                I design to uncomplicate things and create joy in experiences
                that etch in one's memory. Most importantly, I design to make
                things more human, in a way that empowers.
              </p>
              <p>
                My expertise involves resolving gaps in humans and technology
                through strategic design thinking and shaping perceptions with
                compelling storytelling.
              </p>
            </div>
          </div>

          {/* --- Download Resume Button --- */}
          {/* This is a link styled as a button. The 'download' attribute prompts the browser to download the file. */}
          <div className="flex p-2.5 flex-col items-start self-stretch gap-2.5 rounded-3xl bg-[#FAFAFA]">
            <a
              href="https://docs.google.com/document/d/1MUVU7px2PdNLKCUQPGYkxkPEeKpSIObc74uD_KbiTvE/edit?usp=sharing"
              target="_blank"
              className="
      group flex items-center justify-between w-full p-4 rounded-3xl 
      border border-[#E9E9E9] 
      transition-transform duration-300 ease-in-out 
      hover:scale-[0.98] 
    "
            >
              <div className="flex items-center gap-3">
                <LuSparkle className="text-xl text-pink-500" />
                <span className="font-medium text-[18px] text-black">
                  Download Resume
                </span>
              </div>

              {/* Lingkaran Ikon yang Diperbarui */}
              <div
                className="
        flex items-center justify-center p-4 w-12 h-12 rounded-full 
        border-2 border-[#C9C9C9] 
        transition-all duration-300 ease-in-out 
        group-hover:bg-white group-hover:shadow-lg
      "
              >
                <FiArrowDown className="text-[#969696] text-4xl" />
              </div>
            </a>
          </div>

          {/* --- "Skip to the good part" Button --- */}
          {/* This button is a <Link> from react-router-dom, navigating to your portfolio page. */}
          <Link
            to="/portfolio"
            className="flex h-12 items-center self-end gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-[14px] shadow-lg "
          >
            Skip to the good part
            <FiArrowRight />
          </Link>
        </div>
        {/* --- Experience Section (The new component) --- */}
      </div>
      <ExperienceSection />
    </main>
  );
}

export default AboutMePage;
