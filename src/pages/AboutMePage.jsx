import { Link } from 'react-router-dom';
import aboutImage from '../assets/about.jpg';
import paintMyLove from '../assets/paint-my-love.jpeg';
import somebody from '../assets/somebody.jpeg';
import juara from '../assets/juara.png';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { LuSparkle } from 'react-icons/lu';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import { useAlbumContext } from '../components/AlbumContext';
import Album from '../components/Album';
import Reveal from '../components/Reveal';
import '../index.css';

function AboutMePage() {
  const { currentPlayingId } = useAlbumContext();
  const album1Id = 'taylor-swift-red';
  const album2Id = 'taylor-swift-maroon';
  const isFirstAlbumPlaying = currentPlayingId === album1Id;

  const recognitions = [
  {
    title: '2nd Place, UI/UX Competition',
    description: 'Unipdu Jombang - Achievement 2025',
  },
  {
    title: '1st Place, UI/UX Competition',
    description: 'Majalengka University - Achievement 2025',
  },
  {
    title: '1st Place, UI/UX Competition',
    description: 'Muhammadiyah University Riau - Achievement 2025',
  },
  {
    title: '2nd Place, UI/UX Competition',
    description: 'Pertamina University Jakarta - Achievement 2025',
  },
];

  return (
    <main className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <Reveal>
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8 py-10">
          {/* Image */}
          <div
            className="w-full md:w-[485px] h-[360px] md:h-[559px] rounded-3xl bg-cover bg-center shadow-lg shrink-0"
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>

          {/* Text */}
          <div className="flex w-full md:w-[600px] flex-col justify-between items-end self-stretch mt-8 md:mt-0">
            <div className="flex p-4 flex-col justify-center items-start gap-7 self-stretch rounded-3xl bg-[#FAFAFA]">
              <div className="flex-col items-center gap-0.5 self-stretch">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="font2 text-black italic font-medium">
                    Hello,
                  </span>
                  <span className="text-black"> I'm Faiz</span>
                </h1>
                <p className="text-base md:text-lg text-gray-500 mt-1">
                  /fa-eez/
                </p>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p className="font-semibold text-black">
                  I am a UI/UX Designer & Frontend Developer based in Indonesia.
                </p>
                <p>
                  I design to uncomplicate things and create joy in experiences
                  that etch in one's memory. Most importantly, I design to make
                  things more human, in a way that empowers.
                </p>
                <p>
                  My expertise involves resolving gaps in humans and technology
                  through strategic design thinking and shaping perceptions with
                  compelling storytelling.
                </p>
              </div>
            </div>

            <div className="flex p-2.5 flex-col items-start self-stretch gap-2.5 rounded-3xl bg-[#FAFAFA] mt-4">
              <a
                href="https://docs.google.com/document/d/1MUVU7px2PdNLKCUQPGYkxkPEeKpSIObc74uD_KbiTvE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 rounded-3xl border border-[#E9E9E9] transition-transform duration-300 ease-in-out hover:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <LuSparkle className="text-xl text-pink-500" />
                  <span className="font-medium text-[18px] text-black">
                    Download Resume
                  </span>
                </div>
                <div className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-[#C9C9C9] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-lg">
                  <FiArrowDown className="text-[#969696] text-4xl" />
                </div>
              </a>
            </div>

            <a
              href="#music-section"
              className="flex h-12 items-center self-end gap-2 px-6 py-3 bg-black text-white font-semibold rounded-[14px] shadow-lg scroll-smooth mt-4"
            >
              Skip to the good part
              <FiArrowRight />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-col w-full items-start gap-8">
          <div className="flex flex-col md:flex-row w-full items-stretch gap-8 self-stretch">
            {/* Bagian kiri */}
            <div className="flex w-full md:w-[324px] p-4 flex-col items-start gap-6 rounded-3xl bg-[#FAFAFA]">
              <h2 className="flex flex-col items-start leading-tight">
                <span className="font2 text-black text-[28px] md:text-[32px] font-normal italic">
                  Some
                </span>
                <span className="text-black text-[28px] md:text-[32px] font-normal">
                  Recognition
                </span>
              </h2>
              <p className="self-stretch text-black text-[15px] md:text-[16px]">
                Not many, but a few competitions I participated and won
                recognition for my work.
              </p>
            </div>

            {/* Bagian kanan */}
            <div className="flex flex-wrap justify-start items-start gap-6 rounded-3xl bg-[#FAFAFA] w-full p-4">
              {recognitions.map((rec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-6 w-full md:w-[45%] lg:w-[22%] rounded-2xl bg-white/40 backdrop-blur-sm"
                >
                  <h3 className="font-semibold text-lg text-black">
                    {rec.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* And Many More */}
          <div className="flex h-16 p-4 justify-center items-center gap-6 self-stretch rounded-3xl bg-[#FAFAFA]">
            <p className="text-black text-[16px] font-medium">And Many More</p>
          </div>

          {/* Gambar */}
          <div className="flex h-80 md:h-[440px] items-center gap-6 self-stretch">
            <img
              src={juara}
              alt="Kolase sertifikat penghargaan Faiz Fauzan"
              loading="lazy"
              className="flex flex-col items-center self-stretch rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <ExperienceSection />
      </Reveal>
      <Reveal delay={0.45}>
        <EducationSection />
      </Reveal>

      <Reveal delay={0.6}>
        <section
          id="music-section"
          className="flex flex-col md:flex-row w/full items-center gap-8 mb-24 md:mb-32"
        >
          <div className="flex w-full md:w-[324px] h-48 p-4 flex-col items-start gap-6 rounded-3xl bg-[#FAFAFA]">
            <h2 className="flex flex-row items-start leading-tight">
              <span className="font2 text-black text-[32px] font-normal italic">
                My Love
              </span>
              <span className="text-[#FAFAFA]">a</span>
              <span className="text-black text-[32px] font-normal">
                for Music
              </span>
            </h2>
            <p className="self-stretch text-black text-[16px]">
              I think a good designer is a good observer. When I am free, I
              explore the world, observe and document experiences.
            </p>
          </div>

          <Album
            id={album1Id}
            albumCover={paintMyLove}
            albumTitle="Paint My Love"
            artist="Michael Learns to Rock"
            musicFile="/about-me/songs/paint-my-love.mp3"
            size="md"
            startTime={58}
          />

          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: isFirstAlbumPlaying
                ? 'translateX(40%)'
                : 'translateX(0)',
            }}
          >
            <Album
              id={album2Id}
              albumCover={somebody}
              albumTitle="Somebody Pleasure"
              artist="Aziz Hedra"
              musicFile="/about-me/songs/somebody.mp3"
              size="md"
              startTime={58}
            />
          </div>
        </section>
      </Reveal>
    </main>
  );
}

export default AboutMePage;
