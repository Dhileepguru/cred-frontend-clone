import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: 'about CRED', href: '#' },
      { name: 'how it works', href: '#' },
      { name: 'security stack', href: '#' },
    ],
    careers: [
      { name: 'careers', href: '#' },
      { name: 'culture', href: '#' },
      { name: 'tech at CRED', href: '#' },
    ],
    legal: [
      { name: 'privacy policy', href: '#' },
      { name: 'terms & conditions', href: '#' },
      { name: 'trust rules', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'instagram', href: '#' },
    { name: 'twitter', href: '#' },
    { name: 'linkedin', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#050505] text-neutral-400 font-sans px-6 md:px-16 lg:px-24 pt-20 pb-28 border-t border-neutral-900/60 select-none">
        <hr></hr>
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* 📋 Top Framework: Links Grid Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-start">
          
          {/* Logo & Vision Accent */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-white text-2xl font-black tracking-[0.2em] uppercase font-serif">
              CRED
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 tracking-wide leading-relaxed max-w-[220px]">
              building a trusted ecosystem for the creditworthy.
            </p>
          </div>

          {/* Column 1: About */}
          <div className="space-y-5">
            <h4 className="text-xs md:text-sm text-neutral-600 font-black tracking-[0.25em] uppercase">about</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 lowercase tracking-wide font-normal">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Careers */}
          <div className="space-y-5">
            <h4 className="text-xs md:text-sm text-neutral-600 font-black tracking-[0.25em] uppercase">careers</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {footerLinks.careers.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 lowercase tracking-wide font-normal">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal / Policy */}
          <div className="space-y-5">
            <h4 className="text-xs md:text-sm text-neutral-600 font-black tracking-[0.25em] uppercase">policy</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 lowercase tracking-wide font-normal">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 🛠️ Bottom Framework: Social Links & Copyright Pipeline */}
        <div className="pt-8 border-t border-neutral-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          {/* Copyright Tracker */}
          <div className="text-xs tracking-widest text-neutral-600 font-mono uppercase">
            copyright © {currentYear} cred. all rights reserved.
          </div>

          {/* Social Nav Matrix */}
          <div className="flex items-center gap-6 text-sm md:text-base font-medium">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="text-neutral-500 hover:text-white tracking-widest transition-colors duration-200 lowercase"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}