import React from 'react';
import type { NavLink, Service, Project, SocialLink } from './types';
import CodeIcon from './components/icons/CodeIcon';
import MarketingIcon from './components/icons/MarketingIcon';
import BrandingIcon from './components/icons/BrandingIcon';
import ECommerceIcon from './components/icons/ECommerceIcon';
import ITSolutionsIcon from './components/icons/ITSolutionsIcon';
import SocialMediaIcon from './components/icons/SocialMediaIcon';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#/' },
  { name: 'About', href: '#/about' },
  { name: 'Services', href: '#/services' },
  { name: 'Portfolio', href: '#/portfolio' },
  { name: 'Contact', href: '#/contact' },
];

export const CONTACT_EMAIL = 'vantixio.in@gmail.com';
export const CONTACT_PHONE_NUMBER = '+91 9652145987';
export const CONTACT_PHONE_LINK = 'tel:+919652145987';
export const CONTACT_WHATSAPP_LINK = 'https://wa.me/919652145987';


export const SERVICES_DATA: Service[] = [
  {
    icon: <CodeIcon />,
    title: 'Web & App Development',
    description: 'We don’t just build websites and apps. We craft digital ecosystems that engage, convert, and evolve with your brand. From intuitive user experiences to robust back-end systems, every line of code is built for scalability and growth.',
  },
  {
    icon: <MarketingIcon />,
    title: 'Digital Marketing & SEO',
    description: 'In a crowded digital landscape, standing out is everything. We take your message to the people who matter most, with strategies designed to get you noticed and drive results. From search engine optimization to next-level campaigns, we position you to lead.',
  },
  {
    icon: <BrandingIcon />,
    title: 'Branding & Graphic Design',
    description: 'We design with purpose and precision. Your brand isn’t just a logo—it’s the heartbeat of your business. Let’s create a visual identity that speaks louder than words and connects with your audience on a deeper level.',
  },
  {
    icon: <ECommerceIcon />,
    title: 'E-commerce Solutions',
    description: 'We build e-commerce platforms that do more than just sell—they wow. With sleek designs, seamless checkout, and intuitive user flows, we help you deliver a shopping experience that keeps customers coming back for more.',
  },
  {
    icon: <ITSolutionsIcon />,
    title: 'Software & IT Solutions',
    description: 'Your business is unique, so your software should be too. We create custom solutions designed to streamline operations, optimize performance, and scale with your growth. No cookie-cutter solutions here—just precision-engineered technology.',
  },
  {
    icon: <SocialMediaIcon />,
    title: 'Social Media Management',
    description: 'Social media isn’t just about posting—it’s about building relationships. We manage your social presence with content that engages, excites, and builds a loyal community around your brand.',
  },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'SAS Infra',
        imageUrl: 'https://picsum.photos/seed/sas-infra/600/400',
        link: '#',
    },
    {
        title: 'OurSft',
        imageUrl: 'https://picsum.photos/seed/our-sft/600/400',
        link: '#',
    },
    {
        title: 'Citypoint',
        imageUrl: 'https://picsum.photos/seed/city-point/600/400',
        link: '#',
    },
    {
        title: 'Wani Perfumes',
        imageUrl: 'https://picsum.photos/seed/wani-perfumes/600/400',
        link: '#',
    },
    {
        title: 'ForMen Health',
        imageUrl: 'https://picsum.photos/seed/formen-health/600/400',
        link: '#',
    },
    {
        title: 'GNITS',
        imageUrl: 'https://picsum.photos/seed/gnits/600/400',
        link: '#',
    },
    {
        title: 'Puravida Health',
        imageUrl: 'https://picsum.photos/seed/puravida-health/600/400',
        link: '#',
    },
    {
        title: 'Hydromo',
        imageUrl: 'https://picsum.photos/seed/hydromo/600/400',
        link: '#',
    },
    {
        title: 'Pi Carbon Credits',
        imageUrl: 'https://picsum.photos/seed/pi-carbon-credits/600/400',
        link: '#',
    },
    {
        title: 'SalientMinds',
        imageUrl: 'https://picsum.photos/seed/salient-minds/600/400',
        link: '#',
    },
    {
        title: 'Central Vacuum System India',
        imageUrl: 'https://picsum.photos/seed/central-vacuum-system-india/600/400',
        link: '#',
    },
    {
        title: 'NeoCrystals',
        imageUrl: 'https://picsum.photos/seed/neo-crystals/600/400',
        link: '#',
    },
    {
        title: 'The Neuron Store',
        imageUrl: 'https://picsum.photos/seed/the-neuron-store/600/400',
        link: '#',
    },
    {
        title: 'Turito Blog',
        imageUrl: 'https://picsum.photos/seed/turito-blog/600/400',
        link: '#',
    },
];

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-6 w-6 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-300">
        {children}
    </div>
);

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'Linktree',
        href: 'https://linktr.ee',
        icon: (
            <SocialIcon>
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.47 1.024H3.53a2.51 2.51 0 0 0-2.51 2.51v16.932a2.51 2.51 0 0 0 2.51 2.51h16.94a2.51 2.51 0 0 0 2.51-2.51V3.534a2.51 2.51 0 0 0-2.51-2.51Zm-8.47 18.055a.86.86 0 0 1-.86-.86V13.6L5.35 18.12a.86.86 0 0 1-1.47-.745l4.61-7.14-4.5-6.136a.86.86 0 0 1 .68-1.43h6.39a.86.86 0 0 1 .86.86v4.61l5.79-5.12a.86.86 0 0 1 1.41.81l-4.5 7.15 4.5 6.13a.86.86 0 0 1-.68 1.43h-6.4a.86.86 0 0 1-.12 0Z"></path></svg>
            </SocialIcon>
        )
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <SocialIcon>
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
            </SocialIcon>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <SocialIcon>
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564z"></path></svg>
            </SocialIcon>
        ),
    },
     {
        name: 'WhatsApp',
        href: CONTACT_WHATSAPP_LINK,
        icon: (
            <SocialIcon>
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.29-1.38c1.37.72 2.93 1.13 4.56 1.13h.1c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.25c-1.44 0-2.82-.3-4.08-.88l-.29-.17-3.03.79.81-2.95-.19-.31c-.62-1.02-.95-2.2-.95-3.44 0-4.54 3.69-8.23 8.23-8.23 2.22 0 4.27.87 5.82 2.42s2.42 3.6 2.42 5.82c-.01 4.54-3.7 8.23-8.24 8.23zm4.51-6.15c-.25-.12-1.46-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.39.11-.5.12-.11.25-.29.38-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.76 2.67 4.27 3.75 2.51 1.08 2.51.72 2.96.69.45-.03 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.07-.1-.22-.16-.47-.28z"></path></svg>
            </SocialIcon>
        ),
    },
    {
        name: 'Reddit',
        href: 'https://reddit.com',
        icon: (
            <SocialIcon>
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.34.34 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12.422c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96zm5.5 0c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96zM12 19.25c-2.02 0-3.8-1.222-4.666-2.957a.343.343 0 0 1 .586-.271c.756 1.523 2.445 2.51 4.08 2.51 1.635 0 3.324-.987 4.08-2.51a.343.343 0 0 1 .586.271c-.866 1.735-2.646 2.957-4.666 2.957z"></path></svg>
            </SocialIcon>
        )
    },
];

export const CLIENT_LOGOS = [
    { name: 'SAS Infra', src: 'https://picsum.photos/seed/sas-infra/200/100' },
    { name: 'OurSft', src: 'https://picsum.photos/seed/our-sft/200/100' },
    { name: 'Citypoint', src: 'https://picsum.photos/seed/city-point/200/100' },
    { name: 'Wani Perfumes', src: 'https://picsum.photos/seed/wani-perfumes/200/100' },
    { name: 'ForMen Health', src: 'https://picsum.photos/seed/formen-health/200/100' },
    { name: 'GNITS', src: 'https://picsum.photos/seed/gnits/200/100' },
    { name: 'Puravida Health', src: 'https://picsum.photos/seed/puravida-health/200/100' },
    { name: 'Hydromo', src: 'https://picsum.photos/seed/hydromo/200/100' },
    { name: 'Pi Carbon Credits', src: 'https://picsum.photos/seed/pi-carbon-credits/200/100' },
    { name: 'SalientMinds', src: 'https://picsum.photos/seed/salient-minds/200/100' },
    { name: 'Central Vacuum System India', src: 'https://picsum.photos/seed/central-vacuum-system-india/200/100' },
    { name: 'NeoCrystals', src: 'https://picsum.photos/seed/neo-crystals/200/100' },
    { name: 'The Neuron Store', src: 'https://picsum.photos/seed/the-neuron-store/200/100' },
    { name: 'Turito Blog', src: 'https://picsum.photos/seed/turito-blog/200/100' },
];
