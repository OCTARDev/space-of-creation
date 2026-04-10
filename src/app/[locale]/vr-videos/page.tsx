"use client";
import { useState , useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { getVr } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 12;


export default function Videos() {
  const t = useTranslations("planet_videos");
  const locale = useLocale();
  const isRTL = locale === "ar";
  

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

    const vrQuery = useQuery<any>({
    queryKey: ["vr"],
    queryFn: getVr,
  });

  const vrs: any[] = vrQuery.data?.data ?? [];

const [activeCategory, setActiveCategory] = useState<any>(null);

useEffect(() => {
  if (vrs.length > 0 && !activeCategory) {
    setActiveCategory(vrs[0]); // first real item
  }
}, [vrs]);

  console.log(vrs);

  

  const filtered = vrs.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryClick = (cat: (typeof vrs)[0]) => {
    setActiveCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const openVideo = () => {
    window.open(activeCategory.link, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-[#f7f8fa]"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
    >
      {/* ── Hero Section ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <img
          src={activeCategory?.cover}
          alt={activeCategory?.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = activeCategory?.card_image;
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

        {/* Content */}
        <div className="relative h-full max-w-[1200px] mx-auto px-8 flex items-center">
          <div className="max-w-[580px] text-white">
            <p className="text-[25px] text-gray-300 mb-2.5">
              {activeCategory?.subtitle}
            </p>

            <h1 className="text-[42px] font-extrabold mb-4 leading-tight tracking-tight">
              {activeCategory?.title}
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 mb-6 max-w-[520px]">
              {activeCategory?.description}
            </p>

            <div className="flex gap-10 mb-7">
              <div>
                <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">
                  {t("hero.languages")}
                </p>
                <p className="text-gray-300">{activeCategory?.lang}</p>
              </div>
            </div>

            <button
              onClick={openVideo}
              className="inline-flex mt-10 items-center px-6 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition"
            >
              <Play size={16} fill="white" className="mr-2" />
              {t("hero.startWatching")}
            </button>
          </div>
        </div>
      </section>

      {/* ── Catalogue Section ── */}
      <section className="py-[60px]">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="text-3xl font-bold text-gray-900 mt-20">
              {t("catalogue.title")}
            </h2>
            <p className="text-gray-500 text-sm mt-1.5">
              {t("catalogue.subtitle")}
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder={t("catalogue.searchPlaceholder")}
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none w-full bg-white text-gray-700 shadow-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
              />
            </div>
          </div>

          {/* Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {t("catalogue.noResults", { query: searchQuery })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
              {paginated.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className="group text-start p-0 bg-transparent border-none outline-none cursor-pointer"
                >
                  {/* Card image — portrait 3:4 */}
                  <div
                    className="relative w-full overflow-hidden rounded-2xl bg-black"
                    style={{ aspectRatio: "3 / 4" }}
                  >
                    <Image
                      src={category.card_image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="w-full h-screen transition-transform duration-300 group-hover:scale-105"
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
            <div className="flex items-center justify-center gap-2 mt-14 mb-16">
              {/* Previous button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label={t("pagination.previous")}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>

              {/* Page numbers */}
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

              {/* Next button */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                aria-label={t("pagination.next")}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}