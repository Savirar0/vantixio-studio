import React from 'react';
import { SOCIAL_LINKS, NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE_NUMBER, CONTACT_PHONE_LINK } from '../constants';
import Logo from './Logo';
import NavLink from './NavLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1E1E1E] border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Logo isFooter={true} />
            <p className="mt-4 text-[#6B7280] dark:text-[#9CA3AF]">
              Engineering Digital Futures.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink href={link.href} className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB] mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[#6B7280] dark:text-[#9CA3AF]">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors">
                    <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={CONTACT_PHONE_LINK} className="flex items-center hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors">
                    <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {CONTACT_PHONE_NUMBER}
                </a>
              </li>
               <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                123 Digital Avenue, Tech City, TX 12345
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB] mb-4">Stay in the Loop.</h3>
            <p className="mb-4 text-[#6B7280] dark:text-[#9CA3AF]">
              Follow us on social media for the latest insights, updates, and a peek into the future of digital design.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-[#6B7280] dark:text-[#9CA3AF] text-sm">
          <p>&copy; {new Date().getFullYear()} Vantixio Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;