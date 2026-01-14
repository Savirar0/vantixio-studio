import { ServiceItem, MasteryItem, ProjectItem, NavItem } from './types';
export const NAV_ITEMS: NavItem[] = [
  { label: 'The Studio', path: '#about' },
  { label: 'Work', path: '#projects' },
  { label: 'Clients', path: '#clients' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Product Partnership',
    items: [
      'Team as a Service',
      'MVPs & PoCs',
      'Full-Stack Development',
      'Product & Business Strategy'
    ]
  },
  {
    title: 'Design & Experience',
    items: [
      'Product & UI/UX Design',
      'Brand Systems',
      'Design for Scale'
    ]
  },
  {
    title: 'Platforms & E-Commerce',
    items: [
      'Custom Websites & Marketplaces',
      'Private & Internal Applications',
      'Integrations & Automations'
    ]
  }
];

export const MASTERY: MasteryItem[] = [
  {
    title: 'Core Architecture',
    items: [
      'Python — High-performance backends', 
      'Node.js — Real-time scalability', 
      'Multi-Tenancy — Enterprise SaaS architecture'
    ]
  },
  {
    title: 'Frontend & Experience',
    items: [
      'React & Next.js — Fast, SEO-ready web apps', 
      'TypeScript — Type-safe, reliable code',
      'Tailwind — Custom, pixel-perfect design systems'
    ]
  },
  {
    title: 'Commerce & Systems',
    items: [
      'Shopify Plus — High-volume e-commerce', 
      'Advanced CRMs — Custom data flows', 
      'APIs — Seamless 3rd-party integrations'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'SaaS Infra',
    category: 'B2B SaaS',
    description: 'Scaled to 10k+ daily users via robust Python/React architecture.',
    highlight: true,
    link: 'https://vantixio.com',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Ashtonava',
    category: 'Clothing & Fashion',
    description: '',
    highlight: true,
    link: 'https://ashtonava.in/',
    imageUrl: 'https://ashtonava.in/cdn/shop/files/Beige_Gray_Aesthetic_Photo_Collage_Shop_New_Collection_Promotion_Banner_1.png?v=1768200959&width=1920'
  },
  {
    title: 'OurSqft',
    category: 'PropTech',
    description: 'Enabled faster deal discovery for enterprise clients with custom map integrations.',
    highlight: true,
    link: 'https://oursqft.com',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Citypoint',
    category: 'FinTech',
    description: 'Improved investor onboarding & engagement by 40%.',
    highlight: true,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'ForMen Health',
    category: 'E-commerce',
    description: 'Custom headless checkout and subscription management.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Wani Perfumes',
    category: 'Luxury Brand',
    description: 'Immersive brand experience and Shopify Plus setup.',
    imageUrl: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Hydromo',
    category: 'Sustainability',
    description: 'IoT platform design for water management.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Pi Carbon',
    category: 'Climate Tech',
    description: 'Carbon credit trading marketplace MVP.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SalientMinds',
    category: 'Enterprise',
    description: 'Corporate web presence and internal tooling.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];

export const CLIENT_CATEGORIES: string[] = [
  'SaaS & Enterprise Technology',
  'Real Estate & PropTech',
  'Health & Wellness',
  'Education',
  'Sustainability & Climate Tech',
  'Consumer & Lifestyle'
];

export const CLIENT_LOGOS = [
  'SaaS Infra', 'OurSqft', 'Citypoint', 'ForMen', 'Wani', 'Hydromo', 'Pi Carbon', 'SalientMinds'
];