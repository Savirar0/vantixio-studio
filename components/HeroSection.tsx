import React, { useEffect, useRef } from 'react';
import NavLink from './NavLink';
import { useTheme } from '../context/ThemeContext';

declare global {
  interface Window {
    VANTA: any;
  }
}

const HeroSection: React.FC = () => {
  const vantaRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    let vantaEffect: any;
    if (window.VANTA) {
      if (theme === 'dark') {
        vantaEffect = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xbb0a3d,
          backgroundColor: 0x0,
        });
      } else {
        vantaEffect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0,
          color2: 0x76f7,
          backgroundColor: 0xffffff
        });
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  return (
    <section ref={vantaRef} className="relative text-center overflow-hidden bg-gray-50 dark:bg-[#1E1E1E] min-h-screen flex flex-col justify-center items-center">
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111827] dark:text-[#F9FAFB] leading-tight tracking-tight mb-6">
          The Future of Digital. <span className="text-[#3B82F6]">Delivered Today.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg lg:text-xl text-[#6B7280] dark:text-[#9CA3AF] mb-12">
          Where ideas become experiences. At Vantixio Studio, we shape the digital world with intuitive design and cutting-edge technology.
        </p>
        <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-[#6B7280] dark:text-[#9CA3AF] tracking-wider font-medium">Let’s Build Something Extraordinary</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <NavLink
                    href="#/contact"
                    className="inline-block bg-[#1D4ED8] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-105"
                >
                    Start Now
                </NavLink>
                <NavLink
                    href="#/services"
                    className="inline-block bg-transparent border border-gray-400 dark:border-gray-600 text-[#111827] dark:text-[#F9FAFB] font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
                >
                    Our Services
                </NavLink>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
