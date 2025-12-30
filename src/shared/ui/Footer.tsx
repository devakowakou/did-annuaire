import React from 'react';
import { Button } from './Button.js';
import { Logo } from './Logo.js';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-muted/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">Prêt à décentraliser votre identité ?</h3>
            <p className="text-muted-foreground">Rejoignez les administrations et entreprises qui construisent le web de confiance.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="lg">Contact Ventes</Button>
            <Button size="lg">Commencer</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-muted/30">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-6 h-6" />
              <span className="font-bold text-foreground">DID Annuaire</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Infrastructure d'identité souveraine pour l'Europe numérique.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-primary">Sécurité</a></li>
              <li><a href="#" className="hover:text-primary">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Ressources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Documentation W3C</a></li>
              <li><a href="#" className="hover:text-primary">API Reference</a></li>
              <li><a href="#" className="hover:text-primary">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-primary">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary">CGU</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-muted/30">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DID Annuaire. Tous droits réservés. Conçu avec rigueur.
          </p>
        </div>
      </div>
    </footer>
  );
};
