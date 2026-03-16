"use client"
import React from "react";
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
        <div className="w-full overflow-hidden bg-black py-10">
            <div className="flex w-max animate-marquee gap-6">

                {/* First set */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full bg-[#0f0f0f] text-white"
                    >
                        <span className="text-purple-400 text-xl">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}

                {/* Duplicate for infinite loop */}
                {items.map((item, index) => (
                    <div
                        key={"dup-" + index}
                        className="flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full bg-[#0f0f0f] text-white"
                    >
                        <span className="text-purple-400 text-xl">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Skills;