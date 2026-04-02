'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// ✅ Add fallback variants if file missing
const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 }
}

const Cards = ({
    image,
    title,
    description,
    tags = [],
    liveUrl,
    githubUrl
}) => {
    return (
        <motion.div
            className="group w-full rounded-2xl border border-white/10 bg-[#0b0b0f] overflow-hidden"
            initial="rest"
            whileHover="hover"
            variants={cardHoverVariants}
        >
            {/* Image */}
            <div className="relative rounded-t-2xl overflow-hidden h-[200px]">
                <motion.div
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={image || "/fallback.png"} // ✅ prevent crash
                        alt={title || "project image"}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, idx) => (
                            <motion.span
                                key={idx}
                                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                                whileHover={{ scale: 1.05 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="text-lg font-semibold text-white hover:text-purple-400 transition">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                    {liveUrl && (
                        <motion.a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white text-black py-2 rounded-lg text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Live Demo
                        </motion.a>
                    )}

                    {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border border-white/20 py-2 rounded-lg text-white text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Cards