import React from 'react';
import { Link } from 'react-router-dom'; // <--- Don't forget this little darling!

const areas = [
  {
    id: 'mid-city',
    name: 'Mid-City',
    code: 'MC',
    desc: 'The urban heart of Los Angeles. Where culture and conversation collide.',
    gradient: 'from-purple-900 to-blue-900'
  },
  {
    id: 'coastal',
    name: 'Coastal',
    code: 'Cst',
    desc: 'From Santa Monica to the South Bay. Intellect with an ocean view.',
    gradient: 'from-cyan-900 to-blue-800'
  },
  {
    id: 'san-fernando-valley',
    name: 'San Fernando Valley',
    code: 'SFV',
    desc: 'The iconic valley. A sprawling hub of activity and hidden gems.',
    gradient: 'from-emerald-900 to-teal-900'
  },
  {
    id: 'east-la-county',
    name: 'East L.A. County',
    code: 'ELAC',
    desc: 'Pasadena, SGV, and beyond. Historic charm meets modern minds.',
    gradient: 'from-rose-900 to-pink-900'
  },
  {
    id: 'hi-desert',
    name: 'Hi-Desert',
    code: 'HiD',
    desc: 'Palmdale, Lancaster, and the open skies. Curiosity has no boundaries.',
    gradient: 'from-amber-900 to-orange-900'
  },
  {
    id: 'inland-empire',
    name: 'Inland Empire',
    code: 'IE',
    desc: 'Riverside and San Bernardino counties. Our fastest growing community.',
    gradient: 'from-indigo-900 to-violet-900'
  }
];

export default function Areas() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-12">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Geography of <span className="text-amber-500 italic">Genius</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg">
          GLAAM is massive. To make our metropolis feel like a neighborhood, we are divided into six distinct regions. Find your tribe below.
        </p>
      </div>

      {/* The Area Grid Loop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {areas.map((area) => (
            <Link 
              to={`/${area.id}`} 
              key={area.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${area.gradient} p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block`}
            >
              {/* Background Code Watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white select-none group-hover:opacity-20 transition-opacity">
                {area.code}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">{area.name}</h3>
                <p className="text-slate-200 text-sm mb-6 leading-relaxed opacity-80 group-hover:opacity-100">
                  {area.desc}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-white transition-all">
                  Explore Region &rarr;
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* The "Map & Utility" Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-3xl shrink-0">
              🗺️
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Boundary Map</h3>
              <p className="text-slate-400 text-sm mb-4">View a high-resolution map of all GLAAM territories and borders.</p>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                Open Interactive Map
              </button>
            </div>
          </div>

          {/* ZIP Code Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-400 text-3xl shrink-0">
              📮
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">ZIP Code Directory</h3>
              <p className="text-slate-400 text-sm mb-4">Not sure which area you fall into? Check the official ZIP code listing.</p>
              <button className="text-amber-500 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                Download PDF Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}