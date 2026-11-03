import React from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * FlowingRibbon3D Component
 * Renders elegant flowing S-curved 3D ribbons with electric blue & ice blue sheens.
 * Adds visual depth across page sections without distracting motion.
 */
export default function FlowingRibbon3D({
  variant: _variant = 'primary',
  height = '320px',
  opacity = 0.65,
  style = {},
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          transform: 'scale(1.05)',
        }}
      >
        <defs>
          <linearGradient id="sCurveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0860F8" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#3080FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EAF3FF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="sCurveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#071B49" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0860F8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EAF3FF" stopOpacity="0.02" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary S-Curve Ribbon */}
        <path
          d="M-50,180 C240,60 480,260 720,160 C960,60 1200,240 1490,140"
          stroke="url(#sCurveGrad1)"
          strokeWidth="38"
          strokeLinecap="round"
          filter="url(#softGlow)"
          style={{
            animation: prefersReducedMotion ? 'none' : 'waveFlow 16s ease-in-out infinite alternate',
          }}
        />

        {/* Intertwining Secondary S-Curve Ribbon for 3D depth */}
        <path
          d="M-80,120 C180,240 420,40 760,200 C1040,320 1280,100 1520,190"
          stroke="url(#sCurveGrad2)"
          strokeWidth="24"
          strokeLinecap="round"
          style={{
            animation: prefersReducedMotion ? 'none' : 'waveFlow 22s ease-in-out infinite alternate-reverse',
          }}
        />
      </svg>
    </div>
  );
}
