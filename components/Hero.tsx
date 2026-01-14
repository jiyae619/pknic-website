import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="mission" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {!imgError ? (
            <img 
              src="image/pknic-logo-black.png" 
              alt={HERO_CONTENT.title}
              className="h-24 md:h-32 w-auto mb-8"
              onError={() => setImgError(true)}
            />
          ) : (
            <h1 className="text-7xl md:text-9xl font-display font-bold text-slate-900 mb-6 tracking-tighter">
              {HERO_CONTENT.title}
            </h1>
          )}
          
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-8 tracking-wide uppercase">
            {HERO_CONTENT.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {HERO_CONTENT.mission}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;