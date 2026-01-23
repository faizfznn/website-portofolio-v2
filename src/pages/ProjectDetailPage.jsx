import { useParams, Link, useLocation } from 'react-router-dom';
import { HiChevronLeft, HiExternalLink } from 'react-icons/hi';
import portfolioProjects from '../data/portfolioProjects.js';
import projectDetails from '../data/projectDetails.js';
import Reveal from '../components/Reveal';
import Sidebar from '../components/Sidebar';
import NotFoundPage from './NotFoundPage.jsx';

// --- Sub Components (InfoRow, Card) Tetap Sama ---
const InfoRow = ({ label, children }) => (
  <div className="flex flex-col md:flex-row border-b border-gray-200 py-4">
    <span className="w-full md:w-1/4 font-semibold text-gray-500 mb-2 md:mb-0">
      {label}
    </span>
    <div className="w-full md:w-3/4 text-black">{children}</div>
  </div>
);

const ProblemSolutionCard = ({
  number,
  title,
  description,
  isDarkMode = false,
}) => (
  <div
    className={`p-6 rounded-2xl h-full ${
      isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black border-2 border-gray-100'
    }`}
  >
    <span
      className={`block text-sm font-semibold ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}
    >
      {number}
    </span>
    <h4 className="text-xl font-semibold mt-2 mb-3">{title}</h4>
    <p
      className={`text-sm leading-relaxed ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}
    >
      {description}
    </p>
  </div>
);

const RevealText = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ParallaxImage = ({ src, alt, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        style={{ y, scale: 1.1 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const CopyColor = ({ hex, name }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col items-center gap-3 relative"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden ring-1 ring-black/5">
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
          style={{ backgroundColor: hex }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {copied ? (
            <FiCheck className="text-3xl text-white mix-blend-difference" />
          ) : (
            <FiCopy className="text-3xl text-white mix-blend-difference" />
          )}
        </div>
      </div>
      <div className="text-center">
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
          {name}
        </p>
        <p className="font-medium text-gray-900">{hex}</p>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-2 px-3 rounded-lg shadow-lg whitespace-nowrap z-20 pointer-events-none"
          >
            Copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const isFromHome = location.state?.from === 'home';
  const backPath = isFromHome ? '/' : '/portfolio';
  const backLabel = isFromHome ? 'Home' : 'Portfolio';

  const portfolioProject = portfolioProjects.find((p) => p.id === id);
  const detail = projectDetails[id];

  if (!portfolioProject || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-gray-600 mt-[92px]">
        <NotFoundPage />
      </div>
    );
  }

  // --- LOGIKA PENGECEKAN DATA & PENGELOMPOKAN ---

  // 1. Group: PROBLEMS & SOLUTIONS
  const hasProblems = detail.problems && detail.problems.length > 0;
  const hasSolutions = detail.solutions && detail.solutions.length > 0;
  const showChallenge = hasProblems || hasSolutions; // Tampil jika salah satu ada

  // 2. Group: DESIGN SYSTEM & LOGO
  const isDummyColor = detail.colors?.[0]?.hex === '#2C3E50';
  const hasColors = detail.colors && detail.colors.length > 0 && !isDummyColor;
  const hasTypography = detail.typography && detail.typography.fontFamily;
  const hasDesignImages =
    detail.designSystemImages && detail.designSystemImages.length > 0;
  const showDesignSystemContent = hasColors || hasTypography || hasDesignImages;

  const showLogoContent = detail.logoImages && detail.logoImages.length > 0;
  const showVisuals = showDesignSystemContent || showLogoContent; // Tampil jika salah satu ada

  // 3. Other Sections
  const showResult = detail.bentoImages && detail.bentoImages.length > 0;
  const showPrototype = detail.figmaLink && detail.figmaLink !== '#';

  // --- KONSTRUKSI SIDEBAR MENU (GABUNGAN) ---
  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    // Menu "Problem & Solution" (Mengarah ke Wrapper ID 'challenge')
    ...(showChallenge
      ? [{ id: 'challenge', label: 'Problem & Solution' }]
      : []),
    // Menu "Design System" (Mengarah ke Wrapper ID 'visuals', mencakup Logo)
    ...(showVisuals ? [{ id: 'visuals', label: 'Design System' }] : []),
    // Menu lainnya
    ...(showResult ? [{ id: 'design-result', label: 'Design Result' }] : []),
    ...(showPrototype ? [{ id: 'prototype', label: 'Prototype' }] : []),
  ];

  // Grid Styles Helpers
  const getGridColsClass = (count) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };
  const designSystemGridClass = getGridColsClass(
    detail.designSystemImages ? detail.designSystemImages.length : 0
  );
  const logoGridClass = getGridColsClass(
    detail.logoImages ? detail.logoImages.length : 0
  );

  return (
    <main
      className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-[92px]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* === Sidebar Kiri === */}
      <aside className="lg:col-span-1 lg:sticky lg:top-1/2 lg:-translate-y-1/2 self-start">
        <Sidebar items={sidebarItems} />
        <Link
          to={backPath}
          className="mt-8 flex items-center gap-1 text-[14px] text-gray-500 hover:text-black transition-colors"
        >
          <HiChevronLeft className="text-lg" />
          <span>Back to {backLabel}</span>
        </Link>
      </aside>

      {/* === Konten Kanan === */}
      <section className="lg:col-span-3 space-y-20">
        {/* Hero Image */}
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
            {/* Header dengan Flexbox agar Judul dan Tombol sejajar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-200 pb-6">
              <h2 className="text-3xl font-semibold text-black">Overview</h2>

              {detail.websiteLink && (
                <a
                  href={detail.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative w-full sm:w-fit h-[56px] px-8 rounded-[24px] 
                    border-[1px] border-[#CAD3DC] bg-white text-black 
                    text-[16px] font-normal group inline-flex items-center justify-center
                    overflow-hidden transition-colors duration-300 hover:border-black
                  "
                >
                  <span className="relative inline-flex items-center overflow-hidden h-[1.5em]">
                    {/* Teks Normal (Akan geser ke atas saat hover) */}
                    <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Visit Website
                      <HiExternalLink className="text-lg" />
                    </span>

                    {/* Teks Hover (Akan masuk dari bawah saat hover) */}
                    <span className="absolute left-0 top-0 w-full h-full inline-flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                      Visit Website
                      <HiExternalLink className="text-lg" />
                    </span>
                  </span>
                </a>
              )}
            </div>
            <div className="border-t border-gray-200">
              <InfoRow label="Description">
                <p className="text-base text-gray-700 leading-relaxed">
                  {detail.overview}
                </p>
              </InfoRow>
              <InfoRow label="Team">
                <div className="flex -space-x-2">
                  {detail.team.map((member, i) => (
                    <a
                      key={i}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        title={member.name}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover transition-transform duration-300 group-hover:scale-110"
                      />
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

        {/* --- GROUP 1: PROBLEM & SOLUTION --- */}
        {showChallenge && (
          // Wrapper ini memiliki ID 'challenge' yang akan dideteksi oleh Sidebar
          <div id="challenge" className="scroll-mt-24 space-y-20">
            {/* Problems Section */}
            {hasProblems && (
              <Reveal>
                <article>
                  <h2 className="text-3xl font-semibold text-black mb-6">
                    Problems
                  </h2>
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
            )}

            {/* Solutions Section */}
            {hasSolutions && (
              <Reveal>
                <article>
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
            )}
          </div>
        )}

        {/* --- GROUP 2: VISUAL IDENTITY (Design System + Logo) --- */}
        {showVisuals && (
          // Wrapper ini memiliki ID 'visuals' yang akan dideteksi oleh Sidebar
          <div id="visuals" className="scroll-mt-24 space-y-20">
            {/* Design System Content */}
            {showDesignSystemContent && (
              <Reveal>
                <article className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-black mb-6">
                    Design System
                  </h2>

                  {(hasColors || hasTypography) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {hasColors && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Color Palette
                          </h3>
                          <div className="flex flex-wrap gap-4">
                            {detail.colors.map((color) => (
                              <div key={color.hex}>
                                <div
                                  className="w-16 h-16 rounded-lg border border-gray-200"
                                  style={{ backgroundColor: color.hex }}
                                />
                                <p className="text-sm font-mono mt-1">
                                  {color.hex}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {hasTypography && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            Typography
                          </h3>
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
                      )}
                    </div>
                  )}

                  {hasDesignImages && (
                    <div className="mt-8 flex flex-col">
                      <h3 className="text-xl font-semibold mb-6">
                        Components & Icons
                      </h3>
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
                  )}
                </article>
              </Reveal>
            )}

            {/* Logo Content */}
            {showLogoContent && (
              <Reveal>
                <article className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-black mb-6">
                    Logo
                  </h2>
                  <div className={`grid ${logoGridClass} gap-8`}>
                    {detail.logoImages.map((logo) => (
                      <div
                        key={logo.label}
                        className="flex flex-col items-center group"
                      >
                        <div
                          className={`flex justify-center items-center w-full aspect-square rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${logo.label.includes('Dark') ? 'bg-black' : 'bg-white border border-gray-200'}`}
                          style={{ minHeight: '200px' }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.label}
                            className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-700 text-center">
                          {logo.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        )}

        {/* --- Design Result (Bento) --- */}
        {showResult && (
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {detail.bentoImages[1] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                    <img
                      src={detail.bentoImages[1]}
                      alt="Design 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {detail.bentoImages[2] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
                    <img
                      src={detail.bentoImages[2]}
                      alt="Design 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        )}

        {/* --- Prototype --- */}
        {showPrototype && (
          <Reveal>
            <article id="prototype" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Prototype
              </h2>
              <div className="w-full overflow-hidden rounded-3xl border border-gray-200">
                <iframe
                  style={{ border: '1px solid' }}
                  width="100%"
                  height="600"
                  src={detail.figmaLink}
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          </Reveal>
        )}
      </section>
    </main>
  );
}
