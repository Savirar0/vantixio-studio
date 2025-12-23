import React from 'react';
import Dock from './Navigation';
import { Footer } from './Footer';
import { LuUsers,LuLayers,LuHandshake,LuSend,LuHouse } from "react-icons/lu";

interface LayoutProps {
  children: React.ReactNode;
}
const items = [

    { icon: <LuHouse size={18} />, label: 'Home', onClick: () => alert('Home!') },

    { icon: <LuUsers size={18} />, label: 'Profile', onClick: () => alert('About!') },

    { icon: <LuLayers size={18} />, label: 'Projects', onClick: () => alert('Projects!') },

    { icon: <LuHandshake size={18} />, label: 'Clients', onClick: () => alert('Clients!') },

    { icon: <LuSend size={18} />, label: 'Contact', onClick: () => alert('Contact!') },

  ];


export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ivory text-primary flex flex-col font-sans selection:bg-accent selection:text-white">
      
      
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />

      <main className="flex-grow">
        {children}
      </main>

      
      <div className="h-24 sm:h-0" />
      
      <Footer />
    </div>
  );
};