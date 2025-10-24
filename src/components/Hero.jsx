import aboutImage from "../assets/about.jpg";
import indoFlag from "../assets/bendera.png";

const Hero = () => {
  return (
    <section className="w-full text-white py-24 px-6 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* === LEFT COLUMN === */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          I’m crafting apps that users want to open again, again, and again...
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="relative px-8 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-gray-900 to-black border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all overflow-hidden">
            Get in touch
            <div className="absolute inset-0 rounded-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          </button>

          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm border border-gray-300 hover:bg-gray-100 transition-all">
            See portfolio
          </button>
        </div>
      </div>

      {/* === CARD KANAN === */}
      <div
        className="
          inline-flex 
          p-4 
          flex-col 
          items-center 
          gap-2 
          border 
          border-white 
          shadow-[0_0_40px_0_rgba(0,0,0,0.03)]
          transition-transform 
          duration-500 
          ease-[cubic-bezier(0.4,0.0,0.2,1)]
          hover:rotate-[2deg]
          hover:translate-x-3
          hover:scale-105
          cursor-pointer
        "
        style={{
          borderRadius: "44px 44px 28px 28px",
          background: "rgba(242, 244, 246, 0.5)",
          transform: "rotate(3deg)",
        }}
      >
        {/* === FOTO PROFIL === */}
        <div
          className="w-[200px] h-[200px] rounded-[28px] bg-cover bg-center shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          style={{
            backgroundImage: `url(${aboutImage})`,
          }}
        ></div>

        {/* === STATUS BADGE === */}
        <div className="h-[48px] flex p-4 gap-2 justify-center items-center bg-white rounded-full self-stretch">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2A9F47]"></span>
          </span>
          <span className="text-[14px] text-[#2A9F47] font-normal">
            Available for freelance
          </span>
        </div>

        {/* === LOKASI BADGE === */}
        <div className="h-[48px] flex p-4 gap-2 justify-center items-center bg-white rounded-full self-stretch">
          <img
            src={indoFlag}
            alt="Indonesian Flag"
            className="w-5 h-5 rounded-[4px] object-cover"
          />
          <span className="text-[14px] text-black font-normal">
            Malang, Indonesia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
