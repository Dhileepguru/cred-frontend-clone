import React, { useEffect, useRef, useState } from 'react';

export default function Trust() {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://cred.club&color=000000";
  
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progression depth relative to window context
      const totalHeight = rect.height + windowHeight;
      const currentProgress = (windowHeight - rect.top) / totalHeight;
      
      // Strict mathematical safety clamp between 0.0 and 1.0
      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial pass logic trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper utility function to seamlessly map granular gray-to-white interpolations on scroll
  const getLineOpacity = (progress, minRange, maxRange) => {
    if (progress < minRange) return 'text-neutral-800 opacity-20'; // Base Gray State
    if (progress > maxRange) return 'text-white opacity-100';      // Solid White State
    return 'text-white/90 opacity-90 transition-all duration-300';
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[125vh] bg-black flex flex-col justify-between px-6 md:px-20 pt-32 pb-16 overflow-hidden select-none"
    >
      
      {/* Structural Top Margin Grid Spacer */}
      <div className="h-4 w-full"></div>

      {/* 🏛️ Monolithic Typography Layout (Aligned Strictly Towards Bottom Segment) */}
      <main className="w-full max-w-7xl mx-auto flex flex-col items-start justify-end mt-auto mb-16 pl-2 md:pl-12">
        
        {/* Permanent Top Header Badge Tracker */}
        <p className="text-xs md:text-[14px] font-sans font-bold tracking-[0.38em] text-white uppercase mb-16 md:mb-20">
          not everyone makes it in.
        </p>

        {/* 👑 The Complete Paragraph - Full Text Sequence Engine */}
        <h1 className="text-[60px] md:text-[58px] font-serif font-bold tracking-tight text-left lowercase max-w-[90rem] space-y-4 md:space-y-5">
          
          {/* Line 1 - The Story Block */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.15, 0.32)
          }`}>
            the story of CRED begins with trust.
          </span>

          {/* Line 2 - The Core Belief Block Part A */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.32, 0.48)
          }`}>
            we believe individuals who've proven their trustworthiness
          </span>

          {/* Line 3 - Core Belief Block Part B */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.48, 0.64)
          }`}>
            deserve better: better experiences, better rewards,
          </span>
           {/* Line 3 - Core Belief Block Part B */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.53, 0.64)
          }`}>
            better rules.
          </span>
          {/* Line 3 - Core Belief Block Part B */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.64, 0.66)
          }`}>
            this is the status quo we're building.
          </span>
          {/* Line 3 - Core Belief Block Part B */}
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.66, 0.71)
          }`}>
            make it to the club, and experience the ascension yourself.
          </span>
        </h1>


      </main>

      {/* 📱 Footer Frame: Pixel-Perfect Brand App QR Card Alignment */}
      <footer className="w-full max-w-7xl mx-auto flex items-center justify-end pt-4">
        
        {/* Right Corner Replicated Frosted App QR Card */}
        <div className="flex items-center gap-4 border border-neutral-800/60 bg-[#0d0d0e]/85 backdrop-blur-xl p-3 pr-8 transition-all duration-300 hover:border-neutral-700 rounded-none">
          
          <div className="w-[42px] h-[42px] bg-white p-0.5 flex items-center justify-center shrink-0">
            <img 
              src={qrCodeUrl} 
              alt="CRED App Download QR Verification" 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          
          <div className="text-left flex flex-col justify-center font-sans tracking-tight">
            <span className="text-[15px] font-light text-neutral-300 lowercase leading-[1.1]">
              download
            </span>
            <span className="text-[17px] font-bold text-white uppercase leading-[1.1] tracking-[0.02em]">
              CRED
            </span>
          </div>

        </div>

      </footer>

    </section>
  );
}