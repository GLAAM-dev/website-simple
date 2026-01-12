import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Events() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Header for Events */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Community gathering"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-white tracking-tight">
          Chapter <span className="text-amber-500 italic">Events</span>
        </h1>
      </div>

      {/* The "Portal" Card */}
      <main className="flex-grow flex items-center justify-center px-4 -mt-20 relative z-10">
        <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-white/10 p-12 rounded-3xl text-center shadow-2xl">
          <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">🔐</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Member Exclusive Access</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            To protect the privacy of our members and the security of our local gatherings, 
            full event details are hosted exclusively on <span className="text-white font-semibold">Mensa Connect.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.us.mensa.org/Login/?display=login&returnURL=https%3A%2F%2Fwww%2Eus%2Emensa%2Eorg%2Flogin%2F%3FIntendedUrl%3Dhttps%3a%2f%2fconnect.us.mensa.org%2fevents%2fcalendar%3fCommunityKey%3da77db6e6-6fba-4d03-abdb-c334ad6904b9"
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Go to Mensa Connect
            </a>
            <a 
              href="https://members.us.mensa.org/eweb/DynamicPage.aspx?WebCode=forgotpassword" 
              target ="_blank"
              rel="noreferrer"
              className="px-10 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Need Help Logging In?
            </a>
          </div>
          
          <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest">
            Member Credentials Required
          </p>
        </div>
      </main>
    </div>
  );
}