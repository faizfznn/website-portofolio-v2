// src/pages/PortfolioPage.jsx
import projects from "../data/portfolioProjects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal";

/**
 * PortfolioPage menampilkan daftar proyek sebagai kartu grid
 * dengan animasi hover dan konten muncul bertahap saat scroll.
 */
function PortfolioPage() {
  const sectionOrder = ["Mobile Design", "Web Design"];
  const sections = sectionOrder.filter((sec) =>
    projects.some((p) => p.section === sec)
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 min-h-screen mt-[92px]">
      <Reveal>
        <div className="mb-10 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="font-bold text-3xl md:text-4xl">/</span>
            <span className="text-2xl md:text-3xl font-bold">{" "}Portfolio</span>
          </h1>
          <p className="text-sm text-gray-600">
            A compilation of my side projects and experiments. A gist of taste
            in design and everything.
          </p>
        </div>
      </Reveal>

      {sections.map((section, i) => (
        <Reveal key={section} delay={(i + 1) * 0.15}>
          <div className="mb-10 md:mb-12">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{
                color: "#0C2340",
                fontFamily: '"Bricolage Grotesque", sans-serif',
              }}
            >
              {section}
            </h2>
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
              {projects
                .filter((p) => p.section === section)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default PortfolioPage;
