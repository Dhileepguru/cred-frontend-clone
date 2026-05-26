import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Navbar from './components/Navbar';
import Features from './components/Features';

export default function App() {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://cred.club&color=000000";

  return (
    <div className="bg-black min-h-screen text-white antialiased relative">
      <Navbar />
      <Hero />
      <Trust />
      <Features />

      {/* 👑 🎯 THE GLOBAL FIXED APPS QR CARD ENGINE */}
      {/* This layer sits perfectly on top of all scrolling sections globally */}
      <div className="fixed bottom-10 right-6 md:right-16 z-50 pointer-events-auto">
        <div className="flex items-center gap-4 border border-neutral-800/60 bg-[#0d0d0e]/85 backdrop-blur-xl p-3 pr-8 shadow-2xl transition-all duration-300 hover:border-neutral-700 rounded-none">
          
          {/* High Contrast Square QR Frame */}
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
      </div>

    </div>
  );
}