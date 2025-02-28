'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Community Leader",
    content: "ShareBeez has transformed how our neighborhood shops. We're saving money and building stronger community bonds.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Local Vendor",
    content: "As a small business owner, ShareBeez has helped me reach more customers and streamline my operations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "HOA President",
    content: "Our residents love the convenience and savings. The QR tracking system makes deliveries seamless.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community members about their experience with ShareBeez.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                  >
                    <StarIcon className="w-5 h-5 text-black" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-gray-600 mb-6 italic"
              >
                "{testimonial.content}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
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
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Our Community
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}