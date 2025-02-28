import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    title: "Direct Sourcing",
    description: "Buy fresh products directly from local manufacturers."
  },
  {
    title: "Community-Driven Shopping",
    description: "Unlock bulk discounts through group purchases."
  },
  {
    title: "Lower Costs, Better Deals",
    description: "Avoid unnecessary markups from middlemen."
  },
  {
    title: "Efficient Transactions",
    description: "Secure payments, QR-based order tracking, and seamless logistics."
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors"
            >
              <CheckCircleIcon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 