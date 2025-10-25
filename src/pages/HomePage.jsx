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
    <>
      <Hero onGetInTouchClick={handleScrollToContact} />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default HomePage;