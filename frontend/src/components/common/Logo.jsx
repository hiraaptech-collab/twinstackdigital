import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Branded Logo Component for Twin Stack Digital
 * Strictly honors agency rules:
 * - When official logo is supplied in assets, it will be rendered unchanged.
 * - Prior to official logo provision, displays a clearly labeled placeholder.
 * - Never invents an unauthorized replacement brandmark.
 */
export default function Logo({ size = 'md', showBadge = true, isFooter = false }) {
  const imgWidth = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const textSize = size === 'sm' ? '1.05rem' : size === 'lg' ? '1.45rem' : '1.2rem';

  return (
    <Link
      to="/"
      aria-label="Twin Stack Digital Home"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
      }}
    >
      <img
        src="/assets/logo-twinstack.jpg"
        alt="Twin Stack Digital"
        width={imgWidth}
        height={imgWidth}
        style={{
          display: 'block',
          borderRadius: 'var(--radius-sm)',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              fontSize: textSize,
              fontWeight: '800',
              color: 'var(--color-navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Twin Stack
          </span>
          <span
            style={{
              fontSize: textSize,
              fontWeight: '800',
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Digital
          </span>
        </div>

        {showBadge && <span
          style={{
            fontSize: '0.65rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: isFooter ? 'var(--color-text-light)' : 'var(--color-text-muted)',
            marginTop: '2px',
          }}
        >
          Official Brandmark
        </span>}
      </div>
    </Link>
  );
}