import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#0860F8"
        wireframe={true}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function TechnicalCanvas() {
  return (
    <div
      style={{
        width: '100%',
        height: '160px',
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, #EAF3FF 0%, #FFFFFF 100%)',
        border: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '12px',
          fontSize: '0.72rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          zIndex: 2,
        }}
      >
        Three.js / R3F Engine Ready
      </div>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <RotatingGeometry />
      </Canvas>
    </div>
  );
}
