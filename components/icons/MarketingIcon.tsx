import React from 'react';
import { IconProps } from './IconProps';

const MarketingIcon: React.FC<IconProps> = ({ className = "h-8 w-8 text-[#1D4ED8]" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
export default MarketingIcon;