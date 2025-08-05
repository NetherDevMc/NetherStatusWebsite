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
          <Link to="/account-delete" className="hover:text-blue-400 transition">Account Deletion</Link>
          <a href="mailto:jenscollaert@icloud.com" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaServer, FaHeart, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const footerLinks = [
    { to: '/tos', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/eula', label: 'EULA' },
    { to: '/account-delete', label: 'Account Deletion' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-t from-gray-900 to-gray-800 border-t border-gray-700 py-12 mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <FaServer className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NetherStatus
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
              Real-time Minecraft server monitoring with instant notifications. 
              Stay connected to your servers anywhere, anytime.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm py-1 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center md:text-right"
          >
            <div className="mb-4">
              <a 
                href="mailto:jenscollaert@icloud.com" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:underline"
              >
                <FaEnvelope className="text-xs" />
                Contact Support
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 NetherStatus. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center md:justify-end gap-1">
              Made with <FaHeart className="text-red-500 text-xs" /> for Minecraft
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-gray-700"
        >
          <p className="text-center text-gray-500 text-xs">
            NetherStatus is not affiliated with, sponsored, or approved by Mojang Studios or Microsoft Corporation.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;