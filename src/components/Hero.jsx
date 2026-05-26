import React from 'react';

export default function Hero() {
  // Ultra clean real high-res QR engine module target tracking mapping link
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://cred.club&color=000000";

  return (
    <section className="relative min-h-[92vh] bg-[#050505] flex flex-col justify-between px-8 py-16 overflow-hidden">
      
      {/* 🔮 Pure CSS Luxury 3D Moving Pillars Simulation - No External Server Load Needed */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-between px-4 md:px-20 pointer-events-none select-none opacity-25">
        <div className="w-[8vw] h-[140vh] bg-gradient-to-b from-neutral-950 via-neutral-800/40 to-neutral-950 blur-[2px] transform -rotate-12 animate-[pulse_6s_infinite_ease-in-out]"></div>
        <div className="w-[10vw] h-[140vh] bg-gradient-to-b from-neutral-950 via-neutral-700/30 to-neutral-950 blur-[4px] transform -rotate-12 animate-[pulse_8s_infinite_ease-in-out] delay-75"></div>
        <div className="w-[7vw] h-[140vh] bg-gradient-to-b from-neutral-950 via-neutral-800/50 to-neutral-950 blur-[1px] transform -rotate-12 animate-[pulse_5s_infinite_ease-in-out] delay-150"></div>
        <div className="w-[12vw] h-[140vh] bg-gradient-to-b from-neutral-950 via-neutral-700/40 to-neutral-950 blur-[6px] transform -rotate-12 animate-[pulse_9s_infinite_ease-in-out] delay-300"></div>
        <div className="w-[9vw] h-[140vh] bg-gradient-to-b from-neutral-950 via-neutral-800/40 to-neutral-950 blur-[2px] transform -rotate-12 animate-[pulse_7s_infinite_ease-in-out] delay-500"></div>
      </div>

      {/* Luxury Radial Branding Gradient Ambient Glow Layers */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] bg-radial from-neutral-900/40 via-transparent to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

      {/* Top Spacer Component */}
      <div className="z-20"></div>

      {/* Center Master Typography Layer (100% matched to image_6e7869.png) */}
      <div className="max-w-5xl mx-auto text-center z-20 my-auto select-none">
        <h1 className="text-5xl md:text-[86px] font-serif font-normal tracking-tight text-white leading-[1.05] lowercase">
          crafted for the <br />
          <span className="block mt-2">creditworthy</span>
        </h1>
        
        {/* Custom description layer matching exactly requested layout line break */}
        <p className="text-zinc-300 text-xs md:text-[15px] max-w-2xl mx-auto tracking-wide font-normal leading-relaxed pt-8 opacity-90">
          CRED is a members-only club that enables the <br className="hidden md:block" />
          trustworthy to make financial progress.
        </p>
      </div>

      {/* Bottom Interface Blocks Layout Wireframe */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 pt-6 border-t border-neutral-900/60 z-20">
        
        {/* Left Side Metadata Indicator Tag */}
        <div className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">
          <div className="w-1 h-3 bg-neutral-800"></div>
          ESTABLISHED MMXX // GLOBAL SECURITY STACK
        </div>

        {/* Right Corner Signature NeoPOP Functional QR Box Container */}
        <div className="flex items-center gap-4 border border-neutral-800 bg-black/90 backdrop-blur-md p-3 pr-6 transition-all duration-300 hover:border-neutral-700 neopop-shadow-white ml-auto md:ml-0">
          
          {/* QR Img Logic Render Block */}
          <div className="w-14 h-14 bg-white p-1 flex items-center justify-center shrink-0 rounded-none overflow-hidden">
            <img 
              src={qrCodeUrl} 
              alt="CRED QR Target Verification Link" 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          
          {/* Sub labels descriptor logic tags */}
          <div className="text-left space-y-0.5">
            <p className="text-[9px] font-black uppercase text-neutral-500 tracking-[0.25em]">SUB-LINK SECURE</p>
            <p className="text-xs font-black text-white uppercase tracking-widest">download CRED</p>
          </div>
        </div>

      </div>

    </section>
  );
}