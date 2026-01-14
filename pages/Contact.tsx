import React from 'react';
import { Button } from '../components/Button';
import { Linkedin, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471.048-.67.351-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.097 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .12 5.313.11 11.828c.001 2.083.541 4.135 1.597 5.955L0 24l6.335-1.652a11.91 11.91 0 005.715 1.448h.004c6.549 0 11.877-5.231 11.944-11.75.002-3.155-1.229-6.257-3.585-8.343" />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10"/><path d="M17 13c0-1.67-1.34-3-3-3-.34 0-.66.05-.95.14a3.99 3.99 0 0 0-2.1-.14A3 3 0 0 0 8 10c-1.66 0-3 1.33-3 3 0 1.25.79 2.31 1.9 2.78C6.35 17.65 7.63 19 12 19s5.65-1.35 5.1-3.22c1.11-.47 1.9-1.53 1.9-2.78z"/><path d="M17 13v.01"/><path d="M7 13v.01"/>
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col bg-primary text-white">
      <section className="px-5 sm:px-10 lg:px-16 py-20 sm:py-32 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           <div>
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-ultra text-white/60 mb-6 sm:mb-8 rounded-sm">/contact</span>
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 sm:mb-12 tracking-tight text-balance">
                Let’s Build Something <span className="text-white/30 italic">That Lasts.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 font-light max-w-md mb-10 sm:mb-12">
                Have a product idea, platform, or system you want to scale?
              </p>
              
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
                <Button 
                   href="mailto:contact@vantixio.com?subject=Discovery%20Call" 
                   variant="inverted"
                   className="px-8 py-4 sm:px-10 sm:py-5 text-[10px]"
                >
                  Book Discovery
                </Button>
                <Button 
                  href="mailto:contact@vantixio.com" 
                  variant="inverted-outline"
                  className="px-8 py-4 sm:px-10 sm:py-5 text-[10px]"
                >
                  Email Us
                </Button>
              </div>
           </div>
           
           <div className="flex flex-col justify-end lg:border-l border-white/10 lg:pl-20 xl:pl-24">
              <div className="mb-10 sm:mb-12">
                 <h3 className="text-[10px] uppercase tracking-ultra text-white/40 mb-4 font-bold">Direct Contact</h3>
                 <a 
                   href="mailto:contact@vantixio.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-2xl sm:text-4xl font-serif hover:text-accent transition-colors break-all xs:break-normal"
                 >
                   contact@vantixio.com
                 </a>
              </div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                 <div>
                    <h3 className="text-[10px] uppercase tracking-ultra text-white/40 mb-5 font-bold">Quick Chat</h3>
                    <div className="flex items-center gap-4">
                       <a 
                         href="https://wa.me/919652145987" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         aria-label="WhatsApp"
                         className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors"
                       >
                         <WhatsAppIcon className="w-5 h-5" />
                         <span className="text-sm font-medium">WhatsApp</span>
                       </a>
                    </div>
                 </div>
                 <div>
                    <h3 className="text-[10px] uppercase tracking-ultra text-white/40 mb-5 font-bold">Social Presence</h3>
                    <div className="flex flex-col gap-4">
                       <a 
                         href="https://www.linkedin.com/in/vantixio-15862b3a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         aria-label="LinkedIn"
                         className="flex items-center gap-3 text-white/70 hover:text-[#0077B5] transition-colors"
                       >
                         <Linkedin size={18} />
                         <span className="text-sm font-medium">LinkedIn</span>
                       </a>
                       <a 
                         href="https://www.instagram.com/vantixio" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         aria-label="Instagram"
                         className="flex items-center gap-3 text-white/70 hover:text-[#E4405F] transition-colors"
                       >
                         <Instagram size={18} />
                         <span className="text-sm font-medium">Instagram</span>
                       </a>
                       {/* <a 
                         href="https://reddit.com" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         aria-label="Reddit"
                         className="flex items-center gap-3 text-white/70 hover:text-[#FF4500] transition-colors"
                       >
                         <RedditIcon className="w-5 h-5" />
                         <span className="text-sm font-medium">Reddit</span>
                       </a> */}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};