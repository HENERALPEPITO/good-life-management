import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'black' }) => {
  return (
    <img
      src="/images/logo.png"
      alt="Good Life Music Logo"
      className={`${className} ${variant === 'white' ? 'invert brightness-0 invert-100' : ''}`}
    />
  );
};

export default Logo;