import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Career from './pages/Career';
import BigoHosts from './pages/BigoHosts';

// Main App component
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/bigo-hosts" element={<BigoHosts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
