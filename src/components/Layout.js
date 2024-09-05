import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="min-h-full flex flex-col font-poppins antialiased text-slate-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
