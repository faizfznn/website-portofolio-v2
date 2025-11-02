// src/pages/AboutMePage.jsx

// Import necessary components and assets
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpg"; // Your photo
import midnight from "../assets/midnight.png"; // Album cover
import juara from "../assets/juara.png"; // Album cover
import { FiArrowDown, FiArrowRight } from "react-icons/fi"; // Arrow icons
import { LuSparkle } from "react-icons/lu"; // Sparkle icon
import ExperienceSection from "../components/ExperienceSection"; // <-- Import the new component
import EducationSection from "../components/EducationSection";
import { AlbumProvider, useAlbumContext } from "../components/AlbumContext";
import Album from "../components/Album";

import "../index.css";

function AboutMePage() {
  const { currentPlayingId } = useAlbumContext();
  const album1Id = "taylor-swift-red";
  const album2Id = "taylor-swift-maroon";
  const isFirstAlbumPlaying = currentPlayingId === album1Id;
  const recognitions = [
    {
      title: "UXplorer 2019, Silver Award",
      description:
        "Designed a fuel inflow meter with a digital interface aimed to curb malpractices at gas stations in India.",
    },
    {
      title: "UXplorer 2019, Silver Award",
      description:
        "Designed a fuel inflow meter with a digital interface aimed to curb malpracticedesi gas stations in India.",
    },
    {
      title: "UXplorer 2019, Silver Award",
      description:
        "Designed a fuel inflow meter with a digital interface aimed to curb malpractices at gas stations in India.",
    },
    {
      title: "UXplorer 2019, Silver Award",
      description:
        "Designed a fuel inflow meter with a digital interface aimed to curb malpractices at gas stations in India.",
    },
  ];
  return (
    <main className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
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
                <span className="font2 text-[#0057FF] italic font-medium">
                  Hello,
                </span>
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
          <a
            href="#music-section"
            className="flex h-12 items-center self-end gap-2 px-6 py-3 bg-[#0057FF] text-white font-semibold rounded-[14px] shadow-lg scroll-smooth"
          >
            Skip to the good part
            <FiArrowRight />
          </a>
        </div>
        {/* --- Experience Section (The new component) --- */}
      </div>
      <div className="flex flex-col w-full items-start gap-8">
        <div className="flex flex-col w-full items-start gap-8 self-stretch">
          <div className="flex items-center gap-8 self-stretch">
            <div className="flex w-[324px] p-4 flex-col items-start gap-6 rounded-3xl bg-[#FAFAFA]">
              <div className="flex flex-col items-start leading-tight">
                <span className="font2 text-[#0057FF] text-[32px] font-normal italic">
                  Some
                </span>
                <span className="text-black text-[32px] font-normal">
                  Recognition
                </span>
              </div>

              <p className="self-stretch text-black text-[16px] font-normal">
                Not many, but a few competitions I participated and won
                recognition for my work.
              </p>
            </div>
            <div className="flex h-full p-4 justify-center items-center gap-6 rounded-3xl bg-[#FAFAFA]">
              {recognitions.map((rec, idx) => (
                <div key={idx} className="rounded-2xl p-6 ">
                  <h4 className="font-semibold text-lg text-black">
                    {rec.title}
                  </h4>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex h-16 p-4 justify-center items-center gap-6 self-stretch rounded-3xl bg-[#FAFAFA]">
            <p className="text-black text-[16px] font-medium">And Many More</p>
          </div>
        </div>
        <div className="flex h-[440px] items-center gap-6 self-stretch">
          <div
            className="flex flex-col items-center self-stretch rounded-3xl w-full h-[439px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${juara})`,
            }}
          ></div>
        </div>
      </div>

      <ExperienceSection />
      <EducationSection />

      <section
        id="music-section"
        className="flex w-full items-center gap-8 mb-32"
      >
        <div className="flex w-[324px] h-48 p-4 flex-col items-start gap-6 rounded-3xl bg-[#FAFAFA]">
          {/* ... (Teks "My Love for Music") ... */}
          <div className="flex flex-row items-start leading-tight">
            <span className="font2 text-[#0057FF] text-[32px] font-normal italic">
              My Love
            </span>
            <span className="text-[#FAFAFA]">a</span>
            <span className="text-black text-[32px] font-normal">
              for Music
            </span>
          </div>
          <p className="self-stretch text-black text-[16px] font-normal">
            I think a good designer is a good observer. When I am free, I
            explore the world, observe and document experiences.
          </p>
        </div>

        {/* Album 1 (Kiri) */}
        <Album
          id={album1Id} // <-- 5. Berikan ID
          albumCover={aboutImage}
          albumTitle="Red (Taylor's Version)"
          artist="Taylor Swift"
          musicFile="/audio/taylor-swift.mp3"
          size="md"
        />

        {/* 6. Bungkus Album 2 (Kanan) dengan <div> untuk animasi */}
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{
            // Terapkan pergeseran HANYA jika album pertama sedang diputar
            transform: isFirstAlbumPlaying
              ? "translateX(40%)"
              : "translateX(0)",
          }}
        >
          <Album
            id={album2Id} // <-- 5. Berikan ID
            albumCover={midnight}
            albumTitle="Maroon" // Judul diubah agar ID unik
            artist="Taylor Swift"
            musicFile="/about-me/songs/maroon.mp3"
            size="md"
            startTime={40} // Prop dari permintaan sebelumnya
          />
        </div>
      </section>
    </main>
  );
}

export default AboutMePage;
