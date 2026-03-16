import React from "react";
import Skills from "./Skills";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";


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
                <div className="flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images.jfif"
                            alt="Profile"
                            width={580}
                            height={580}
                            className="rounded-2xl border border-purple-600"
                        />

                        {/* glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-purple-600 blur-3xl opacity-20 -z-10"></div>
                    </div>
                </div>

                {/* About Content */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        About <span className="text-purple-500">Me</span>
                    </h1>

                    <h3 className="text-xl text-gray-300 mb-6">
                        Full Stack Developer
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        I am a passionate Full Stack Developer who enjoys building modern,
                        scalable, and user-friendly web applications. I specialize in both
                        frontend and backend development, creating seamless experiences
                        from design to deployment. My main technologies include JavaScript,
                        React, Next.js, Node.js, and databases like PostgreSQL.
                    </p>

                    {/* Tech Stack */}
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl 
      bg-[#0f0f0f] border border-gray-800 
      hover:border-purple-500 hover:bg-purple-500/10 
      transition"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-sm font-medium text-gray-200">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;