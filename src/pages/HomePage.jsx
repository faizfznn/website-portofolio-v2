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
    <div className="w-full max-w-6xl mx-auto px-4 mt-[92px]">
      <Hero onGetInTouchClick={handleScrollToContact} />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
