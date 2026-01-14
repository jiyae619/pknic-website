import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVENTS } from '../constants';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

const Activities: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'in-person' | 'online'>('all');

  // Sort events by date descending (Newest first)
  const sortedEvents = useMemo(() => {
    return [...EVENTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const filteredEvents = sortedEvents.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            2025 <span className="text-blue-600">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto"
          >
            A visual journey through our community's milestones.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
            {(['all', 'in-person', 'online'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${
                  filter === tab 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab === 'all' ? 'All Events' : tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event, index) => {
              // Bento Grid Logic (Dynamic based on filtered index)
              // First item: Hero (Large)
              // Second item: Tall Side Panel
              // Remaining: Standard sizing logic
              
              let gridClass = "col-span-1 md:col-span-3 lg:col-span-4";
              let heightClass = "min-h-[360px]";

              // Adjust layout logic only if we have enough items to justify the bento structure
              // Otherwise fallback to a simpler grid for small filtered results
              const useBento = filteredEvents.length > 3;

              if (useBento) {
                if (index === 0) {
                  gridClass = "col-span-1 md:col-span-6 lg:col-span-8";
                  heightClass = "min-h-[400px] md:min-h-[500px]";
                } else if (index === 1) {
                  gridClass = "col-span-1 md:col-span-6 lg:col-span-4";
                  heightClass = "min-h-[400px] md:min-h-[500px]";
                } else if (index >= 5) {
                  gridClass = "col-span-1 md:col-span-3 lg:col-span-6";
                }
              } else {
                 // Symmetrical grid for few items
                 gridClass = "col-span-1 md:col-span-3 lg:col-span-6";
                 heightClass = "min-h-[400px]";
              }

              const isAccent = index === 1 && useBento;

              return (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl ${gridClass} ${heightClass} ${isAccent ? 'bg-blue-600' : 'bg-zinc-900'} cursor-pointer`}
                >
                  {/* Background Image */}
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isAccent ? 'opacity-40 group-hover:opacity-50 mix-blend-overlay' : 'opacity-70 group-hover:opacity-90'}`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isAccent ? 'bg-blue-600/60 mix-blend-multiply group-hover:opacity-80' : 'bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-70'}`} />

                  {/* Content Container */}
                  <div className="relative h-full p-6 sm:p-8 flex flex-col">
                    
                    {/* Top Section: Badge & CTA */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Badge */}
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${isAccent ? 'bg-white/20 border-white/30 text-white' : 'bg-black/30 border-white/10 text-zinc-100'}`}>
                        <span className={`size-2 rounded-full ${event.type === 'in-person' ? 'bg-orange-400' : 'bg-green-400'}`}></span>
                        {event.type}
                      </span>

                      {/* CTA Link - Top Right */}
                      {event.link && (
                        <a 
                          href={event.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-45"
                          title="View Event"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300 mb-3 font-medium">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {event.date}</span>
                        {event.location && (
                          <>
                            <span className="opacity-40">|</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} /> {event.location}</span>
                          </>
                        )}
                      </div>

                      <h3 className={`font-bold text-white mb-2 leading-tight ${index < 2 && useBento ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                        {event.title}
                      </h3>
                      
                      <p className="text-zinc-300 text-sm sm:text-base line-clamp-2 max-w-lg opacity-90">
                        {event.speaker}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Activities;