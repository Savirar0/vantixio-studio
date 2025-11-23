
import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}

export interface SocialLink {
    icon: React.ReactElement;
    href: string;
    name: string;
}
