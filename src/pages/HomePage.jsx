// src/pages/HomePage.jsx

import { useRef } from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard.jsx";
import works from "../data/workProjects.js";

function HomePage() {
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
            <span className="font-bold text-2xl">/</span>
            {/* Bagian 'PORTFOLIO' dibuat bold dan diberi spasi antar huruf (tracking)
            'ml-2' memberi sedikit jarak dari '/'
          */}
            <span className="text-xl font-bold"> Selected Work</span>
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
            const colSpanClass = isFirst || isLast ? "md:col-span-2" : "";
            return (
              <div key={works.id} className={`${colSpanClass}`}>
                <ProjectCard project={works} />
              </div>
            );
          })}
        </div>
      </section>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
