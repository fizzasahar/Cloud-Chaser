import React from 'react'
import { motion } from "framer-motion"
// import { PlayIcon } from "@heroicons/react/24/outline"
import { CloudSVG } from '../assets/cloud.jsx'
import { SunSVG } from '../assets/sun.jsx'
import { RaindropSVG } from '../assets/raindrop.jsx'

const HeroSection = ({ setShowModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-400 px-6 sm:px-12 lg:px-20 font-sans">

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* --- Cartoon SVG Decorations --- */}
      <CloudSVG
        className="absolute top-8 sm:top-12 left-6 sm:left-12 w-24 sm:w-32 md:w-40 opacity-80 animate-float-slow"
        aria-label="Cloud"
      />

      <SunSVG
        className="absolute top-14 sm:top-20 right-6 sm:right-16 w-24 sm:w-32 md:w-40 animate-spin-slow"
        aria-label="Sun"
      />

      <RaindropSVG
        className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-16 sm:w-20 opacity-90 animate-bounce"
        aria-label="Raindrop"
      />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto py-24 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-4"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Powered by Cloud Chasers
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
          >
            Will It Rain
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              On My Parade?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Check the probability of adverse weather conditions for your planned outdoor activities using NASA Earth observation data
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setShowModal(true)}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden group"
              aria-haspopup="dialog"
            >
              <span className="relative z-10">Get Probability</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="bg-white/9 backdrop-blur-sm rounded-xl p-6 border border-white/10 
transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Real-time Data</h3>
              <p className="text-gray-300 text-sm">Access the latest weather information from NASA satellites</p>
            </div>
            <div className="bg-white/9 backdrop-blur-sm rounded-xl p-6 border border-white/10 
transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Accurate Predictions</h3>
              <p className="text-gray-300 text-sm">Advanced algorithms provide reliable weather forecasts</p>
            </div>

            <div className="bg-white/9 backdrop-blur-sm rounded-xl p-6 border border-white/10 
transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Plan Ahead</h3>
              <p className="text-gray-400 text-sm">Make informed decisions for your outdoor activities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Extra Animations --- */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
