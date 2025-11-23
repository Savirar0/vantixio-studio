import React from 'react';
import { IconProps } from '../IconProps';

const ApexSolutionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
    <path d="M0 40L15 0L30 40H22.5L15 13.33L7.5 40H0Z" />
    <text x="38" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="600">
      APEX
    </text>
  </svg>
);

export default ApexSolutionsIcon;
