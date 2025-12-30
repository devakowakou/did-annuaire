import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="DID Annuaire Logo"
    >
      <defs>
        <linearGradient id="brand-gradient" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      <path 
        d="M32 6L54 17V33C54 45.5 44.5 54.5 32 58C19.5 54.5 10 45.5 10 33V17L32 6Z" 
        fill="url(#brand-gradient)" 
        fillOpacity="0.1" 
      />

      <path 
        d="M32 6L54 17V33C54 45.5 44.5 54.5 32 58C19.5 54.5 10 45.5 10 33V17L32 6Z" 
        stroke="url(#brand-gradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      <circle cx="32" cy="24" r="3.5" fill="white" />
      <circle cx="22" cy="40" r="3.5" fill="white" />
      <circle cx="42" cy="40" r="3.5" fill="white" />
      
      <path 
        d="M32 24L22 40 M32 24L42 40 M22 40H42" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
