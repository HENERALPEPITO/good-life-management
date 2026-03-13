import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden noise-bg bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.3)'
        }}
      />

      {/* Large Floating Logo Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 0.1, scale: 1.2, rotate: 5 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute z-0 pointer-events-none"
      >
        <Logo className="w-[80vw] md:w-[50vw] h-auto" variant="white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-accent font-body font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          BOUTIQUE MUSIC COMPANY
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white font-heading text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase mb-8"
        >
          GOOD LIFE<br />MANAGEMENT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white font-heading text-xl md:text-2xl tracking-widest uppercase mb-12"
        >
          EMPOWERING TALENT WORLDWIDE
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#roster"
            className="inline-block px-10 py-4 border border-white text-white font-heading text-xl tracking-widest hover:bg-accent hover:border-accent transition-all duration-300 rounded-none uppercase"
          >
            VIEW FULL ROSTER
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
