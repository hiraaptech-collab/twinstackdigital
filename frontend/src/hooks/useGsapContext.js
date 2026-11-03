import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';

// Use useLayoutEffect in browser to prevent flashes, fallback to useEffect in SSR
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Reusable React Hook for safe GSAP animations with gsap.context()
 * Guarantees complete cleanup of all tweens, timelines, and scroll triggers on unmount.
 *
 * @param {Function} effect - Animation setup callback receives (gsap, context)
 * @param {React.RefObject} scopeRef - Optional scope ref for CSS selectors
 * @param {Array} deps - Dependency array for re-triggering animation
 */
export function useGsapContext(effect, scopeRef, deps = []) {
  useIsomorphicLayoutEffect(() => {
    const scope = scopeRef?.current || undefined;
    const ctx = gsap.context((self) => {
      effect(gsap, self);
    }, scope);

    return () => ctx.revert();
  }, deps);
}

export default useGsapContext;