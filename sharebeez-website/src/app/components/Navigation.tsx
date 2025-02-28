'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-[180px] h-[50px]">
              <Image
                src="/full-logo-sharebeez.jpg"
                alt="ShareBeez Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>
          
          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download"
              className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Download App
            </motion.a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-300"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-black shadow-xl md:hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <a
                  href="#download"
                  className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full font-semibold transition-colors text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download App
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 