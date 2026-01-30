import { Link, useLocation } from 'react-router-dom';

export default function ProjectCard({ project, isFullWidth }) {
  const location = useLocation();
  const fromPage = location.pathname === '/' ? 'home' : 'portfolio';

  return (
    <Link
      to={`/portfolio/${project.id}`}
      state={{ from: fromPage }} 
      data-cursor-project="true" 
      className="block rounded-3xl overflow-hidden shadow-md dark:shadow-lg group-hover:shadow-xl group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >

      <div className="rounded-3xl bg-[#FAFAFA] transition-shadow duration-300 flex flex-col">
        <div className="pb-6 p-6">

          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg md:text-2xl font-bold text-black leading-tight">
              {project.appName}
            </h3>

            <div className="flex flex-col items-end ml-4">
              <span className="text-lg md:text-xl text-black font-bold whitespace-nowrap">
                {project.year || '2025'}
              </span>

              <span className="text-xs md:text-sm text-gray-500 mt-1 hidden md:block whitespace-nowrap">
                {project.role || 'Product Design'}
              </span>
            </div>
          </div>
          <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600  leading-relaxed">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              const isLive =
                tag.toLowerCase() === 'live' || tag.toLowerCase() === 'figma';
              const tagClasses = isLive
                ? 'bg-[#2A9F47] text-white'
                : 'bg-[#f2efef] text-gray-600';
              return (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${tagClasses}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>


        <div
          className={`mt-6 overflow-hidden mx-auto transition-all duration-500 ${
            isFullWidth
              ? 'w-full md:w-[840px] h-96' 
              : 'w-full h-96' 
          }`}
        >
          <img
            src={project.image}
            alt={project.appName}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              isFullWidth
                ? 'object-contain object-center'
                : 'object-cover object-center'
            }`}
            loading="lazy"
            height="384"
          />
        </div>
      </div>
    </Link>
  );
}