import React from 'react';
import { motion } from 'framer-motion';

function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-8 text-center text-blue-400"
        >
          Privacy Policy
        </motion.h1>
        <div className="prose prose-invert max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-200 mb-8 text-center"
          >
            Your privacy is important to us. Here is how we handle your data.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2>1. Data Storage</h2>
            <p>
              We only store data necessary for the app to function, such as your account (email, username, Firebase UID) and the servers you add. Subscription events and purchases are also logged for account management.
            </p>
            <h2>2. No Sale of Data</h2>
            <p>
              Your personal data will never be sold to third parties.
            </p>
            <h2>3. No Cookies or Tracking</h2>
            <p>
              We do not use cookies or external tracking services.
            </p>
            <h2>4. Third-party Payments & Providers</h2>
            <p>
              Subscriptions and payments are processed securely using the Apple App Store and RevenueCat. These providers may process personal data in accordance with their own privacy policies. Refunds and payment security are managed by Apple according to their policies. For more information, please refer to Apple's Privacy Policy.
            </p>
            <h2>5. Security</h2>
            <p>
              Passwords are never stored; authentication is managed securely via Firebase. All communication with our servers is encrypted.
            </p>
            <h2>6. Age Restriction</h2>
            <p>
              This app is intended for users aged 13 and above.
            </p>
            <h2>7. Contact</h2>
            <p>
              Questions about privacy? Contact us via the contact page.
            </p>
            <h2>8. Disclaimer</h2>
            <p>
              NetherStatus is not affiliated with, sponsored, or approved by Apple Inc.
            </p>
            <p className="mt-8 text-gray-400 text-right">Last updated: July 2025</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Privacy;