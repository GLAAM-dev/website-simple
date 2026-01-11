import React from 'react';

const categories = [
  {
    title: "Community & Culture",
    links: ["Newsletters", "Awards", "Special Interest Groups", "SIGHT", "Open Forum"]
  },
  {
    title: "Growth & Outreach",
    links: ["Testing", "Scholarships", "Gifted Youth", "Regional Gathering"]
  },
  {
    title: "Governance",
    links: ["Bylaws", "Finance Reports", "Elections", "Motions", "Contacts"]
  }
];

export default function Resources() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Chapter Resources</h2>
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-6">
              <h3 className="text-amber-500 font-sans uppercase tracking-[0.2em] text-sm font-semibold">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 text-lg font-light flex items-center group">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-amber-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}