import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCartIcon, 
  UserGroupIcon, 
  QrCodeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: "Group Buying Power",
    description: "Join forces with your community to access wholesale prices and bulk discounts.",
    icon: UserGroupIcon
  },
  {
    title: "QR-Based Tracking",
    description: "Track your orders in real-time with our innovative QR code system.",
    icon: QrCodeIcon
  },
  {
    title: "Smart Delivery",
    description: "Efficient local delivery network optimized for your community.",
    icon: TruckIcon
  },
  {
    title: "Secure Payments",
    description: "Safe and secure payment processing with multiple options.",
    icon: ShieldCheckIcon
  },
  {
    title: "Cost Savings",
    description: "Save money through collective purchasing and reduced delivery costs.",
    icon: CurrencyDollarIcon
  },
  {
    title: "Easy Shopping",
    description: "Intuitive platform for browsing and ordering products.",
    icon: ShoppingCartIcon
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how ShareBeez makes community commerce simple, efficient, and rewarding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 