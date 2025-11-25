import React, { useEffect, useRef } from 'react';
import AboutSection from '../components/AboutSection';
import { animateAbout } from '../animations';

const AboutPage: React.FC = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      animateAbout(aboutRef.current);
    }
  }, []);

  return (
    <div ref={aboutRef} className="pt-20">
      <AboutSection />
    </div>
  );
};

export default AboutPage;
