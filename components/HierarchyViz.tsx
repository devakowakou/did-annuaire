import React from 'react';
import { Building2, AppWindow, Fingerprint, ArrowDown } from 'lucide-react';

export const HierarchyViz: React.FC = () => {
  return (
    <section id="visualization" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                    Une hiérarchie de confiance claire
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Notre modèle de données structure la confiance depuis l'entité légale jusqu'à l'identifiant unique, garantissant une traçabilité parfaite.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                        <div>
                            <h4 className="font-semibold text-foreground">Organisation Racine</h4>
                            <p className="text-sm text-muted-foreground">L'entité légale (Entreprise, Ministère) vérifiée par un tiers de confiance (PSCE).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                        <div>
                            <h4 className="font-semibold text-foreground">Applications & Services</h4>
                            <p className="text-sm text-muted-foreground">Des sous-identités déléguées pour chaque service numérique ou département.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                        <div>
                            <h4 className="font-semibold text-foreground">DID (Identifiant Décentralisé)</h4>
                            <p className="text-sm text-muted-foreground">L'identifiant unique W3C resolvable, contenant les clés publiques.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Visual - CSS Construction */}
            <div className="relative flex flex-col items-center justify-center p-8 bg-secondary/20 rounded-3xl border border-dashed border-muted">
                
                {/* Org Node */}
                <div className="relative z-10 w-64 p-4 bg-secondary border border-primary/40 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.15)] flex items-center gap-4 animate-bounce-slow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Building2 className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs text-accent font-mono uppercase">did:web:org</div>
                        <div className="font-bold text-foreground">Ministère</div>
                    </div>
                </div>

                {/* Connector */}
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary/50 to-muted my-2"></div>
                <ArrowDown className="w-4 h-4 text-muted-foreground mb-2" />

                {/* App Nodes */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="p-3 bg-secondary/80 border border-muted rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-muted rounded">
                            <AppWindow className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="text-sm text-muted-foreground">Portail RH</div>
                    </div>
                    <div className="p-3 bg-secondary/80 border border-muted rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-muted rounded">
                            <AppWindow className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="text-sm text-muted-foreground">Finance App</div>
                    </div>
                </div>

                {/* Connector */}
                <div className="h-12 w-0.5 bg-gradient-to-b from-muted to-accent/50 my-2"></div>
                <ArrowDown className="w-4 h-4 text-accent mb-2" />

                {/* DID Result */}
                <div className="relative z-10 w-72 p-4 bg-background border border-accent/40 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.1)] flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Fingerprint className="text-accent w-6 h-6" />
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-[10px] text-muted-foreground font-mono mb-1">Generated Credential</div>
                        <div className="font-mono text-xs text-accent truncate">vc_jwt_8923...92a</div>
                    </div>
                </div>

                {/* Background Grid visual */}
                <div className="absolute inset-0 z-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(-2%); }
            50% { transform: translateY(2%); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};