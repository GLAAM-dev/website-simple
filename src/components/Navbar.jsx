import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Official Branding Area */}
          <div className="flex items-center gap-6">
            <img 
              src="/logo.png" // No need for ./ or ../, just the slash!
              alt="Mensa Logo" 
              className="h-10 w-auto object-contain" 
            />
            <div className="h-8 w-[1px] bg-slate-700 hidden sm:block"></div>
            <span className="text-xl font-light tracking-[0.15em] text-slate-100 hidden sm:block">
              GLAAM
            </span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-10">
            {['Events', 'Intelligence', 'Community'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
            <button className="px-8 py-2.5 rounded-full border border-blue-500/50 text-blue-400 font-medium text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}