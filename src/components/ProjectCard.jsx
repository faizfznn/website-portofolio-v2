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
          {/* Judul & Tahun/Role dari versi sekarang */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight transition-colors group-hover:text-black">
                {project.appName}
              </h3>
            </div>

            <div className="flex flex-col items-end shrink-0">
              <span className="font-mono text-xs sm:text-sm text-zinc-500 font-medium tabular-nums">
                {project.year || '2025'}
              </span>
              <span className="text-xs text-zinc-400 mt-0.5 hidden sm:block">
                {project.role || 'Product Design'}
              </span>
            </div>
          </div>

          <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => {
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

        {/* Image container dengan rasio asli seperti sebelumnya */}
        <div
          className={`mt-6 overflow-hidden mx-auto transition-all duration-500 ${
            isFullWidth ? 'w-full md:w-[840px] h-96' : 'w-full h-96'
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
            width="840"
            decoding="async"
          />
        </div>
      </div>
    </Link>
  );
}
