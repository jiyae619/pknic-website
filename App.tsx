import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Activities />
        <Contact />
      </main>
      <Footer />
      
      {/* Custom styles for Marquee animation in App scope or Global CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;