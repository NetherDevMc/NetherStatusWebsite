import React from 'react';
import { motion } from 'framer-motion';

function Terms() {
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
          Terms of Service
        </motion.h1>
        <div className="prose prose-invert max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-200 mb-6 text-center"
          >
            Welcome to NetherStatus! By using this app, you agree to the following terms.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2>1. Use of the App</h2>
            <p>
              You are solely responsible for the server data you enter and for using the server status information. Do not submit false or illegal information.
            </p>
            <h2>2. Account and Data</h2>
            <p>
              We store only essential account details (email, username, Firebase UID) and server information you add. Passwords are never stored; authentication is handled via Firebase.
            </p>
            <h2>3. Subscriptions & Refunds</h2>
            <p>
              Paid subscriptions for extra slots or features are processed through the Apple App Store using RevenueCat. All payments, cancellations, and refunds are handled by Apple according to their terms and policies. We cannot directly process refunds, but will always assist you with refund requests via the official Apple procedure.
            </p>
            <h2>4. Managing Subscriptions</h2>
            <p>
              You can manage, pause, or cancel your subscription at any time through your Apple account settings. For help, please refer to official Apple instructions.
            </p>
            <h2>5. Third Parties</h2>
            <p>
              Subscriptions and payments are managed via Apple and RevenueCat. These providers may process personal data in accordance with their own privacy policies.
            </p>
            <h2>6. Age Restriction</h2>
            <p>
              This app is intended for users aged 13 and above.
            </p>
            <h2>7. Liability</h2>
            <p>
              We are not liable for loss of data, service interruptions, or incorrect server status caused by external factors, technical failures, or third-party APIs.
            </p>
            <h2>8. Changes to Terms</h2>
            <p>
              These terms may be updated periodically. Please check this page for the latest version.
            </p>
            <h2>9. Contact</h2>
            <p>
              If you have any questions about these terms or need support, please contact us via the contact page in the app.
            </p>
            <h2>10. Disclaimer</h2>
            <p>
              NetherStatus is not affiliated with, sponsored or approved by Apple Inc.
            </p>
            <p className="mt-8 text-gray-400 text-right">Last updated: July 2025</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Terms;