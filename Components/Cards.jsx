import React from 'react'
import Image from 'next/image'

const Cards = ({ image, title, description, tags = [], liveUrl, githubUrl }) => {
    return (
        <div className="group w-[280px] snap-start shrink-0 rounded-2xl border border-white/10 bg-[#0b0b0f] overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">

            {/* Image Container */}
            <div className="relative rounded-t-2xl overflow-hidden h-[200px]">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-5">
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white text-black py-2 rounded-lg font-medium text-center hover:bg-gray-200 active:scale-95 transition-all"
                        >
                            Live Demo
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border border-white/20 py-2 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.07 3.29 9.36 7.85 10.88.57.1.78-.25.78-.55v-2.04c-3.19.7-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.8 1.18 1.83 1.18 3.08 0 4.38-2.69 5.34-5.25 5.63.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.27 11.27 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
                            </svg>
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cards
