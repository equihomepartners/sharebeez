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
    <section className="py-20 bg-white" id="partners">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Partners</h2>
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
              className="bg-amber-50 p-6 rounded-xl hover:bg-amber-100 transition-colors"
            >
              <CheckCircleIcon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{partner.title}</h3>
              <p className="text-gray-600">{partner.description}</p>
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
          <a href="#partner" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Partner with Us!
          </a>
        </motion.div>
      </div>
    </section>
  )
} 