"use client";

import Video from "next-video";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('vclab_video');

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-base md:text-lg text-indigo-400 leading-relaxed">
          {t('subtitle.line1')}<br />
          {t('subtitle.line2')}
        </p>
      </div>

      {/* Video Card */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl"
        style={{
          background: "linear-gradient(135deg, #E1F4F9 0%, #EDE2FF 100%)",
        }}
      >

        
        {/* Gradient background layers for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #E1F4F9 0%, #b8ccd8 40%, #8da3b0 70%, #6b8290 100%)",
          }}
        />

        {/* Video content area */}
        <div className="relative flex items-center justify-center"
          style={{ minHeight: "380px" }}>

            
            {/* <Video   
                src="https://res.cloudinary.com/dhqe8isrb/video/upload/v1760132818/sectionVideo/njjzgcantnf3erimbx7o.mp4"
                
                
                
                className="w-full h-full object-cover"
              /> */}
          {/* Play button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
            aria-label="Play video"
          >
          </button>
        </div>


        {/* Bottom caption bar */}
        <div className="relative text-center z-10 bg-gray-700 bg-opacity-90 px-5 py-3">
          <p className="text-white text-sm font-medium">
            {t('caption.title')}
          </p>
          <p className="text-gray-300 text-xs mt-0.5">
            {t('caption.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}