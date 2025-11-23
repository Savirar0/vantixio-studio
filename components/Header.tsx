import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggleButton from './ThemeToggleButton';
import Logo from './Logo';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-lg border-b border-gray-200 dark:border-white/10' : 'bg-white dark:bg-[#121212] border-b border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="text-[#111827] dark:text-[#F9FAFB] hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors duration-300 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="hidden md:block">
                <ThemeToggleButton />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggleButton />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#111827] dark:text-[#F9FAFB] focus:outline-none ml-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-[#111827] dark:text-[#F9FAFB] hover:bg-gray-100 dark:hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium w-full text-center"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;