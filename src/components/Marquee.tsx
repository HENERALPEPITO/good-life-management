import React from 'react';

const Marquee: React.FC = () => {
  const content = "ANDRUSS · TECH HOUSE · MICHAELBM · LATIN TECH · FACU BAEZ · MINIMAL BASS · JESÚS FERNÁNDEZ · AFRO HOUSE · RAFFA FL · MINOW · VOID · TAYLOR TORRENCE · TECHNO · ";
  
  return (
    <div className="bg-black py-8 overflow-hidden border-y border-divider-light">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-white font-heading text-4xl md:text-6xl tracking-widest uppercase">
          {content.repeat(4)}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
