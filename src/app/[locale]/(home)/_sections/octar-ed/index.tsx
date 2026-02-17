import Image from "next/image";
import React from "react";
import bgcover from "@/assets/media/gif.gif";

export default function SpaceEducationalHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            OCTAR Educational Offering
          </h1>
          <p className="text-lg md:text-xl mt-10 text-[#8371A7] max-w-3xl mx-auto">
            Turn lessons into immersive space adventures - let every student
            explore the universe
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative w-full overflow-hidden ">
          {/* Background Image */}
          <Image
            src={bgcover.src}
            alt="Space background"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient Overlay - matching the purple/dark theme from the design */}
          <div className="absolute inset-1 bg-gradient-to-br from-[#1a0b2e]/60 via-[#2d1b4e]/50 to-transparent" />

          {/* Content Container */}
          <div className="relative z-10 min-h-screen px-6 lg:px-12 xl:px-16 py-12">
            {/* Main Content - Top Left Positioned */}
            <div className="pt-40 pl-24 max-w-4xl">
              {/* Main Heading */}
              <p  className="text-7xl font-bold text-white mb-8">
                Explore the Planets Through Fun,
                Animated Videos
              </p>

              {/* Description */}
              <p className="text-gray-200 text-3xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                Short, engaging space videos designed for kids — helping them discover
                planets, stars, and space concepts through storytelling,animation, and
                visuals they love.
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-base md:text-lg">
                    Kid-friendly planet stories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-base md:text-lg">
                    Short, engaging video episodes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-base md:text-lg">
                    Designed for home learning & curiosity
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="px-8 py-3.5 bg-gradient-to-r from-purple-400/80 to-purple-500/80 hover:from-purple-400 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50">
                Catalogue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
