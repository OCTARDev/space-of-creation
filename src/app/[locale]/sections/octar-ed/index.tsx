import React from 'react';


export default function SpaceEducationalHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        
        <source
          src="https://cdn.pixabay.com/video/2022/08/30/130096-745166875_large.mp4"
          type="video/mp4"
        />
      </video>

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
            Turn lessons into immersive space adventures - let every student explore the universe
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl w-full w-100 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Explore the Planets Through Fun,
            <br />
            Animated Videos
          </h2>

          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Short, engaging space videos designed for kids — helping them discover
            planets, stars, and space concepts through storytelling, animation, and
            visuals they love.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg">Kid-friendly planet stories</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg">Short, engaging video episodes</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg">Designed for home learning & curiosity</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}