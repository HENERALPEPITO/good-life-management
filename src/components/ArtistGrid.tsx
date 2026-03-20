import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ArtistModal from './ArtistModal';

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
  featured?: boolean;
}

const artists: Artist[] = [
  {
    id: 'andruss',
    name: 'ANDRUSS',
    genre: 'TECH HOUSE',
    featured: true,
    image: '/images/Andruss/andrus_main.jpeg',
    bio: 'Andruss is a powerhouse in the Tech House scene, known for his infectious grooves and peak-hour energy. With releases on top labels and support from industry giants, he continues to push the boundaries of modern dance music.',
    instagram: '@andrussmusic',
    spotify: 'Andruss',
    instagramUrl: 'https://www.instagram.com/Andrussmusic',
    spotifyUrl: 'https://open.spotify.com/artist/6HZwb7Zbnvfo8u1sst4QrI',
    beatportUrl: 'https://www.beatport.com/artist/andruss/180687',
    youtubeUrl: 'https://www.youtube.com/AndrussmusicOfficial',
    gallery: ['/images/Andruss/Andruss_gallery1.jpeg', '/images/Andruss/Andruss_gallery2.jpeg', '/images/Andruss/Andruss_gallery3.jpeg', '/images/Andruss/Andruss_gallery4.jpeg']
  },
  {
    id: 'michaelbm',
    name: 'MICHAELBM',
    genre: 'TECH HOUSE / LATIN TECH',
    image: '/images/Michaelbm/Michaelbm_main.JPEG',
    bio: 'Fusing Latin rhythms with driving Tech House beats, MichaelBM has carved a unique niche in the global electronic landscape. His signature sound is a staple in clubs from Ibiza to Miami.',
    instagram: '@michaelbmmusic',
    spotify: 'MichaelBM',
    instagramUrl: 'https://www.instagram.com/michaelbmmusic/',
    spotifyUrl: 'https://open.spotify.com/artist/6RY7vqzR938x0DE0Eh6srl',
    beatportUrl: 'https://www.beatport.com/artist/michaelbm/611490',
    youtubeUrl: 'https://youtube.com/@michaelbmmusic?si=AQDT1DSgD1FmFU4o',
    gallery: ['/images/Michaelbm/Michaelbm_gallery1.JPEG', '/images/Michaelbm/Michaelbm_gallery2.JPEG', '/images/Michaelbm/Michaelbm_gallery3.JPEG', '/images/Michaelbm/Michaelbm_gallery4.JPEG']
  },
  {
    id: 'facu-baez',
    name: 'FACU BAEZ',
    genre: 'TECH HOUSE / MINIMAL BASS',
    image: '/images/facu-baez/facu-baez_main.png',
    bio: 'Facu Baez represents the deeper side of the spectrum. His Minimal Bass productions are masterclasses in restraint and impact, earning him a dedicated following among underground connoisseurs.',
    instagram: '@facubaez',
    spotify: 'Facu Baez',
    instagramUrl: 'https://www.instagram.com/facu_baezdj',
    spotifyUrl: 'https://open.spotify.com/artist/22HYVpPiieQRJsUxZslfBN',
    beatportUrl: 'https://www.beatport.com/artist/facu-baez/939338',
    youtubeUrl: 'https://www.youtube.com/channel/UCqpGklq_1reqZDtwqUohvBA',
    gallery: ['/images/facu-baez/facu-baez_gallery1.jpeg', '/images/facu-baez/facu-baez_gallery2.jpeg', '/images/facu-baez/facu-baez_gallery3.jpeg', '/images/facu-baez/facu-baez_gallery4.jpeg']
  },
  // {
  //   id: 'jesus-fernandez',
  //   name: 'JESÚS FERNÁNDEZ',
  //   genre: 'AFRO HOUSE / LATIN HOUSE',
  //   image: 'https://picsum.photos/seed/jesus/800/1200',
  //   bio: 'Jesús Fernández brings soulful, organic textures to the dancefloor. His Afro House influence is felt in every percussion-heavy set, creating an immersive experience that transcends borders.',
  //   instagram: '@jesusfernandezmusic',
  //   spotify: 'Jesús Fernández',
  //   gallery: ['https://picsum.photos/seed/jf1/400/400', 'https://picsum.photos/seed/jf2/400/400', 'https://picsum.photos/seed/jf3/400/400', 'https://picsum.photos/seed/jf4/400/400']
  // },
  {
    id: 'raffa-fl',
    name: 'RAFFA FL',
    genre: 'TECH HOUSE / LATIN TECH',
    featured: true,
    image: '/images/Rafafl/rafafl_main.jpg',
    bio: 'A true veteran of the scene, Raffa FL is synonymous with high-quality Tech House. His tracks are consistent chart-toppers, and his DJ sets are legendary for their relentless drive.',
    instagram: '@raffa_fl',
    spotify: 'Raffa FL',
    instagramUrl: 'https://www.instagram.com/raffafl/',
    spotifyUrl: 'https://open.spotify.com/artist/0j4dGWeyGGE4GvrAzdZIZ5',
    beatportUrl: 'https://www.beatport.com/artist/raffa-fl/134550',
    youtubeUrl: 'https://www.youtube.com/user/raffafldj',
    gallery: ['/images/Rafafl/rafafl_gallery1.jpg', '/images/Rafafl/rafafl_gallery2.jpg', '/images/Rafafl/rafafl_gallery3.jpg', '/images/Rafafl/rafafl_gallery4.jpg']
  },
  {
    id: 'minow',
    name: 'MINOW',
    genre: 'TECH HOUSE / LATIN TECH',
    image: '/images/Minow/Minow_main.jpeg',
    bio: 'Minow is the dark horse of the roster, delivering uncompromising Techno that demands attention. Raw, industrial, and powerful, his sound is built for the darkest corners of the warehouse.',
    instagram: '@minowmusic',
    spotify: 'Minow',
    instagramUrl: 'https://www.instagram.com/minowmusic/',
    spotifyUrl: 'https://open.spotify.com/artist/53WBL9mWs6KRVyrWBB6Fen',
    beatportUrl: 'https://www.beatport.com/artist/minow/599018',
    youtubeUrl: 'https://www.youtube.com/channel/UCuhUVy3vqL6ttSKjOkbmx2Q',
    gallery: ['/images/Minow/Minow_gallery1.jpeg', '/images/Minow/Minow_gallery2.jpeg', '/images/Minow/Minow_gallery3.jpeg', '/images/Minow/Minow_gallery4.jpeg']
  },
  {
    id: 'void',
    name: 'VOID',
    genre: 'TECH HOUSE / MINIMAL BASS',
    image: '/images/Void/Void_main.jpeg',
    bio: 'VOID explores the intersection of melody and machine. His Techno is atmospheric and driving, creating a cinematic journey on the dancefloor that stays with the listener long after the lights go up.',
    instagram: '@void_techno',
    spotify: 'VOID',
    instagramUrl: 'https://www.instagram.com/voidverified/',
    spotifyUrl: 'https://open.spotify.com/artist/3giDsMv0eBesae30PimJpx',
    beatportUrl: 'https://www.beatport.com/track/x/18550407',
    youtubeUrl: 'https://www.youtube.com/channel/UC1rLy-0bOMlntpKheshZw5Q',
    gallery: ['/images/Void/Void_gallery1.jpeg', '/images/Void/Void_gallery2.jpeg', '/images/Void/Void_gallery3.jpeg', '/images/Void/Void_gallery4.jpeg']
  },
  {
    id: 'taylor-torrence',
    name: 'TAYLOR TORRENCE',
    genre: 'TECHNO',
    image: 'images/Taylor_Torrence/Taylor_torrence_main.png',
    bio: 'Taylor Torrence brings a modern, polished edge to the roster. His productions are characterized by intricate sound design and massive hooks, making him a favorite for mainstages worldwide.',
    instagram: '@taylortorrence',
    spotify: 'Taylor Torrence',
    instagramUrl: 'https://www.instagram.com/taylortorrencemusic/',
    spotifyUrl: 'https://open.spotify.com/artist/4PhWdminU7odBReTmyyZrH',
    beatportUrl: 'https://www.beatport.com/artist/taylor-torrence/491446',
    youtubeUrl: 'https://www.youtube.com/channel/UC5x0x-K0msPdO_oY729Gicg',
    gallery: ['images/Taylor_Torrence/Taylor_torrence_gallery1.png', 'images/Taylor_Torrence/Taylor_torrence_gallery2.png', 'images/Taylor_Torrence/Taylor_torrence_gallery3.png', 'images/Taylor_Torrence/Taylor_torrence_gallery4.png']
  },
  {
    id: 'aundreja',
    name: 'AUNDREJA',
    genre: 'TECHNO / TRANCE',
    image: '/images/Aundreja/aundreja_main.jpeg',
    bio: 'Aundreja is a rising Guatemalan-American techno and trance artist based in Los Angeles. In just over a year, she has become a standout figure in the city’s underground scene through her hypnotic DJ sets, cinematic performances, and emotionally immersive sound.',
    instagram: '@aundreja',
    spotify: 'Aundreja',
    instagramUrl: 'https://www.instagram.com/aundreja/',
    spotifyUrl: 'https://open.spotify.com/track/56Le9zkYZRlw1xkj45hEFM',
    beatportUrl: 'https://www.beatport.com/artist/aundreja/1272450',
    youtubeUrl: 'https://www.youtube.com/@aundreja',
    gallery: ['/images/Aundreja/aundreja_gallery1.jpeg', '/images/Aundreja/aundreja_gallery3.jpeg', '/images/Aundreja/aundreja_gallery2.jpeg', '/images/Aundreja/aundreja_gallery4.jpeg']
  }
];

const ARTIST_AUDIO_MAP: Record<string, string> = {
  andruss: '/images/Andruss/andrus.mp3',
  aundreja: '/images/Aundreja/aundreja.mp3',
  'facu-baez': '/images/facu-baez/facu-baez.mp3',
  michaelbm: '/images/Michaelbm/michaelbm.mp3',
  minow: '/images/Minow/minow.mp3',
  'raffa-fl': '/images/Rafafl/rafafl.mp3',
  'taylor-torrence': '/images/Taylor_Torrence/Taylor_torrence.mp3',
  void: '/images/Void/void.mp3'
};

const DEFAULT_AUDIO_VOLUME = 0.25;
const MAX_AUDIO_VOLUME = 0.5;
const FADE_IN_MS = 1800;
const FADE_OUT_MS = 1200;

const clampVolume = (value: number) => Math.max(0, Math.min(MAX_AUDIO_VOLUME, value));

const ArtistGrid: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRafRef = useRef<number | null>(null);
  const transitionTokenRef = useRef(0);
  const preloadedAudioRef = useRef<HTMLAudioElement[]>([]);

  const cancelActiveFade = useCallback(() => {
    if (fadeRafRef.current !== null) {
      cancelAnimationFrame(fadeRafRef.current);
      fadeRafRef.current = null;
    }
  }, []);

  const fadeAudioTo = useCallback(
    (audio: HTMLAudioElement, targetVolume: number, durationMs: number, token: number) =>
      new Promise<void>((resolve) => {
        cancelActiveFade();
        const startVolume = audio.volume;
        const clampedTarget = Math.max(0, Math.min(1, targetVolume));
        const startTime = performance.now();

        const tick = (now: number) => {
          if (transitionTokenRef.current !== token) {
            resolve();
            return;
          }

          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          audio.volume = startVolume + (clampedTarget - startVolume) * progress;

          if (progress >= 1) {
            fadeRafRef.current = null;
            resolve();
            return;
          }

          fadeRafRef.current = requestAnimationFrame(tick);
        };

        fadeRafRef.current = requestAnimationFrame(tick);
      }),
    [cancelActiveFade]
  );

  const getAudioInstance = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.loop = true;
      audio.volume = 0;
      audioRef.current = audio;
    }

    return audioRef.current;
  }, []);

  const stopAudioWithFade = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;

    const token = ++transitionTokenRef.current;
    await fadeAudioTo(audio, 0, FADE_OUT_MS, token);
    if (transitionTokenRef.current !== token) return;

    audio.pause();
    audio.currentTime = 0;
  }, [fadeAudioTo]);

  const playArtistAudio = useCallback(
    async (artistId: string) => {
      const nextSrc = ARTIST_AUDIO_MAP[artistId];
      if (!nextSrc) return;

      const audio = getAudioInstance();
      const targetVolume = isMuted ? 0 : clampVolume(DEFAULT_AUDIO_VOLUME);
      const token = ++transitionTokenRef.current;
      const currentPath = audio.src ? new URL(audio.src).pathname : '';

      if (!audio.paused && currentPath === nextSrc) {
        await fadeAudioTo(audio, targetVolume, FADE_IN_MS, token);
        return;
      }

      if (!audio.paused) {
        await fadeAudioTo(audio, 0, FADE_OUT_MS, token);
        if (transitionTokenRef.current !== token) return;
        audio.pause();
      }

      audio.src = nextSrc;
      audio.load();
      audio.currentTime = 0;
      audio.volume = 0;
      audio.muted = false;

      try {
        await audio.play();
      } catch {
        return;
      }

      await fadeAudioTo(audio, targetVolume, FADE_IN_MS, token);
    },
    [fadeAudioTo, getAudioInstance, isMuted]
  );

  const handleViewArtist = useCallback(
    (artist: Artist) => {
      setSelectedArtist(artist);
      void playArtistAudio(artist.id);
    },
    [playArtistAudio]
  );

  useEffect(() => {
    const preloaders = Object.values(ARTIST_AUDIO_MAP).map((src) => {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = src;
      audio.load();
      return audio;
    });

    preloadedAudioRef.current = preloaders;

    return () => {
      transitionTokenRef.current += 1;
      cancelActiveFade();

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }

      preloadedAudioRef.current.forEach((audio) => {
        audio.src = '';
      });
      preloadedAudioRef.current = [];
    };
  }, [cancelActiveFade]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;

    const token = ++transitionTokenRef.current;
    const targetVolume = isMuted ? 0 : clampVolume(DEFAULT_AUDIO_VOLUME);
    void fadeAudioTo(audio, targetVolume, 300, token);
  }, [fadeAudioTo, isMuted]);

  useEffect(() => {
    if (!selectedArtist) {
      void stopAudioWithFade();
    }
  }, [selectedArtist, stopAudioWithFade]);

  const sortedArtists = [...artists].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="roster" className="bg-black py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-accent font-body font-bold text-xs tracking-[0.3em] uppercase mb-2 block">OUR TALENT</span>
          <h2 className="text-white font-heading text-5xl md:text-7xl tracking-tighter uppercase">GLOBAL ROSTER</h2>
        </div>

        {/* Sorting System */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-white/10 pb-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
            <div className="text-sm font-body font-bold uppercase tracking-widest text-white relative">
              A-Z
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-[33px] left-0 w-full h-[2px] bg-accent"
              />
            </div>
          </div>
          <div className="text-zinc-500 font-body text-xs tracking-widest uppercase">
            {sortedArtists.length} ARTISTS
          </div>
          <button
            type="button"
            onClick={() => setIsMuted((prev) => !prev)}
            className="text-xs font-body font-bold uppercase tracking-widest text-white border border-white/30 px-4 py-2 hover:bg-accent hover:border-accent transition-all"
            aria-label={isMuted ? 'Unmute artist background audio' : 'Mute artist background audio'}
          >
            {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
          </button>
        </div>

        {/* Dynamic Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
          <AnimatePresence mode="popLayout">
            {sortedArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                id={artist.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() => handleViewArtist(artist)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full aspect-[3/4] overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content (Bottom Left) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-accent font-body text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {artist.genre}
                      </span>
                      <h3 className="text-white font-heading text-4xl md:text-5xl tracking-tighter uppercase leading-none mb-4">
                        {artist.name}
                      </h3>

                      {/* Hover CTA */}
                      <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                        <button className="flex items-center gap-2 text-white font-heading text-lg tracking-widest uppercase border border-white/30 px-6 py-2 hover:bg-accent hover:border-accent transition-all">
                          VIEW ARTIST <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-accent/20 blur-3xl transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Artist Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <ArtistModal
            artist={selectedArtist}
            onClose={() => setSelectedArtist(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtistGrid;
