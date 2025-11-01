// src/pages/HomePage.jsx

import { useRef } from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

function HomePage() {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Tambahkan margin top 92px untuk memberi jarak dari navbar
    <div className="mt-[92px]">
      <Hero onGetInTouchClick={handleScrollToContact} />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
