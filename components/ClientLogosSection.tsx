import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const ClientLogosSection: React.FC = () => {
  // Duplicate the logos to create a seamless scrolling effect
  const logosForLoop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="py-16 bg-gray-50 dark:bg-[#1E1E1E] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#6B7280] dark:text-[#9CA3AF] tracking-wider uppercase">
          Trusted by industry leaders
        </h2>
        <div className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 animate-infinite-scroll">
            {logosForLoop.map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-40 h-12 object-contain text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-300 hover:text-[#111827] dark:hover:text-white" 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSection;
