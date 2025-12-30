import React from 'react';
import { Feature } from '../types';
import { Shield, Share2, FileKey, Lock, Globe, Server } from 'lucide-react';

const FEATURES: Feature[] = [
  {
    title: "Souveraineté des Données",
    description: "Vos utilisateurs possèdent leurs données. Aucune base de données centrale vulnérable (Honeypot). Architecture Zero-Knowledge.",
    icon: Shield,
  },
  {
    title: "Interopérabilité Totale",
    description: "Conforme aux standards W3C DID Core et VC Data Model v2. Compatible avec les portefeuilles d'identité du marché.",
    icon: Share2,
  },
  {
    title: "Gouvernance Granulaire",
    description: "Système de rôles et permissions multi-signatures pour la gestion des clés d'organisation et des émissions de preuves.",
    icon: FileKey,
  },
  {
    title: "Sécurité Cryptographique",
    description: "Signatures Ed25519 et courbes elliptiques P-256. Rotation de clés automatisée et révocation temps réel.",
    icon: Lock,
  },
  {
    title: "Ancrage Blockchain Hybride",
    description: "Support pour EBSI, Polygon ID et ancrage privé. Flexibilité totale sur le choix du ledger de vérification.",
    icon: Globe,
  },
  {
    title: "API Enterprise-Ready",
    description: "SDK TypeScript complet, Webhooks, et intégration OIDC pour une transition fluide depuis les systèmes legacy.",
    icon: Server,
  },
];

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