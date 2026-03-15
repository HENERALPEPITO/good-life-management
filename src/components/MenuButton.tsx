import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MenuButton({ onClick, isOpen }: MenuButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-accent hover:text-white transition-all z-[90]"
    >
      <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
      <Menu size={20} />
    </motion.button>
  );
}
