import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/common/PageSEO';
import CinematicHero from '../components/common/CinematicHero';
import Hero3DExperience from '../components/3d/Hero3DExperience';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import TiltCard from '../components/common/TiltCard';
import FlowingRibbon3D from '../components/common/FlowingRibbon3D';
import {
  coreServices,
  demoProjects,
  processSteps,
  whyChooseUs,
  faqs,
} from '../data/agencyData';
import {
  Code2,
  Database,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'website-development':
        return <Code2 size={24} color="var(--color-primary)" />;
      case 'full-stack-web-applications':
        return <Database size={24} color="var(--color-primary)" />;
      case 'ecommerce-development':
        return <ShoppingBag size={24} color="var(--color-primary)" />;
      default:
        return <Sparkles size={24} color="var(--color-primary)" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <PageSEO
        title="We Create Digital Experiences"
        description="Twin Stack Digital is a premier digital agency in Karachi specializing in bespoke website development, full-stack web applications, scalable database systems, and modern digital experiences."
        canonicalPath="/"
        schemaType="Organization"
      />

      {/* ====================================================================
          1. CINEMATIC 3D HERO SECTION
          ==================================================================== */}
      <CinematicHero
        badge="Karachi-Based &bull; Serving Clients Worldwide"
        title="We Create Digital Experiences"
        subtitle="Bridging bespoke creative frontend design with robust full-stack software architecture. Led directly by co-founders <span style={{ fontWeight: 800, background: 'linear-gradient(135deg, #0860F8 0%, #06B6D4 100%), -webkit-background-clip: text', WebkitTextFillColor: 'transparent'}}>Syeda Hira</span> and <span style={{ fontWeight: 800, background: 'linear-gradient(135deg, #0860F8 0%, #06B6D4 100%), -webkit-background-clip: text', WebkitTextFillColor: 'transparent'}}>Hamna Shahid</span>."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        actions={
          <>
            <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
              Explore Our Services
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Book a Consultation
            </Button>
          </>
        }
      >
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '480px', maxWidth: '45vw', height: '420px', pointerEvents: 'auto', display: 'none' }}>
          {/* Responsive canvas toggle */}
        </div>
      </CinematicHero>

      {/* ====================================================================
          2. THE TWIN STACKS ARCHITECTURE 3D SHOWCASE
          ==================================================================== */}
      <section style={{ padding: '4.5rem 0 3.5rem', position: 'relative', overflow: 'hidden' }}>
        <FlowingRibbon3D height="360px" opacity={0.45} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="glass-pill" style={{ marginBottom: '1rem' }}>
                Engineering Meets Elegance
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  fontWeight: '800',
                  color: 'var(--color-navy)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                The Dual Philosophy Behind Every Build
              </h2>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                A high-conversion digital presence requires two synchronized pillars: expressive, lightning-fast frontend aesthetics, coupled with bulletproof backend architectures and relational databases.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1.25rem', background: 'var(--color-ice-blue-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '700', color: 'var(--color-navy)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    Creative Direction
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    Led by Hamna Shahid: Responsive UI/UX, 3D interactivity, and conversion optimization.
                  </div>
                </div>

                <div style={{ padding: '1.25rem', background: 'var(--color-ice-blue-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '700', color: 'var(--color-navy)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    Systems Architecture
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    Led by Syeda Hira: Relational MySQL, secure Laravel REST APIs, and scalable databases.
                  </div>
                </div>
              </div>

              <Button to="/about" variant="outline" icon={ArrowRight}>
                Meet the Leadership Team
              </Button>
            </div>

            {/* Embedded Interactive 3D Sculpture */}
            <div>
              <Hero3DExperience />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. CORE SERVICES WITH 3D TILT CARDS
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <SectionHeader
            badge="Bespoke Capabilities"
            title="Engineered for Precision &amp; Impact"
            subtitle="Explore our specialized digital capabilities tailored to elevate emerging brands and enterprise platforms."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {coreServices.map((service) => (
              <TiltCard
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-ice-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {getServiceIcon(service.id)}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: '800',
                      color: 'var(--color-navy)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {service.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-body)' }}>
                        <CheckCircle size={15} color="var(--color-primary)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-primary)',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                  }}
                >
                  <span>Learn more about service</span>
                  <ArrowUpRight size={16} />
                </Link>
              </TiltCard>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
              View All Services &amp; Deliverables
            </Button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. FEATURED PROJECTS SHOWCASE WITH 3D TILT
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
        <FlowingRibbon3D height="320px" opacity={0.35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="Portfolio Concepts"
            title="Our Work, Our Signature"
            subtitle="Demonstration prototypes showcasing our capabilities across corporate portals, full-stack systems, and e-commerce."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {demoProjects.slice(0, 3).map((project) => (
              <TiltCard
                key={project.id}
                className="mockup-window"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <div className="mockup-dot" style={{ background: '#EF4444' }} />
                    <div className="mockup-dot" style={{ background: '#F59E0B' }} />
                    <div className="mockup-dot" style={{ background: '#10B981' }} />
                  </div>
                  <div className="mockup-address">
                    twinstack.digital/{project.id}
                  </div>
                </div>

                <div className="mockup-body" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--color-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.category}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'rgba(255, 255, 255, 0.85)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-navy)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/projects" variant="secondary" size="lg" icon={ArrowRight}>
              Explore Full Projects Showcase
            </Button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. THE 4-STAGE METHODOLOGY
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <SectionHeader
            badge="Process Discipline"
            title="How We Deliver Excellence"
            subtitle="A transparent, collaborative path from initial concept alignment to production launch."
          />

          <div
            className="process-track"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {processSteps.map((step) => (
              <TiltCard
                key={step.step}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {step.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. WHY CHOOSE US
          ==================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <SectionHeader
            badge="Founder Integrity"
            title="Why Forward-Thinking Brands Choose Us"
            subtitle="Direct collaboration with senior engineers and designers with zero middle-management dilution."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {whyChooseUs.map((item, index) => (
              <TiltCard
                key={index}
                className="glass-card"
                style={{
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-ice-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <ShieldCheck size={22} color="var(--color-primary)" />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FREQUENTLY ASKED QUESTIONS
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <SectionHeader
            badge="Clarity &amp; Transparency"
            title="Frequently Asked Questions"
            subtitle="Straightforward answers regarding our collaboration terms, timelines, and technical standards."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>
                      {faq.question}
                    </h4>
                    <span style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. CINEMATIC CALL TO ACTION
          ==================================================================== */}
      <section
        style={{
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#071B49',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(8, 96, 248, 0.3) 0%, rgba(7, 27, 73, 0.95) 70%)',
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <span
            className="glass-pill"
            style={{
              marginBottom: '1.5rem',
              backgroundColor: 'rgba(234, 243, 255, 0.15)',
              color: '#EAF3FF',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            Start Your Journey
          </span>
          <h2
            className="hero-editorial-title"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)',
              marginBottom: '1.25rem',
            }}
          >
            Ready to Build Something Remarkable?
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(234, 243, 255, 0.85)',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            Whether you are establishing an initial digital footprint or building an enterprise web application, our co-founders are ready to explore your goals.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Schedule Free Consultation
            </Button>
            <Button to="/projects" variant="secondary" size="lg">
              Explore Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
