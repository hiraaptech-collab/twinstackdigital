import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function AppLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1, paddingTop: '76px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
