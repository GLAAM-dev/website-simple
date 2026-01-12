import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Now a Link back to home, darlin' */}
          <Link to="/" className="flex items-center gap-6 group">
            <img 
              src="/logo.png" 
              alt="Mensa Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="h-8 w-[1px] bg-slate-700 hidden sm:block"></div>
            <span className="text-xl font-light tracking-[0.15em] text-slate-100 hidden sm:block group-hover:text-white transition-colors">
              GLAAM
            </span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link to="/events" className="text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em]">
              Events
            </Link>
            <Link to="/intelligence" className="text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em]">
              Intelligence
            </Link>
            <Link to="/areas" className="text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em]">
              Areas
            </Link>
            
            <a 
              href="https://www.us.mensa.org/login/" 
              target="_blank" 
              className="px-8 py-2.5 rounded-full border border-blue-500/50 text-blue-400 font-medium text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Member Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}