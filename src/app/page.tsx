'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import Features from './components/Features'
import BuyersSection from './components/BuyersSection'
import SellersSection from './components/SellersSection'
import CommunitiesSection from './components/CommunitiesSection'
import PartnersSection from './components/PartnersSection'
import PilotSuccess from './components/PilotSuccess'
import UpcomingFeatures from './components/UpcomingFeatures'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import DownloadApp from './components/DownloadApp'
import FlowChart from './components/FlowChart'

const features = [
  "Direct Sourcing – Buy fresh products directly from local manufacturers.",
  "Community-Driven Shopping – Unlock bulk discounts through group purchases.",
  "Lower Costs, Better Deals – Avoid unnecessary markups from middlemen.",
  "Efficient Transactions – Secure payments, QR-based order tracking, and seamless logistics."
]

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Welcome to ShareBeez!
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                The Future of Community Commerce
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A smarter, community-driven marketplace designed to connect buyers, sellers, and local communities for better, more affordable shopping experiences.
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckIcon className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#start-shopping"
                  className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors text-center"
                >
                  Start Shopping
                </a>
                <a
                  href="#become-seller"
                  className="inline-block bg-white hover:bg-gray-50 text-black px-8 py-3 rounded-full font-semibold transition-colors border-2 border-black text-center"
                >
                  Become a Seller
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-[600px]"
            >
              <FlowChart />
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <BuyersSection />
      <SellersSection />
      <CommunitiesSection />
      <PartnersSection />
      <PilotSuccess />
      <UpcomingFeatures />
      <Testimonials />
      <FAQ />
      <DownloadApp />
    </main>
  )
}
