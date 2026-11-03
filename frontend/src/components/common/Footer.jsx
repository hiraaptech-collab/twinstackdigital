import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { agencyInfo, navigationLinks, coreServices } from '../../data/agencyData';
import { Mail, Phone, MapPin, Video } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-white)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
        zIndex: 10,
        marginTop: 'auto',
      }}
    >
      {/* Upper Main Footer Grid */}
      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Column 1: Agency Brand & Identity */}
          <div style={{ maxWidth: '340px' }}>
            <Logo size="md" isFooter={true} />
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginTop: '1.25rem',
              }}
            >
              &ldquo;{agencyInfo.tagline}&rdquo;
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-navy)',
                marginTop: '0.85rem',
                lineHeight: 1.5,
              }}
            >
              <strong>Founders:</strong> Syeda Hira &amp; Hamna Shahid
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '1rem',
                fontSize: '0.78rem',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-ice-blue)',
                color: 'var(--color-primary)',
                fontWeight: '600',
              }}
            >
              <Video size={13} />
              <span>Worldwide Google Meet Consultations</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
              }}
            >
              Explore Agency
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Confirmed Core Services */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
              }}
            >
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {coreServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Contact & Location */}
          <div>
            <h4
              style={{
                fontSize: '0.92rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
              }}
            >
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <a
                href={`mailto:${agencyInfo.email}`}
                style={{
                  color: 'var(--color-text-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '500',
                }}
              >
                <Mail size={15} color="var(--color-primary)" />
                <span>{agencyInfo.email}</span>
              </a>

              {agencyInfo.phoneNumbers.map((phone) => (
                <a
                  key={phone.value}
                  href={`tel:${phone.value}`}
                  style={{
                    color: 'var(--color-text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={15} color="var(--color-primary)" />
                  <span>{phone.display}</span>
                </a>
              ))}

              <div
                style={{
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  lineHeight: 1.4,
                }}
              >
                <MapPin size={15} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{agencyInfo.location} (Worldwide Online Consultations)</span>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div style={{ marginTop: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Follow Agency
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                <span
                  title="Twin Stack Digital Instagram"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-soft-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://www.instagram.com/twinstackdigital/', '_blank')}
                >
                  <InstagramIcon size={18} />
                </span>

                <span
                  title="Twin Stack Digital Facebook"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-soft-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open('https://www.facebook.com/', '_blank')}
                >
                  <FacebookIcon size={18} />
                </span>

                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
                  Social profiles coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright & Legal Bar */}
      <div
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-soft-gray)',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} {agencyInfo.name}. All rights reserved.
          </div>
<div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span>Co-Founded by Syeda Hira & Hamna Shahid</span>
          <span style={{ color: 'var(--color-border)' }}>&bull;</span>
          <Link to="/contact" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
            Book a Consultation
          </Link>
          <a
            href={import.meta.env.VITE_ADMIN_LOGIN_URL || 'http://127.0.0.1:8001/admin/login'}
            style={{
              color: 'var(--color-primary)',
              fontWeight: '600',
              fontSize: '0.88rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Admin Login
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
