import React from 'react';
// Importing your newly uploaded premium banner image cleanly
import brandShowcaseImg from '../assets/BrandShowCase.png';

export default function BrandShowcase() {
  return (
    <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-16 border-t border-neutral-900/40 select-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* 🛠️ Main Structural Image Container */}
        <div className="w-full relative bg-[#09090a] border border-neutral-900/60 overflow-hidden rounded-none group transition-all duration-500 hover:border-neutral-800 shadow-2xl">
          
          {/* Fluid responsive image renderer matching your specific layout screenshot ratios */}
          <img 
            src={brandShowcaseImg} 
            alt="CRED Brand Vision Showcase" 
            className="w-full h-auto object-cover object-center block opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
          />

          {/* Subtle dark ambient outline glow filter mask overlay for high-end feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}