import { Shield, Share2, FileKey, Lock, Globe, Server, Landmark, Building, BadgeCheck } from 'lucide-react';
import { Feature, UseCase } from '../../../core/types';

export const FEATURES: Feature[] = [
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

export const USE_CASES: (UseCase & { icon: typeof Landmark })[] = [
  {
    title: "Secteur Public",
    role: "Administrations",
    description: "Émettez des cartes professionnelles numériques et des attestations de droits vérifiables instantanément par d'autres services.",
    tags: ["Carte Agent", "Attestations", "Mobilité"],
    icon: Landmark
  },
  {
    title: "Grandes Entreprises",
    role: "Corporates",
    description: "Gérez les accès physiques et logiques de vos collaborateurs via un portefeuille d'identité unifié et sécurisé.",
    tags: ["KYC Employé", "Accès Salles", "SSO Décentralisé"],
    icon: Building
  },
  {
    title: "Fournisseurs de Confiance",
    role: "PSCE / TSPs",
    description: "Intégrez DID Annuaire comme brique technologique pour délivrer des identités eIDAS qualifiées à vos clients.",
    tags: ["eIDAS QTSP", "Signature", "Archivage"],
    icon: BadgeCheck
  }
];
