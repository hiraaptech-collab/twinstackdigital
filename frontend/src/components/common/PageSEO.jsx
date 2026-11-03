import React, { useEffect } from 'react';

/**
 * PageSEO Component
 * Dynamically injects SEO meta tags, title, open graph properties and JSON-LD schema
 * without inventing external fake business domains.
 */
export default function PageSEO({
  title,
  description,
  canonicalPath = '',
  schemaType = 'WebPage',
}) {
  useEffect(() => {
    // Set document title
    const fullTitle = `${title} | Twin Stack Digital`;
    document.title = fullTitle;

    // Helper to update meta tag
    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, true);
      setMeta('twitter:description', description);
    }

    setMeta('og:title', fullTitle, true);
    setMeta('twitter:title', fullTitle);

    // JSON-LD structured data
    let scriptEl = document.getElementById('jsonld-agency');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'jsonld-agency';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': schemaType === 'Organization' ? 'Organization' : ['WebPage', 'ProfessionalService'],
      name: 'Twin Stack Digital',
      description: description || 'Digital agency in Karachi specializing in bespoke web development, full-stack applications and high-conversion e-commerce.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'Pakistan',
      },
      founders: [
        {
          '@type': 'Person',
          name: 'Syeda Hira',
          jobTitle: 'Co-Founder & Technical Lead',
        },
        {
          '@type': 'Person',
          name: 'Hamna Shahid',
          jobTitle: 'Co-Founder & Creative Lead',
        },
      ],
      email: 'twinstackdigital.pk@gmail.com',
      telephone: '+923103701543',
      url: window.location.origin + canonicalPath,
    };

    scriptEl.textContent = JSON.stringify(structuredData);
  }, [title, description, canonicalPath, schemaType]);

  return null;
}
