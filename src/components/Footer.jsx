import instagram from "../assets/instagram.jpg";
import linked from "../assets/linked.png";
import twitter from "../assets/twitter.jpg";

function Footer() {
  return (
    <footer className="flex h-28 w-full px-8 py-3 justify-between items-center rounded-4xl bg-[#F2F2F2]">
      <div className="flex items-center gap-3">
        <p className="text-black text-center text-[32px] font-bold">
          faiz150605@gmail.com
        </p>
      </div>

      {/* --- Bagian Ikon Sosial Media --- */}
      <div className="flex items-center gap-5">
        {/* Tautkan ke profil Instagram */}
        <a
          href="https://www.instagram.com/username_anda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-20 rounded-3xl transition-all hover:opacity-75 rotate-[13deg]" // <-- Diperbarui
          />
        </a>

        {/* Tautkan ke profil LinkedIn */}
        <a
          href="https://www.linkedin.com/in/username_anda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linked}
            alt="LinkedIn"
            className="w-20 rounded-3xl transition-all hover:opacity-75 rotate-3" // <-- Diperbarui
          />
        </a>

        {/* Tautkan ke profil Twitter */}
        <a
          href="https://www.twitter.com/username_anda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="w-20 rounded-3xl transition-all hover:opacity-75 -rotate-6" // <-- Diperbarui
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;