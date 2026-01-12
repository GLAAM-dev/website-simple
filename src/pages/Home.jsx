import React from 'react';
import Hero from '../components/Hero';
import Resources from '../components/Resources';

export default function Home() {
  return (
    <>
      <Hero />
      <Resources />
      {/* We can add more sections here later, like a News feed or Testimonials */}
    </>
  );
}