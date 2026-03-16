import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_30%_40%,#3b0764_0%,#0f0e12_40%,#000_100%)] w-full flex items-center">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">

                {/* Left Content */}
                <div className="text-white space-y-6">

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Frontend <br />
                        Developer
                        <span className="block text-purple-400">
                            UI/UX Enthusiast
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-lg">
                        I create clean, modern interfaces and seamless experiences
                        that turn user needs into business growth.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                        <button
                            className="bg-white text-black px-6 py-3 rounded-lg font-semibold 
  transition-all duration-300 
  hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                        >
                            Book a free call
                        </button>

                        <button
                            className="flex items-center justify-center w-12 h-12 rounded-full 
    border border-gray-700 bg-white/5 opacity-60 
    hover:opacity-100 transition duration-300"
                        >
                            <Image
                                src="/github.svg"
                                alt="Github"
                                width={22}
                                height={22}
                                className="invert"
                            />
                        </button>

                        <button
                            className="flex items-center justify-center w-12 h-12 rounded-full 
    border border-gray-700 bg-white/5 opacity-60 
    hover:opacity-100 transition duration-300"
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="Linkedin"
                                width={22}
                                height={22}
                                className="invert"
                            />
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/profile.jpg"
                        alt="hero"
                        width={420}
                        height={420}
                        className="rounded-2xl shadow-2xl object-cover"
                        priority
                    />
                </div>

            </div>

        </main>
    )
}

export default Hero
