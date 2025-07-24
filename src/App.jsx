import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MissionLog from './components/MissionLog';
import StorySection from './components/StorySection';
import OperationsGallery from './components/OperationsGallery';
import Testimonials from './components/Testimonials';
import BadgesSection from './components/BadgesSection';
import OpsMap from './components/OpsMap';
import PersonalLife from './components/PersonalLife';
import TimeCapsule from './components/TimeCapsule';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const HomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${darkMode ? 'dark' : ''}`}
    >
      <div className="bg-hud-black text-white">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <MissionLog />
        <StorySection />
        <OperationsGallery />
        <Testimonials />
        <BadgesSection />
        <OpsMap />
        <PersonalLife />
        <TimeCapsule />
        <Footer />
      </div>
    </motion.div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;