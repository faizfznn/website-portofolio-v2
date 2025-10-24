import aboutImage from "../assets/about.jpg";
import indoFlag from "../assets/bendera.png";

const Hero = () => {
  return (
    <section className="flex w-full px-[50px] h-fit justify-center items-center gap-[138px]">
      {/* === Bagian Kiri === */}
      <div className="flex flex-col items-start gap-12">
        <div className="w-[646px]">
          <h1
            className="text-5xl font-normal text-black leading-14"
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
            }}
          >
            I’m crafting apps that users want to open again, again, and again...
          </h1>
        </div>

        <div className="flex items-start gap-2">
          <button
            className="
    flex w-fit h-[56px] px-10 justify-center items-center
    rounded-full
    border border-[rgba(0,0,0,0.2)]
    text-white text-[16px] font-normal
    bg-gradient-to-b from-[#323232] to-[#000000]
    shadow-[inset_0_0_8px_0_#FFFFFF]
  "
          >
            Get in touch
          </button>

          {/* === Tombol See Portfolio yang Diperbaiki === */}
          <button className="relative w-fit h-[56px] px-10 rounded-full border-[1px] border-[#CAD3DC] bg-white text-black text-[16px] font-normal group">
            {/* Container dengan overflow hidden hanya untuk teks */}
            <span className="relative inline-block overflow-hidden h-[1.2em]">
              {/* Teks 1: Awalnya terlihat */}
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                See portfolio
              </span>

              {/* Teks 2: Awalnya tersembunyi di bawah */}
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                See portfolio
              </span>
            </span>
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
