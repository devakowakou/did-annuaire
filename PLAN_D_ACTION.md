# Plan de Refactoring Clean Architecture

Ce plan détaille les étapes pour passer d'un prototype à une application "Production-Ready" respectant les principes SOLID et SRP.

## Phase 1 : Sécurité & Rigueur (Fondations)
**Objectif** : Empêcher l'écriture de "mauvais code" futur.

- [ ] **TypeScript Strict**
    - Modifier `tsconfig.json` : `strict: true`, `noImplicitAny: true`.
    - Corriger les erreurs de typage immédiates (typages manquants dans `Scene3D` et components).
    - Supprimer ou limiter `allowJs`.
- [ ] **Linting & Formatting**
    - Vérifier/Installer ESLint avec règles strictes (React Hooks, Imports).

## Phase 2 : Restructuration (Architecture)
**Objectif** : Séparer "Ce qui est affiché" (Shared) de "Ce qui est métier" (Features).

- [ ] **Création de la structure de dossiers**
    ```
    src/
    ├── core/           # Config, Constants, Types globaux
    ├── features/       # Modules métiers (Landing, etc.)
    ├── shared/         # Composants réutilisables, Hooks génériques
    │   ├── ui/         # Button, Card, ...
    │   └── 3d/         # Composants Three.js de base (si génériques)
    └── App.tsx
    ```
- [ ] **Migration des composants**
    - Déplacer `Button.tsx` -> `src/shared/ui/Button.tsx`.
    - Déplacer `Hero`, `Features`, `UseCases` -> `src/features/landing/components/`.
    - Déplacer `Scene3D` -> `src/features/landing/components/3d/`.

## Phase 3 : Single Responsibility (Refactoring Code)
**Objectif** : Code pur, testable et découplé.

- [ ] **Extraction des Données (Data Layer)**
    - Créer `src/features/landing/data/content.ts` pour `FEATURES` et `UseCases`.
    - Refactorer les composants pour qu'ils acceptent ces données en props ou via un hook.
- [ ] **Refactor Scene3D (Logic Layer)**
    - Extraire `NetworkNode` et `Particles` dans leurs propres fichiers.
    - Créer `src/shared/hooks/useRotation.ts` pour la logique `useFrame`.
    - Créer `src/shared/hooks/useParticleSystem.ts` pour les calculs mathématiques.
    - Nettoyer `Scene3D.tsx` pour qu'il soit purement déclaratif (composition).
- [ ] **Nettoyage Styles**
    - Déplacer les keyframes de `HierarchyViz` vers `tailwind.config.ts`.

## Phase 4 : Verification
- [ ] **Type Check global** (`tsc --noEmit`).
- [ ] **Build Check** (`vite build`).
- [ ] **Validation Visuelle** (La refonte ne doit pas changer le rendu visuel).
