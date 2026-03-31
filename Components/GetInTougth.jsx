import React from 'react'

const GetInTougth = () => {
    return (
        <section className="w-full min-h-screen bg-[#050507] text-white flex items-center justify-center px-6 py-20">

            <div className="w-full max-w-2xl text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold">
                    Get In{" "}
                    <span className="text-purple-400 border-b-2 border-purple-500 pb-1">
                        Touch
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 text-sm md:text-base">
                    Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                </p>

                {/* Form Box */}
                <div className="mt-10 border border-purple-500/30 rounded-xl p-6 bg-[#0b0b0f] shadow-lg">

                    {/* Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm"
                        />
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm"
                        />
                    </div>

                    {/* Subject */}
                    <input
                        type="text"
                        placeholder="Project Inquiry"
                        className="w-full mt-4 px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm"
                    />

                    {/* Message */}
                    <textarea
                        rows="4"
                        placeholder="Tell me about your project..."
                        className="w-full mt-4 px-4 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-purple-500 text-sm resize-none"
                    />

                    {/* Button */}
                    <button className="w-full mt-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 transition py-2 rounded-md flex items-center justify-center gap-2 text-sm font-medium">
                        Send Message <i className="bi bi-send"></i>
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6">
                    {[
                        "bi-twitter",
                        "bi-github",
                        "bi-linkedin",
                        "bi-envelope"
                    ].map((icon, i) => (
                        <button
                            key={i}
                            className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition"
                        >
                            <i className={`bi ${icon}`}></i>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default GetInTougth