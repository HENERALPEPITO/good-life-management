import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
  isDark?: boolean; // true = light background → use black
}

export default function MenuButton({ onClick, isOpen, isDark = false }: MenuButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 z-[90] pointer-events-auto border-2 ${
        isOpen
          ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600'
          : isDark
          ? 'bg-black text-white border-black hover:bg-orange-500 hover:border-orange-500'
          : 'bg-white text-black border-white hover:bg-orange-500 hover:text-white hover:border-orange-500'
        }`}
    >
      <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </motion.button>
  );
}