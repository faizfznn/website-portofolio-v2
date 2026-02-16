import Reveal from './Reveal';
import Marquee from 'react-fast-marquee';

function TechIcon({ name, Icon, size = 'md', theme = 'light' }) {
  const dims =
    size === 'sm'
      ? 'w-9 h-9 md:w-10 md:h-10'
      : 'w-12 h-12';
  const iconSizeClass = size === 'sm' ? 'text-2xl' : 'text-3xl';
  const iconColorBase = theme === 'dark' ? 'text-white' : 'text-black/80 group-hover:text-black';

  return (
    <span
      className={`group relative shrink-0 flex items-center justify-center ${dims} rounded-2xl ${theme === 'dark' ? 'bg-white/10 border-white/10' : 'bg-white border-gray-200'} border transition-all duration-300 hover:border-gray-400`}
      title={name}
      aria-label={name}
      tabIndex={0}
    >
      <Icon className={`${iconColorBase} transition-colors duration-200 ${iconSizeClass}`} />
      {theme !== 'dark' && (
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-10"
          role="tooltip"
        >
          {name}
        </span>
      )}
    </span>
  );
}

function CarouselIcon({ name, Icon }) {
  return (
    <div className="group/icon flex flex-col items-center mx-4 md:mx-5 cursor-default select-none">
      {/* Icon container */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover/icon:shadow-lg group-hover/icon:-translate-y-1.5 group-hover/icon:border-gray-300">
        <Icon className="text-2xl md:text-3xl text-gray-600 transition-all duration-300 group-hover/icon:text-black group-hover/icon:scale-110" />
      </div>
      {/* Label */}
      <span className="mt-2.5 text-[11px] md:text-xs font-medium text-gray-500 transition-colors duration-300 group-hover/icon:text-black whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function TechStack({ items = [], title = 'Tech Stack', variant = 'strip' }) {
  const containerBase =
    'rounded-3xl bg-[#FAFAFA] border border-gray-200/80 shadow-sm mb-10';

  if (!items || items.length === 0) return null;

  if (variant === 'carousel') {
    return (
      <section className="w-full pt-12 md:pt-16 overflow-hidden relative">
        {/* Thin separator line */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Heading row – left-aligned label + right description */}
        <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-600 tracking-[0.15em] uppercase">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            Tools I use day-to-day
          </p>
        </div>

        {/* Marquee */}
        <div className="w-full relative">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-20 pointer-events-none" />

          <Marquee gradient={false} speed={30} autoFill pauseOnHover className="py-2">
            {items.map(({ name, Icon }) => (
              <CarouselIcon key={name} name={name} Icon={Icon} />
            ))}
          </Marquee>
        </div>

        {/* Bottom separator line */}
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </section>
    );
  }

  return (
    <div className="w-full mt-8">
      <Reveal>
        <div className={`${containerBase} p-4`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              {title}
            </h3>
          </div>

          {variant === 'strip' ? (
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
              {items.map(({ name, Icon }) => (
                <TechIcon key={name} name={name} Icon={Icon} size="sm" theme="light" />
              ))}
            </div>
          ) : variant === 'grid' ? (
            <div className="grid grid-cols-7 sm:grid-cols-8 md:grid-cols-9 gap-3">
              {items.map(({ name, Icon }) => (
                <TechIcon key={name} name={name} Icon={Icon} size="md" theme="light" />
              ))}
            </div>
          ) : (
            // Panel variant: dark gradient card aligned with site style
            <div className="relative w-full rounded-4xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 flex justify-center items-center">
                <div
                  className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] opacity-90 blur-[120px] rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, #6E04C0 10%, rgba(110, 4, 192, 0) 60%)',
                  }}
                />
              </div>
              {/* <h3 className="relative text-2xl md:text-3xl font-bold mb-4 z-10">{title}</h3> */}
              <p className="relative text-sm md:text-base text-gray-300 mb-6 z-10">Tools I use day-to-day</p>
              <div className="relative z-10 grid grid-cols-7 sm:grid-cols-8 md:grid-cols-9 gap-3">
                {items.map(({ name, Icon }) => (
                  <span className="flex items-center justify-center">
                    <TechIcon key={name} name={name} Icon={Icon} size="md" theme="dark" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default TechStack;
