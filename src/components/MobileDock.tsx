import React from 'react';
import { Home, Users, Mail } from 'lucide-react';

const MobileDock: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] md:hidden">
      <div className="bg-black/90 backdrop-blur-lg border border-white/10 px-6 py-4 flex items-center space-x-10 rounded-full shadow-2xl">
        <a href="#" className="text-white hover:text-accent transition-colors">
          <Home size={24} />
        </a>
        <a href="#roster" className="text-white hover:text-accent transition-colors">
          <Users size={24} />
        </a>
        <a href="#contact" className="text-white hover:text-accent transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileDock;
