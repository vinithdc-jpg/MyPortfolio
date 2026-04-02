'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Cards from './Cards'
import {
    slideUpVariants,
    staggerContainerVariants,
    staggerItemVariants,
} from '@/lib/motionVariants'

const projects = [
    {
        id: 1,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['React', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 2,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['Next.js', 'JavaScript'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 3,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['Web Design', 'CSS'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 4,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['React', 'Node.js'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 5,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['Full Stack', 'MongoDB'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 6,
        image: '/images.jfif',
        title: 'Project Name',
        description: 'Brief description of your project',
        tags: ['JavaScript', 'API'],
        liveUrl: '#',
        githubUrl: '#'
    },
]

const ProjectSession = () => {
    return (
        <section className="relative w-full py-24 bg-[#07070a] text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.12),transparent_60%)]" />

            {/* Container */}
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideUpVariants}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        A selection of my recent work focusing on full stack
                        development and interactive web experiences.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerVariants}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItemVariants}
                        >
                            <Cards
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectSession