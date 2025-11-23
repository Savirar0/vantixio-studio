import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            The Proof is in the <span className="text-[#1D4ED8]">Results</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Don’t just take our word for it. Hear from the clients who’ve seen their digital dreams come to life with Vantixio.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            <figure className="bg-white dark:bg-[#121212] p-8 md:p-12 rounded-xl border border-gray-200 dark:border-white/10 shadow-lg">
                <blockquote className="text-lg text-center text-[#111827] dark:text-[#F9FAFB] leading-8">
                    <p className="relative">
                        <span className="absolute -left-4 -top-2 text-6xl text-[#3B82F6] opacity-50 font-serif">“</span>
                        Partnering with Vantixio was a game-changer for us. Their creativity, attention to detail, and commitment to success transformed our entire digital strategy. They didn’t just meet our expectations—they exceeded them.
                        <span className="absolute -right-4 -bottom-4 text-6xl text-[#3B82F6] opacity-50 font-serif">”</span>
                    </p>
                </blockquote>
                <figcaption className="mt-8 text-center">
                    <div className="font-semibold text-[#111827] dark:text-[#F9FAFB]">Client Name</div>
                    <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">CEO of Company</div>
                </figcaption>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;