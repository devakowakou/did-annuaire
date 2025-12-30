import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RotationConfig {
  x?: number;
  y?: number;
  z?: number;
}

export const useRotation = (config: RotationConfig) => {
  const ref = useRef<THREE.Mesh | THREE.Points>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      if (config.x) ref.current.rotation.x = t * config.x;
      if (config.y) ref.current.rotation.y = t * config.y;
      if (config.z) ref.current.rotation.z = t * config.z;
    }
  });

  return ref;
};
