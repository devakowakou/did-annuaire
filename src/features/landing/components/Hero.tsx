import React from 'react';
import { Button } from '../../../shared/ui/Button.js';
import { Scene3D } from './3d/Scene3D.js';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 lg:pt-0 min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-muted-foreground/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Conforme W3C Verifiable Credentials v2</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            L'Identité Numérique <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
              Décentralisée de Confiance
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Infrastructure souveraine pour administrations et entreprises. 
            Émettez, vérifiez et gérez des identifiants numériques (DID) avec une sécurité de niveau institutionnel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Créer une organisation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Documentation Technique
            </Button>
          </div>

          <div className="pt-8 border-t border-muted/50 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Compatible eIDAS 2.0</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Open Source Core</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Hébergement SecNumCloud</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Audit Logs Immuables</span>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-[600px] w-full relative">
          <Scene3D />
        </div>
      </div>
    </section>
  );
};
