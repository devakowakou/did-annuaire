# DID Annuaire

**Infrastructure d'Identité Décentralisée de Confiance**

Application React moderne pour la gestion d'identités décentralisées (DID) conforme aux standards W3C, destinée aux administrations et entreprises.

---

## 🚀 Démarrage Rapide

### Prérequis
- **Node.js** 18+ 
- **pnpm** 8+

### Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Prévisualiser le build
pnpm preview
```

L'application sera accessible sur `http://localhost:3000`

---

## 📁 Architecture

```
src/
├── core/              # Configuration, types globaux, constantes
├── features/          # Modules métiers organisés par feature
│   └── landing/       # Page d'accueil
│       ├── components/
│       ├── data/
│       └── ...
├── shared/            # Composants et hooks réutilisables
│   ├── ui/            # Composants UI génériques
│   └── hooks/         # Custom hooks
└── App.tsx
```

**Principes appliqués :**
- ✅ Clean Architecture
- ✅ Single Responsibility Principle (SRP)
- ✅ TypeScript Strict Mode
- ✅ Feature-Sliced Design

---

## 🛠️ Stack Technique

- **React 19** - Framework UI
- **TypeScript** - Typage strict
- **Vite** - Build tool
- **Three.js** + **React Three Fiber** - Visualisations 3D
- **Tailwind CSS** - Styling
- **pnpm** - Package manager

---

## 📝 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Démarre le serveur de développement |
| `pnpm build` | Build de production |
| `pnpm preview` | Prévisualise le build de production |

---

## 🏗️ Standards & Conformité

- **W3C DID Core** - Identifiants décentralisés
- **W3C Verifiable Credentials v2** - Credentials vérifiables
- **eIDAS 2.0** - Réglementation européenne
- **TypeScript Strict** - Sécurité du typage

---

## 📄 License

Voir [LICENSE.md](LICENSE.md)

---

**Conçu avec rigueur pour les environnements critiques.**
