import React from 'react';
import NavLink from './NavLink';

const Logo = ({ isFooter = false }: { isFooter?: boolean }) => {
  const logoSizeClass = isFooter ? "h-10" : "h-8";
  const textSizeClass = isFooter ? "text-3xl" : "text-2xl";

  return (
    <NavLink 
      href="#/" 
      className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#121212] focus-visible:ring-[#3B82F6] rounded-lg"
      aria-label="Vantixio Home"
    >
      <svg
        className={logoSizeClass}
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="logo-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <rect x="0" y="30" width="6" height="6" rx="1" fill="url(#logo-blue)" />
        <rect x="8" y="30" width="6" height="6" rx="1" fill="url(#logo-blue)" />
        <rect x="8" y="40" width="6" height="6" rx="1" fill="url(#logo-blue)" />
        <rect x="16" y="30" width="6" height="6" rx="1" fill="url(#logo-blue)" />
        <line x1="25" y1="33" x2="33" y2="33" stroke="url(#logo-blue)" strokeWidth="3" />
        <line x1="25" y1="43" x2="33" y2="43" stroke="url(#logo-blue)" strokeWidth="3" />
        <path d="M40 40C50 10 70 10 80 40C90 70 70 70 60 40C50 10 50 10 40 40Z" fill="url(#logo-accent)" transform="translate(10, 0)" />
        <path d="M40 40C50 10 70 10 80 40C90 70 70 70 60 40C50 10 50 10 40 40Z" fill="url(#logo-blue)" transform="skewX(-15) translate(-15, 0)" />
      </svg>
      <span className={`ml-2 font-bold text-[#111827] dark:text-[#F9FAFB] ${textSizeClass}`}>
        Vantixio<span className="text-[#1D4ED8]">.</span>
      </span>
    </NavLink>
  );
};

export default Logo;