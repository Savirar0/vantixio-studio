import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientLogosSection from '../components/ClientLogosSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;