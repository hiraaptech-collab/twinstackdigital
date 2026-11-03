import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Loader2 } from 'lucide-react';

export default function StatusBadge({ status, label }) {
  const normalized = (status || '').toLowerCase();

  let bg = 'var(--color-ice-blue)';
  let border = 'var(--color-border)';
  let color = 'var(--color-text-dark)';
  let Icon = AlertTriangle;

  if (normalized === 'loading') {
    bg = 'var(--color-ice-blue)';
    border = 'rgba(8, 96, 248, 0.3)';
    color = 'var(--color-primary)';
    Icon = Loader2;
  } else if (normalized === 'healthy' || normalized === 'connected' || normalized === 'ready') {
    bg = 'var(--color-success-bg)';
    border = 'var(--color-success-border)';
    color = 'var(--color-success)';
    Icon = CheckCircle2;
  } else if (normalized === 'degraded' || normalized === 'warning') {
    bg = 'var(--color-warning-bg)';
    border = 'var(--color-warning-border)';
    color = 'var(--color-warning)';
    Icon = AlertTriangle;
  } else if (normalized === 'error' || normalized === 'disconnected' || normalized === 'failed') {
    bg = 'var(--color-danger-bg)';
    border = 'var(--color-danger-border)';
    color = 'var(--color-danger)';
    Icon = XCircle;
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.8rem',
        fontWeight: '600',
        backgroundColor: bg,
        border: `1px solid ${border}`,
        color: color,
        textTransform: 'capitalize',
      }}
    >
      <Icon size={14} className={normalized === 'loading' ? 'animate-spin' : ''} />
      {label || status}
    </span>
  );
}
