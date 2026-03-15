import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ArtistModal from './ArtistModal';

interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  instagram: string;
  spotify: string;
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
    gallery: ['images/Taylor_Torrence/Taylor_torrence_gallery1.png', 'images/Taylor_Torrence/Taylor_torrence_gallery2.png', 'images/Taylor_Torrence/Taylor_torrence_gallery3.png', 'images/Taylor_Torrence/Taylor_torrence_gallery4.png']
  }
];

const genres = ['ALL', 'TECH HOUSE', 'TECHNO', 'AFRO HOUSE', 'LATIN HOUSE'];

const ArtistGrid: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState('ALL');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredArtists = activeGenre === 'ALL'
    ? artists
    : artists.filter(a => a.genre.includes(activeGenre.toUpperCase()));

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="roster" className="bg-black py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        {/* Horizontal Slider (Premium Feature) */}
        <div className="mb-32 relative">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-accent font-body font-bold text-xs tracking-[0.3em] uppercase mb-2 block">FEATURED TALENT</span>
              <h2 className="text-white font-heading text-5xl md:text-7xl tracking-tighter uppercase">GLOBAL ROSTER</h2>
            </div>
            <div className="flex gap-4 mb-2">
              <button
                onClick={() => scrollSlider('left')}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
          >
            {artists.slice(0, 5).map((artist) => (
              <div
                key={`slide-${artist.id}`}
                className="flex-none w-[80vw] md:w-[40vw] aspect-[16/9] relative group cursor-pointer snap-start overflow-hidden"
                onClick={() => setSelectedArtist(artist)}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-accent font-body text-xs font-bold tracking-widest uppercase mb-2 block">{artist.genre}</span>
                  <h3 className="text-white font-heading text-4xl md:text-6xl tracking-tighter uppercase">{artist.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter System */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-white/10 pb-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`text-sm font-body font-bold uppercase tracking-widest transition-all duration-300 relative ${activeGenre === genre ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
              >
                {genre}
                {activeGenre === genre && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[33px] left-0 w-full h-[2px] bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="text-zinc-500 font-body text-xs tracking-widest uppercase">
            {filteredArtists.length} ARTISTS FOUND
          </div>
        </div>

        {/* Dynamic Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
          <AnimatePresence mode="popLayout">
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden cursor-pointer bg-zinc-900 ${artist.featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
                  }`}
                onClick={() => setSelectedArtist(artist)}
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
