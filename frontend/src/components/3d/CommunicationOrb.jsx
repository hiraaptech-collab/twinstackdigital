import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

function OrbMesh({ prefersReducedMotion }) {
  const orbRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    const t = state.clock.elapsedTime;
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(t * 1.5) * 0.08;
      orbRef.current.rotation.y += delta * 0.4;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.6;
      ring1Ref.current.rotation.y += delta * 0.4;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Luminous Communication Orb */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#0860F8"
          metalness={0.9}
          roughness={0.12}
        />
      </mesh>

      {/* Orbiting Signal Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.05, 0.02, 16, 48]} />
        <meshStandardMaterial
          color="#EAF3FF"
          metalness={0.3}
          roughness={0.2}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* Orbiting Signal Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.2, 0.015, 16, 48]} />
        <meshStandardMaterial
          color="#3080FF"
          metalness={0.8}
          roughness={0.2}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function OrbFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'var(--gradient-primary)',
          boxShadow: '0 0 20px rgba(8, 96, 248, 0.35)',
        }}
      />
    </div>
  );
}

export default function CommunicationOrb() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      style={{
        width: '100%',
        height: '160px',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, rgba(234, 243, 255, 0.5) 0%, rgba(255, 255, 255, 0.9) 100%)',
        border: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
        marginBottom: '1.5rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '12px',
          fontSize: '0.7rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-primary)',
          zIndex: 2,
        }}
      >
        Live Inquiries Signal Beacon
      </div>

      <WebGLErrorBoundary fallback={<OrbFallback />}>
        <Canvas
          camera={{ position: [0, 0, 3.2], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 4, 3]} intensity={2.2} color="#FFFFFF" />
          <directionalLight position={[-3, -2, -2]} intensity={1.5} color="#3080FF" />
          <OrbMesh prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
