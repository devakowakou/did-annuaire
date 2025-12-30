import React, { useState, useEffect } from 'react';
import { NavItem } from '../../core/types.js';
import { Button } from './Button.js';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo.js';

const NAV_ITEMS: NavItem[] = [
  { label: 'Solution', href: '#features' },
  { label: 'Architecture', href: '#visualization' },
  { label: 'Cas d\'usage', href: '#use-cases' },
  { label: 'Sécurité', href: '#security' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-muted' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <Logo className="w-10 h-10 transition-transform group-hover:scale-105" />
            <span className="font-bold text-xl tracking-tight text-foreground">
              DID<span className="text-muted-foreground font-light">Annuaire</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button variant="outline" size="sm" className="mr-4">Connexion</Button>
            <Button size="sm">Créer une organisation</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-muted">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full">Connexion</Button>
              <Button className="w-full">Créer une organisation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
