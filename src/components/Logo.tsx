import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'black' }) => {
  return (
    <img
      src="https://storage.googleapis.com/static-content-prod/67d32c56-6f81-424a-9289-49806443c131/67d32c56-6f81-424a-9289-49806443c131.png"
      alt="Good Life Music Logo"
      className={`${className} ${variant === 'white' ? 'invert brightness-0 invert-100' : ''}`}
      referrerPolicy="no-referrer"
    />
  );
};

export default Logo;
