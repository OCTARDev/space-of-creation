"use client";

import Image from "next/image";
import bgcover from "@/assets/media/gif.gif";
import { Star, Users, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const stats = [
  { value: "15+", key: "programs" },
  { value: "100%", key: "aligned" },
  { value: "8", key: "grades" },
  { value: "2", key: "languages" },
];

export default function Hero() {
  const t = useTranslations("planetarium_hero");

  const badges = [
    { key: "moe", icon: Users },
    { key: "bilingual", icon: Star },
    { key: "educators", icon: Globe },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src={bgcover}
          alt="Educational-Planetarium"
          fill
          priority
          className="h-full"
        />

        {/* Softer / darker overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20 max-w-2xl pb-24">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-6">
            {t("breadcrumb.home")} / {t("breadcrumb.solutions")} /{" "}
            <span className="text-[#79B9CE]">
              {t("breadcrumb.planetarium")}
            </span>
          </p>

          {/* Ideal for */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-2 max-w-md">
            {t("ideal")}
          </p>

          {/* Heading */}
          <h2 className="text-white text-5xl md:text-4xl font-extrabold leading-tight mb-6">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {t("subtitle")}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20"
                >
                  <Icon size={16} />
                  {t(`badges.${badge.key}`)}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-3 rounded-xl text-white text-base font-semibold bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
              <Link href={"/contact"}> {t("buttons.consultation")}</Link>
            </button>

            <button className="px-10 py-3 rounded-xl font-semibold bg-white border border-white shadow-lg hover:bg-white/90 transition">
              <Link href="/planetarium-videos"> {t("buttons.catalogue")}</Link>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-10 left-0 right-0 z-20 backdrop-blur-md bg-[#DEF9FF33] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="flex flex-col items-center justify-center py-5 px-4 gap-1"
              >
                <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-xs md:text-sm text-center">
                  {t(`stats.${stat.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
