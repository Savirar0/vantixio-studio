import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ivory text-primary flex flex-col font-sans selection:bg-accent selection:text-white">
      <Navigation />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};