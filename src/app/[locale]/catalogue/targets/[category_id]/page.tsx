"use client";

import { getcategorys, getTargets } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgcover from "@/assets/media/catloguecover.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl';

const ITEMS_PER_PAGE = 9;

type Category = {
  id: number;
  title: string;
  media: string;
};

export default function Target() {
  const t = useTranslations('target');
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const {category_id}=useParams<any>()

  const targetQuery = useQuery<any>({
    queryKey: ["targets", category_id],
    queryFn: () => getTargets(category_id),
    enabled: !!category_id,
  });

  const allCategories: Category[] = targetQuery.data?.data ?? [];

  const filtered = allCategories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Hero displays default cover until user clicks a card
  const heroImage = activeCategory?.media ?? bgcover;
  const heroTitle = activeCategory?.title ?? t('hero.defaultTitle');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-screen w-full">
          {/* Background Image */}
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-3xl text-white">
              <p className="text-sm md:text-base text-gray-200 mb-3">
                {t('hero.breadcrumb.life')} / {t('hero.breadcrumb.categories')} /{" "}
                <span className="text-[#79B9CE] font-semibold">
                  {heroTitle}
                </span>
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {heroTitle}
              </h1>
              <p className="text-base md:text-lg text-gray-200 max-w-2xl">
                {t('hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
           
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder={t('section.searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Loading State */}
          {targetQuery.isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-200" />
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {targetQuery.isError && (
            <div className="text-center py-12">
              <p className="text-red-500">
                {t('section.error')}
              </p>
            </div>
          )}

          {/* Categories Grid */}
          {!targetQuery.isLoading && !targetQuery.isError && (
            <>
              {paginated.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {t('section.noResults', { query: searchQuery })}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginated.map((category) => {
                    const isActive = activeCategory?.id === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className={`
                          group relative bg-white rounded-xl shadow-sm overflow-hidden
                          transition-all duration-300 hover:shadow-xl text-left
                          ${isActive ? "ring-2 ring-purple-500 shadow-lg" : ""}
                        `}
                      >
                        {/* Active checkmark badge */}
                        {isActive && (
                          <div
                            style={{
                              position: "absolute",
                              top: 9,
                              right: 9,
                              zIndex: 10,
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              background: "#4c6ef5",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 8px rgba(76,110,245,0.55)",
                            }}
                          >
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Image wrapper */}
                        <div
                          style={{
                            position: "relative",
                            paddingBottom: "72%",
                            overflow: "hidden",
                            background: "#e8eaf2",
                          }}
                        >
                          <img
                            src={category.media}
                            alt={category.title}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://placehold.co/400x290/dde1ea/9ca3af?text=${encodeURIComponent(
                                category.title
                              )}`;
                            }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            className="group-hover:scale-105"
                          />
                        </div>

                        {/* Title */}
                        <div className="p-4">
                          <h3
                            className={`
                            font-semibold text-base transition-colors
                            ${
                              isActive
                                ? "text-purple-600"
                                : "text-gray-900 group-hover:text-purple-600"
                            }
                          `}
                          >
                            {category.title}
                          </h3>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`
                        w-10 h-10 rounded-lg font-medium transition-colors
                        ${
                          currentPage === i + 1
                            ? "bg-purple-500 text-white"
                            : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}