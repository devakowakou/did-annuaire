import React from 'react';
import { USE_CASES } from '../data/content.js';
import { Button } from '../../../shared/ui/Button.js';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Adapté aux environnements critiques</h2>
          <p className="text-muted-foreground">Une plateforme unique pour des besoins multiples.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <div key={idx} className="flex flex-col h-full p-8 rounded-2xl bg-secondary/20 border border-muted hover:border-primary/30 transition-colors">
              <div className="mb-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-muted">
                <useCase.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-1">{useCase.title}</h3>
              <span className="text-xs font-mono text-primary mb-4">{useCase.role}</span>
              <p className="text-muted-foreground mb-8 flex-grow">{useCase.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {useCase.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground border border-muted/50">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">Explorer</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
