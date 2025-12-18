import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientLogosSection from '../components/ClientLogosSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramCard from '../components/InstagramCard';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <InstagramCard />
    </>
  );
};

export default HomePage;