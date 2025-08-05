import React from 'react';
import {
  FaUserSlash,
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaMobileAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AccountDelete() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900/90 to-gray-900/95 py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-gradient-to-tr from-gray-900 via-blue-950 to-gray-900 rounded-3xl shadow-2xl p-10 border-2 border-blue-800/70 relative overflow-hidden"
      >
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-900 bg-opacity-30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-500 bg-opacity-20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col items-center text-center mb-10 relative z-10">
          <div className="bg-blue-800 bg-opacity-40 rounded-full p-4 mb-3 shadow-lg">
            <FaUserSlash className="text-5xl text-blue-400 drop-shadow-xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl tracking-tight">
            Delete your account
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg mt-2">
            If you want to delete your <span className="font-semibold text-blue-200">NetherStatus</span> account, you can now do so directly in the app under{' '}
            <span className="text-blue-300 font-semibold">Settings &gt; Account</span>. The deletion is permanent and cannot be undone.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-6 justify-center z-10 relative">
          <InfoBox
            icon={<FaInfoCircle className="text-blue-400 text-2xl" />}
            title="What will be deleted?"
            items={[
              'Your profile and login data',
              'Your email address',
              'Your server list & app settings',
            ]}
            bg="from-blue-950 to-blue-900"
          />
          <InfoBox
            icon={<FaCheckCircle className="text-green-400 text-2xl" />}
            title="What may be kept (temporarily)?"
            items={[
              'Billing data (up to 7 years for legal compliance)',
              'Support messages if relevant',
            ]}
            bg="from-gray-800 to-blue-950"
          />
        </div>

        <div className="flex items-center gap-2 bg-yellow-900/70 border-l-4 border-yellow-400 rounded-md px-4 py-3 mb-7 text-yellow-200 shadow">
          <FaExclamationTriangle className="text-xl" />
          <span>
            <strong>Warning:</strong> Account deletion is permanent and cannot be undone.
          </span>
        </div>

        <div className="text-center mt-5 z-10 relative">
          <div className="inline-flex items-center gap-3 text-blue-300 text-lg font-semibold">
            <FaMobileAlt className="text-2xl" />
            Delete your account from the app
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InfoBox({ icon, title, items, bg }) {
  return (
    <div
      className={`flex-1 bg-gradient-to-br ${bg} rounded-xl p-6 border border-blue-800/40 shadow-md flex flex-col items-center mb-2 min-w-[200px]`}
    >
      <div className="mb-2">{icon}</div>
      <h3 className="text-blue-200 font-bold mb-2 text-lg">{title}</h3>
      <ul className="text-gray-200 text-sm list-disc list-inside text-left">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
