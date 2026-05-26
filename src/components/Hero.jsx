import React from 'react';
import heroVideo from '../assets/Video/Hero-Bg.mp4';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-black flex flex-col justify-between px-6 md:px-16 pt-8 pb-16 overflow-hidden select-none">

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-lighten opacity-80">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-1"></div>

      <div className="z-10 h-4"></div>

      <main className="max-w-7xl mx-auto text-center z-10 my-auto py-6 flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center select-none text-white font-serif tracking-tight text-center">
          <span className="text-4xl md:text-[106px] font-normal leading-none lowercase opacity-95">
            crafted for the
          </span>
          <span className="text-4xl md:text-[106px] font-normal leading-none lowercase opacity-95">
            creditworthy
          </span>
        </h1>

        <p className="text-zinc-400 text-xs md:text-[15px] max-w-2xl mx-auto tracking-wide font-normal leading-relaxed pt-14 md:pt-[64px] opacity-90 font-sans">
          CRED is a members-only club that enables the <br />
          trustworthy to make financial progress.
        </p>
      </main>

      <footer className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 mb-6 md:mb-10 pt-4">
        <div className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase font-sans">
          <div className="w-1 h-3 bg-neutral-800"></div>
          ESTABLISHED MMXX // GLOBAL SECURITY STACK
        </div>
        {/* Box removed from here and shifted to global view */}
        <div className="w-10 h-10 ml-auto md:hidden"></div>
      </footer>

    </section>
  );
}