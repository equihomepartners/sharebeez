'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const pilots = [
  {
    title: "Pilot 1: Group Buying for Non-Perishable Goods",
    location: "North Carolina",
    participants: "75+ households",
    results: [
      "Buyers saved 20-35% on bulk purchases of home essentials, electronics, and tools.",
      "Vendors saw a 30% increase in pre-orders, reducing unsold stock and storage costs."
    ]
  },
  {
    title: "Pilot 2: Community Marketplace for Excess Goods & Tools",
    location: "Multiple neighborhoods",
    participants: "100+ sellers and buyers",
    results: [
      "Individuals successfully sold excess household items, unused tools, and services within their community.",
      "Businesses cleared out overstock inventory without relying on traditional discounting.",
      "Increased reuse and shared ownership, promoting sustainability."
    ]
  },
  {
    title: "Pilot 3: Shared Delivery & Logistics",
    location: "Regional pilot program",
    participants: "50+ community members acting as local couriers",
    results: [
      "Reduced delivery costs by 40% compared to commercial couriers.",
      "85% of deliveries were completed within 24 hours by community members using their regular travel routes.",
      "Participants earned discounts and perks for making deliveries."
    ]
  }
]

export default function PilotSuccess() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="success">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Test Pilot Success & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To refine our platform, ShareBeez conducted multiple test pilot programs in at least three cities, proving the effectiveness of our community-driven model.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {pilots.map((pilot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <CheckIcon className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                </motion.div>
                <div className="space-y-4">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className="text-xl font-semibold text-black"
                  >
                    {pilot.title}
                  </motion.h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">Location: {pilot.location}</p>
                    <p className="text-gray-700">Participants: {pilot.participants}</p>
                    <p className="text-gray-700 font-semibold">Success:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      {pilot.results.map((result, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        >
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            These pilots confirmed that ShareBeez effectively lowers costs, reduces waste, and strengthens community commerce.
          </p>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
          >
            Be Part of Our Success Stories!
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 