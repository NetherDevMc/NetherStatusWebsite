import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Eula from './pages/Eula';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/eula" element={<Eula />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;