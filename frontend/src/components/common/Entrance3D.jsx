import React from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const ENTRANCE_DELAYS = {
  hero: 0.1,
  section: 0.2,
  card: 0.3,
};

const Entrance3D = ({ children, type = 'fade-up' }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (typeof window === 'undefined' || !window.gsap) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.async = true;
      script.onload = () => {};
      document.head.appendChild(script);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    if (!window.gsap) return;

    const elements = typeof children === 'string'
      ? [document.querySelector(children)]
      : typeof children === 'function'
        ? []
        : React.Children.toArray(children).filter(c => c && c.props);

    if (type === 'fade-up') {
      elements.forEach((el, i) => {
        window.gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * ENTRANCE_DELAYS.card,
          ease: 'power3.out',
        });
      });
    } else if (type === 'fade-in') {
      elements.forEach((el, i) => {
        window.gsap.from(el, {
          opacity: 0,
          duration: 0.5,
          delay: i * ENTRANCE_DELAYS.card,
          ease: 'power2.out',
        });
      });
    } else if (type === 'scale-in') {
      elements.forEach((el, i) => {
        window.gsap.from(el, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: i * ENTRANCE_DELAYS.card,
          ease: 'back.out(1.7)',
        });
      });
    }
  }, [children, type, prefersReducedMotion]);

  return <>{children}</>;
};

export default Entrance3D;