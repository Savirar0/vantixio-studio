import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PROJECTS_DATA } from '../constants';
import { animatePortfolio } from '../animations';

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const portfolioContainerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(PROJECTS_DATA.map(p => p.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (portfolioContainerRef.current) {
      animatePortfolio(portfolioContainerRef.current);
    }
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Experience <span className="text-[#1D4ED8]">Innovation in Action</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto">
            Our portfolio isn’t just a showcase—it’s a testament to what happens when creativity and technology collide. See the work that’s driving success for businesses just like yours.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 font-semibold rounded-lg transition-colors duration-300 ${
                        activeCategory === category
                        ? 'bg-[#1D4ED8] text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-[#111827] dark:text-[#F9FAFB] hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div ref={portfolioContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.title + index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 project-card"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
