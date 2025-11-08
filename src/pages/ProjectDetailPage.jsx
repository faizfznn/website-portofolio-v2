// src/pages/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import portfolioProjects from "../data/portfolioProjects.js";
import projectDetails from "../data/projectDetails.js";
import Reveal from "../components/Reveal";
import Sidebar from "../components/Sidebar"; // Impor sidebar

/**
 * Komponen InfoRow (Tidak berubah)
 */
const InfoRow = ({ label, children }) => (
  <div className="flex flex-col md:flex-row border-b border-gray-200 py-4">
    <span className="w-full md:w-1/4 font-semibold text-gray-500 mb-2 md:mb-0">
      {label}
    </span>
    <div className="w-full md:w-3/4 text-black">{children}</div>
  </div>
);

/**
 * Komponen Problems/Solutions Card (Tidak berubah)
 */
const ProblemSolutionCard = ({
  number,
  title,
  description,
  isDarkMode = false,
}) => (
  <div
    className={`p-6 rounded-2xl h-full ${
      isDarkMode
        ? "bg-gray-900 text-white"
        : "bg-white text-black border-2 border-gray-100"
    }`}
  >
    <span
      className={`block text-sm font-semibold ${
        isDarkMode ? "text-gray-400" : "text-gray-500"
      }`}
    >
      {number}
    </span>
    <h4 className="text-xl font-semibold mt-2 mb-3">{title}</h4>
    <p
      className={`text-sm leading-relaxed ${
        isDarkMode ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {description}
    </p>
  </div>
);

/**
 * Halaman Detail Proyek
 */
export default function ProjectDetailPage() {
  const { id } = useParams();
  const portfolioProject = portfolioProjects.find((p) => p.id === id);
  const detail = projectDetails[id];

  if (!portfolioProject || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-gray-600 mt-[92px]">
        <h2 className="text-3xl font-semibold mb-4">Project not found</h2>
        <Link to="/portfolio" className="text-black underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }
  // --- FUNGSI HELPER BARU UNTUK GRID DINAMIS ---
  // Fungsi ini akan mengembalikan kelas grid yang benar berdasarkan jumlah item
  const getGridColsClass = (count) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"; // Default jika 4 atau lebih
  };

  // Grid khusus untuk Components & Icons dengan lebih banyak kolom
  const getComponentsGridClass = (count) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"; // Default jika 4 atau lebih
  };

  const designSystemGridClass = getComponentsGridClass(
    detail.designSystemImages.length
  );
  const logoGridClass = getGridColsClass(detail.logoImages.length);

  return (
    <main
      className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-[92px]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* === Sidebar Kiri === */}
      <aside
        className="
          lg:col-span-1 
          lg:sticky 
          lg:top-1/2 /* Posisikan 50% dari atas viewport */
          lg:-translate-y-1/2 /* Tarik ke atas 50% dari tingginya sendiri */
          self-start 
        "
      >
        <Sidebar />
        <Link
          to="/portfolio"
          className="mt-8 inline-block text-[14px] text-gray-500 hover:text-black transition-colors"
        >
          Back to Portfolio
        </Link>
      </aside>

      {/* === Konten Kanan === */}
      <section className="lg:col-span-3 space-y-20">
        {/* Gambar Hero */}
        <Reveal>
          <div className="w-full h-auto md:h-[500px] overflow-hidden rounded-3xl bg-[#FAFAFA]">
            <img
              src={portfolioProject.image}
              alt={portfolioProject.appName}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* --- Overview --- */}
        <Reveal>
          <article id="overview" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-4">Overview</h2>
            <div className="border-t border-gray-200">
              <InfoRow label="Deskripsi">
                <p className="text-base text-gray-700 leading-relaxed">
                  {detail.overview}
                </p>
              </InfoRow>
              <InfoRow label="Team">
                {/* --- TOMBOL TIM INTERAKTIF (BARU) --- */}
                <div className="flex -space-x-2">
                  {detail.team.map((member, i) => (
                    <a
                      key={i}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group" // Tambahkan group
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        title={member.name} // Tooltip bawaan browser
                        className="w-10 h-10 rounded-full border-2 border-white object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Kartu Nama saat Hover */}
                      <span
                        className="
                          absolute w-max max-w-xs left-1/2 top-full mt-2 -translate-x-1/2 
                          bg-white rounded-xl shadow-md p-3 
                          opacity-0 transition-opacity duration-200 
                          pointer-events-none group-hover:opacity-100
                        "
                      >
                        {member.name}
                      </span>
                    </a>
                  ))}
                </div>
              </InfoRow>
              <InfoRow label="My Role">
                <ul className="list-disc pl-5 space-y-1">
                  {detail.role.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow label="Timeline">
                <p>{detail.timeline}</p>
              </InfoRow>
            </div>
          </article>
        </Reveal>

        {/* --- Bagian Problems (BARU) --- */}
        <Reveal>
          <article id="problems" className=" text-black scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-6">Problems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detail.problems.map((item, i) => (
                <ProblemSolutionCard
                  key={i}
                  number={`0${i + 1}`}
                  title={item.title}
                  description={item.description}
                  isDarkMode={true}
                />
              ))}
            </div>
          </article>
        </Reveal>

        {/* --- Bagian Solutions (BARU) --- */}
        <Reveal>
          <article id="solutions" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detail.solutions.map((item, i) => (
                <ProblemSolutionCard
                  key={i}
                  number={`0${i + 1}`}
                  title={item.title}
                  description={item.description}
                  isDarkMode={false}
                />
              ))}
            </div>
          </article>
        </Reveal>

        {/* --- Design System (DIPERBARUI) --- */}
        <Reveal>
          <article id="design-system" className="scroll-mt-24 flex flex-col">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Design System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Color Palette */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Color Palette</h3>
                <div className="flex flex-wrap gap-4">
                  {detail.colors.map((color) => (
                    <div key={color.hex}>
                      <div
                        className="w-16 h-16 rounded-lg border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-sm font-mono mt-1">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Typography */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Typography</h3>
                <p
                  className="text-5xl font-bold mb-1"
                  style={{ fontFamily: detail.typography.fontFamily }}
                >
                  Aa
                </p>
                <p className="text-lg font-semibold mb-2">
                  {detail.typography.fontFamily}
                </p>
                <p className="text-base text-gray-700">
                  {detail.typography.description}
                </p>
              </div>
            </div>

             {/* === Frame Grid Tambahan (DIPERBARUI) === */}
             <div className="mt-8 flex flex-col">
               <h3 className="text-xl font-semibold mb-6">Components & Icons</h3>
               <div className={`grid ${designSystemGridClass} gap-6`}>
                 {detail.designSystemImages.map((imgSrc, i) => (
                   <div
                     key={i}
                     className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 aspect-[4/3]"
                   >
                     <img
                       src={imgSrc}
                       alt={`Design System ${i + 1}`}
                       className="w-full h-full object-contain p-4"
                     />
                   </div>
                 ))}
               </div>
             </div>
          </article>
        </Reveal>

        {/* --- Logo (DIPERBARUI) --- */}
        <Reveal>
          <article
            id="logo"
            className="scroll-mt-24 flex flex-col"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">Logo</h2>

            {/* Menggunakan kelas grid dinamis */}
            <div className={`grid ${logoGridClass} gap-8`}>
              {detail.logoImages.map((logo) => (
                <div key={logo.label} className="flex flex-col items-center group">
                  <div
                    className={`flex justify-center items-center w-full aspect-square rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                      logo.label.includes("Dark") ? "bg-black" : "bg-white border border-gray-200"
                    }`}
                    style={{ minHeight: "200px" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.label}
                      className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-700 text-center">{logo.label}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        {/* --- Design Result (Bento Grid) --- */}
        <Reveal>
          <article id="design-result" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Design Result
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative">
                <img
                  src={detail.bentoImages[0]}
                  alt="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                <img
                  src={detail.bentoImages[1]}
                  alt="Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                <img
                  src={detail.bentoImages[2]}
                  alt="Design 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        </Reveal>

        {/* --- Prototype (DIPERBARUI) --- */}
        <Reveal>
          <article id="prototype" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Prototype
            </h2>
            {/* Wrapper untuk membatasi lebar iframe agar terlihat seperti ponsel */}
            <div className="w-full overflow-hidden rounded-3xl border border-gray-200">
              <iframe
                style={{ border: "1px solid" }}
                width="100%"
                height="600"
                src={detail.figmaLink}
                allowFullScreen
              ></iframe>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
