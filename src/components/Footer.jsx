import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900 py-8 mt-20"
    >
      <div className="container mx-auto text-center text-gray-400">
        <p>© 2025 NetherStatus. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <Link to="/tos" className="hover:text-blue-400 transition">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
          <Link to="/eula" className="hover:text-blue-400 transition">EULA</Link>
          <a href="mailto:jenscollaert@icloud.com" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;