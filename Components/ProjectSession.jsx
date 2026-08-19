"use client";

import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/motionVariants";

const projects = [
  {
    id: 1,
    image: "/projects/service.png",
    title: "Local service",
    description:
      "Local-service is a modern web application built with Next.js that provides local service solutions. The project is deployed and live at https://local-service-eight.vercel.app. It features a full-stack architecture with user authentication, cloud-based file management, and a responsive UI.",
    tags: ["Tailwind CSS", "Next.js", "MongoDB", "Framer Motion", "Node.js"],
    liveUrl: "https://local-service-eight.vercel.app/",
    githubUrl: "https://github.com/vinithdc-jpg/Local-service",
  },
  {
    id: 2,
    image: "/projects/Aiassisatnce.png",
    title: "Ai Assistance",
    description:
      "A full-stack AI assistant web application built with Next.js and React, featuring secure user authentication with JWT-based sessions and password hashing. The app uses MongoDB (via Mongoose) for data persistence and Tailwind CSS for a clean, responsive UI. Custom middleware handles route protection and session management.",
    tags: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Groq API ",
    ],
    liveUrl: "https://github.com/vinithdc-jpg/ai-assistance",
    githubUrl: "https://github.com/vinithdc-jpg/ai-assistance",
  },
  {
    id: 3,
    image: "/projects/Hypermarket.png",
    title: "Hypermarket",
    description:
      "The frontend for a hyperlocal marketplace platform, built with Next.js and React. It features location-based functionality via interactive maps (Leaflet), real-time updates through WebSockets, and robust form handling with validation. State management is split between React Query for server state and Zustand for client state, with a clean, responsive UI styled using Tailwind CSS.",
    tags: ["Next.js", "React", "Node.js", "MongoDb", "Tailwind CSS"],
    liveUrl: "hhttps://github.com/vinithdc-jpg/Hyperlocal-Marketplace-frontend",
    githubUrl:
      "https://github.com/vinithdc-jpg/Hyperlocal-Marketplace-frontend",
  },
  {
    id: 4,
    image: "/projects/ResumeBuilder.png",
    title: "AI ResumeBuilder",
    description:
      "A React single-page application for building or analyzing resumes, likely with AI-assisted features. Built with Vite for fast development and bundling, styled using Tailwind CSS, and structured with client-side routing for a multi-page experience.",
    tags: [
      "React",
      "Node.js",
      "Expressjs",
      "Groq API ",
      "MongoDB",
    ],
    liveUrl: "https://github.com/vinithdc-jpg/Ai-resume",
    githubUrl: "https://github.com/vinithdc-jpg/Ai-resume",
  },
  {
    id: 5,
    image: "/projects/classroom.png",
    title: "Smart classroom",
    description:
      "A modern, responsive Smart Notes Application built using Next.js (App Router) and Tailwind CSS. This app allows users to create, manage, and organize notes efficiently with powerful features like search, filtering, pinning, and local storage persistence.",
    tags: ["Next.js", "Tailwind CSS", "React", "Frontend", "web design"],
    liveUrl: "https://smart-classroom-ecru.vercel.app",
    githubUrl: "https://github.com/vinithdc-jpg/smart-classroom",
  },
  {
    id: 6,
    image: "/projects/note.png",
    title: "Note app",
    description:
      "A modern, responsive Smart Notes Application built using Next.js (App Router) and Tailwind CSS. This app allows users to create, manage, and organize notes efficiently with powerful features like search, filtering, pinning, and local storage persistence.",
    tags: ["Next.js ", "React", "Tailwind CSS"],
    liveUrl: "https://notes-app-pi-lake.vercel.app/",
    githubUrl: "https://github.com/vinithdc-jpg/NotesApp",
  },
];

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
            A selection of my recent work focusing on full stack development and
            interactive web experiences.
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
            <motion.div key={project.id} variants={staggerItemVariants}>
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
  );
};

export default ProjectSession;
