import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-100 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Partners we have collaborated with</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center space-x-16">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <span
              key={`${partner.name}-${index}`}
              className="text-2xl md:text-4xl font-display font-bold text-slate-300 hover:text-slate-900 transition-colors cursor-default"
            >
              {partner.name}
            </span>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center space-x-16">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <span
              key={`${partner.name}-dup-${index}`}
              className="text-2xl md:text-4xl font-display font-bold text-slate-300 hover:text-slate-900 transition-colors cursor-default"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;