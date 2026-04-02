'use client'

import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";
import {
    slideUpVariants,
    staggerContainerVariants,
    staggerItemVariants,
    imageVariants,
} from "@/lib/motionVariants";

const About = () => {
    const items = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "Express.js", icon: <SiExpress /> },
    ];

    return (
        <section className="w-full bg-black text-white py-20 px-6">
            {/* Moving Skills Slider */}
            <div className="mb-20">
                <Skills />
            </div>

            {/* About Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <motion.div
                    className="flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideUpVariants}
                >
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <Image
                            src="/images.jfif"
                            alt="Profile"
                            width={580}
                            height={580}
                            className="rounded-2xl border border-purple-600"
                        />

                        {/* glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-purple-600 blur-3xl opacity-20 -z-10"></div>
                    </motion.div>
                </motion.div>

                {/* About Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideUpVariants}
                >
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        About <span className="text-purple-500">Me</span>
                    </motion.h1>

                    <motion.h3
                        className="text-xl text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Full Stack Developer
                    </motion.h3>

                    <motion.p
                        className="text-gray-400 leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I am a passionate Full Stack Developer who enjoys building modern,
                        scalable, and user-friendly web applications. I specialize in both
                        frontend and backend development, creating seamless experiences
                        from design to deployment. My main technologies include JavaScript,
                        React, Next.js, Node.js, and databases like PostgreSQL.
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.h3
                        className="text-xl font-semibold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Tech Stack
                    </motion.h3>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainerVariants}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl 
      bg-[#0f0f0f] border border-gray-800 
      hover:border-purple-500 hover:bg-purple-500/10 
      transition"
                                variants={staggerItemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: '#a855f7',
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-sm font-medium text-gray-200">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;