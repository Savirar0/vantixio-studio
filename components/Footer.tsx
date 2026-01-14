import React, { useState } from 'react';
import { LegalModal } from './LegalModal';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const RedditIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"/><path d="M17 13c0-1.67-1.34-3-3-3-.34 0-.66.05-.95.14a3.99 3.99 0 0 0-2.1-.14A3 3 0 0 0 8 10c-1.66 0-3 1.33-3 3 0 1.25.79 2.31 1.9 2.78C6.35 17.65 7.63 19 12 19s5.65-1.35 5.1-3.22c1.11-.47 1.9-1.53 1.9-2.78z"/><path d="M17 13v.01"/><path d="M7 13v.01"/>
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size}
    height={size}
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471.048-.67.351-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.097 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .12 5.313.11 11.828c.001 2.083.541 4.135 1.597 5.955L0 24l6.335-1.652a11.91 11.91 0 005.715 1.448h.004c6.549 0 11.877-5.231 11.944-11.75.002-3.155-1.229-6.257-3.585-8.343" />
  </svg>
);

export const Footer: React.FC = () => {
  const [legalType, setLegalType] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  const socialLinks = [
    { icon: <Linkedin size={22} strokeWidth={1.5} />, href: "https://www.linkedin.com/in/vantixio-15862b3a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    //{ icon: <Twitter size={22} strokeWidth={1.5} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={22} strokeWidth={1.5} />, href: "https://www.instagram.com/vantixio", label: "Instagram" },
    //{ icon: <RedditIcon size={22} />, href: "https://reddit.com", label: "Reddit" },
    { icon: <WhatsAppIcon size={22} />, href: "https://wa.me/919652145987", label: "WhatsApp" },
  ];

  return (
    <>
      <footer className="bg-primary border-t border-white/10 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-10 sm:gap-16">
          
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white font-serif tracking-tight">Vantixio Studio</h3>
              <p className="text-sm text-white/40 mt-2 font-light tracking-wide uppercase">Building brands & digital products</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
               {socialLinks.map((social) => (
                 <a 
                   key={social.label}
                   href={social.href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-white/40 hover:text-accent transition-all transform hover:scale-110" 
                   aria-label={social.label}
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/5"></div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-8 text-[11px] uppercase tracking-ultra font-bold text-white/30">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 order-2 lg:order-1">
              <span>© 2025 Vantixio Studio</span>
              <span className="hidden sm:inline-block opacity-20">|</span>
              <div className="flex gap-6 sm:gap-8">
                <button 
                  onClick={() => setLegalType('privacy')}
                  className="hover:text-accent transition-colors focus:outline-none cursor-pointer"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => setLegalType('cookies')}
                  className="hover:text-accent transition-colors focus:outline-none cursor-pointer"
                >
                  Cookies
                </button>
                <button 
                  onClick={() => setLegalType('terms')}
                  className="hover:text-accent transition-colors focus:outline-none cursor-pointer"
                >
                  Terms
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <span className="italic font-serif normal-case tracking-normal opacity-50 text-sm">Crafted with precision for modern scale.</span>
            </div>
          </div>
        </div>
      </footer>
      <LegalModal 
        isOpen={!!legalType} 
        type={legalType} 
        onClose={() => setLegalType(null)} 
      />
    </>
  );
};