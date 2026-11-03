import React, { Component } from 'react';

/**
 * Error boundary specifically wrapping WebGL / React Three Fiber canvases.
 * If WebGL is unavailable, crashes, or context is lost, gracefully renders
 * the fallback component or a stylized glassmorphic placeholder instead of crashing the React tree.
 */
export default class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log gracefully in non-production for diagnostics
    if (import.meta.env.DEV) {
      console.warn('WebGL Rendering Notice:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '220px',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(234, 243, 255, 0.9) 100%)',
            border: '1px solid var(--color-border)',
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
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>TS</span>
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--color-navy)' }}>
            Twin Stack Digital
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            High-Performance 2D Visual Mode Active
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
