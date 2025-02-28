import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    title: "Direct Access to Buyers",
    description: "No need to rely on costly third-party platforms."
  },
  {
    title: "Preorders & Bulk Discounts",
    description: "Plan production efficiently and minimize storage costs."
  },
  {
    title: "Efficient Order Management",
    description: "Each buyer order is assigned a unique QR code, ensuring smooth fulfillment and pickup."
  },
  {
    title: "Community-Driven Selling",
    description: "Reach local buyers and scale to larger networks."
  },
  {
    title: "Secure Payments via Stripe",
    description: "Fast, reliable, and hassle-free transactions."
  }
]

const trackingFeatures = [
  {
    title: "Accurate Order Management",
    description: "Each buyer's order has a unique QR code, ensuring deliveries are properly sorted and confirmed."
  },
  {
    title: "Faster Processing & Pickup",
    description: "Customers scan their QR code at pickup points, reducing wait times and confusion."
  },
  {
    title: "Minimal Mishandling",
    description: "Every transaction is verified, ensuring the right product reaches the right customer."
  }
]

export default function SellersSection() {
  return (
    <section className="py-20 bg-white" id="sellers">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">For Sellers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sell Smarter, Earn More, Reduce Wastage</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Sell on ShareBeez?</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* QR Tracking Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">QR-Based Order Tracking for Sellers</h3>
            {trackingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 