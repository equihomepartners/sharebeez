import React from 'react'
import { motion } from 'framer-motion'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const challenges = [
  "End-of-Cycle Consumption – Products pass through multiple storage points, reducing freshness.",
  "High Costs – Middlemen increase prices without adding value.",
  "Limited Awareness – Consumers often don't know the origins or preservatives in products.",
  "Weakened Community Engagement – Buying power isn't optimized at the local level."
]

const solutions = [
  "Direct-from-Manufacturer Orders – Get fresh, preservative-free products.",
  "Preorder & Bulk Purchase Savings – Reduce costs through community-driven buying.",
  "Transparent Pricing & Demand-Based Discounts – Control costs by leveraging local supply and demand.",
  "Stronger Community Connections – Buy with neighbors, HOAs, and local groups for better deals."
]

export default function BuyersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="buyers">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">For Buyers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fresh, Affordable, and Transparent Shopping</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">The Challenges Consumers Face</h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4">
                  <XCircleIcon className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">How ShareBeez Solves These Issues</h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 