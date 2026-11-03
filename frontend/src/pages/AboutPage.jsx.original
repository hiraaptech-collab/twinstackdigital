import React, { useRef } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { agencyInfo, agencySkills } from '../data/agencyData';
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Database,
  Layers,
  TrendingUp,
  Wrench,
  Globe
} from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import useGsapContext from '../hooks/useGsapContext';
import WebGLErrorBoundary from '../components/3d/WebGLErrorBoundary';
import TwinNodesCanvas from '../components/3d/TwinNodesCanvas';

export default function AboutPage() {
  const getSkillCategoryIcon = (key) => {
    switch (key) {
      case 'frontend':
        return Code2;
      case 'backend':
        return Database;
      case 'interactive':
        return Layers;
      case 'marketing':
        return TrendingUp;
      case 'tools':
        return Wrench;
      default:
        return Sparkles;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ====================================================================
          Page Hero Header
          ==================================================================== */}
      <section
        style={{
          paddingTop: '4rem',
          paddingBottom: '3rem',
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <div className="container">
          <SectionHeader
            badge="Agency Story &amp; Leadership"
            title="We Create Digital Experiences That Drive Growth"
            subtitle="Twin Stack Digital is a Karachi-based digital agency serving businesses worldwide. We bridge creative brand design with robust full-stack software engineering."
            maxWidth="840px"
          />
        </div>
      </section>

      {/* ====================================================================
          Agency Mission & Core Values
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-gray)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="glass-pill" style={{ marginBottom: '1rem' }}>
                <Globe size={14} />
                <span>Karachi, Pakistan &bull; Worldwide Delivery</span>
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.85rem, 3vw, 2.4rem)',
                  fontWeight: '800',
                  color: 'var(--color-navy)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                }}
              >
                Engineered for quality, transparency, and tailored partnership.
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                At Twin Stack Digital, our philosophy is anchored in one truth: a digital product should never be a generic template. Whether building an immersive brand website, a complex full-stack web application with relational databases, or an e-commerce storefront, every solution is purpose-built to reflect our client&apos;s distinct competitive advantage.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '1.75rem',
                }}
              >
                We conduct worldwide online discovery and progress reviews via Google Meet, while offering optional in-person strategy sessions for enterprise partners across Karachi by mutual arrangement.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-primary)' }}>100%</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-navy)', marginTop: '2px' }}>Bespoke Codebases</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>Zero generic themes</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-primary)' }}>End-to-End</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-navy)', marginTop: '2px' }}>Full-Stack Precision</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>Design, Database &amp; APIs</div>
                </div>
              </div>
            </div>

            {/* Core Values Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  1. Creative Originality
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Distinctive editorial layouts, polished blue-glass aesthetics, and modern interaction design that captivate visitors from their first interaction.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  2. Architectural Rigor
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Strict software hygiene: normalized MySQL database schemas, secure Laravel REST endpoints, clean React state management, and semantic HTML5.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  3. Transparent Collaboration
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  No hidden fees, no misleading promises, and direct access to agency leadership throughout the development lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Agency Leadership Section (Strict Founder Order)
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <SectionHeader
            badge="Agency Leadership"
            title="Co-Founders of Twin Stack Digital"
            subtitle="Twin Stack Digital is led by its co-founders in close technical and creative synergy, personally overseeing every client engagement."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              maxWidth: '920px',
              margin: '0 auto',
            }}
          >
            {agencyInfo.founders.map((founder, index) => (
              <div
                key={founder.id}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  borderTop: '4px solid var(--color-primary)',
                }}
              >
                {/* Founder Identity Badge & Monogram */}
                <div
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--gradient-primary)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    boxShadow: 'var(--shadow-glow-sm)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {founder.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.35rem',
                  }}
                >
                  Founder 0{index + 1}
                </div>

                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: '800',
                    color: 'var(--color-navy)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.35rem',
                  }}
                >
                  {founder.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {founder.role}
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-soft-gray)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-body)',
                    width: '100%',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '4px' }}>
                    Core Strategic Focus:
                  </strong>
                  <span>{founder.focus}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '0.82rem',
              color: 'var(--color-text-light)',
            }}
          >
            Twin Stack Digital preserves founder privacy and values authentic engineering over stock photography.
          </div>
        </div>
      </section>

      {/* ====================================================================
          Agency Collective Capabilities & Skills Taxonomy
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-gray)' }}>
        <div className="container">
          <SectionHeader
            badge="Technical Taxonomy"
            title="Collective Agency Capabilities"
            subtitle="Our engineering and marketing skillsets are integrated collectively across the agency to deliver cohesive, full-stack digital outcomes."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {Object.entries(agencySkills).map(([key, categoryData]) => {
              const IconComponent = getSkillCategoryIcon(key);

              return (
                <div
                  key={key}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--color-ice-blue)',
                          color: 'var(--color-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <h4
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: '800',
                          color: 'var(--color-navy)',
                        }}
                      >
                        {categoryData.category}
                      </h4>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {categoryData.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--color-white)',
                            color: 'var(--color-navy)',
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-sm)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '0.85rem',
                    }}
                  >
                    Audited for performance, maintainability, and clean standards.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          Closing Consultation CTA
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div
            className="glass-hero"
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: '900',
                color: 'var(--color-navy)',
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
              }}
            >
              Collaborate directly with our founders
            </h3>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-muted)',
                maxWidth: '620px',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Whether starting a new business venture or re-architecting an established platform, we provide personalized guidance from day one.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Initiate Project Discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
