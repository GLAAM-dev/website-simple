import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

// The "Recipe Book" - All your area data lives here
const areaData = {
  'mid-city': {
    title: 'Mid-City',
    mapImage: '/mid-city.jpg', // Make sure this file is in your /public folder!
    description: 'The urban heart of Los Angeles. Where culture and conversation collide.',
    gradient: 'from-purple-900 via-slate-900 to-slate-950',
    accent: 'text-purple-400'
  },
  'coastal': {
    title: 'Coastal',
    mapImage: '/coastal.jpg',
    description: 'From Santa Monica to the South Bay. Intellect with an ocean view.',
    gradient: 'from-cyan-900 via-slate-900 to-slate-950',
    accent: 'text-cyan-400'
  },
  'san-fernando-valley': {
    title: 'San Fernando Valley',
    mapImage: '/sfv.jpg',
    description: 'The iconic valley. A sprawling hub of activity and hidden gems.',
    gradient: 'from-emerald-900 via-slate-900 to-slate-950',
    accent: 'text-emerald-400'
  },
  'east-la-county': {
    title: 'East L.A. County',
    mapImage: '/elac.jpg',
    description: 'Pasadena, SGV, and beyond. Historic charm meets modern minds.',
    gradient: 'from-rose-900 via-slate-900 to-slate-950',
    accent: 'text-rose-400'
  },
  'hi-desert': {
    title: 'Hi-Desert',
    mapImage: '/hi-desert.jpg',
    description: 'Palmdale, Lancaster, and the open skies. Curiosity has no boundaries.',
    gradient: 'from-amber-900 via-slate-900 to-slate-950',
    accent: 'text-amber-400'
  },
  'inland-empire': {
    title: 'Inland Empire',
    mapImage: '/ie.jpg',
    description: 'Riverside and San Bernardino counties. Our fastest growing community.',
    gradient: 'from-indigo-900 via-slate-900 to-slate-950',
    accent: 'text-indigo-400'
  }
};

export default function AreaTemplate() {
  const { slug } = useParams(); // This grabs "mid-city" from the URL
  const area = areaData[slug];

  // If someone types a garbage URL, send 'em back to the map list
  if (!area) {
    return <Navigate to="/areas" replace />;
  }

  return (
    <div className={`min-h-screen bg-slate-950 bg-gradient-to-b ${area.gradient}`}>
      
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
          {area.title}
        </h1>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
          {area.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Two-Column Layout: Map & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: The Map (Takes up 2/3 space) */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-2">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={area.mapImage} 
                  alt={`Map of ${area.title}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
            <p className="mt-4 text-center text-slate-400 text-sm italic">
              Official boundaries for {area.title}
            </p>
          </div>

          {/* Right Column: Leadership & Actions */}
          <div className="space-y-6">
            
            {/* Leadership Card */}
            <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">Leadership</h3>
              <p className="text-slate-400 mb-6">
                Have questions about this area? Reach out to your local Area Secretary or Delegate.
              </p>
              <Link to="/leadership" className={`block w-full py-3 text-center rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-all border border-white/5 hover:border-white/20 ${area.accent}`}>
                Contact Representative
              </Link>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-900/80 border border-white/10 p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Local Activity</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <span className={`w-2 h-2 rounded-full mr-3 ${area.accent.replace('text', 'bg')}`}></span>
                  Monthly Dinners
                </li>
                <li className="flex items-center text-slate-300">
                  <span className={`w-2 h-2 rounded-full mr-3 ${area.accent.replace('text', 'bg')}`}></span>
                  Social Gatherings
                </li>
              </ul>
            </div>
             
             {/* Back Button */}
             <Link to="/areas" className="block text-center text-slate-500 hover:text-white transition-colors text-sm uppercase tracking-widest mt-8">
               &larr; Back to All Areas
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}