import React from 'react';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRotation } from '@/shared/hooks/useRotation.js';
import * as THREE from 'three';

export const NetworkNode: React.FC = () => {
  const meshRef = useRotation({ x: 0.2, y: 0.3 });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef as React.RefObject<THREE.Mesh>}>
        <icosahedronGeometry args={[2.5, 0]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#3b82f6"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};
