import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

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
    <section className="py-20 bg-gradient-to-b from-white to-amber-50" id="success">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Test Pilot Success & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To refine our platform, ShareBeez conducted multiple test pilot programs in at least three cities, proving the effectiveness of our community-driven model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pilots.map((pilot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircleIcon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{pilot.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Location:</p>
                  <p className="text-gray-600">{pilot.location}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Participants:</p>
                  <p className="text-gray-600">{pilot.participants}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Success:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {pilot.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
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
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-8">
            These pilots confirmed that ShareBeez effectively lowers costs, reduces waste, and strengthens community commerce.
          </p>
          <a href="#join" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Be Part of Our Success Stories!
          </a>
        </motion.div>
      </div>
    </section>
  )
} 