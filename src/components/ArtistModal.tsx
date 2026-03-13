import React from 'react';
import { motion } from 'motion/react';
import { X, Instagram, Music, Download, ExternalLink } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  instagram: string;
  spotify: string;
  gallery: string[];
}

interface ArtistModalProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artist, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-[1600px] bg-zinc-950 rounded-none overflow-hidden h-full md:h-auto md:max-h-[90vh] overflow-y-auto border border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white/50 hover:text-accent transition-colors bg-black/50 p-2 backdrop-blur-md"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Visuals (5 cols) */}
          <div className="lg:col-span-5 relative h-[50vh] lg:h-auto bg-zinc-900">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8">
              <span className="text-accent font-body text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
                {artist.genre}
              </span>
              <h2 className="text-white font-heading text-6xl md:text-8xl tracking-tighter leading-none uppercase">
                {artist.name}
              </h2>
            </div>
          </div>

          {/* Right Column: Info (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col bg-zinc-950">
            <div className="max-w-2xl">
              <div className="mb-16">
                <h4 className="text-[10px] font-body font-bold text-accent uppercase tracking-[0.3em] mb-6">
                  ARTIST PROFILE
                </h4>
                <p className="text-white/80 font-body leading-relaxed text-lg md:text-xl font-light">
                  {artist.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h4 className="text-[10px] font-body font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
                    CONNECT
                  </h4>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="#" 
                      className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
                    >
                      <Instagram size={20} className="text-accent" />
                      <span className="text-sm font-body font-bold uppercase tracking-widest">{artist.instagram}</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
                    >
                      <Music size={20} className="text-accent" />
                      <span className="text-sm font-body font-bold uppercase tracking-widest">{artist.spotify}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-body font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
                    ASSETS
                  </h4>
                  <button className="flex items-center gap-4 text-white hover:text-accent transition-all group border border-white/10 px-6 py-3 hover:border-accent">
                    <Download size={20} className="text-accent" />
                    <span className="text-sm font-body font-bold uppercase tracking-widest">DOWNLOAD PRESS KIT</span>
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div>
                <h4 className="text-[10px] font-body font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
                  GALLERY
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {artist.gallery.map((img, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square overflow-hidden bg-zinc-900 border border-white/5"
                    >
                      <img 
                        src={img} 
                        alt={`${artist.name} gallery ${i}`} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArtistModal;
