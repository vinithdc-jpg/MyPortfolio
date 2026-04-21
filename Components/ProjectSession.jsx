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
        image: '/projects/service.png',
        title: 'Local service',
        description: 'Local-service is a modern web application built with Next.js that provides local service solutions. The project is deployed and live at https://local-service-eight.vercel.app. It features a full-stack architecture with user authentication, cloud-based file management, and a responsive UI.',
        tags: ['Tailwind CSS','Next.js','MongoDB','Framer Motion','Node.js',],
        liveUrl: 'https://local-service-eight.vercel.app/',
        githubUrl: 'https://github.com/vinithdc-jpg/Local-service'
    },
    {
        id: 2,
        image: '/projects/map.png',
        title: 'React map',
        description: 'A modern, interactive map application built with Next.js and React Leaflet. Users can search for any location and view it on a map with a marker.',
        tags: ['Next.js', 'React','React Leaflet','Leaflet','Tailwind CSS','OpenStreetMap API '],
        liveUrl: 'https://react-map-chi.vercel.app/',
        githubUrl: 'https://github.com/vinithdc-jpg/React-map'
    },
    {
        id: 3,
        image: '/projects/classroom.png',
        title: 'Smart classroom',
        description: 'A modern, responsive Smart Notes Application built using Next.js (App Router) and Tailwind CSS. This app allows users to create, manage, and organize notes efficiently with powerful features like search, filtering, pinning, and local storage persistence.',
        tags: ['Next.js', 'Tailwind CSS','React'],
        liveUrl: 'https://smart-classroom-ecru.vercel.app',
        githubUrl: 'https://github.com/vinithdc-jpg/smart-classroom'
    },
    {
        id: 4,
        image: '/projects/note.png',
        title: 'Note app',
        description: 'A modern, responsive Smart Notes Application built using Next.js (App Router) and Tailwind CSS. This app allows users to create, manage, and organize notes efficiently with powerful features like search, filtering, pinning, and local storage persistence.',
        tags: ['Next.js ','React', 'Tailwind CSS'],
        liveUrl: 'https://notes-app-pi-lake.vercel.app/',
        githubUrl: 'https://github.com/vinithdc-jpg/NotesApp'
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