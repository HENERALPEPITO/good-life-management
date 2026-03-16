import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  instagram: string;
  spotify: string;
  instagramUrl: string;
  spotifyUrl: string;
  beatportUrl: string;
  youtubeUrl: string;
  gallery: string[];
}

interface ArtistModalProps {
  artist: Artist;
  onClose: () => void;
}

const iconBaseClasses =
  'relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/15 bg-transparent transition-colors duration-200 ease-out';

const SpotifyLogo: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 text-white"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M17.2 10.2c-2.5-1.5-6.6-1.9-9.6-1-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.3-1 7.7-.6 10.5 1.1.3.2.4.5.2.8-.2.3-.5.4-.8.2Zm-.4 2.3c-.2.3-.5.4-.8.2-2.1-1.3-5.4-1.7-8-.9-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 2.9-.9 6.6-.5 9 1.1.3.1.4.5.2.8Zm-1 2.4c-.2.2-.5.3-.7.1-1.8-1.1-4.1-1.3-6.8-.7-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3-.7 5.7-.5 7.8.8.3.1.3.5.2.9Z"
      fill="#000000"
    />
  </svg>
);

const InstagramLogo: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 text-white"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="5"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" />
  </svg>
);

const BeatportLogo: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 text-white"
  >
    <path
      d="M12 3C8.7 3 6 5.7 6 9v8h2.4v-8c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v8H18V9c0-3.3-2.7-6-6-6Z"
      fill="currentColor"
    />
  </svg>
);

const YouTubeLogo: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 text-white"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="10"
      rx="3"
      ry="3"
      fill="currentColor"
    />
    <path
      d="M11 10v4l3.5-2-3.5-2Z"
      fill="#000000"
    />
  </svg>
);

type PlatformKey = 'spotify' | 'instagram' | 'youtube' | 'beatport';

const platformConfig: {
  key: PlatformKey;
  label: string;
  glowClass: string;
}[] = [
  {
    key: 'spotify',
    label: 'Spotify',
    glowClass: 'bg-emerald-400/40',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    glowClass: 'bg-pink-500/40',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    glowClass: 'bg-white/50',
  },
  {
    key: 'beatport',
    label: 'Beatport',
    glowClass: 'bg-lime-400/40',
  },
];

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
                  <motion.div
                    className="flex items-center gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                        },
                      },
                    }}
                  >
                    {platformConfig.map((platform) => {
                      const href =
                        platform.key === 'spotify'
                          ? artist.spotifyUrl
                          : platform.key === 'instagram'
                          ? artist.instagramUrl
                          : platform.key === 'beatport'
                          ? artist.beatportUrl
                          : artist.youtubeUrl;

                      const IconComponent =
                        platform.key === 'spotify'
                          ? SpotifyLogo
                          : platform.key === 'instagram'
                          ? InstagramLogo
                          : platform.key === 'beatport'
                          ? BeatportLogo
                          : YouTubeLogo;

                      return (
                        <motion.a
                          key={platform.key}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className={`${iconBaseClasses} group`}
                          aria-label={`${artist.name} on ${platform.label}`}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.25, ease: 'easeOut' },
                            },
                          }}
                          whileHover={{
                            scale: 1.08,
                          }}
                        >
                          <div
                            className={`pointer-events-none absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-200 ${platform.glowClass}`}
                          />
                          <div className="absolute inset-0 rounded-xl border border-white/15 group-hover:border-white/40 transition-colors duration-200" />
                          <div className="relative flex items-center justify-center w-full h-full bg-transparent group-hover:bg-white/5 transition-colors duration-200">
                            <IconComponent />
                          </div>
                          <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-body font-semibold tracking-[0.18em] uppercase text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            {platform.label}
                          </span>
                        </motion.a>
                      );
                    })}
                  </motion.div>
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
