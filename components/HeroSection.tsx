import React from 'react';
import NavLink from './NavLink';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center overflow-hidden bg-gray-50 dark:bg-[#1E1E1E] pt-40 pb-20 lg:pt-48 lg:pb-28">
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