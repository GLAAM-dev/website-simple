import React from 'react';

// Let's list out those subgroups just like in your picture
const subgroups = [
  "Mid-City",
  "Coastal",
  "San Fernando Valley",
  "East LA County",
  "Hi-Desert",
  "Inland Empire"
];

export default function WelcomeSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Welcome & Value Props */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Welcome to GLAAM
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Greater Los Angeles Area Mensa is the local home for brilliant minds across the Southland. From escape rooms to fine dining, we offer a place to belong.
            </p>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                    {/* Simple Calendar Icon */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Monthly Events</h3>
                  <p className="mt-2 text-base text-gray-500">From dinners and movies to arcade games. View the calendar to join one near you.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                    {/* Simple Star Icon */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Regional Gathering</h3>
                  <p className="mt-2 text-base text-gray-500">An annual event drawing people from all over the country on President's Day weekend.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Subgroups List */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
              Subgroups
            </h3>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {subgroups.map((group) => (
                  <li key={group}>
                    <a href="#" className="block hover:bg-gray-50 transition duration-150 ease-in-out">
                      <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                        <div className="text-sm font-medium text-blue-600 truncate">{group}</div>
                        <div className="ml-2 flex-shrink-0">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}