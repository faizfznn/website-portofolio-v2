import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Reveal({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px', 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.4, 
        delay: delay, 
        ease: [0.25, 0.1, 0.25, 1.0], 
      }}
      variants={{
        hidden: { opacity: 0, y: 75 }, 
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
