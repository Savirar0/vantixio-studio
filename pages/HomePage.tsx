import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientLogosSection from '../components/ClientLogosSection';
import GeminiSection from '../components/GeminiSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <GeminiSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;