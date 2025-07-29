import React, { useState } from 'react';
import { FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-400">
          <FaServer className="text-blue-400" /> NetherStatus
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/tos" className="hover:text-blue-400 transition">Terms</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition">Privacy</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800"
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link to="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/tos" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Terms</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Privacy</Link>
            <Link to="/eula" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>EULA</Link>
            <Link to="/account-delete" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Account Deletion</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;