import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutStrip from '../components/AboutStrip';
import StatsStrip from '../components/StatsStrip';
import FestivalLogos from '../components/FestivalLogos';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Marquee />
      <AboutStrip />
      <StatsStrip />
      
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            OUR TALENT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Discover the world-class artists we represent and the impact they're making on the global music scene.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/roster"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 group"
            >
              View Full Roster
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FestivalLogos />
    </motion.div>
  );
}
