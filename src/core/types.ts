import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface UseCase {
  title: string;
  role: string;
  description: string;
  tags: string[];
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  VISUALIZATION = 'visualization',
  USE_CASES = 'use-cases',
  SECURITY = 'security',
}
