import React from 'react';
import { FEATURES } from '../data/content.js';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 border-y border-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            L'infrastructure de confiance de demain
          </h2>
          <p className="text-muted-foreground text-lg">
            DID Annuaire réconcilie la sécurité institutionnelle avec l'innovation décentralisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-secondary/40 border border-muted/50 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
