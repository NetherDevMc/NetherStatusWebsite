import React from 'react';
import { FaApple, FaAndroid, FaServer, FaBell, FaUserShield, FaEuroSign, FaCheckCircle, FaRocket, FaSyncAlt, FaMobileAlt } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect for background

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900/80 to-gray-900/80 py-24 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[url('/minecraft-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"
        />
        <div className="container mx-auto text-center relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight"
          >
            NetherStatus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 leading-relaxed"
          >
            Track your Minecraft servers with lightning-fast updates and instant push notifications. Available on iOS & Android.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 flex-wrap mb-12"
          >
            <a
              href="#"
              className="relative bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-xl transition duration-300 transform hover:scale-105"
            >
              <FaApple className="text-xl" /> Download for iOS
              <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
            </a>
            <a
              href="#"
              className="relative bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-xl transition duration-300 transform hover:scale-105"
            >
              <FaAndroid className="text-xl" /> Download for Android
              <span className="absolute inset-0 rounded-full bg-green-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: FaServer, text: 'Real-time Server Status' },
              { icon: FaBell, text: 'Instant Push Notifications' },
              { icon: FaUserShield, text: 'Top-tier Privacy Protection' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 text-white bg-gray-800 bg-opacity-50 p-4 rounded-lg"
              >
                <item.icon className="text-3xl text-blue-400" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-950 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
          >
            How does NetherStatus work?
          </motion.h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Blazing Fast Updates",
                desc: "NetherStatus checks your Minecraft server(s) every few seconds. Whenever downtime or issues are detected, you receive an instant notification.",
              },
              {
                icon: FaSyncAlt,
                title: "Instant Notifications",
                desc: "Get push notifications on your phone the moment your server status changes. Always stay up to date, wherever you are.",
              },
              {
                icon: FaMobileAlt,
                title: "Simple Setup",
                desc: "Add your server in the app, pick your subscription, and get live status updates directly on iOS & Android. Everything is secure and privacy-friendly.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * idx }}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-md border border-gray-700 flex flex-col items-center text-center"
              >
                <item.icon className="text-4xl text-blue-400 mb-4" />
                <h3 className="font-bold text-blue-300 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center text-gray-400"
          >
            <p>
              You add your server, NetherStatus does the rest: monitoring and alerting. No hassle, always real-time insight!
            </p>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
          >
            Subscription Plans
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Free',
                price: 0,
                features: ['Monitor 1 server', 'Always 1 free slot', 'Real-time status', 'Push notifications'],
                color: 'gray-800',
                textColor: 'blue-400',
              },
              {
                title: 'Basic',
                price: 0.99,
                features: ['Monitor up to 2 servers', '1 free + 1 extra slot', 'Real-time status', 'Push notifications'],
                color: 'blue-800',
                textColor: 'white',
              },
              {
                title: 'Standard',
                price: 2.29,
                features: ['Monitor up to 4 servers', '1 free + 3 extra slots', 'Real-time status', 'Push notifications'],
                color: 'gray-800',
                textColor: 'blue-400',
              },
              {
                title: 'Pro',
                price: 4.49,
                features: ['Monitor up to 7 servers', '1 free + 6 extra slots', 'Real-time status', 'Push notifications'],
                color: 'blue-800',
                textColor: 'white',
                badge: 'Best Value',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
                transition={{ duration: 0.3 }}
                className={`bg-${plan.color} p-8 rounded-xl shadow-lg relative flex flex-col items-center border border-gray-700`}
              >
                {plan.badge && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 rounded-bl-lg text-sm font-bold shadow-md">
                    {plan.badge}
                  </span>
                )}
                <h3 className={`text-2xl font-semibold mb-4 text-${plan.textColor}`}>{plan.title}</h3>
                <p className="text-4xl font-bold mb-6 flex items-center gap-2 text-white">
                  <FaEuroSign className="text-lg text-green-400" />
                  {plan.price}
                  <span className="text-lg text-gray-400">/month</span>
                </p>
                <ul className="space-y-3 mb-6 text-gray-100 text-center">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10 text-gray-400"
          >
            <p>All subscriptions are managed in the app via in-app purchase.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;