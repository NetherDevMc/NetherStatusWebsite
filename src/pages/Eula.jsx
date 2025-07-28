import React from 'react';
import { motion } from 'framer-motion';

function Eula() {
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
          End-User License Agreement
        </motion.h1>
        <div className="prose prose-invert max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-200 mb-6 text-center"
          >
            This End-User License Agreement ("EULA") governs your use of the NetherStatus mobile application ("Software"). By installing or using the Software, you agree to be bound by this EULA.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2>1. License Grant</h2>
            <p>
              Subject to the terms of this EULA, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Software for personal, non-commercial purposes on a device you own or control.
            </p>
            <h2>2. Restrictions</h2>
            <p>
              You may not: (a) copy, modify, or distribute the Software; (b) reverse-engineer, decompile, or disassemble the Software; (c) sublicense, rent, or lease the Software; or (d) use the Software for any illegal purpose.
            </p>
            <h2>3. Subscriptions</h2>
            <p>
              The Software offers optional in-app subscriptions for additional features or slots, processed through the Apple App Store using RevenueCat. All payments, cancellations, and refunds are subject to Apple’s terms and policies. We do not directly process refunds but will assist with refund requests via Apple’s official procedure.
            </p>
            <h2>4. Managing Subscriptions</h2>
            <p>
              You can manage, pause, or cancel your subscription at any time through your Apple account settings. Refer to Apple’s official instructions for assistance.
            </p>
            <h2>5. Data and Privacy</h2>
            <p>
              The Software stores essential account details (email, username, Firebase UID) and user-entered server information. Authentication is handled via Firebase, and passwords are not stored. Third-party providers (Apple, RevenueCat) may process data per their privacy policies.
            </p>
            <h2>6. Age Restriction</h2>
            <p>
              The Software is intended for users aged 13 and above.
            </p>
            <h2>7. Ownership</h2>
            <p>
              The Software and all associated intellectual property rights are owned by us or our licensors. This EULA does not grant you any ownership rights.
            </p>
            <h2>8. Termination</h2>
            <p>
              This license is effective until terminated. We may terminate it if you violate this EULA. Upon termination, you must cease using the Software and delete all copies.
            </p>
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              The Software is provided "as is" without warranties of any kind. We are not liable for data loss, service interruptions, or inaccuracies caused by external factors or third-party APIs.
            </p>
            <h2>10. Updates to EULA</h2>
            <p>
              We may update this EULA periodically. Continued use of the Software constitutes acceptance of the updated terms.
            </p>
            <h2>11. Contact</h2>
            <p>
              For questions about this EULA or support, contact us via the app’s contact page.
            </p>
            <h2>12. Disclaimer</h2>
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

export default Eula;