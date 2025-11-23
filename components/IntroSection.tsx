import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight">
            Welcome to Vantixio Studio
          </h2>
          <p className="mt-6 text-lg text-[#6B7280] dark:text-[#9CA3AF] leading-8">
            A place where technology meets creativity. We craft digital solutions that don’t just work—they wow. Whether you’re launching a startup or scaling your business, we build experiences that people remember.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;