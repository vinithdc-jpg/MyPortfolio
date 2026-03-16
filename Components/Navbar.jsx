import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[94vw] bg-[#202832] text-white shadow-md z-50 rounded-4xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div>
                    <h2 className="text-xl font-bold tracking-wider">VINITH</h2>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <li className="cursor-pointer hover:text-purple-400 transition">Home</li>
                    <li className="cursor-pointer hover:text-purple-400 transition">Service</li>
                    <li className="cursor-pointer hover:text-purple-400 transition">Projects</li>
                    <li className="cursor-pointer hover:text-purple-400 transition">About</li>
                </ul>

                {/* Button */}
                <div>
                    <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold transition">
                        Get in Touch
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
