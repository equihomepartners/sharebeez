'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Features from './components/Features'
import BuyersSection from './components/BuyersSection'
import SellersSection from './components/SellersSection'
import CommunitiesSection from './components/CommunitiesSection'
import PartnersSection from './components/PartnersSection'
import PilotSuccess from './components/PilotSuccess'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            ShareBeez
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto"
          >
            The Future of Community Commerce
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto"
          >
            A smarter, community-driven marketplace designed to connect buyers, sellers, and local communities for better, more affordable shopping experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#buyers" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Start Shopping
            </a>
            <a href="#sellers" className="bg-white hover:bg-gray-100 text-amber-500 border-2 border-amber-500 px-8 py-3 rounded-full font-semibold transition-colors">
              Become a Seller
            </a>
          </motion.div>
        </div>
      </section>

      <Features />
      <BuyersSection />
      <SellersSection />
      <CommunitiesSection />
      <PartnersSection />
      <PilotSuccess />
    </main>
  )
} 