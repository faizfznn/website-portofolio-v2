// src/components/Reveal.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Hanya animasikan sekali
    threshold: 0.1,    // Picu animasi lebih awal (saat 10% terlihat)
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      // Transisi diatur di sini untuk durasi dan jeda
      transition={{ 
        duration: 0.4, // Durasi animasi
        delay: delay,  // Jeda individual
        ease: [0.25, 0.1, 0.25, 1.0] // Kurva easing yang lebih halus
      }}
      // Varian animasi
      variants={{
        hidden: { opacity: 0, y: 75 }, // Mulai 75px di bawah dan transparan
        visible: { opacity: 1, y: 0 },  // Selesai di posisi 0 dan terlihat
      }}
    >
      {children}
    </motion.div>
  );
}