import React from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useRotation } from '@/shared/hooks/useRotation.js';
import { useParticleSystem } from '@/shared/hooks/useParticleSystem.js';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
}

export const Particles: React.FC<ParticlesProps> = ({ count = 200 }) => {
  const positions = useParticleSystem(count);
  const ref = useRotation({ y: 0.05 });

  return (
    <Points ref={ref as React.RefObject<THREE.Points>} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};
