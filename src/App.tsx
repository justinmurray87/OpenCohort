import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Community } from './components/Community';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <Navigation />
        <Hero />
      </header>
      <Features />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;