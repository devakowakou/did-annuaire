import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HierarchyViz } from './components/HierarchyViz';
import { UseCases } from './components/UseCases';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <HierarchyViz />
        <UseCases />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;