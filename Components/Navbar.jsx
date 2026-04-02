'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { slideDownVariants, buttonHoverVariants } from '@/lib/motionVariants'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className="fixed top-5 left-1/2 -translate-x-1/2 w-[94vw] text-white z-50 rounded-4xl transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={slideDownVariants}
            style={{
                backgroundColor: isScrolled ? 'rgba(32, 40, 50, 0.95)' : '#202832',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 10px 30px rgba(139, 92, 246, 0.1)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-xl font-bold tracking-wider">VINITH</h2>
                </motion.div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    {['Home', 'Service', 'Projects', 'About'].map((link, index) => (
                        <motion.li
                            key={index}
                            className="cursor-pointer hover:text-purple-400 transition"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            whileHover={{
                                color: '#a855f7',
                                transition: { duration: 0.2 },
                            }}
                        >
                            {link}
                        </motion.li>
                    ))}
                </ul>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.button
                        className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold transition"
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonHoverVariants}
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar
