import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-neutral-900/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-28 flex items-center justify-between">
        <a href="#" className="flex items-center group pt-2">
          <img 
            src="/src/assets/CredLogo.png" 
            alt="CRED Official Shield Logo"
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            onError={(e) => {
              e.target.src = "https://i.imgur.com/K0Y8R4T.png";
            }}
          />
        </a>
        <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.25em]">
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors">membership</a>
          <a href="#features" className="text-neutral-400 hover:text-white transition-colors">features</a>
          <a href="#security" className="text-neutral-400 hover:text-white transition-colors">security</a>
        </div>
        
       <button className="text-xs font-black uppercase tracking-widest text-white border border-white px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Download app
        </button>
        
      </div>
    </nav>
  );
}