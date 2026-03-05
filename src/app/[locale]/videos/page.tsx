"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ITEMS_PER_PAGE = 9;

const allCategories = [
  {
    id: 1,
    title: "scoops of milky way",
    img: "https://api.adgrouptech.com/images/services/0395c6ce8e1238abf44027dd534fcaf31683446343.webp",
    cover: "https://api.adgrouptech.com/images/services/56e4744bb54621dc49b5ec35f3edee9f1683446344.webp",
    video: "https://www.youtube.com/watch?v=emnp5-Rc4NE",
    year: "2014",
    duration: "20 mins",
    rating: "HR / Rulesome",
    subtitle: "The story of the supernova 7+ | 20 mins | HR / Rulesome",
    studio: "Rocket Jonuals Publications Films",
    subject: "The 1776 Lists",
    languages: "English, French",
    description:
      "This bright and colorful film tells the story of a star's life cycle: from its birth in gas dust nebulae to the end of life in the form of a black hole or a supernova star. All these phenomena are explained to the maximum extent possible and are accessible for both children and students.",
  },
  {
    id: 2,
    title: "A Tale of scale",
    img: "https://api.adgrouptech.com/images/services/6485a52dd282f688874a027b873e080d1683446496.webp",
    cover: "https://api.adgrouptech.com/images/services/6485a52dd282f688874a027b873e080d1683446496.webp",
    video: "https://www.youtube.com/watch?v=26b-ghmjR7U",
    year: "2015",
    duration: "18 mins",
    rating: "HR / Rulesome",
    subtitle: "The story of scale 7+ | 18 mins | HR / Rulesome",
    studio: "Space Films Studio",
    subject: "Scale & Universe",
    languages: "English, French",
    description:
      "A fascinating journey exploring the immense scale of our universe, from the smallest subatomic particles to the largest galactic structures known to science.",
  },
  {
    id: 3,
    title: "Astralis",
    img: "https://api.adgrouptech.com/images/services/c41d48ad67d67cc7025ae7169d4bcdac1683446622.webp",
    cover: "https://api.adgrouptech.com/images/services/52bb8d6fdd92282c825ad5ed260bef3f1683446622.webp",
    video: "https://www.youtube.com/watch?v=ND9T-rNx5E8",
    year: "2016",
    duration: "22 mins",
    rating: "HR / Rulesome",
    subtitle: "Astralis 7+ | 22 mins | HR / Rulesome",
    studio: "Stellar Productions",
    subject: "Stars & Galaxies",
    languages: "English, Spanish",
    description:
      "Astralis takes viewers on a breathtaking visual journey through star clusters, nebulae, and the birth of new solar systems across the Milky Way galaxy.",
  },
  {
    id: 4,
    title: "Bizarre Moons",
    img: "https://api.adgrouptech.com/images/services/afd3da21d1211a8e80982cc01aebfccb1683446878.webp",
    cover: "https://api.adgrouptech.com/images/services/3ce12fa555b579e4d4508758c8075dea1683446878.webp",
    video: "https://www.youtube.com/watch?v=ND9T-rNx5E8",
    year: "2017",
    duration: "25 mins",
    rating: "HR / Rulesome",
    subtitle: "Bizarre Moons 7+ | 25 mins | HR / Rulesome",
    studio: "Cosmic Films",
    subject: "Moons & Planets",
    languages: "English, French",
    description:
      "Discover the strangest moons in our solar system — from Europa's icy ocean to Titan's methane lakes — and what they might tell us about life beyond Earth.",
  },
  {
    id: 5,
title: "Enigma",
    img: "https://api.adgrouptech.com/images/services/794e024d427889bb1fa5abec2b7dcee71683447585.webp",
    cover: "https://api.adgrouptech.com/images/services/32795c31ecf6dce1995d0f5bf43a7c171683447585.webp",
    video: "https://www.youtube.com/watch?v=y-bvynYNIb4",
    year: "2021",
    duration: "24 mins",
    rating: "HR / Rulesome",
    subtitle: "Enigma 7+ | 24 mins | HR / Rulesome",
    studio: "Mystery Films",
    subject: "Dark Matter",
    languages: "English, French",
    description:
      "Explore the deepest mysteries of the cosmos — dark matter, dark energy, and the unseen forces that shape the fate of the entire universe.",
  },
  {
    id: 6,
    title: "Incredible Introduction to the solar system",
    img: "https://api.adgrouptech.com/images/services/a669cb7750da5c74a41d3259519bc7ee1683447868.webp",
    cover: "https://api.adgrouptech.com/images/services/208689df74033c800b5e17ed4310688d1683447868.webp",
    video: "https://www.youtube.com/watch?v=PC2P4V5vSOo",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 7,
    title: "Map to the Chocolate Planet",
    img: "https://api.adgrouptech.com/images/services/25dcef550ca6f6fc52eea168615b083c1683448161.webp",
    cover: "https://api.adgrouptech.com/images/services/cadcca09d4393af675140cce9a2f85f91683448161.webp",
    video: "https://www.youtube.com/watch?v=TgCqlCg54Tk",
    year: "2020",
    duration: "20 mins",
    rating: "HR / Rulesome",
    subtitle: "New Horizons 7+ | 20 mins | HR / Rulesome",
    studio: "Deep Space Films",
    subject: "Space Exploration",
    languages: "English",
    description:
      "Follow the New Horizons spacecraft on its historic mission past Pluto and into the mysterious Kuiper Belt at the edge of our solar system.",
  },
  {
    id: 8,
    title: "Once upon The Big Bang",
    img: "https://api.adgrouptech.com/images/services/a2e004e4c7e63b8ef24dfbb1178dabe81683012375.webp",
    cover: "https://api.adgrouptech.com/images/services/32795c31ecf6dce1995d0f5bf43a7c171683447585.webp",
    video: "https://www.youtube.com/watch?v=eZ6IT-_uGu8",
    year: "2021",
    duration: "24 mins",
    rating: "HR / Rulesome",
    subtitle: "Enigma 7+ | 24 mins | HR / Rulesome",
    studio: "Mystery Films",
    subject: "Dark Matter",
    languages: "English, French",
    description:
      "Explore the deepest mysteries of the cosmos — dark matter, dark energy, and the unseen forces that shape the fate of the entire universe.",
  },
    {
    id: 9,
    title: "Pursuing the Dwarfs Script",
    img: "https://api.adgrouptech.com/images/services/f9358c2e33645cf1f7b5c4327e41109f1683012626.webp",
    cover: "https://api.adgrouptech.com/images/services/954e50b8f18c543c3939efc7f6b900fe1683012626.webp",
    video: "https://www.youtube.com/watch?v=PC2P4V5vSOo",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
    {
    id: 10,
    title: "Cosmix",
    img: "https://api.adgrouptech.com/images/services/abb5da9d1f408f69584bf95f83d42e251683012735.webp",
    cover: "https://api.adgrouptech.com/images/services/2cc02a5e3d7b2e2b13ae77d24b7faab91683012735.webp",
    video: "https://www.youtube.com/watch?v=sIdvo0gUzfg",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
    {
    id: 11,
    title: "Satelix",
    img: "https://api.adgrouptech.com/images/services/8ae46d0fd512927cf573a29d38556bce1683012912.webp",
    cover: "https://api.adgrouptech.com/images/services/4f819c5ad011d69da0163834a8c9da3f1683012912.webp",
    video: "https://www.youtube.com/watch?v=KoHFUZAuS_A",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
    {
    id: 12,
    title: "Cosmonaute 360",
    img: "https://api.adgrouptech.com/images/services/c5e444cd4cdf75e4c7c851bc16e83edf1683013328.webp",
    cover: "https://api.adgrouptech.com/images/services/1fb547dd605bb3980b9715f1eae9998f1683013328.webp",
    video: "https://www.youtube.com/watch?v=5_a596Y4XY4",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
    {
    id: 13,
    title: "Cosmonaute 360",
    img: "https://api.adgrouptech.com/images/services/c5e444cd4cdf75e4c7c851bc16e83edf1683013328.webp",
    cover: "https://api.adgrouptech.com/images/services/1fb547dd605bb3980b9715f1eae9998f1683013328.webp",
    video: "https://www.youtube.com/watch?v=5_a596Y4XY4",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
];

export default function Videos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filtered = allCategories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (cat: (typeof allCategories)[0]) => {
    setActiveCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const openVideo = () => {
    window.open(activeCategory.video, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* ── Hero Section ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <img
          src={activeCategory.cover}
          alt={activeCategory.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = activeCategory.img;
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

        {/* Content */}
        <div className="relative h-full max-w-[1200px] mx-auto px-8 flex items-center">
          <div className="max-w-[580px] text-white">
            <p className="text-[25px] text-gray-300 mb-2.5">{activeCategory.subtitle}</p>

            <h1 className="text-[42px] font-extrabold mb-4 leading-tight tracking-tight">
              {activeCategory.title}{" "}
              <span className="font-normal text-[32px] text-gray-300">({activeCategory.year})</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 mb-6 max-w-[520px]">
              {activeCategory.description}
            </p>

            <div className="flex gap-10 mb-7">
              <div>
                <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Main Information</p>
                <p className="text-gray-300">{activeCategory.studio}</p>
                <p className="text-gray-300">{activeCategory.subject}</p>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">Languages</p>
                <p className=" text-gray-300">{activeCategory.languages}</p>
              </div>
            </div>

            <button
              onClick={openVideo}
              className="inline-flex mt-10 items-center px-6 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition"
            >
              <Play size={16} fill="white" />
              Start Watching
            </button>
          </div>
        </div>
      </section>

      {/* ── Catalogue Section ── */}
      <section className="py-[60px]">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="text-3xl font-bold text-gray-900 mt-20">Explore the Universe</h2>
            <p className="text-gray-500 text-sm mt-1.5">
              Fun, age-appropriate videos that turn space science into an exciting adventure.
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-end mb-6">
            <div className="relative">
 
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-8 pr-3.5 py-2.5 border border-gray-200 rounded-lg text-sm outline-none w-60 bg-white text-gray-700"
              />
            </div>
          </div>

          {/* Grid — 1 col mobile → 2 col sm → 3 col md → 4 col lg */}
          {paginated.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No videos found matching &quot;{searchQuery}&quot;
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginated.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className="group text-left p-0 bg-transparent border-none outline-none cursor-pointer"
                >
                  {/* Card image — portrait 3:4 */}
                  <div
                    className="relative w-full overflow-hidden rounded-2xl bg-black"
                    style={{ aspectRatio: "3 / 4" }}
                  >
                    <Image
                      src={category.img}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x530/dde1ea/9ca3af?text=${encodeURIComponent(category.title)}`;
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="mt-3 text-sm font-normal text-gray-800 leading-snug px-0.5">
                    {category.title}
                  </h2>
                </button>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-9">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-gray-500"
              >
                <ChevronLeft size={16} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 rounded-lg font-semibold text-sm cursor-pointer transition-colors ${
                    currentPage === i + 1
                      ? "bg-indigo-500 text-white border-none"
                      : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-gray-500"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}