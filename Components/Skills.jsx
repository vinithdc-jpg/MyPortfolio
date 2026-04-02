"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiOpenai, SiFigma, SiPostman } from "react-icons/si";

const Skills = () => {
    const items = [
        { name: "AI Agents", icon: <SiOpenai /> },
        { name: "Frontend Development", icon: <FaReact /> },
        { name: "Backend Development", icon: <FaNodeJs /> },
        { name: "RESTful API", icon: <SiPostman /> },
        { name: "Database Management", icon: <FaDatabase /> },
        { name: "UI/UX Design", icon: <SiFigma /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
    ];

    return (
        <motion.div
            className="w-full overflow-hidden bg-black py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex w-max animate-marquee gap-6">
                {/* First set */}
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full bg-[#0f0f0f] text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                        }}
                    >
                        <span className="text-purple-400 text-xl">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                ))}

                {/* Duplicate for infinite loop */}
                {items.map((item, index) => (
                    <motion.div
                        key={"dup-" + index}
                        className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full bg-[#0f0f0f] text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                        }}
                    >
                        <span className="text-purple-400 text-xl">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;