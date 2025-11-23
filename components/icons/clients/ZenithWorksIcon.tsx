import React from 'react';
import { IconProps } from '../IconProps';

const ZenithWorksIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 12H34L6 28H34" stroke="currentColor" strokeWidth="2" />
        <text x="48" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="600">
            Zenith
        </text>
    </svg>
);

export default ZenithWorksIcon;
