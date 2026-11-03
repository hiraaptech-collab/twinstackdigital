import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const ScrollReveal = ({
  rootMargin = '0px',
  threshold = 0.1,
  once = true,
  disabled = false,
  children,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rafRef = useRef();
  const rafIdRef = useRef();

  const revealElements = Array.isArray(children)
    ? children
    : [children];

  useEffect(() => {
    if (prefersReducedMotion || disabled) {
      revealElements.forEach((el) => {
        if (el.current) {
          el.current.style.opacity = '1';
          el.current.style.transform = 'translateY(0)';
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            rafRef.current = requestAnimationFrame(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              entry.target.style.transition = 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            });

            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin, threshold }
    );

    revealElements.forEach((el) => {
      if (el.current) {
        el.current.style.opacity = '0';
        el.current.style.transform = 'translateY(20px)';
        el.current.style.transition = 'none';
        observer.observe(el.current);
      }
    });

    rafIdRef.current = requestAnimationFrame(() => {
      revealElements.forEach((el) => {
        if (el.current) {
          el.current.style.opacity = '0';
          el.current.style.transform = 'translateY(20px)';
          el.current.style.transition = 'none';
        }
      });
    });

    return () => {
      revealElements.forEach((el) => {
        if (el.current && observer) {
          observer.unobserve(el.current);
        }
      });
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [prefersReducedMotion, rootMargin, threshold, once, disabled, revealElements]);

  return typeof children === 'function' ? children() : children;
};

export default ScrollReveal;