import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Builder } from './components/Builder';
import { Footer } from './components/Footer';
import { StudioLayout } from './components/studio/StudioLayout';
import { useLocation } from 'react-router-dom';

function App() {
  // In a real app, we'd use proper routing
  const isStudio = window.location.hash === '#studio';

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {isStudio ? (
        <StudioLayout />
      ) : (
        <>
          <Hero />
          <Builder />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;