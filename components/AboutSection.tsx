import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB] tracking-tight">
            Not Just Another Digital Agency. <span className="block text-[#1D4ED8] mt-2">A Digital Revolution.</span>
          </h2>
          <p className="mt-6 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto leading-8">
            We are Vantixio—where visionaries, technologists, and artists collide. Our mission is simple: to reinvent the digital experience, one pixel at a time. From seamless websites to custom apps, we create tools that empower businesses to lead, innovate, and disrupt their industries. We don’t just follow trends—we set them.
          </p>
        </div>
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#121212] p-8 rounded-xl border border-gray-200 dark:border-white/10 text-center">
            <h3 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-4">Our Philosophy</h3>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] italic text-lg">
              "Digital isn’t just a tool. It’s the future. We build with purpose, passion, and a relentless drive to make an impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;