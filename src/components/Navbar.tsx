import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import MenuButton from './MenuButton';
import SideMenu from './SideMenu';

const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // false = dark bg → white text, true = light bg → black text
  const location = useLocation();
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        setIsHidden(false);
      } else {
        setIsHidden(currentScrollY > lastScrollY.current);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect background brightness beneath navbar
  useEffect(() => {
    const detectBrightness = () => {
      // Get the element at the center of the navbar's bottom edge
      const navHeight = navRef.current?.offsetHeight ?? 80;
      const x = window.innerWidth / 2;
      const y = navHeight;

      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!el) return;

      const bg = window.getComputedStyle(el).backgroundColor;
      const match = bg.match(/\d+/g);
      if (!match) return;

      const [r, g, b] = match.map(Number);
      // Perceived luminance formula
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      setIsDark(luminance > 0.5); // light background → use dark (black) text
    };

    detectBrightness();
    window.addEventListener('scroll', detectBrightness, { passive: true });
    return () => window.removeEventListener('scroll', detectBrightness);
  }, [location]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none ${
          isHidden && !isMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="max-w-[1800px] mx-auto pt-6 px-8 flex justify-between items-start">
          <Link to="/" className="flex items-center pointer-events-auto">
            <Logo
              className="h-[72px] md:h-[96px] lg:h-[120px] w-auto transition-all duration-300"
              variant={isDark ? 'dark' : 'white'}
            />
          </Link>

          <MenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isDark={isDark}
          />
        </div>
      </nav>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;