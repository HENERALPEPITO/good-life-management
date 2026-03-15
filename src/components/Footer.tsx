import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const artists = [
    'ANDRUSS', 'MICHAELBM', 'FACU BAEZ', 
    'RAFFA FL', 'MINOW', 'VOID', 'TAYLOR TORRENCE'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white selection:bg-orange-600 selection:text-black">
      {/* ZONE 1 — CTA Banner Strip */}
      <section className="w-full bg-black border-t-4 border-orange-600 px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-body text-orange-600 uppercase tracking-[0.2em] text-xs mb-2">
            WORK WITH US
          </p>
          <h2 className="font-heading text-white text-5xl md:text-6xl leading-none uppercase tracking-tight">
            READY TO BOOK AN ARTIST?
          </h2>
        </div>

        <Link 
          to="/contact"
          className="group font-heading text-black bg-orange-600 px-10 py-4 text-xl uppercase tracking-widest hover:bg-white transition-colors duration-300 whitespace-nowrap flex-shrink-0"
        >
          GET IN TOUCH <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </section>

      {/* ZONE 2 — Main Footer Body */}
      <section className="w-full bg-black border-t border-white/10 px-8 py-16">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <p className="font-heading text-white text-3xl tracking-tight leading-none">
              GOOD LIFE
            </p>
            <p className="font-heading text-orange-600 text-xl tracking-tight leading-none mb-4">
              MANAGEMENT
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed uppercase tracking-widest">
              Boutique Music Company
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed uppercase tracking-widest">
              Empowering Talent Worldwide
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a 
                href="https://instagram.com/goodlife_management"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link font-body text-white/60 text-xs uppercase tracking-widest hover:text-orange-600 transition-colors duration-200 w-fit"
              >
                IG — @goodlife_management
              </a>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <p className="font-body text-orange-600 uppercase tracking-[0.2em] text-[10px] mb-5">
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {[
                { name: 'HOME', path: '/' },
                { name: 'ROSTER', path: '/roster' },
                { name: 'CONTACT', path: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="footer-link font-heading text-white text-2xl tracking-wide hover:text-orange-600 transition-colors duration-200 w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Artists */}
          <div>
            <p className="font-body text-orange-600 uppercase tracking-[0.2em] text-[10px] mb-5">
              ROSTER
            </p>
            <ul className="space-y-2">
              {artists.map(artist => (
                <li key={artist} className="group flex items-center">
                  <span className="opacity-0 group-hover:opacity-100 text-orange-600 mr-2 transition-opacity">·</span>
                  <Link 
                    to="/roster"
                    className="font-body text-white/60 text-xs uppercase tracking-widest hover:text-orange-600 transition-colors duration-200"
                  >
                    {artist}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="font-body text-orange-600 uppercase tracking-[0.2em] text-[10px] mb-5">
              CONTACT
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  BOOKINGS
                </p>
                <a 
                  href="mailto:hello@goodlifemgmt.net"
                  className="font-body text-white text-xs hover:text-orange-600 transition-colors duration-200 break-all"
                >
                  hello@goodlifemgmt.net
                </a>
              </div>
              <div>
                <p className="font-body text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  PHONE
                </p>
                <p className="font-body text-white text-xs">+34 693 43 25 06</p>
                <p className="font-body text-white text-xs">+34 647 33 08 06</p>
              </div>
            </div>

            {/* Newsletter micro-input */}
            <div className="mt-8">
              {/* <p className="font-body text-orange-600 uppercase tracking-[0.2em] text-[10px] mb-3">
                STAY UPDATED
              </p> */}
              <div className="flex border-b border-white/30 focus-within:border-orange-600 transition-colors duration-200">
                {/* <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent font-body text-white text-xs placeholder-white/30 outline-none py-2 flex-1 uppercase tracking-widest"
                />
                <button className="font-heading text-orange-600 text-sm tracking-widest hover:text-white transition-colors duration-200 pl-3">
                  →
                </button> */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ZONE 3 — Giant Wordmark */}
      <section className="w-full bg-black overflow-hidden border-t border-white/5 select-none">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <p 
            className="font-heading text-transparent leading-none tracking-tighter whitespace-nowrap w-full text-center transition-all duration-500 hover:text-white/5"
            style={{
              fontSize: 'clamp(80px, 15vw, 220px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.12)',
              letterSpacing: '-0.02em',
            }}
          >
            GOOD LIFE MANAGEMENT
          </p>
        </motion.div>
      </section>

      {/* ZONE 4 — Copyright Bar */}
      <section className="w-full bg-black border-t border-white/10 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-white/30 text-[10px] uppercase tracking-[0.2em]">
          ©2026 GOOD LIFE MANAGEMENT. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-6">
          <button 
            onClick={scrollToTop}
            className="font-body text-white/30 text-[10px] uppercase tracking-[0.2em] hover:text-orange-600 transition-colors duration-200"
          >
            BACK TO TOP ↑
          </button>
          <span className="font-body text-white/20 text-[10px] uppercase tracking-[0.2em] hidden sm:inline">
            EMPOWERING TALENT WORLDWIDE
          </span>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link {
          position: relative;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #EA580C;
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
      `}} />
    </footer>
  );
};

export default Footer;
