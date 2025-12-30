import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { LuUsers, LuLayers, LuHandshake, LuSend, LuHouse } from "react-icons/lu";
import logo from "/assets/logo.png";
export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: <LuHouse size={20} />, label: 'Home', href: '#home' },
    { icon: <LuUsers size={20} />, label: 'About', href: '#about' },
    { icon: <LuLayers size={20} />, label: 'Projects', href: '#projects' },
    { icon: <LuHandshake size={20} />, label: 'Clients', href: '#clients' },
    { icon: <LuSend size={20} />, label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // h-20 = 80px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-ivory/95 backdrop-blur-lg border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-2xl font-serif text-primary hover:text-accent transition-colors"
          >
            <img 
              src={logo}
              alt="Vantixio Logo" 
              className="h-56 w-56 object-contain"
            />
          </a>
          
          {/* Desktop Button - Hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <Button 
              href="#contact" 
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('#contact');
              }}
            >
              <span className="flex items-center gap-2">
                DISCOVERY CALL
                <ArrowUpRight size={14} />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button - Shows on mobile/tablet, hidden on desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Shows on mobile/tablet, hidden on desktop */}
      <div
        className={`fixed top-20 left-0 right-0 bg-ivory/95 backdrop-blur-lg border-b border-black/10 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 py-6 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.href)}
              className="w-full flex items-center gap-4 px-4 py-3 text-primary hover:bg-accent/5 hover:text-accent rounded-lg transition-all duration-200 group"
            >
              <span className="text-accent/60 group-hover:text-accent transition-colors">
                {item.icon}
              </span>
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          <div className="pt-4 mt-4 border-t border-black/5">
            <Button 
              href="#contact" 
              variant="primary" 
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('#contact');
              }}
            >
              <span className="flex items-center justify-center gap-2">
                DISCOVERY CALL
                <ArrowUpRight size={14} />
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};