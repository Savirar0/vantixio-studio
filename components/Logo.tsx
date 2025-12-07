import React from 'react';
import NavLink from './NavLink';

const Logo = ({ isFooter = false }: { isFooter?: boolean }) => {
  const logoSizeClass = isFooter ? "h-11" : "h-9";
  const textSizeClass = isFooter ? "text-3xl" : "text-2xl";

  return (
    <NavLink 
      href="#/" 
      className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212] focus-visible:ring-[#3B82F6] rounded-lg"
      aria-label="Vantixio Home"
    >
      <img src="/assets/logo.webp" alt="Vantixio Logo" className={`${logoSizeClass} translate-y-px`} />
      <span className={`ml-2 font-bold text-[#111827] dark:text-[#F9FAFB] ${textSizeClass}`}>
        Vantixio<span className="text-[#1D4ED8]">.</span>
      </span>
    </NavLink>
  );
};

export default Logo;
