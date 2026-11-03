import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

function ServicePrisms({ prefersReducedMotion }) {
  const groupRef = useRef();
  const prism1Ref = useRef();
  const prism2Ref = useRef();
  const prism3Ref = useRef();

  useFrame((state, delta) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.08;

    if (prism1Ref.current) {
      prism1Ref.current.rotation.y += delta * 0.4;
      prism1Ref.current.position.y = Math.sin(t * 1.5) * 0.12;
    }
    if (prism2Ref.current) {
      prism2Ref.current.rotation.x += delta * 0.4;
      prism2Ref.current.position.y = Math.cos(t * 1.5) * 0.12;
    }
    if (prism3Ref.current) {
      prism3Ref.current.rotation.z += delta * 0.3;
      prism3Ref.current.position.y = -Math.sin(t * 1.5) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Prism 1: Frontend & Design */}
      <mesh ref={prism1Ref} position={[-2.2, 0, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#0860F8"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Center Prism 2: Full-Stack Architecture */}
      <mesh ref={prism2Ref} position={[0, 0, 0]}>
        <boxGeometry args={[0.95, 0.95, 0.95]} />
        <meshStandardMaterial
          color="#3080FF"
          metalness={0.9}
          roughness={0.15}
          transparent={true}
          opacity={0.9}
        />
      </mesh>

      {/* Prism 3: E-commerce & Systems */}
      <mesh ref={prism3Ref} position={[2.2, 0, 0]}>
        <dodecahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#EAF3FF"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function Services3DCanvas() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div style={{ width: '100%', height: '100%', opacity: 0.7 }}>
      <WebGLErrorBoundary fallback={<div />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} color="#FFFFFF" />
          <directionalLight position={[-5, -4, -2]} intensity={1.8} color="#0860F8" />
          <ServicePrisms prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
