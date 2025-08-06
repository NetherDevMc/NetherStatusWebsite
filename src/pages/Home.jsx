import React from 'react';
import { FaApple, FaAndroid, FaServer, FaBell, FaUserShield, FaDollarSign, FaCheckCircle, FaRocket, FaSyncAlt, FaMobileAlt, FaStar } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[url('/minecraft-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"
        />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 bg-opacity-15 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 bg-opacity-25 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 bg-opacity-20 text-blue-200 border border-blue-500 border-opacity-30 mb-6">
              <FaStar className="w-4 h-4 mr-2" />
              Real-time Minecraft Server Monitoring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              NetherStatus
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto text-gray-100 leading-relaxed px-4"
          >
            Track your Minecraft servers with lightning-fast updates and instant push notifications. 
            <span className="block mt-2 text-blue-200 font-medium">Available on iOS & Android.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <a
              href="https://apps.apple.com/be/app/netherstatus/id6748239606"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 w-full sm:w-auto min-w-[200px] justify-center"
            >
              <FaApple className="text-xl" /> 
              <span>Download for iOS</span>
              <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=net.netherdev.netherStatus"
              className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/25 w-full sm:w-auto min-w-[200px] justify-center"
            >
              <FaAndroid className="text-xl" /> 
              <span>Download for Android</span>
              <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: FaServer, text: 'Real-time Server Status', color: 'blue' },
              { icon: FaBell, text: 'Instant Push Notifications', color: 'purple' },
              { icon: FaUserShield, text: 'Top-tier Privacy Protection', color: 'green' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className={`group flex flex-col sm:flex-row items-center gap-4 text-white bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-${item.color}-500/50 transition-all duration-300 hover:transform hover:scale-105`}
              >
                <item.icon className={`text-3xl text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors duration-300 flex-shrink-0`} />
                <span className="text-center sm:text-left font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              How does <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NetherStatus</span> work?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, fast, and reliable Minecraft server monitoring in three easy steps
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: FaRocket,
                title: "Blazing Fast Updates",
                desc: "NetherStatus checks your Minecraft server(s) every few seconds. Whenever downtime or issues are detected, you receive an instant notification.",
                color: "blue",
                delay: 0.2
              },
              {
                icon: FaSyncAlt,
                title: "Instant Notifications",
                desc: "Get push notifications on your phone the moment your server status changes. Always stay up to date, wherever you are.",
                color: "purple",
                delay: 0.4
              },
              {
                icon: FaMobileAlt,
                title: "Simple Setup",
                desc: "Add your server in the app, pick your subscription, and get live status updates directly on iOS & Android. Everything is secure and privacy-friendly.",
                color: "green",
                delay: 0.6
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className={`group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-${item.color}-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center text-center`}
              >
                <div className={`bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-3xl text-white" />
                </div>
                <h3 className={`font-bold text-${item.color}-300 mb-4 text-xl`}>{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              You add your server, NetherStatus does the rest: monitoring and alerting. 
              <span className="text-blue-300 font-medium"> No hassle, always real-time insight!</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-blue-950 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your monitoring needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Free',
                price: 0,
                features: ['Monitor 1 server', 'Always 1 free slot', 'Real-time status', 'Push notifications'],
                color: 'gray',
                textColor: 'blue-400',
                bgGradient: 'from-gray-800 to-gray-900',
                popular: false,
              },
              {
                title: 'Basic',
                price: 0.99,
                features: ['Monitor up to 2 servers', '1 free + 1 extra slot', 'Real-time status', 'Push notifications'],
                color: 'blue',
                textColor: 'white',
                bgGradient: 'from-blue-800 to-blue-900',
                popular: false,
              },
              {
                title: 'Standard',
                price: 2.29,
                features: ['Monitor up to 4 servers', '1 free + 3 extra slots', 'Real-time status', 'Push notifications'],
                color: 'purple',
                textColor: 'white',
                bgGradient: 'from-purple-800 to-purple-900',
                badge: 'Best Value',
                popular: true,
              },
              {
                title: 'Pro',
                price: 4.49,
                features: ['Monitor up to 7 servers', '1 free + 6 extra slots', 'Real-time status', 'Push notifications'],
                color: 'green',
                textColor: 'white',
                bgGradient: 'from-green-800 to-green-900',
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-gradient-to-br ${plan.bgGradient} p-6 sm:p-8 rounded-2xl shadow-2xl border-2 ${plan.popular ? 'border-yellow-400' : 'border-gray-700'} flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-4 text-${plan.textColor}`}>{plan.title}</h3>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <FaDollarSign className="text-lg text-green-400" />
                    <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-100">
                      <FaCheckCircle className="text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              All subscriptions are managed in the app via 
              <span className="text-blue-300 font-medium"> in-app purchase</span>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;