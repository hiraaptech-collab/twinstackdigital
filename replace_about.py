import re

# Read the original file
with open('C:\\xampp\\htdocs\\Twinstack-digital\\frontend\\src\\pages\\AboutPage.jsx.original', 'r') as f:
    original = f.read()

# The section to replace is the Agency Leadership Section
# It starts with "Agency Leadership Section (Strict Founder Order)" 
# and ends with "Twin Stack Digital preserves founder privacy and values authentic engineering over stock photography."

start_marker = "Agency Leadership Section (Strict Founder Order)"
end_marker = "Twin Stack Digital preserves founder privacy and values authentic engineering over stock photography."

start_idx = original.find(start_marker)
end_idx = original.find(end_marker) + len(end_marker)

if start_idx == -1 or end_idx == -1:
    print("ERROR: Markers not found!")
    print(f"start_idx: {start_idx}, end_idx: {end_idx}")
    # Print surrounding context
    idx = original.find("Agency Leadership")
    if idx != -1:
        print(f"Found 'Agency Leadership' at {idx}")
        print(original[idx-100:idx+100])
else:
    # The replacement content - the unified skills card
    replacement = """{/* ====================================================================
          2. AGENCY SKILLS & EXPERTISE
          ==================================================================== */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <FlowingRibbon3D height="360px" opacity={0.35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader
            badge="Founder-Led Craftsmanship"
            title="Direct Leadership on Every Project"
            subtitle="When you work with Twin Stack Digital, your project is directly architected, designed, and coded by our co-founders."
          />

          <div
            style={{
              background: 'var(--color-soft-gray)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2rem',
              marginTop: '2rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.2rem)',
                fontWeight: '800',
                color: 'var(--color-navy)',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '1rem',
              }}
            >
              Our Skills & Expertise
            </h2>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                textAlign: 'center',
                marginBottom: '2rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Twin Stack Digital combines technical systems architecture with creative digital design. Both founders contribute equal leadership: Syeda Hira builds the relational databases and backend frameworks, while Hamna Shahid designs the responsive frontends and visual aesthetics.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
            }}
          >

            <div
              style={{
                padding: '1.5rem',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--blue-hover) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Code2 size={20} color="white" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Frontend Development
              </h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.5,
                }}
              >
                HTML5, CSS3, Bootstrap, JavaScript, React
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--blue-hover) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Database size={20} color="white" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Backend & Database
              </h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.5,
                }}
              >
                PHP, Laravel, MySQL
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--blue-hover) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <CheckCircle size={20} color="var(--color-primary)" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Development Tools
              </h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.5,
                }}
              >
                Git, GitHub
              </p>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--blue-hover) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <TrendingUp size={20} color="white" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Additional Expertise
              </h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.5,
                }}
              >
                Digital Marketing, Interactive Web Experiences
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              Both founders contribute equal leadership to every project, ensuring uncompromising standards and personal accountability across all client work.
            </p>
          </div>
        </div>
      </section>"""

    # Replace the section
    new_content = original[:start_idx] + replacement + original[end_idx:]
    
    # Write the new file
    with open('C:\\xampp\\htdocs\\Twinstack-digital\\frontend\\src\\pages\\AboutPage.jsx', 'w') as f:
        f.write(new_content)
    
    print("File replaced successfully")
    print(f"Original length: {len(original)}, New length: {len(new_content)}")