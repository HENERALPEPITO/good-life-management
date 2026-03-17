import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import RosterPage from './pages/RosterPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/roster" element={<RosterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppLayout() {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
