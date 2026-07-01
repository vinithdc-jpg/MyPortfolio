'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    slideUpVariants,
    staggerContainerVariants,
    staggerItemVariants,
} from '@/lib/motionVariants'

const CONTACT_EMAIL = 'xgoddemon023@gmail.com'

const GetInTougth = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState('idle')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: formData.subject || 'New portfolio contact',
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    return (
        <section className="w-full min-h-screen bg-[#050507] text-white flex items-center justify-center px-6 py-20">
            <motion.div
                className="w-full max-w-2xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideUpVariants}
            >
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In{" "}
                    <span className="text-purple-400 border-b-2 border-purple-500 pb-1">
                        Touch
                    </span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 mt-4 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                </motion.p>

                {/* Form Box */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="mt-10 border border-purple-500/30 rounded-xl p-6 bg-[#0b0b0f] shadow-lg text-left"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Row */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainerVariants}
                    >
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm transition"
                            variants={staggerItemVariants}
                            whileFocus={{
                                borderColor: '#a855f7',
                                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                            }}
                        />
                        <motion.input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm transition"
                            variants={staggerItemVariants}
                            whileFocus={{
                                borderColor: '#a855f7',
                                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                            }}
                        />
                    </motion.div>

                    {/* Subject */}
                    <motion.input
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full mt-4 px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        whileFocus={{
                            borderColor: '#a855f7',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                        }}
                    />

                    {/* Message */}
                    <motion.textarea
                        rows="4"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-4 px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm resize-none transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileFocus={{
                            borderColor: '#a855f7',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                        }}
                    />

                    {/* Button */}
                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full mt-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 transition py-2 rounded-md flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.45 }}
                        whileHover={status === 'loading' ? undefined : {
                            scale: 1.02,
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                        }}
                        whileTap={status === 'loading' ? undefined : { scale: 0.98 }}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}{' '}
                        <i className="bi bi-send"></i>
                    </motion.button>

                    {status === 'success' && (
                        <p className="mt-3 text-sm text-green-400 text-center">
                            Message sent! I&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="mt-3 text-sm text-red-400 text-center">
                            Something went wrong. Please try again or{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-red-300">
                                email me directly
                            </a>
                            .
                        </p>
                    )}
                </motion.form>

                {/* Social Icons */}
                <motion.div
                    className="flex justify-center gap-4 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {[
                        { icon: 'bi-github', href: 'https://github.com/vinithdc-jpg', label: 'GitHub' },
                        { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/vinith2005/', label: 'LinkedIn' },
                        { icon: 'bi-envelope', href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
                    ].map((social, i) => (
                        <motion.a
                            key={social.icon}
                            href={social.href}
                            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            aria-label={social.label}
                            className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition"
                            whileHover={{
                                scale: 1.15,
                                borderColor: '#a855f7',
                                color: '#c084fc',
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                        >
                            <i className={`bi ${social.icon}`}></i>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default GetInTougth