import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Linkedin, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            {!imgError ? (
              <img 
                src="image/pknic-logo-mint.png" 
                alt="PKNIC" 
                className="h-10 w-auto mb-4 mx-auto md:mx-0"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-2xl md:text-3xl font-display font-bold text-white tracking-tighter block mb-4">
                PKNIC
              </span>
            )}
            <p className="text-slate-500 text-sm">© {currentYear} PKNIC. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.circle} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              aria-label="Circle Community"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;