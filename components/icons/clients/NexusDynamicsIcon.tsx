import React from 'react';
import { IconProps } from '../IconProps';

const NexusDynamicsIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
        <circle cx="10" cy="10" r="6" />
        <circle cx="30" cy="30" r="6" />
        <circle cx="10" cy="30" r="6" />
        <circle cx="30" cy="10" r="6" />
        <path d="M10 10L30 30" stroke="currentColor" strokeWidth="2" />
        <path d="M10 30L30 10" stroke="currentColor" strokeWidth="2" />
        <text x="45" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="600">
            Nexus
        </text>
    </svg>
);

export default NexusDynamicsIcon;
