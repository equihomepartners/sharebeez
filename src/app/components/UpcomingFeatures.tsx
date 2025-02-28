'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon, 
  CreditCardIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const upcomingFeatures = [
  {
    title: "International Shipping",
    description: "Expand your reach with cross-border shipping options.",
    icon: GlobeAltIcon,
    eta: "Q3 2024"
  },
  {
    title: "In-App Chat",
    description: "Direct communication between buyers and sellers.",
    icon: ChatBubbleLeftRightIcon,
    eta: "Q2 2024"
  },
  {
    title: "Subscription Plans",
    description: "Regular deliveries for your favorite products.",
    icon: CalendarIcon,
    eta: "Q3 2024"
  },
  {
    title: "Buy Now, Pay Later",
    description: "Flexible payment options for larger purchases.",
    icon: CreditCardIcon,
    eta: "Q4 2024"
  }
]

export default function UpcomingFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re constantly innovating to bring you new features that enhance your ShareBeez experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-black mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium"
              >
                ETA: {feature.eta}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 