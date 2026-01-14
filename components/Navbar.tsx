import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Stats', href: '#stats' },
    { name: 'Gallery', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="block group relative z-50">
          {!imgError ? (
            <img 
              src="image/pknic-logo-black.png" 
              alt="PKNIC" 
              className="h-8 md:h-10 w-auto transition-opacity duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">
              PKNIC
            </span>
          )}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-0 bg-white border-b border-slate-200 p-4 pt-24 shadow-xl flex flex-col gap-4 md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
             {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-slate-900 py-3 border-b border-slate-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;