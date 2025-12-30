import React from 'react';
import { Canvas } from '@react-three/fiber';
import { NetworkNode } from './NetworkNode.js';
import { Particles } from './Particles.js';

export const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        <NetworkNode />
        <Particles />
      </Canvas>
    </div>
  );
};
