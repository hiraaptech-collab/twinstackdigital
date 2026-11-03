import React from 'react';
import PageSEO from '../components/common/PageSEO';
import CinematicHero from '../components/common/CinematicHero';
import Services3DCanvas from '../components/3d/Services3DCanvas';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import TiltCard from '../components/common/TiltCard';
import FlowingRibbon3D from '../components/common/FlowingRibbon3D';
import { coreServices, agencySkills } from '../data/agencyData';
import {
  Code2,
  Database,
  ShoppingBag,
  CheckCircle,
  ArrowRight,
  Layers,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react';

export default function ServicesPage() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'website-development':
        return <Code2 size={26} color="var(--color-primary)" />;
      case 'full-stack-web-applications':
        return <Database size={26} color="var(--color-primary)" />;
      case 'ecommerce-development':
        return <ShoppingBag size={26} color="var(--color-primary)" />;
      default:
        return <Sparkles size={26} color="var(--color-primary)" />;
    }
  };

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
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <PageSEO
        title="Our Services, Crafted for You"
        description="Explore Twin Stack Digital's specialized services: custom website development, scalable full-stack web applications with MySQL, and high-conversion e-commerce solutions."
        canonicalPath="/services"
      />

      {/* ====================================================================
          1. CINEMATIC 3D HERO SECTION
          ==================================================================== */}
      <CinematicHero
        badge="End-to-End Digital Engineering"
        title="Our Services, Crafted for You"
        subtitle="We deliver purposeful digital solutions engineered from scratch. Combining high-impact brand aesthetics with scalable software architecture."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
        actions={
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Request a Tailored Proposal
          </Button>
        }
      >
        <Services3DCanvas />
      </CinematicHero>

      {/* ====================================================================
          2. DETAILED SERVICE ARCHITECTURE
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <FlowingRibbon3D height="380px" opacity={0.35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="Tailored Solutions"
            title="Comprehensive Technical Capabilities"
            subtitle="Every project receives dedicated senior attention, semantic code standards, and custom architecture without rigid templates."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {coreServices.map((service) => {
              return (
                <TiltCard
                  key={service.id}
                  className="glass-card"
                  style={{
                    padding: 'clamp(2rem, 4vw, 3.5rem)',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2.5rem',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--color-ice-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        {getServiceIcon(service.id)}
                      </div>

                      <h3
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: '800',
                          color: 'var(--color-navy)',
                          letterSpacing: '-0.02em',
                          marginBottom: '1rem',
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.65,
                          marginBottom: '1.5rem',
                        }}
                      >
                        {service.detailedDescription}
                      </p>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Ideal For
                        </div>
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                          {service.idealFor}
                        </p>
                      </div>

                      <div style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Deliverables
                        </div>
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                          {service.deliverables}
                        </p>
                      </div>

                      <Button to={`/contact?service=${service.id}`} variant="primary" icon={ArrowRight}>
                        Inquire About This Service
                      </Button>
                    </div>

                    {/* Features Checklist */}
                    <div
                      style={{
                        padding: '2rem',
                        backgroundColor: 'var(--color-ice-blue-light)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: '800',
                          color: 'var(--color-navy)',
                          marginBottom: '1.25rem',
                        }}
                      >
                        Included Specifications
                      </h4>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem',
                              fontSize: '0.92rem',
                              color: 'var(--color-text-body)',
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. FULL TECHNOLOGY STACK & SKILLS
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <SectionHeader
            badge="Technical Foundations"
            title="Our Full-Stack Technology Matrix"
            subtitle="Modern, proven engineering frameworks selected for durability, speed, and maintainability."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {Object.entries(agencySkills).map(([key, category]) => {
              const Icon = getSkillCategoryIcon(key);
              return (
                <TiltCard
                  key={key}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-ice-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color="var(--color-primary)" />
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-navy)', margin: 0 }}>
                      {category.category}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          padding: '0.3rem 0.7rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--color-soft-gray)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-navy)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. GLOBAL CONSULTATIONS
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <FlowingRibbon3D height="200px" opacity={0.2} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="Worldwide Reach"
            title="Let's Connect, Wherever You Are"
            subtitle="We work with clients worldwide and offer virtual consultations via Google Meet or Zoom to discuss your project ideas, requirements, and goals."
          />

          <div
            style={{
              background: 'var(--color-soft-gray)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              marginTop: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Regardless of your location, we can schedule a virtual meeting to explore your project requirements. Select your preferred platform, date, and time below.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button to="/contact?meeting=true" variant="primary" size="sm">
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. SERVICES CTA
          ==================================================================== */}
      <section
        style={{
          padding: '5rem 0',
          backgroundColor: '#071B49',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
          <h2 className="hero-editorial-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            Need a Bespoke Solution?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(234, 243, 255, 0.85)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Schedule an online discovery consultation with Syeda Hira and Hamna Shahid to review your functional requirements.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
