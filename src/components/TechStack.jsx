import Reveal from './Reveal';

function TechIcon({ name, Icon, size = 'md', theme = 'light' }) {
  const dims =
    size === 'sm'
      ? 'w-9 h-9 md:w-10 md:h-10'
      : 'w-12 h-12';
  const iconSizeClass = size === 'sm' ? 'text-2xl' : 'text-3xl';
  // Always render dark icon color when using react-icons fallback
  const iconColorBase = 'text-black/80 group-hover:text-black';

  return (
    <span
      className={`group relative shrink-0 flex items-center justify-center ${dims} rounded-2xl bg-white border border-gray-200`}
      title={name}
      aria-label={name}
      tabIndex={0}
    >
      <Icon className={`${iconColorBase} transition-colors duration-200 ${iconSizeClass}`} />
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-10"
        role="tooltip"
      >
        {name}
      </span>
    </span>
  );
}

function TechStack({ items = [], title = 'Tech Stack', variant = 'strip' }) {
  const containerBase =
    'rounded-3xl bg-[#FAFAFA] border border-gray-200/80 shadow-sm mb-10';

  if (!items || items.length === 0) return null;

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
