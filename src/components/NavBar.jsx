import React, { useState } from "react";
import { FaServer, FaTimes, FaBars, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/tos", label: "Terms" },
    { to: "/privacy", label: "Privacy" },
  ];

  const mobileMenuItems = [
    ...menuItems,
    { to: "/eula", label: "EULA" },
    { to: "/account-delete", label: "Account Deletion" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md p-4 sticky top-0 z-50 shadow-xl border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25"
          >
            <FaServer className="text-white" />
          </motion.div>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            NetherStatus
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group py-2"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}

          {/* Discord Link - Simple styling */}
          <motion.a
            href="https://discord.gg/xvaNzE35Rs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaDiscord className="w-4 h-4" />
            <span className="hidden lg:inline">Discord</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700 overflow-hidden"
          >
            <div className="container mx-auto py-6 flex flex-col space-y-4">
              {mobileMenuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    className="block text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 p-3 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Discord Link for Mobile */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: mobileMenuItems.length * 0.1,
                  duration: 0.3,
                }}
              >
                <a
                  href="https://discord.gg/xvaNzE35Rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 p-3 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <FaDiscord className="text-xl" />
                  Join Discord Community
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;