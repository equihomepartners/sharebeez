'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does ShareBeez work?",
    answer: "ShareBeez connects communities for collective purchasing power. Join a group, participate in bulk orders, and save money through shared buying. Our QR-based system ensures smooth order tracking and delivery."
  },
  {
    question: "How do I buy products on ShareBeez?",
    answer: "Browse available products, join or create a group purchase, and place your order. Once enough buyers join, the order is processed at the discounted bulk rate. Track your delivery with our QR system."
  },
  {
    question: "How can I sell on ShareBeez?",
    answer: "Register as a seller, list your products, and set bulk pricing tiers. Our platform handles order management, payments, and delivery coordination through our innovative QR tracking system."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, debit cards, and digital wallets through our secure payment processor. All transactions are encrypted and protected."
  },
  {
    question: "How are deliveries handled?",
    answer: "Deliveries are coordinated through our local delivery network. Each order has a unique QR code for tracking and verification. Pick up from designated points or opt for home delivery where available."
  },
  {
    question: "What if I have issues with my order?",
    answer: "Our customer support team is available to help. Contact us through the app or email, and we'll resolve any issues promptly. All orders are tracked and verified through our QR system."
  },
  {
    question: "Is my community eligible for ShareBeez?",
    answer: "ShareBeez is available to all communities. Whether you're an HOA, apartment complex, neighborhood group, or local organization, you can create or join a buying group."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about using ShareBeez.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-black text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-6 h-6 text-black" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl mt-2">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 