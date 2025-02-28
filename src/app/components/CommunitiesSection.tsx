import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const communityFeatures = [
  {
    title: "Neighborhood & HOA Groups",
    description: "Organize group buying, shared services, and rentals."
  },
  {
    title: "Non-Profits & Fundraisers",
    description: "Raise funds efficiently with community-driven sales."
  },
  {
    title: "Local Vendors & Farmers",
    description: "Sell fresh, locally sourced products directly to buyers."
  },
  {
    title: "Event Organizers",
    description: "Manage ticket sales and attendee logistics with QR verification."
  }
]

export default function CommunitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="communities">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">For Communities & Organizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stronger Communities Through Shared Buying & Resources</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-600 text-center">
            ShareBeez is more than a marketplace—it's a platform for collective purchasing power. Whether you're an HOA, non-profit, or a local group, organize bulk purchases, fundraisers, and shared resources with ease.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircleIcon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
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
          <a href="#join" className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Create a Community Now!
          </a>
        </motion.div>
      </div>
    </section>
  )
} 