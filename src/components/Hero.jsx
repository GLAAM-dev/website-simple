import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-slate-950 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambient Glows - purely decorative "vibes" */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* The Hook */}
        <p className="text-amber-400 font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">
          Est. 1965 • Greater Los Angeles Area
        </p>
        
        {/* The Headline - Big, Serif, Authority */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-slate-100 mb-8 leading-tight tracking-tight">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic pr-2">Brilliance</span> 
          Finds <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500 italic">Belonging.</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
          Greater Los Angeles Area Mensa (GLAAM) is the Mensa local group for Los Angeles, Kern, Inyo, and Mono Counties, most of San Bernardino County, and parts of Ventura, Santa Barbara, and Riverside Counties.
        </p>
        
        {/* The Bento Grid Navigation - Modern Action Area */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Social */}
          <div className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] text-left cursor-pointer">
            <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
              <span className="text-2xl">🍷</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans">Social Events</h3>
            <p className="text-slate-400 text-sm">From dining out to escape rooms. See what's happening this week.</p>
          </div>

          {/* Card 2: Intellectual */}
          <div className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] text-left cursor-pointer">
            <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans">Special Interest</h3>
            <p className="text-slate-400 text-sm">Debate, gaming, literature, and science. Find your niche.</p>
          </div>

          {/* Card 3: Join */}
          <div className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl hover:border-slate-500 transition-all duration-300 text-left cursor-pointer">
            <div className="absolute top-4 right-4">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-sans">Join Mensa</h3>
            <p className="text-slate-400 text-sm mb-4">Qualify via test or prior evidence. Take the leap.</p>
            <span className="text-amber-400 text-sm font-semibold group-hover:underline decoration-amber-400 underline-offset-4">Start Process &rarr;</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}