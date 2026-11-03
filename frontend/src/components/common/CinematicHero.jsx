import React, { useRef } from 'react';
import useGsapContext from '../../hooks/useGsapContext';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * CinematicHero Component
 * Full-width, photographic background with subtle blur and elegant blue/navy overlay.
 * Features centered signature-inspired editorial serif headings with 3D zoom-in text entrance,
 * floating 3D elements with depth and perspective, and layered parallax.
 */
export default function CinematicHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  children, // 3D Canvas / Elements
  actions,  // Buttons
  minHeight = '650px',
}) {
  const containerRef = useRef(null);
  const textContentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // GSAP 3D zoom-in entrance animation
  useGsapContext((gsap) => {
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Set 3D perspective on parent
    if (textContentRef.current) {
      gsap.set(textContentRef.current, { perspective: 1200, transformStyle: 'preserve-3d' });
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 40,
          rotateX: 18,
          z: -80,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          z: 0,
          duration: 1.25,
        }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 24,
          z: -40,
        },
        {
          opacity: 1,
          y: 0,
          z: 0,
          duration: 0.9,
        },
        '-=0.7'
      );
    }

    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        },
        '-=0.5'
      );
    }
  }, containerRef);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#071B49',
        color: '#FFFFFF',
      }}
    >
      {/* 1. Photographic Background with Subtle Blur & Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) brightness(0.65)',
          transform: 'scale(1.08)',
          zIndex: 0,
        }}
      />

      {/* 2. Elegant Deep Navy & Electric Blue Gradient Sheen */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(8, 96, 248, 0.28) 0%, rgba(7, 27, 73, 0.84) 65%, #071B49 100%)',
          zIndex: 1,
        }}
      />

      {/* 3. 3D WebGL Canvas Layer (Behind or beside text) */}
      {children && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          {children}
        </div>
      )}

      {/* 4. Hero Content Layer */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div
          ref={textContentRef}
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {badge && (
            <span
              className="glass-pill"
              style={{
                marginBottom: '1.25rem',
                backgroundColor: 'rgba(234, 243, 255, 0.15)',
                color: '#EAF3FF',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
              }}
            >
              {badge}
            </span>
          )}

          <h1
            ref={titleRef}
            className="hero-editorial-title"
            style={{
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

{subtitle && (
            <p
              ref={subtitleRef}
              className="hero-editorial-subtitle"
              style={{
                marginBottom: actions ? '2.5rem' : 0,
                }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}

          {actions && (
            <div
              ref={actionsRef}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* 5. Bottom Architectural Fade Transition into Content */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to top, var(--color-soft-gray) 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
