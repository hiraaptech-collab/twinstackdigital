import React from 'react';
import { useApiHealth } from '../hooks/useApiHealth';
import { getApiBaseUrl } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import TechnicalCanvas from '../components/3d/TechnicalCanvas';
import { 
  Server, 
  Database, 
  Globe, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Clock
} from 'lucide-react';

export default function TechnicalVerificationPage() {
  const { loading, data, error, latencyMs, lastChecked, refetch } = useApiHealth();
  const apiBaseUrl = getApiBaseUrl();

  const isBackendHealthy = !loading && !error && data?.status === 'healthy';
  const isDbConnected = data?.database?.status === 'connected';

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Hero Welcome / Verification Notice */}
      <section
        className="glass-panel"
        style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(234,243,255,0.7) 100%)',
          borderLeft: '5px solid var(--color-primary)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <span className="code-badge">PHASE 1 ACTIVE</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Monorepo Architecture &amp; System Health Check
              </span>
            </div>
            <h2
              style={{
                fontSize: '1.9rem',
                fontWeight: '800',
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '0.6rem',
              }}
            >
              Twin Stack Digital
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-primary)',
                fontWeight: '600',
                marginBottom: '0.75rem',
              }}
            >
              &ldquo;We Don&apos;t Just Build Websites. We Create Digital Experiences.&rdquo;
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              This is the technical verification and diagnostic environment confirming that the decoupled
              React + Vite frontend, versioned Laravel REST API (<code className="code-badge">/api/v1</code>),
              and local MySQL database (<code className="code-badge">twin_stack_digital</code>) are cleanly connected.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'flex-end',
            }}
          >
            <button
              onClick={refetch}
              disabled={loading}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.88rem',
                transition: 'var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)',
                opacity: loading ? 0.7 : 1,
              }}
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              {loading ? 'Testing Connection...' : 'Re-test Health Check'}
            </button>
            {lastChecked && (
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} />
                Checked: {lastChecked.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Grid: Health Status Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        
        {/* Card 1: Frontend Diagnostics */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-ice-blue)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Globe size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                Frontend Client
              </h3>
            </div>
            <StatusBadge status="ready" label="Operational" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Framework:</span>
              <strong>React 19 + Vite 8</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Routing:</span>
              <strong>React Router v7</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Animations:</span>
              <strong>GSAP 3.15</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Environment:</span>
              <span className="code-badge">{import.meta.env.MODE}</span>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <TechnicalCanvas />
          </div>
        </div>

        {/* Card 2: Backend API Diagnostics */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-ice-blue)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Server size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                Laravel REST API
              </h3>
            </div>
            <StatusBadge
              status={loading ? 'loading' : isBackendHealthy ? 'healthy' : 'error'}
              label={loading ? 'Connecting...' : isBackendHealthy ? 'Online' : 'Unreachable'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Endpoint:</span>
              <span className="code-badge">{apiBaseUrl}/health</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>API Version:</span>
              <strong>{data?.version || 'v1 (configured)'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Response Latency:</span>
              <strong>{latencyMs !== null ? `${latencyMs} ms` : '—'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Server Environment:</span>
              <span className="code-badge">{data?.environment || 'waiting...'}</span>
            </div>
          </div>

          {error && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-danger-bg)',
                border: '1px solid var(--color-danger-border)',
                color: 'var(--color-danger)',
                fontSize: '0.82rem',
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Connection Error:</strong> {error}
                <div style={{ marginTop: '0.35rem', color: 'var(--color-text-dark)' }}>
                  Start backend with: <code className="code-badge">cd backend &amp;&amp; php artisan serve</code>
                </div>
              </div>
            </div>
          )}

          {data?.status === 'healthy' && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-success-bg)',
                border: '1px solid var(--color-success-border)',
                color: 'var(--color-success)',
                fontSize: '0.82rem',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
              <span>CORS &amp; REST API communication verified cleanly.</span>
            </div>
          )}
        </div>

        {/* Card 3: Database Connectivity Diagnostics */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-ice-blue)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Database size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                Database (MySQL/MariaDB)
              </h3>
            </div>
            <StatusBadge
              status={loading ? 'loading' : isDbConnected ? 'connected' : 'disconnected'}
              label={loading ? 'Testing...' : isDbConnected ? 'Connected' : 'Offline'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Database Name:</span>
              <span className="code-badge">{data?.database?.database || 'twin_stack_digital'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Driver:</span>
              <strong>{data?.database?.driver || 'mysql'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Connection Check:</span>
              <strong>{isDbConnected ? 'PDO Ping Active' : 'Pending or Inactive'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Host / Port:</span>
              <span>127.0.0.1:3306 (XAMPP)</span>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isDbConnected ? 'var(--color-ice-blue-light)' : 'var(--color-soft-gray)',
              border: '1px solid var(--color-border)',
              fontSize: '0.8rem',
              color: 'var(--color-text-dark)',
            }}
          >
            <strong>Note on Security:</strong> Health response confirms active PDO connection without
            exposing database credentials, passwords, or raw stack traces.
          </div>
        </div>

      </section>

      {/* Agency Identity & Phase 2 Blueprint */}
      <section
        className="glass-panel"
        style={{
          padding: '1.75rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Agency Leadership &amp; Foundation
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            <strong>Founders:</strong> Syeda Hira and Hamna Shahid
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: '0.25rem' }}>
            <strong>Planned Public Services:</strong> Website Development &bull; Full-Stack Web Application Development &bull; E-commerce Website Development.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: '0.25rem' }}>
            <strong>Visual Theme:</strong> Bright premium white, electric blue (<code className="code-badge">#0860F8</code>), deep navy (<code className="code-badge">#071B49</code>), ice blue (<code className="code-badge">#EAF3FF</code>).
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
            Next Milestones (Phase 2 Readiness)
          </h4>
          <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
            <li>Public pages design system implementation (Home, Services, Projects, About, Contact).</li>
            <li>Interactive 3D hero canvas with Three.js &amp; GSAP transitions.</li>
            <li>Backend API inquiry submission and quote calculation models.</li>
            <li>Admin system for two authorized users (hidden routing).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
