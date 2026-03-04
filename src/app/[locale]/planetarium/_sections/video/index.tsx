"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations('planetarium_video');

  const youtubeId = "pDf0XFdTaXs";
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="md:text-lg text-indigo-400 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Video Card */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl"
        style={{
          background: "linear-gradient(135deg, #E1F4F9 0%, #EDE2FF 100%)",
        }}
      >
        {/* Video — 16:9 aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title="Planetarium video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(107,130,144,0.4) 100%)",
                }}
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-16 h-16 p-5 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-gray-800 ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Bottom caption bar */}
        <div className="relative text-center z-10 bg-gray-700 bg-opacity-90 px-5 py-3">
          <p className="text-gray-600 text-sm font-medium">
            {t('caption.title')}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">
            {t('caption.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}