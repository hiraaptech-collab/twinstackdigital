import React, { useState, useEffect } from 'react';
import PageSEO from '../components/common/PageSEO';
import CinematicHero from '../components/common/CinematicHero';
import Projects3DCanvas from '../components/3d/Projects3DCanvas';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import TiltCard from '../components/common/TiltCard';
import FlowingRibbon3D from '../components/common/FlowingRibbon3D';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [categories, setCategories] = useState(['All Projects', 'Web Development', 'Full-Stack Apps', 'E-Commerce']);

  useEffect(() => {
    fetch('/api/v1/projects')
      .then((res) => res.json())
      .then((data) => {
        const projectsData = data.data || data;
        setProjects(projectsData);

        const allCategories = ['All Projects', ...new Set(projectsData.map((p) => p.category))];
        setCategories(allCategories);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setProjects([]);
      });
  }, []);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <PageSEO
        title="Our Work, Our Signature"
        description="Explore Twin Stack Digital's portfolio concepts across bespoke corporate platforms, full-stack applications with MySQL, and high-conversion e-commerce."
        canonicalPath="/projects"
      />

 {/* ====================================================================
          1. CINEMATIC 3D HERO SECTION
          ==================================================================== */}
      <CinematicHero
        badge="Demonstration Portfolio"
        title="Our Work, Our Signature"
        subtitle="A curated showcase of our architecture, UI/UX aesthetics, and full-stack engineering standards."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
        actions={
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Start Your Custom Project
          </Button>
        }
      >
        <Projects3DCanvas />
      </CinematicHero>

 {/* ====================================================================
          2. PORTFOLIO SHOWCASE & CATEGORY FILTERS
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <FlowingRibbon3D height="340px" opacity={0.3} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="Engineering Concepts"
            title="Design & Development Portfolio"
            subtitle="Explore how we structure responsive frontends, complex dashboards, and streamlined checkout funnels."
          />

 {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '3rem',
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-white)',
                    color: isActive ? '#FFFFFF' : 'var(--color-navy)',
                    border: `1.5px solid ${isActive ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    boxShadow: isActive ? '0 4px 14px rgba(8, 96, 248, 0.25)' : 'var(--shadow-sm)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

 {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                className="mockup-window"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
 {/* Browser Mockup Window Chrome */}
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

 {/* Mockup Canvas Screen */}
                <div
                  className="mockup-body"
                  style={{
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    backgroundColor: 'var(--color-white)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span
                        className="glass-pill"
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.65rem',
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          color: 'var(--color-text-light)',
                        }}
                      >
                        {project.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        color: 'var(--color-navy)',
                        letterSpacing: '-0.02em',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: '600',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--color-ice-blue-light)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-navy)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px var(--color-border-subtle) solid', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
                      Architecture Concept
                    </span>
                    <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                      Inquire Build
                    </Button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

 {/* Genuine Client Notice */}
          <div
            className="glass-card"
            style={{
              marginTop: '4rem',
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: 'var(--color-white)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Bespoke Software Confidentiality
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              In accordance with client non-disclosure agreements (NDAs), proprietary database structures and internal enterprise systems are maintained confidentially. Custom demonstrations are conducted via scheduled Google Meet consultations.
            </p>
          </div>
        </div>
      </section>

 {/* ====================================================================
          3. CTA SECTION
          ==================================================================== */}
      <section
        style={{
          padding: '5rem 0',
          backgroundColor: '#071B49',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 className="hero-editorial-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            Have a Vision for Your Next Project?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(234, 243, 255, 0.85)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Partner directly with our co-founders to architect and deploy your digital platform.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}