import React from 'react';
import { IconProps } from '../IconProps';

const QuantumLeapIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 180 40" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <ellipse cx="20" cy="20" rx="18" ry="8" strokeWidth="2" />
    <ellipse cx="20" cy="20" rx="18" ry="8" strokeWidth="2" transform="rotate(60 20 20)" />
    <ellipse cx="20" cy="20" rx="18" ry="8" strokeWidth="2" transform="rotate(120 20 20)" />
    <text x="48" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="600" fill="currentColor">
      Quantum
    </text>
  </svg>
);

export default QuantumLeapIcon;
