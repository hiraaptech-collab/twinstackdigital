import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * 3D Connected Minds & Synchronized Tech Stacks Visual
 * Represents co-founders Syeda Hira (Technical Architecture) and Hamna Shahid (Creative Direction)
 * working in continuous synergy with connecting data pulses.
 */
function TwinNodesMesh({ prefersReducedMotion }) {
  const groupRef = useRef();
  const node1Ref = useRef();
  const node2Ref = useRef();
  const connectionLineRef = useRef();

  // Orbital constellation particles around each node (deterministic for purity)
  const satellites = useMemo(() => {
    const list = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 0.9 + ((i * 3) % 5) * 0.08;
      const speed = 0.8 + ((i * 7) % 5) * 0.1;
      const yOffset = (((i * 4) % 7) - 3) * 0.1;
      list.push({ angle, radius, speed, yOffset });
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!prefersReducedMotion) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y += delta * 0.3;

      // Gentle vertical pulsation
      if (node1Ref.current && node2Ref.current) {
        node1Ref.current.position.y = Math.sin(t * 1.6) * 0.12;
        node2Ref.current.position.y = -Math.sin(t * 1.6) * 0.12;

        node1Ref.current.rotation.x += delta * 0.5;
        node2Ref.current.rotation.y += delta * 0.5;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* -------------------------------------------------------------
          Node 1: Technical Architecture & Systems (Syeda Hira)
          ------------------------------------------------------------- */}
      <group ref={node1Ref} position={[-1.25, 0, 0]}>
        {/* Central Core Icosahedron */}
        <mesh>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial
            color="#0860F8"
            metalness={0.85}
            roughness={0.2}
            wireframe={false}
          />
        </mesh>

        {/* Outer Translucent Protective Glass Cage */}
        <mesh>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial
            color="#EAF3FF"
            transparent={true}
            opacity={0.35}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* -------------------------------------------------------------
          Node 2: Creative Direction & Modern UI/UX (Hamna Shahid)
          ------------------------------------------------------------- */}
      <group ref={node2Ref} position={[1.25, 0, 0]}>
        {/* Central Core Octahedron */}
        <mesh>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#071B49"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Outer Translucent Glass Cage */}
        <mesh>
          <octahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial
            color="#3080FF"
            transparent={true}
            opacity={0.4}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* -------------------------------------------------------------
          Harmonic Connection Bridge
          ------------------------------------------------------------- */}
      <group ref={connectionLineRef}>
        {/* Main Connection Bar */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 2.5, 16]} />
          <meshStandardMaterial
            color="#0860F8"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Orbiting Sync Ring */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.45, 0.02, 16, 32]} />
          <meshStandardMaterial
            color="#EAF3FF"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Orbiting Satellites */}
      {satellites.map((s, i) => {
        const isLeft = i % 2 === 0;
        const cx = isLeft ? -1.25 : 1.25;
        const x = cx + Math.cos(s.angle) * s.radius;
        const z = Math.sin(s.angle) * s.radius;

        return (
          <mesh key={i} position={[x, s.yOffset, z]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshStandardMaterial
              color={isLeft ? "#0860F8" : "#071B49"}
              metalness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function NodesFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800' }}>
          SH
        </div>
        <div style={{ width: '60px', height: '2px', background: 'var(--color-primary)', position: 'relative' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-navy)', position: 'absolute', top: '-3px', left: '26px' }} />
        </div>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800' }}>
          HS
        </div>
      </div>
      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy)', marginTop: '0.75rem' }}>
        Syeda Hira &amp; Hamna Shahid
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
        Two Minds &bull; Two Stacks &bull; One Vision
      </div>
    </div>
  );
}

export default function TwinNodesCanvas() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      style={{
        width: '100%',
        height: '240px',
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, rgba(234, 243, 255, 0.7) 0%, rgba(255, 255, 255, 0.95) 100%)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '16px',
          fontSize: '0.72rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-muted)',
          zIndex: 2,
        }}
      >
        Leadership Synergy Visual
      </div>

      <WebGLErrorBoundary fallback={<NodesFallback />}>
        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 4, 3]} intensity={2.2} color="#FFFFFF" />
          <directionalLight position={[-3, -3, -2]} intensity={1.4} color="#3080FF" />
          <TwinNodesMesh prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
