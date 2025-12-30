import React from 'react';
import { Header } from './shared/ui/Header.js';
import { Footer } from './shared/ui/Footer.js';
import { Hero } from './features/landing/components/Hero.js';
import { Features } from './features/landing/components/Features.js';
import { HierarchyViz } from './features/landing/components/HierarchyViz.js';
import { UseCases } from './features/landing/components/UseCases.js';
import { TrustSection } from './features/landing/components/TrustSection.js';

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
