import React from 'react';

const AboutStrip: React.FC = () => {
  return (
    <section className="bg-white py-24 border-y border-black">
      <div className="max-w-[1800px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-heading text-black tracking-tight uppercase mb-6">
          REPRESENTING THE WORLD'S FINEST ELECTRONIC MUSIC ARTISTS
        </h2>
        <p className="text-sm md:text-lg font-body font-medium text-black/60 uppercase tracking-[0.2em]">
          Tech House · Techno · Afro House · Latin House · Minimal Bass
        </p>
      </div>
    </section>
  );
};

export default AboutStrip;
