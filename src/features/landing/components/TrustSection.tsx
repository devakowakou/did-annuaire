import React from 'react';
import { Lock, FileCheck, Cookie, Server } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-[#050b1d] border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Sécurité par conception,<br/>
              Conformité par défaut.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nous ne faisons aucun compromis sur la sécurité. DID Annuaire est audité et conçu pour résister aux menaces les plus avancées.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Lock className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">MFA Obligatoire</h4>
                  <p className="text-sm text-muted-foreground mt-1">Authentification forte FIDO2 / WebAuthn pour tous les administrateurs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileCheck className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Audit Logs</h4>
                  <p className="text-sm text-muted-foreground mt-1">Traçabilité complète des actions, signée cryptographiquement.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Cookie className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Protection des Données</h4>
                  <p className="text-sm text-muted-foreground mt-1">Cookies HttpOnly, SameSite Strict, CSP strictes et headers de sécurité.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Server className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Infrastructure Isolée</h4>
                  <p className="text-sm text-muted-foreground mt-1">Déploiement en conteneurs isolés avec encryption au repos (AES-256).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/40 rounded-xl border border-muted p-8 font-mono text-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-secondary border-b border-muted flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-xs text-muted-foreground">audit_log.json</span>
            </div>
            <div className="mt-6 text-muted-foreground/80 space-y-2">
              <p><span className="text-blue-400">"timestamp"</span>: <span className="text-green-400">"2023-10-27T10:00:00Z"</span>,</p>
              <p><span className="text-blue-400">"event"</span>: <span className="text-green-400">"DID_CREATED"</span>,</p>
              <p><span className="text-blue-400">"actor"</span>: <span className="text-purple-400">"admin_core_01"</span>,</p>
              <p><span className="text-blue-400">"resource"</span>: <span className="text-green-400">"did:web:gouv:finances"</span>,</p>
              <p><span className="text-blue-400">"signature"</span>: <span className="text-orange-400">"3045022100e4..."</span></p>
              <p className="pl-4 text-muted-foreground/40">// Cryptographically verifiable proof</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
