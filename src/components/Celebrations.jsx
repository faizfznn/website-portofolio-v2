import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Celebrations = () => {

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth(); // 0 = Januari, 5 = Juni, 11 = Desember
    const date = today.getDate();

    if ((month === 11 && date === 31) || (month === 0 && date === 1)) {
      setCelebrationType('newyear');
      triggerFireworks();
    }
    else if (month === 5 && date === 15) {
      setCelebrationType('birthday');
      triggerConfetti();
    }
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
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#bb0000', '#ffffff'],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#bb0000', '#ffffff'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flex justify-center items-center">
      <AnimatePresence>
        {/* Tampilan Tahun Baru */}
        {celebrationType === 'newyear' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              Happy New Year!
            </h1>
            <p className="text-white text-lg md:text-xl font-light">
              Let's make {new Date().getFullYear() + (new Date().getMonth() === 11 ? 1 : 0)} amazing.
            </p>
          </motion.div>
        )}

        {/* Tampilan Ulang Tahun */}
        {celebrationType === 'birthday' && (
          <>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-10 text-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-pink-200"
            >
              <span className="text-2xl font-bold text-pink-600">🎉 It's My Birthday! 🎂</span>
            </motion.div>

            <div className="absolute inset-0 w-full h-full">
               {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: '110vh', x: Math.random() * 100 + 'vw' }}
                    animate={{ y: '-20vh' }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      ease: 'linear',
                      repeat: Infinity,
                      delay: Math.random() * 10
                    }}
                    className="absolute text-6xl opacity-80 drop-shadow-lg"
                    style={{ left: 0 }}
                  >
                    {['🎈', '🎁', '🍰', '🎈'][i % 4]}
                  </motion.div>
               ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Celebrations;