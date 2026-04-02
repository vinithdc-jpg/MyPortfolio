'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    pageLoadVariants,
    slideLeftVariants,
    slideRightVariants,
    buttonHoverVariants,
    imageVariants,
} from '@/lib/motionVariants'

const Hero = () => {
    const [mouseY, setMouseY] = useState(0)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMouseY(y * 20)
    }

    return (
        <main
            className="min-h-screen bg-[radial-gradient(circle_at_30%_40%,#3b0764_0%,#0f0e12_40%,#000_100%)] w-full flex items-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
                {/* Left Content */}
                <motion.div
                    className="text-white space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={slideLeftVariants}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Frontend <br />
                        Developer
                        <span className="block text-purple-400">
                            UI/UX Enthusiast
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I create clean, modern interfaces and seamless experiences
                        that turn user needs into business growth.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex items-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            className="bg-white text-black px-6 py-3 rounded-lg font-semibold 
  transition-all duration-300 
  hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonHoverVariants}
                        >
                            Book a free call
                        </motion.button>

                        <motion.button
                            className="flex items-center justify-center w-12 h-12 rounded-full 
    border border-gray-700 bg-white/5 opacity-60 
    hover:opacity-100 transition duration-300"
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonHoverVariants}
                        >
                            <Image
                                src="/github.svg"
                                alt="Github"
                                width={22}
                                height={22}
                                className="invert"
                            />
                        </motion.button>

                        <motion.button
                            className="flex items-center justify-center w-12 h-12 rounded-full 
    border border-gray-700 bg-white/5 opacity-60 
    hover:opacity-100 transition duration-300"
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonHoverVariants}
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="Linkedin"
                                width={22}
                                height={22}
                                className="invert"
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Image with Parallax */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    initial="hidden"
                    animate="visible"
                    variants={slideRightVariants}
                    style={{ y: mouseY }}
                    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="hero"
                            width={420}
                            height={420}
                            className="rounded-2xl shadow-2xl object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default Hero
