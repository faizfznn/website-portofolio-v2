import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import projects from '../data/projects';

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
  const project = projects.find((p) => p.id === id);

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

  if (!project) {
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
      <aside className="lg:col-span-1 sticky top-24 self-start space-y-4">
        <h1 className="text-3xl font-bold mb-4 text-[#0057FF]">
          {project.title}
        </h1>
        <nav className="space-y-2">
          {[
            { label: 'Overview', key: 'overview' },
            { label: 'Visual Decision', key: 'visual' },
            { label: 'Logo', key: 'logo' },
            { label: 'Challenges', key: 'challenges' },
            { label: 'Prototype', key: 'prototype' },
          ].map(({ label, key }) => (
            <a
              href={`#${key}`}
              key={key}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === key
                  ? 'bg-[#0057FF] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <Link
          to="/portfolio"
          className="mt-8 inline-block text-blue-600 underline"
        >
          &larr; Back to Portfolio
        </Link>
      </aside>

      {/* Konten kanan */}
      <section className="lg:col-span-3 space-y-20">
        {/* Gambar hero / hi-fi */}
        <div className="w-full h-72 md:h-96 overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
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
            {project.overview}
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
            {project.visualDecision}
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
            {project.logo}
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
            {project.challenges}
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
            {project.prototype}
          </p>
        </article>
      </section>
    </main>
  );
}