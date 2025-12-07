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
        imageUrl: 'https://sasinfra.com/wp-content/uploads/2025/10/SAS-Logo-Blue-01-01-1-1.webp',
        link: 'https://sasinfra.com/',
    },
    {
        title: 'OurSft',
        imageUrl: 'https://www.oursqft.com/wp-content/uploads/2024/09/Oursqft_white.svg',
        link: 'https://www.oursqft.com/',
    },
    {
        title: 'Citypoint',
        imageUrl: 'https://citypoint.com/wp-content/uploads/2023/07/137_57.png',
        link: 'https://citypoint.com/',
    },
    {
        title: 'Wani Perfumes',
        imageUrl: 'https://waniperfumes.com/cdn/shop/files/wani_horizontal_logo.svg?v=1722957206&width=165',
        link: 'https://waniperfumes.com/',
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
        name: 'Instagram',
        href: 'https://instagram.com/vantixio',
        icon: (
            <SocialIcon>
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
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
];

export const CLIENT_LOGOS = [
    { name: 'SAS Infra', src: 'https://sasinfra.com/wp-content/uploads/2025/10/SAS-Logo-Blue-01-01-1-1.webp' },
    { name: 'OurSft', src: 'https://www.oursqft.com/wp-content/uploads/2024/09/Oursqft_white.svg' },
    { name: 'Citypoint', src: 'https://citypoint.com/wp-content/uploads/2023/07/137_57.png' },
    { name: 'Wani Perfumes', src: 'https://waniperfumes.com/cdn/shop/files/wani_horizontal_logo.svg?v=1722957206&width=165' },
    { name: 'ForMen Health', src: 'https://www.formen.health/cdn/shop/files/formen_health_logo.svg?v=1723203043&width=102' },
    { name: 'GNITS', src: 'https://gnits.ac.in/wp-content/uploads/2024/08/logo-white-new-e1723283857619.png' },
    { name: 'Puravida Health', src: 'https://www.mypuravida.in/cdn/shop/files/logo_pura_vida_web_png_rgb_110x.png?v=1631774910' },
    { name: 'Hydromo', src: 'https://hydromo.in/wp-content/uploads/2025/03/Hydromo-logo-white.png' },
    { name: 'Pi Carbon Credits', src: 'https://picc.ae/wp-content/uploads/2024/06/Pi-Carbon-Credit.png' },
    { name: 'SalientMinds', src: 'https://salientminds.com/wp-content/uploads/2023/02/salientminds_white_svg.svg' },
    { name: 'Central Vacuum System India', src: 'https://invac.in/wp-content/uploads/2024/12/logo.b5bf9160.svg' },
    { name: 'NeoCrystals', src: 'https://invac.in/wp-content/uploads/2024/12/logo.b5bf9160.svg' },
    { name: 'The Neuron Store', src: 'https://theneuronstore.com/wp-content/uploads/2021/10/DarkLogo_main.png' },
    { name: 'Turito Blog', src: 'https://d2ivesio5kogrp.cloudfront.net/static/yuppedu/images/turito_logo_md.svg' },
];
