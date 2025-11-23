import React from 'react';
import { IconProps } from '../IconProps';

const StellarForgeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
        <path d="M20 0L25.2219 14.7781L40 20L25.2219 25.2219L20 40L14.7781 25.2219L0 20L14.7781 14.7781L20 0Z" />
        <text x="48" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="600">
            Stellar
        </text>
    </svg>
);

export default StellarForgeIcon;
