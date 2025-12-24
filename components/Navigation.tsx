import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ivory/80 backdrop-blur-lg border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex items-center justify-between h-24">
        <a href="/" className="text-2xl font-serif text-primary">Vantixio.</a>
        <Button href="#contact" variant="primary">
          <span className="flex items-center gap-2">
            DISCOVERY CALL
            <ArrowUpRight size={14} />
          </span>
        </Button>
      </div>
    </header>
  );
};
