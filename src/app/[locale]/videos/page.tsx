"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Globe } from "lucide-react";

const ITEMS_PER_PAGE = 9;

type Video = {
  id: number;
  title: string;
  year: number;
  duration: string;
  ageRating: string;
  description: string;
  languages: string[];
  thumbnail: string;
  heroImage: string;
  category: string;
};

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "NASA's Journey to Mars",
    year: 2014,
    duration: "1h 20min",
    ageRating: "8+",
    description:
      "This bright and colorful film tells the story of a star's life-cycle from its birth as a gas cloud nebula to the end of its life in the form of a black hole or a supernova star. All filmic principles are developed to the maximum extent possible and are accessible for both children and students.",
    languages: ["English", "Arabic", "French", "Spanish"],
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1600&h=900&fit=crop",
    category: "Space",
  },
  {
    id: 2,
    title: "A Tale of Scale",
    year: 2018,
    duration: "45min",
    ageRating: "6+",
    description: "An exploration of the vastness of the universe from the smallest atom to the largest galaxy clusters.",
    languages: ["English", "German"],
    thumbnail: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600&h=900&fit=crop",
    category: "Science",
  },
  {
    id: 3,
    title: "Astralia",
    year: 2020,
    duration: "1h 5min",
    ageRating: "10+",
    description: "A breathtaking journey through the cosmos, unveiling the secrets of distant worlds and alien landscapes.",
    languages: ["English", "Japanese"],
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&h=900&fit=crop",
    category: "Documentary",
  },
  {
    id: 4,
    title: "Bizarre Moons",
    year: 2019,
    duration: "55min",
    ageRating: "8+",
    description: "Discover the strangest moons in our solar system, from Europa's frozen oceans to Titan's methane lakes.",
    languages: ["English", "French"],
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&h=900&fit=crop",
    category: "Space",
  },
  {
    id: 5,
    title: "Once Upon the Big Bang",
    year: 2017,
    duration: "1h 15min",
    ageRating: "10+",
    description: "Travel back 13.8 billion years to witness the birth of the universe and the formation of the first stars.",
    languages: ["English", "Arabic", "Spanish"],
    thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&h=900&fit=crop",
    category: "Science",
  },
  {
    id: 6,
    title: "Incredible: Introduction to the Solar System",
    year: 2021,
    duration: "1h 30min",
    ageRating: "6+",
    description: "A comprehensive tour of our solar system designed to ignite curiosity in young minds about space exploration.",
    languages: ["English", "Mandarin", "Arabic"],
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1600&h=900&fit=crop",
    category: "Education",
  },
  {
    id: 7,
    title: "New Horizons",
    year: 2016,
    duration: "50min",
    ageRating: "8+",
    description: "Follow the New Horizons spacecraft on its historic mission to Pluto and beyond into the Kuiper Belt.",
    languages: ["English"],
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    category: "Space",
  },
  {
    id: 8,
    title: "Enigma",
    year: 2022,
    duration: "1h 10min",
    ageRating: "12+",
    description: "Dark matter, dark energy, and the deepest mysteries of the cosmos — science confronts the unknown.",
    languages: ["English", "French", "German"],
    thumbnail: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1600&h=900&fit=crop",
    category: "Science",
  },
  {
    id: 9,
    title: "Map to the Chocolate Planet",
    year: 2015,
    duration: "40min",
    ageRating: "4+",
    description: "A fun-filled animated adventure for young explorers discovering a planet made entirely of chocolate.",
    languages: ["English", "Spanish", "Arabic"],
    thumbnail: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=1600&h=900&fit=crop",
    category: "Animation",
  },
  {
    id: 10,
    title: "Mexico: Archeoastronomy Between Space and Time",
    year: 2023,
    duration: "1h 25min",
    ageRating: "10+",
    description: "Explore how ancient Mexican civilizations tracked celestial movements and built monuments aligned with the stars.",
    languages: ["Spanish", "English"],
    thumbnail: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1600&h=900&fit=crop",
    category: "History",
  },
  {
    id: 11,
    title: "Stellar Nurseries",
    year: 2020,
    duration: "58min",
    ageRating: "8+",
    description: "Inside the giant molecular clouds where new stars are born every second across the Milky Way.",
    languages: ["English", "French"],
    thumbnail: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1600&h=900&fit=crop",
    category: "Space",
  },
  {
    id: 12,
    title: "Black Hole Hunters",
    year: 2019,
    duration: "1h 18min",
    ageRating: "12+",
    description: "The story behind the first ever photograph of a black hole and the scientists who made it possible.",
    languages: ["English", "German", "Japanese"],
    thumbnail: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=400&h=290&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=1600&h=900&fit=crop",
    category: "Science",
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<Video>(VIDEOS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(VIDEOS.length / ITEMS_PER_PAGE);
  const paginated = VIDEOS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleVideoClick = (video: Video) => {
    setActiveVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ── Hero ── */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <img
          src={activeVideo.heroImage}
          alt={activeVideo.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl text-white">
            {/* Breadcrumb */}
            <p className="text-xs md:text-sm text-gray-300 mb-4 tracking-wide">
              Life Digital Environment / Videos /{" "}
              <span className="text-sky-400 font-semibold">{activeVideo.title}</span>
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              {activeVideo.title}{" "}
              <span className="text-gray-300 font-normal text-2xl md:text-3xl">
                ({activeVideo.year})
              </span>
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-300 mb-4">
              <span>Duration of the experience: {activeVideo.duration} | {activeVideo.ageRating} | Published</span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6 max-w-xl">
              {activeVideo.description}
            </p>

            {/* Info grid */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Main Information</p>
                <p className="text-xs text-gray-300">Category: {activeVideo.category}</p>
                <p className="text-xs text-gray-300">Rating: {activeVideo.ageRating}</p>
                <p className="text-xs text-gray-300">Duration: {activeVideo.duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Languages</p>
                {activeVideo.languages.map((lang) => (
                  <p key={lang} className="text-xs text-gray-300">{lang}</p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
              <Play size={15} fill="white" />
              Start Watching
            </button>
          </div>
        </div>
      </section>

      {/* ── Videos Grid ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore the Universe</h2>
          <p className="text-sm text-gray-500 mt-1">
            Fun, age-appropriate videos that turn space science into an exciting adventure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {paginated.map((video) => {
            const isActive = activeVideo.id === video.id;
            return (
              <button
                key={video.id}
                onClick={() => handleVideoClick(video)}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left ${
                  isActive ? "ring-2 ring-sky-500 shadow-lg" : ""
                }`}
              >
                {/* Active checkmark */}
                {isActive && (
                  <div className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center shadow-md">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative w-full" style={{ paddingBottom: "72%" }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x290/dde1ea/9ca3af?text=${encodeURIComponent(video.title)}`;
                    }}
                  />
                  {/* Play icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <Play size={16} fill="#0ea5e9" color="#0ea5e9" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="p-3">
                  <h3 className={`text-xs sm:text-sm font-semibold leading-snug transition-colors ${
                    isActive ? "text-sky-600" : "text-gray-800 group-hover:text-sky-600"
                  }`}>
                    {video.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-sky-500 text-white shadow"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}