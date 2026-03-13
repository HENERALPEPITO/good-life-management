import React from 'react';

const festivals = [
  "EDC Las Vegas", "Tomorrowland", "Lollapalooza", 
  "Creamfields", "ELROW", "Medusa Festival"
];

const FestivalLogos: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {festivals.map((festival) => (
            <div 
              key={festival}
              className="text-2xl md:text-4xl font-heading text-black/20 hover:text-black transition-colors duration-300 cursor-default uppercase tracking-tighter"
            >
              {festival}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalLogos;
