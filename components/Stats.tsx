import React from 'react';
import { motion } from 'framer-motion';
import { STATS_2025 } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-900">2025 in Numbers</h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS_2025.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-slate-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;