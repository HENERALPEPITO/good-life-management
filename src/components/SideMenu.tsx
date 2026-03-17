import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Roster', path: '/roster' },
  { name: 'Contact', path: '/contact' },
  { name: 'Publishing', external: 'https://www.goodlife-publishing.com/' },
];

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-black border-l border-zinc-900 z-[101] flex flex-col pt-6 px-12 pb-12"
          >
            <div className="flex justify-end mb-10">
              <button 
                onClick={onClose}
                className="text-white hover:text-accent transition-colors p-2"
              >
                <X size={40} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-10 mb-16">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  {item.external ? (
                    <a
                      href={item.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="group relative text-6xl md:text-7xl font-bold tracking-tighter transition-all duration-300 inline-block text-white hover:text-accent"
                    >
                      <motion.span
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="inline-block"
                      >
                        {item.name}
                      </motion.span>
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`group relative text-6xl md:text-7xl font-bold tracking-tighter transition-all duration-300 inline-block ${
                        location.pathname === item.path ? 'text-accent' : 'text-white hover:text-accent'
                      }`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="inline-block"
                      >
                        {item.name}
                      </motion.span>
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="flex flex-col gap-4 text-zinc-500 font-medium tracking-widest text-xs uppercase">
                <p>© 2026 GOOD LIFE MANAGEMENT</p>
                <p>EMPOWERING TALENT WORLDWIDE</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
