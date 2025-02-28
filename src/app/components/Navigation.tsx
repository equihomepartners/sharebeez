import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'For Buyers', href: '#buyers' },
  { label: 'For Sellers', href: '#sellers' },
  { label: 'Communities', href: '#communities' },
  { label: 'Partners', href: '#partners' },
  { label: 'Success Stories', href: '#success' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-amber-500">ShareBeez</a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#join"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 hover:text-amber-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  )
} 