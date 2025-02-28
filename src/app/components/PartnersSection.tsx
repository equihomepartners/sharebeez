'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const partners = [
  {
    title: "USPS",
    description: "Reliable shipping solutions for local and nationwide orders."
  },
  {
    title: "Wise Yogi & Anthea",
    description: "Supporting ethical, India-sourced products."
  },
  {
    title: "Local Farmer Networks",
    description: "Providing fresh, organic produce to buyers."
  }
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white" id="partners">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with local vendors, manufacturers, and community organizations to make commerce more efficient and affordable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CheckCircleIcon className="w-12 h-12 text-black mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-black">{partner.title}</h3>
              <p className="text-gray-600">{partner.description}</p>
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
          <motion.a
            href="#partner"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Partner with Us!
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 