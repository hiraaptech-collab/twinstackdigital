import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { navigationLinks } from '../../data/agencyData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for subtle elevation change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(221, 229, 242, 0.85)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div
        style={{
          position: 'relative',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        <div
          className="container"
          style={{
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <Logo size="md" showBadge={false} />

          <nav
            aria-label="Main Navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="desktop-nav"
          >
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                style={({ isActive }) => ({
                  padding: '0.5rem 0.95rem',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? '700' : '600',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-dark)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'var(--color-ice-blue)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                  display: 'inline-flex',
                  alignItems: 'center',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="desktop-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-navy)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              style={{
                backgroundColor: 'var(--color-white)',
                borderBottom: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-xl)',
                padding: '1.25rem 1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'fixed',
                top: '76px',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                overflowY: 'auto',
                paddingTop: '4.5rem',
              }}
            >
              <nav aria-label="Mobile Navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    style={({ isActive }) => ({
                      padding: '0.85rem 1rem',
                      fontSize: '1rem',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-navy)',
                      backgroundColor: isActive ? 'var(--color-ice-blue)' : 'transparent',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    })}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} opacity={0.6} />
                  </NavLink>
                ))}
              </nav>

              <div style={{ marginTop: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          )}

          <style>{`
            @media (max-width: 900px) {
              .desktop-nav, .desktop-nav-cta {
                display: none !important;
              }
              .mobile-nav-toggle {
                display: inline-flex !important;
              }
            }
          `}</style>
        </div>
      </div>
    </header>
  );
}