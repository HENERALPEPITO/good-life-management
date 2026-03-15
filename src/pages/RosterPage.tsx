import React from 'react';
import { motion } from 'motion/react';
import ArtistGrid from '../components/ArtistGrid';

export default function RosterPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4"
        >
          ROSTER
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-500 max-w-2xl mb-12"
        >
          A curated selection of the most innovative sounds in electronic music.
        </motion.p>
      </div>
      <ArtistGrid />
    </motion.div>
  );
}
