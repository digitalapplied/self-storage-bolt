import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FacilityShowcase from './components/FacilityShowcase';
import UnitOptions from './components/UnitOptions';
import Features from './components/Features';
import Location from './components/Location';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FacilityShowcase />
      <UnitOptions />
      <Features />
      <Location />
      <CTA />
    </div>
  );
}

export default App;