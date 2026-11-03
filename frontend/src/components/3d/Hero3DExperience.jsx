import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Procedural Abstract Sculpture: "The Twin Stacks"
 * Represents two synchronized, interconnected technology pillars:
 * - Stack 1 (Electric Blue): Creative Frontend & User Experience
 * - Stack 2 (Deep Navy / Chrome): Relational Backend Architecture & Data Integrity
 * - Interlocking orbital rings & data node connectors symbolizing agency partnership.
 */
function TwinStacksSculpture({ prefersReducedMotion }) {
  const groupRef = useRef();
  const stack1Ref = useRef();
  const stack2Ref = useRef();
  const ringRef = useRef();
  const nodesGroupRef = useRef();

  // Floating ambient particle node positions
  const nodePositions = useMemo(() => {
    const coords = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2 + (Math.sin(i * 1.5) * 0.4);
      const y = (Math.cos(i * 2) * 1.6);
      coords.push([
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ]);
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!prefersReducedMotion) {
      // Gentle constant rotation
      groupRef.current.rotation.y += delta * 0.25;

      // Pointer parallax dampening
      const targetX = state.pointer.y * 0.2;
      const targetY = state.pointer.x * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, delta * 2.5);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, delta * 2.5);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, Math.sin(state.clock.elapsedTime * 1.2) * 0.08, delta * 2);

      // Subtle counter-rotation of orbital ring
      if (ringRef.current) {
        ringRef.current.rotation.z += delta * 0.4;
        ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      }

      // Gentle pulsation of Stack 1 & Stack 2
      if (stack1Ref.current && stack2Ref.current) {
        stack1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
        stack2Ref.current.position.y = -Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
      }

      if (nodesGroupRef.current) {
        nodesGroupRef.current.rotation.y -= delta * 0.15;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* -------------------------------------------------------------
          Stack 1 (Electric Blue: Creative & Frontend Engineering)
          ------------------------------------------------------------- */}
      <group ref={stack1Ref} position={[-0.55, 0, 0]}>
        {/* Main Monolith Pillar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.7, 2.4, 0.45]} />
          <meshStandardMaterial
            color="#0860F8"
            metalness={0.88}
            roughness={0.18}
          />
        </mesh>

        {/* Inner Glass/Ice-Blue Accent Plate */}
        <mesh position={[0, 0, 0.24]}>
          <boxGeometry args={[0.55, 2.1, 0.06]} />
          <meshStandardMaterial
            color="#EAF3FF"
            metalness={0.2}
            roughness={0.1}
            transparent={true}
            opacity={0.85}
          />
        </mesh>

        {/* Top Floating Diamond Crest */}
        <mesh position={[0, 1.45, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#3080FF"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* -------------------------------------------------------------
          Stack 2 (Deep Navy / Polished Chrome: Relational Backend & Data)
          ------------------------------------------------------------- */}
      <group ref={stack2Ref} position={[0.55, 0, 0]}>
        {/* Main Monolith Pillar */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.7, 2.4, 0.45]} />
          <meshStandardMaterial
            color="#071B49"
            metalness={0.92}
            roughness={0.15}
          />
        </mesh>

        {/* Inner Electric-Blue Sheen Plate */}
        <mesh position={[0, 0, 0.24]}>
          <boxGeometry args={[0.55, 2.1, 0.06]} />
          <meshStandardMaterial
            color="#0860F8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        {/* Top Floating Diamond Crest */}
        <mesh position={[0, 1.45, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#071B49"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* -------------------------------------------------------------
          Interlocking Orbital Connector Rings
          ------------------------------------------------------------- */}
      <group ref={ringRef} position={[0, 0, 0]}>
        {/* Outer Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.55, 0.035, 16, 64]} />
          <meshStandardMaterial
            color="#0860F8"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Inner Complementary Ring */}
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[1.75, 0.022, 16, 64]} />
          <meshStandardMaterial
            color="#EAF3FF"
            metalness={0.4}
            roughness={0.2}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* -------------------------------------------------------------
          Floating Constellation Data Nodes
          ------------------------------------------------------------- */}
      <group ref={nodesGroupRef}>
        {nodePositions.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? "#0860F8" : "#EAF3FF"}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Ground Ambient Reflection Disc */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.0, 32]} />
        <meshBasicMaterial
          color="#EAF3FF"
          transparent={true}
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

/**
 * Static 2.5D Fallback for WebGL-unavailable, low-power, or reduced-motion environments
 */
function StaticFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '340px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(234, 243, 255, 0.85) 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative SVG Graphic of Two Connected Stacks */}
      <svg width="180" height="180" viewBox="0 0 200 200" fill="none" style={{ filter: 'drop-shadow(0 12px 24px rgba(8, 96, 248, 0.15))' }}>
        <defs>
          <linearGradient id="stackBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3080FF" />
            <stop offset="100%" stopColor="#0860F8" />
          </linearGradient>
          <linearGradient id="stackNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D2764" />
            <stop offset="100%" stopColor="#071B49" />
          </linearGradient>
          <linearGradient id="ringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0860F8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EAF3FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Orbit Ring */}
        <ellipse cx="100" cy="100" rx="80" ry="28" stroke="url(#ringGlow)" strokeWidth="3" transform="rotate(-25 100 100)" />

        {/* Stack 1 (Frontend / Creative) */}
        <rect x="55" y="45" width="38" height="110" rx="8" fill="url(#stackBlue)" />
        <rect x="62" y="55" width="24" height="90" rx="4" fill="#FFFFFF" fillOpacity="0.25" />

        {/* Stack 2 (Backend / Database) */}
        <rect x="107" y="45" width="38" height="110" rx="8" fill="url(#stackNavy)" />
        <rect x="114" y="55" width="24" height="90" rx="4" fill="#0860F8" fillOpacity="0.5" />

        {/* Data Nodes */}
        <circle cx="74" cy="35" r="7" fill="#0860F8" />
        <circle cx="126" cy="35" r="7" fill="#071B49" />
        <line x1="74" y1="35" x2="126" y2="35" stroke="#0860F8" strokeWidth="2" strokeDasharray="3 3" />
      </svg>

      <div style={{ marginTop: '1.25rem' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-navy)' }}>
          The Twin Stacks Architecture
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
          Creative Frontend &bull; Scalable Relational Backend
        </div>
      </div>
    </div>
  );
}

/**
 * Signature Home Hero 3D Experience Component
 * Embedded directly into HomePage hero section.
 */
export default function Hero3DExperience() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      style={{
        width: '100%',
        height: '380px',
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
      }}
    >
      <WebGLErrorBoundary fallback={<StaticFallback />}>
        <Canvas
          camera={{ position: [0, 0, 4.4], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Studio Lighting Setup */}
          <ambientLight intensity={1.4} />
          <directionalLight position={[4, 5, 4]} intensity={2.4} color="#FFFFFF" />
          <directionalLight position={[-4, -3, -2]} intensity={1.6} color="#3080FF" />
          <pointLight position={[0, 2, 2]} intensity={1.2} color="#EAF3FF" />

          {/* Interactive Procedural 3D Sculpture */}
          <TwinStacksSculpture prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
