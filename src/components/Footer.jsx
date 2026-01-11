import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-slate-500 text-xs leading-relaxed max-w-md">
            © 2026 Greater Los Angeles Area Mensa. <br />
            Mensa® and the Mensa logo are registered trademarks of Mensa International Limited, 
            used by permission of American Mensa, Ltd. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-6 text-slate-400 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition">Bylaws</a>
            <a href="#" className="hover:text-amber-500 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}