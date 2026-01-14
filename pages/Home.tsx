import React, { useState, useRef, useEffect, memo, useCallback, lazy, Suspense } from 'react';
import { 
  ArrowDownRight, 
  Code2, 
  Layers, 
  Globe, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Layout, 
  ChevronDown,
  Smartphone,
  CheckCircle2,
  Terminal,
  Trophy,
  Monitor,
  ShoppingBag,
  Server
} from 'lucide-react';
import { SERVICES, MASTERY } from '../constants';
import { Button } from '../components/Button';

// Lazy load heavy components
const Threads = lazy(() => import('../components/Thread'));
const VariableProximity = lazy(() => import('../components/VariableProximity'));

// Preload font in index.html instead of in component
// Remove this entire block and add to index.html: 
// <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

// Memoized CapabilityCard to prevent unnecessary re-renders
const CapabilityCard: React.FC<{ service: typeof SERVICES[0]; index: number }> = memo(({ service, index }) => {
  const icons = [
    <Terminal size={24} strokeWidth={1.5} />,
    <Layout size={24} strokeWidth={1.5} />,
    <Trophy size={24} strokeWidth={1.5} />
  ];

  const outcomes = [
    "Accelerated Speed-to-Market",
    "Enhanced User Satisfaction",
    "Increased Operational Efficiency"
  ];

  return (
    <div className="group flex flex-col h-full bg-white border border-border p-8 sm:p-10 hover:border-accent transition-all duration-500 rounded-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 bg-accent/5 text-accent flex items-center justify-center rounded-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
          {icons[index % icons.length]}
        </div>
        <div className="text-right">
          <span className="block text-[9px] font-bold text-secondary/30 uppercase tracking-widest">Capability</span>
          <span className="text-[10px] font-bold text-accent uppercase tracking-tighter">0{index + 1}</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-serif text-primary mb-4 leading-tight">{service.title}</h3>
      <div className="inline-flex items-center gap-2 mb-8 text-[10px] font-bold text-secondary/40 uppercase tracking-widest">
        <CheckCircle2 size={12} className="text-accent/40" />
        {outcomes[index % outcomes.length]}
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start text-sm text-secondary font-light group-hover:text-primary transition-colors">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40 mr-3 flex-shrink-0 group-hover:bg-accent group-hover:scale-125 transition-all" />
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-border/40">
        <Button 
          href="#contact" 
          variant="minimal" 
          className="!p-0 !border-0 flex items-center gap-2 text-[10px] uppercase tracking-ultra font-black text-primary hover:text-accent transition-colors"
        >
          View Engagement Model <ArrowDownRight size={14} />
        </Button>
      </div>
    </div>
  );
});

CapabilityCard.displayName = 'CapabilityCard';

// Memoized accordion item
const MasteryAccordionItem: React.FC<{ skill: string }> = memo(({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tech, outcome] = skill.split('—');

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className={`border-b border-white/10 transition-all duration-500 ${isOpen ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}>
      <button 
        onClick={handleToggle}
        className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-white font-serif italic text-lg sm:text-2xl tracking-tight group-hover:text-accent-light transition-colors">
          {tech.trim()}
        </span>
        <div className={`p-1 rounded-full border border-white/10 transition-all duration-500 ${isOpen ? 'bg-accent border-accent rotate-180' : 'group-hover:border-white/30'}`}>
          <ChevronDown size={14} className="text-white" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 sm:px-8 pb-8 flex items-start gap-4">
          <div className="mt-1">
            <Zap size={16} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-ultra text-white/30 font-bold mb-2">Core Advantage</span>
            <p className="text-white/70 text-base font-light leading-relaxed max-w-md">
              {outcome ? outcome.trim() : "Optimized for extreme performance and long-term maintainability."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

MasteryAccordionItem.displayName = 'MasteryAccordionItem';

// Simple fallback for lazy components
const ComponentLoader = () => <div className="w-full h-full" />;

export const Home: React.FC = () => {
  const [showThreads, setShowThreads] = useState(false);
  const [enableProximity, setEnableProximity] = useState(false);
  
  const stats = [
    { label: 'Daily Users Supported', value: '10k+' },
    { label: 'Client Retention', value: '95%' },
    { label: 'Avg Partnership', value: '3+ Yrs' },
  ];

  // Refs for VariableProximity effect
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroDescriptionRef = useRef<HTMLDivElement>(null);
  const partnershipTextRef = useRef<HTMLDivElement>(null);

  // Only enable heavy effects after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThreads(true);
    }, 100);
    
    const proximityTimer = setTimeout(() => {
      setEnableProximity(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(proximityTimer);
    };
  }, []);

  return (
    <div className="flex flex-col relative overflow-hidden bg-ivory">
      {/* Hero Section with Threads Background */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center">
        {showThreads && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <Suspense fallback={<ComponentLoader />}>
              <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
              />
            </Suspense>
          </div>
        )}
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col">
          <div className="max-w-6xl">
            <div className="animate-fade-up">
              {/* Hero Title with VariableProximity */}
              <div ref={heroTitleRef} style={{ position: 'relative' }}>
                <h1 className="text-[clamp(2.2rem,8vw,5.5rem)] font-serif font-medium text-primary tracking-tighter leading-[1.1] mb-8 sm:mb-10 text-balance">
                  {enableProximity ? (
                    <Suspense fallback={<span>Your Technical</span>}>
                      <VariableProximity
                        label="Your Technical"
                        className="text-primary"
                        fromFontVariationSettings="'wght' 500"
                        toFontVariationSettings="'wght' 700"
                        containerRef={heroTitleRef}
                        radius={150}
                        falloff="linear"
                      />
                    </Suspense>
                  ) : (
                    <span>Your Technical</span>
                  )}
                  <br />
                  <span className="italic text-secondary/80">
                    {enableProximity ? (
                      <Suspense fallback={<span>Co-Founder</span>}>
                        <VariableProximity
                          label="Co-Founder"
                          className="text-secondary/80"
                          fromFontVariationSettings="'wght' 500"
                          toFontVariationSettings="'wght' 700"
                          containerRef={heroTitleRef}
                          radius={150}
                          falloff="linear"
                        />
                      </Suspense>
                    ) : (
                      <span>Co-Founder</span>
                    )}
                  </span>
                  {' '}
                  {enableProximity ? (
                    <Suspense fallback={<span>& Product Partner.</span>}>
                      <VariableProximity
                        label="& Product Partner."
                        className="text-primary"
                        fromFontVariationSettings="'wght' 500"
                        toFontVariationSettings="'wght' 700"
                        containerRef={heroTitleRef}
                        radius={150}
                        falloff="linear"
                      />
                    </Suspense>
                  ) : (
                    <span>& Product Partner.</span>
                  )}
                </h1>
              </div>

              {/* Subtitle with VariableProximity */}
              <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-14">
                <div className="w-[1px] h-10 sm:h-14 bg-primary/20"></div>
                <div ref={heroSubtitleRef} style={{ position: 'relative' }} className="max-w-[240px] sm:max-w-md">
                  {enableProximity ? (
                    <Suspense fallback={<span className="text-sm sm:text-xl text-primary/60 font-medium tracking-tight">Not vendors. Your long-term technical partner for scale.</span>}>
                      <VariableProximity
                        label="Not vendors. Your long-term technical partner for scale."
                        className="text-sm sm:text-xl text-primary/60 font-medium tracking-tight"
                        fromFontVariationSettings="'wght' 500"
                        toFontVariationSettings="'wght' 700"
                        containerRef={heroSubtitleRef}
                        radius={120}
                        falloff="linear"
                      />
                    </Suspense>
                  ) : (
                    <span className="text-sm sm:text-xl text-primary/60 font-medium tracking-tight">Not vendors. Your long-term technical partner for scale.</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 sm:gap-14 md:items-end animate-fade-up delay-200 mb-10 sm:mb-16">
              <div className="max-w-2xl">
                {/* Description with VariableProximity */}
                <div ref={heroDescriptionRef} style={{ position: 'relative' }} className="mb-10 sm:mb-12">
                  {enableProximity ? (
                    <Suspense fallback={<p className="text-lg sm:text-2xl lg:text-3xl text-secondary font-light leading-relaxed text-balance">We build brands and digital products for startups and enterprises — taking ownership from idea to launch and beyond.</p>}>
                      <VariableProximity
                        label="We build brands and digital products for startups and enterprises — taking ownership from idea to launch and beyond."
                        className="text-lg sm:text-2xl lg:text-3xl text-secondary font-light leading-relaxed text-balance"
                        fromFontVariationSettings="'wght' 300"
                        toFontVariationSettings="'wght' 500"
                        containerRef={heroDescriptionRef}
                        radius={140}
                        falloff="linear"
                      />
                    </Suspense>
                  ) : (
                    <p className="text-lg sm:text-2xl lg:text-3xl text-secondary font-light leading-relaxed text-balance">We build brands and digital products for startups and enterprises — taking ownership from idea to launch and beyond.</p>
                  )}
                </div>
                
                <div className="flex flex-col xs:flex-row gap-4">
                  <Button
                    href="#contact"
                    variant="primary"
                    fullWidth
                    className="xs:w-auto"
                  >
                    Book a Discovery Call
                  </Button>
                  <Button
                    href="#projects"
                    variant="minimal"
                    fullWidth
                    className="xs:w-auto"
                  >
                    View Selected Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 max-w-[1440px] mx-auto w-full flex flex-col">
        {/* Statistics Block */}
        <div className="relative z-10 w-full border-t border-primary/10 pt-16 sm:pt-20 pb-20 sm:pb-32 animate-fade-in delay-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 mb-16 sm:mb-20">
            <div className="lg:col-span-4">
              <span className="inline-block px-3 py-1 bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-4 rounded-sm">/partnership</span>
            </div>
            <div className="lg:col-span-8">
              <div ref={partnershipTextRef} style={{ position: 'relative' }}>
                {enableProximity ? (
                  <Suspense fallback={<p className="text-xl sm:text-4xl lg:text-5xl font-light leading-snug text-primary text-balance lg:max-w-4xl">Fast-moving SaaS companies and modern brands choose Vantixio Studio as their in-house team alternative.</p>}>
                    <VariableProximity
                      label="Fast-moving SaaS companies and modern brands choose Vantixio Studio as their in-house team alternative."
                      className="text-xl sm:text-4xl lg:text-5xl font-light leading-snug text-primary text-balance lg:max-w-4xl"
                      fromFontVariationSettings="'wght' 300"
                      toFontVariationSettings="'wght' 500"
                      containerRef={partnershipTextRef}
                      radius={160}
                      falloff="linear"
                    />
                  </Suspense>
                ) : (
                  <p className="text-xl sm:text-4xl lg:text-5xl font-light leading-snug text-primary text-balance lg:max-w-4xl">Fast-moving SaaS companies and modern brands choose Vantixio Studio as their in-house team alternative.</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-6xl font-serif text-accent mb-2 sm:mb-3">{stat.value}</span>
                <span className="text-[9px] sm:text-xs uppercase tracking-widest text-secondary font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-32 bg-white border-y border-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 sm:mb-24">
             <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-ivory border border-border text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-6 rounded-sm">/capabilities</span>
                <h2 className="text-4xl sm:text-6xl font-serif text-primary tracking-tighter mb-6">Strategic Solutions</h2>
                <p className="text-secondary font-light text-lg sm:text-xl leading-relaxed">Engagement models designed to solve complex business challenges through technical excellence.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {SERVICES.map((service, idx) => (
              <CapabilityCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Mastery Section */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-32 bg-primary text-white relative">
        <div className="max-w-[1440px] mx-auto">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 sm:mb-32">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-8 rounded-sm">/mastery</span>
                <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tighter mb-8">The Stack for Scale</h2>
                <p className="text-white/50 font-light text-lg sm:text-xl">We select technologies that balance rapid speed-to-market with the security and reliability required by enterprise systems.</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              {MASTERY.map((area, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-5 mb-10 pb-6 border-b border-white/20">
                    <div className="p-4 bg-accent/10 rounded-sm text-accent ring-1 ring-accent/20">
                       {idx === 0 && <Cpu size={24} />}
                       {idx === 1 && <Monitor size={24} />}
                       {idx === 2 && <ShoppingBag size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-ultra text-white/40 mb-1">{area.title}</h3>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">
                        {idx === 0 ? "Backend Systems" : idx === 1 ? "Experience Layer" : "Commerce & Scale"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col border-t border-white/5">
                    {area.items.map((skill, i) => (
                      <MasteryAccordionItem key={i} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-24 sm:pb-48 text-center bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif text-primary mb-12 sm:mb-16 tracking-tight leading-[1.1] text-balance">Let's build something <span className="italic text-accent">that scales</span>.</h2>
          <div className="flex justify-center">
            <Button 
              href="#contact" 
              variant="minimal"
              className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105 !border-0"
            >
               <span className="text-[10px] uppercase tracking-ultra text-secondary mb-4 sm:mb-6 group-hover:text-accent transition-colors font-black">Get in Touch</span>
               <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700 shadow-xl">
                  <ArrowDownRight size={24} strokeWidth={1} className="sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-500" />
               </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};