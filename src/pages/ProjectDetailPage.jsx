import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import portfolioProjects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js';

/**
 * Halaman detail proyek.
 * Menampilkan konten lengkap sebuah project berdasarkan ID dari URL.
 * Memiliki sidebar sticky yang menyorot bagian aktif saat scroll
 * dan navigasi anchor ke setiap section (Overview, Visual Decision, Logo, Challenges, Prototype).
 *
 * Struktur grid responsif memastikan sidebar dan konten tetap sejajar
 * di desktop dan menumpuk di mobile. Warna dan tipografi mengikuti
 * theme biru (#0057FF) dan font Bricolage Grotesque.
 */
export default function ProjectDetailPage() {
  const { id } = useParams();
  // Cari data project untuk tampilan umum dan detailnya
  const portfolioProject = portfolioProjects.find((p) => p.id === id);
  const detail = projectDetails[id];

  // Aktif section untuk sidebar
  const [activeSection, setActiveSection] = useState('overview');

  // Refs ke setiap section konten
  const sectionRefs = {
    overview: useRef(null),
    visual: useRef(null),
    logo: useRef(null),
    challenges: useRef(null),
    prototype: useRef(null),
  };

  // Gunakan IntersectionObserver untuk menentukan section aktif
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, options);
    // Observe semua section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  if (!portfolioProject || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-gray-600">
        <h2 className="text-3xl font-semibold mb-4">Project not found</h2>
        <Link to="/portfolio" className="text-blue-600 underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main
      className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-8"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Sidebar kiri */}
      <aside
        className="lg:col-span-1 lg:sticky lg:top-1/2 lg:-translate-y-1/2 self-start flex flex-col items-start gap-6"
      >
        {/* Judul proyek */}
        <h1
          className="text-2xl md:text-3xl font-bold"
          style={{ color: '#0057FF' }}
        >
          {portfolioProject.appName || portfolioProject.title}
        </h1>
        {/* Navigasi sections */}
        <ul className="relative space-y-6 mt-2">
          {/* Garis vertikal untuk indikator daftar */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
          {[
            { label: 'Overview', key: 'overview' },
            { label: 'Visual Decision', key: 'visual' },
            { label: 'Logo', key: 'logo' },
            { label: 'Challenges', key: 'challenges' },
            { label: 'Prototype', key: 'prototype' },
          ].map(({ label, key }) => {
            const active = activeSection === key;
            return (
              <li key={key} className="relative pl-6">
                <a
                  href={`#${key}`}
                  className="flex items-center text-base font-medium"
                >
                  {/* Lingkaran indikator */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full transition-colors ${
                      active ? 'bg-[#0057FF]' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  ></span>
                  <span
                    className={`ml-3 transition-colors ${
                      active
                        ? 'text-[#0057FF]'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <Link
          to="/portfolio"
          className="mt-8 inline-block text-[#0057FF] underline"
        >
          &larr; Back to Portfolio
        </Link>
      </aside>

      {/* Konten kanan */}
      <section className="lg:col-span-3 space-y-20">
        {/* Gambar hero / hi-fi */}
        <div className="w-full h-72 md:h-96 overflow-hidden rounded-3xl">
          <img
            src={portfolioProject.image}
            alt={portfolioProject.appName || portfolioProject.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overview */}
        <article
          id="overview"
          ref={sectionRefs.overview}
          className="space-y-4 scroll-mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Overview
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {detail.overview}
          </p>
        </article>

        {/* Visual Decision */}
        <article
          id="visual"
          ref={sectionRefs.visual}
          className="space-y-4 scroll-mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Visual Decision
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {detail.visualDecision}
          </p>
        </article>

        {/* Logo */}
        <article
          id="logo"
          ref={sectionRefs.logo}
          className="space-y-4 scroll-mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Logo
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {detail.logo}
          </p>
        </article>

        {/* Challenges */}
        <article
          id="challenges"
          ref={sectionRefs.challenges}
          className="space-y-4 scroll-mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Challenges
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {detail.challenges}
          </p>
        </article>

        {/* Prototype */}
        <article
          id="prototype"
          ref={sectionRefs.prototype}
          className="space-y-4 scroll-mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Prototype
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {detail.prototype}
          </p>
        </article>
      </section>
    </main>
  );
}