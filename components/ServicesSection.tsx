import React from 'react';
import { SERVICES_DATA } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">Our Services</h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Tailored solutions designed to solve your toughest digital challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl border border-gray-200 dark:border-white/10 group hover:border-[#3B82F6] transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6 inline-block bg-gray-100 dark:bg-white/5 p-4 rounded-lg group-hover:bg-[#3B82F6]/10 transition-colors duration-300">
                {/* FIX: Cast service.icon to allow passing className prop. */}
                {React.cloneElement(service.icon as React.ReactElement<{className?: string}>, {
                  className: "h-8 w-8 text-[#1D4ED8] group-hover:text-[#3B82F6] transition-colors duration-300"
                })}
              </div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-3">{service.title}</h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;