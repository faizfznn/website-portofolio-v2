// src/pages/ProjectDetailPage.jsx
import { useParams, Link } from "react-router-dom";
// 1. Hapus hook yang tidak perlu (sudah pindah ke Sidebar.jsx)
// import { useEffect, useRef, useState } from 'react';
import portfolioProjects from "../data/portfolioProjects.js";
import projectDetails from "../data/projectDetails.js";
import Reveal from "../components/Reveal";
import Sidebar from "../components/Sidebar"; // <-- 2. Impor sidebar baru Anda

// 3. Hapus const SECTIONS (sudah pindah ke Sidebar.jsx)

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
 * Halaman Detail Proyek
 */
export default function ProjectDetailPage() {
  const { id } = useParams();
  const portfolioProject = portfolioProjects.find((p) => p.id === id);
  const detail = projectDetails[id];

  // 4. Hapus semua logika state, ref, dan effect untuk sidebar
  // (Sekarang ditangani di dalam Sidebar.jsx)

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

  return (
    <main
      className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-[92px]"
      style={{ fontFamily: '"Inter", sans-serif' }} // Sesuai permintaan style
    >
      {/* === Sidebar Kiri (Diperbarui) === */}
      <aside
        className="
          lg:col-span-1 
          lg:sticky 
          lg:top-1/2 /* 5. Posisikan 50% dari atas viewport */
          lg:-translate-y-1/2 /* 6. Tarik ke atas 50% dari tingginya sendiri */
          self-start 
        "
      >

        {/* 7. Render komponen sidebar baru (tanpa props 'sections') */}
        <Sidebar />

        <Link
          to="/portfolio"
          className="mt-8 inline-block text-[14px] text-gray-500 hover:text-black transition-colors"
        >
          Back to Portfolio
        </Link>
      </aside>

      {/* === Konten Kanan === */}
      {/* 8. Pastikan setiap <article> memiliki 'id' dan 'scroll-mt' */}
      <section className="lg:col-span-3 space-y-16">
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
                <div className="flex -space-x-2">
                  {detail.team.map((member, i) => (
                    <img
                      key={i}
                      src={member.image}
                      alt={member.name}
                      title={member.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
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

        {/* --- Design System --- */}
        <Reveal>
          <article
            id="design-system"
            className="scroll-mt-24"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">
              Design System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </article>
        </Reveal>

        {/* --- Logo --- */}
        <Reveal>
          <article
            id="logo"
            className="rounded-3xl scroll-mt-24"
          >
            <h2 className="text-3xl font-semibold text-black mb-6">Logo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detail.logoImages.map((logo) => (
                <div key={logo.label} className="flex flex-col items-center">
                  <div
                    className={`flex justify-center items-center w-full h-40 rounded-xl ${
                      logo.label.includes("Dark") ? "bg-black" : "bg-white"
                    }`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.label}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{logo.label}</p>
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
              {detail.bentoImages[0] && (
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative">
                  <img
                    src={detail.bentoImages[0]}
                    alt="Design 1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              {detail.bentoImages[1] && (
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                  <img
                    src={detail.bentoImages[1]}
                    alt="Design 2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              {detail.bentoImages[2] && (
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                  <img
                    src={detail.bentoImages[2]}
                    alt="Design 3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          </article>
        </Reveal>

        {/* --- Prototype --- */}
        <Reveal>
          <article id="prototype" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Prototype
            </h2>
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

