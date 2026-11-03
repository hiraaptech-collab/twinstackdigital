import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

function ProjectsSculpture({ prefersReducedMotion }) {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y += delta * 0.25;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(t * 0.8) * 0.35 + 0.6;
      ring1Ref.current.rotation.y += delta * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.cos(t * 0.8) * 0.35 - 0.6;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.5;
      coreRef.current.position.y = Math.sin(t * 1.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Floating Polyhedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#0860F8"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Outer Orbit Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#EAF3FF"
          metalness={0.5}
          roughness={0.2}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* Outer Orbit Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.1, 0.025, 16, 64]} />
        <meshStandardMaterial
          color="#3080FF"
          metalness={0.9}
          roughness={0.1}
          transparent={true}
          opacity={0.65}
        />
      </mesh>
    </group>
  );
}

export default function Projects3DCanvas() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div style={{ width: '100%', height: '100%', opacity: 0.65 }}>
      <WebGLErrorBoundary fallback={<div />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFFFFF" />
          <directionalLight position={[-4, -3, -2]} intensity={1.5} color="#0860F8" />
          <ProjectsSculpture prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
