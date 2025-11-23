import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const ClientLogosSection: React.FC = () => {
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="py-16 bg-gray-50 dark:bg-[#1E1E1E] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-[#6B7280] dark:text-[#9CA3AF] tracking-wider uppercase">
          Trusted by industry leaders
        </h2>
        <div className="mt-8 relative">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
              {duplicatedLogos.map((logo, index) => (
                <li key={index} className="flex-shrink-0">
                  <div className="w-40 h-12 text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-300 hover:text-[#111827] dark:hover:text-white">
                    {logo.icon}
                  </div>
                </li>
              ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
              {duplicatedLogos.map((logo, index) => (
                <li key={index} className="flex-shrink-0" aria-hidden="true">
                  <div className="w-40 h-12 text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-300 hover:text-[#111827] dark:hover:text-white">
                    {logo.icon}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSection;
