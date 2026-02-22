import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Celebrations = () => {
  const [celebrationType, setCelebrationType] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const today = new Date();
    // Kembalikan ke deteksi tanggal asli untuk versi production
    // const month = today.getMonth(); 
    // const date = today.getDate();
    
    // Hardcoded sementara untuk demo 'Awwwards' (ubah kembali nanti)
    const month = 11; 
    const date = 31;

    if ((month === 11 && date === 31) || (month === 0 && date === 1)) {
      setCelebrationType('newyear');
      triggerFireworks();
    } else if (month === 5 && date === 15) {
      setCelebrationType('birthday');
      triggerConfetti();
    }

    // Auto-hide after 8 seconds purely for UX
    const timer = setTimeout(() => setIsVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const triggerFireworks = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const triggerConfetti = () => {
    const duration = 8 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      // Confetti dari sisi kiri
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FF69B4', '#00BFFF'],
      });
      // Confetti dari sisi kanan
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FF69B4', '#00BFFF'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // Custom easing for high-end motion
  const customEase = [0.76, 0, 0.24, 1];

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: customEase },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && celebrationType && (
        <motion.div 
          initial="hidden"
          animate="show"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden flex justify-center items-center font-sans"
        >
          {/* Grainy Noise Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Tampilan Tahun Baru */}
          {celebrationType === 'newyear' && (
            <div className="relative w-full h-full flex flex-col justify-center items-center bg-black/80 backdrop-blur-sm">
              {/* Giant Background Year */}
              <div className="absolute inset-0 flex justify-center items-center overflow-hidden opacity-5">
                <span className="text-[30vw] font-black text-white leading-none tracking-tighter select-none">
                  {new Date().getFullYear() + (new Date().getMonth() === 11 ? 1 : 0)}
                </span>
              </div>

              <div className="relative z-10 text-center px-4">
                <div className="overflow-hidden mb-2">
                  <motion.h1 
                    variants={textRevealVariants}
                    className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(253,224,71,0.3)]"
                  >
                    HAPPY
                  </motion.h1>
                </div>
                <div className="overflow-hidden mb-6">
                  <motion.h1 
                    variants={textRevealVariants}
                    className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter leading-none"
                  >
                    NEW YEAR
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.p 
                    variants={textRevealVariants}
                    className="text-white/60 text-xl md:text-3xl font-light tracking-[0.3em] uppercase"
                  >
                    New Beginnings
                  </motion.p>
                </div>
              </div>
            </div>
          )}

          {/* Tampilan Ulang Tahun - Fullscreen Immersive */}
          {celebrationType === 'birthday' && (
            <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-950/90 backdrop-blur-md">
              
              {/* Mesh Gradient Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/40 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600/40 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }} />
              </div>

              {/* Giant Background Number (Age or Date) */}
              <div className="absolute inset-0 flex justify-center items-center overflow-hidden opacity-[0.02]">
                <span className="text-[40vw] font-black text-white leading-none tracking-tighter select-none">
                  15
                </span>
              </div>

              <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  className="text-7xl md:text-9xl mb-8 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  🎂
                </motion.div>

                <div className="overflow-hidden mb-2">
                  <motion.h2 
                    variants={textRevealVariants}
                    className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
                  >
                    IT'S YOUR DAY
                  </motion.h2>
                </div>

                <div className="overflow-hidden mt-4">
                  <motion.div variants={textRevealVariants} className="flex flex-col md:flex-row items-center gap-4 text-2xl md:text-4xl font-light text-white/80">
                    <span>Celebrating</span>
                    <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] relative">
                      FAIZ
                      {/* Glowing Stroke Effect */}
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-sm opacity-70" aria-hidden="true">FAIZ</span>
                    </span>
                    <span>level up! 🚀</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Celebrations;