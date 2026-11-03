import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  maxWidth = '760px',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'flex-start',
        textAlign: isCentered ? 'center' : 'left',
        maxWidth: maxWidth,
        marginLeft: isCentered ? 'auto' : 0,
        marginRight: isCentered ? 'auto' : 0,
        marginBottom: '3rem',
      }}
    >
      {badge && (
        <span
          className="glass-pill"
          style={{
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontSize: '0.78rem',
          }}
        >
          {badge}
        </span>
      )}

      <h2
        style={{
          fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
          fontWeight: '800',
          color: 'var(--color-navy)',
          letterSpacing: '-0.03em',
          lineHeight: 1.2,
          marginBottom: subtitle ? '1rem' : 0,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.98rem, 1.5vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
