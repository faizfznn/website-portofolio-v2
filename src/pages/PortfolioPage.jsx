import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import aboutImage from '../assets/about.jpg';
import midnight from '../assets/midnight.png';

/**
 * PortfolioPage menampilkan daftar proyek sebagai kartu grid
 * dengan animasi hover dan modal detail saat diklik.
 */
function PortfolioPage() {
  // Data portofolio dummy; ganti dengan proyek anda sendiri
  const projects = [
    {
      id: 1,
      title: "Whatsapp Wrapped",
      description:
        "Summarizes key stats like most active member, top emojis, and response times",
      categories: ["User Engagement Tool", "Web Application"],
      status: "Live",
      tools: ["Figma", "React"],
      image: aboutImage,
    },
    {
      id: 2,
      title: "Mellow – Screen Break Reminder",
      description:
        "Simple screen break reminder that blocks your screen at set intervals",
      categories: ["macOS App"],
      status: "Live",
      tools: ["Figma", "Swift"],
      image: midnight,
    },
    // Tambahkan proyek lain di sini...
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0E0E0E] to-[#161616] pt-[92px] px-6 pb-12">
      <h1 className="text-4xl font-bold text-white mb-12">
        Product Design
      </h1>
      {/* Grid gallery */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-[#171717] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Header: title & description */}
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              {project.description}
            </p>
            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-[#0F0F0F] text-gray-300 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
              <span className="bg-green-800/50 text-green-300 text-xs md:text-sm px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>
            {/* Tools tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-[#1f1f1f] text-gray-400 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            {/* Image */}
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="relative bg-[#1a1a1a] rounded-3xl p-6 md:p-8 w-full max-w-3xl text-white">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedProject.title}
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              {selectedProject.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-[#0F0F0F] text-gray-300 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
              <span className="bg-green-800/50 text-green-300 text-xs md:text-sm px-3 py-1 rounded-full">
                {selectedProject.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-[#1f1f1f] text-gray-400 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            {/* Large image */}
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            {/* Additional placeholder for extended description */}
            <p className="text-sm md:text-base text-gray-400 mt-4">
              {/* Deskripsi detail tambahan bisa ditaruh di sini. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel lorem sed elit condimentum laoreet. Vivamus sit amet mauris
              pharetra, aliquet ex nec, ornare libero.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;