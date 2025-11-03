import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

/**
 * PortfolioPage menampilkan daftar proyek sebagai kartu grid
 * dengan animasi hover dan modal detail saat diklik.
 */
function PortfolioPage() {
  // Kelompokkan proyek berdasarkan field section. Urutkan secara eksplisit
  // agar tampilan sesuai urutan yang diinginkan (Mobile Design, Web Design).
  const sectionOrder = ["Mobile Design", "Web Design"];
  const sections = sectionOrder.filter((sec) =>
    projects.some((p) => p.section === sec)
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <div className="mb-12 md:mb-16">
        <h1 className="text-2xl font-bold mb-4">
          {/* Bagian '/' dibuat lebih tipis dan abu-abu */}
          <span className="text-gray-400 font-light">/</span>
          {/* Bagian 'PORTFOLIO' dibuat bold dan diberi spasi antar huruf (tracking)
            'ml-2' memberi sedikit jarak dari '/'
          */}
          <span className="text-xl font-medium mb-12"> Portfolio</span>
        </h1>

        {/* 3. Tambahkan deskripsi dari gambar */}
        <p className="text-sm text-gray-600">
          A compilation of my side projects and experiments. A gist of taste in
          design and everything.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section} className="mb-12">
          <h2
            className="text-3xl font-semibold mb-6"
            style={{
              color: "#0C2340",
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}
          >
            {section}
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {projects
              .filter((p) => p.section === section)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;

<div className="min-h-screen *:mt-[92px]">
  {/* 2. Header baru, meniru style gambar (versi light theme) */}
  <div className="mb-12 md:mb-16">
    <h1 className="text-2xl font-bold mb-4">
      {/* Bagian '/' dibuat lebih tipis dan abu-abu */}
      <span className="text-gray-400 font-light">/</span>
      {/* Bagian 'PORTFOLIO' dibuat bold dan diberi spasi antar huruf (tracking)
            'ml-2' memberi sedikit jarak dari '/'
          */}
      <span className="text-xl font-medium mb-12"> Portfolio</span>
    </h1>

    {/* 3. Tambahkan deskripsi dari gambar */}
    <p className="text-sm text-gray-600">
      A compilation of my side projects and experiments. A gist of taste in
      design and everything.
    </p>
  </div>
  {/* Grid gallery: 2 kolom di desktop, 1 kolom di mobile */}
  <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</div>;
