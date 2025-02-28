'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DownloadApp() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="download">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Download ShareBeez</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with ShareBeez today and join our growing community of smart shoppers.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 mx-auto md:mx-0 mb-6"
            >
              <Image
                src="/full-logo-sharebeez.jpg"
                alt="ShareBeez Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              Scan to Download
            </h3>
            <p className="text-gray-600 mb-8">
              Scan the QR code with your phone&apos;s camera to download the ShareBeez app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#app-store"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                App Store
              </motion.a>
              <motion.a
                href="#google-play"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.85C20.5 13.06 20.75 13.42 20.75 13.85C20.75 14.28 20.5 14.64 20.16 14.85L17.07 16.62L14.54 14.09L16.81 11.82L20.16 12.85ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                Google Play
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300"
            >
              <Image
                src="/qr-code.png"
                alt="Download QR Code"
                width={192}
                height={192}
                className="w-48 h-48"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500">
            © 2024 Affirm Technologies LLC
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <motion.a 
              href="mailto:contact@sharebeez.com" 
              whileHover={{ scale: 1.05 }}
              className="text-black hover:text-gray-700 transition-colors"
            >
              contact@sharebeez.com
            </motion.a>
            <span className="text-gray-300">|</span>
            <motion.a 
              href="https://sharebeez.com" 
              whileHover={{ scale: 1.05 }}
              className="text-black hover:text-gray-700 transition-colors"
            >
              sharebeez.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}