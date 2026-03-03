"use client";

import Image from "next/image";
import bgcover from "@/assets/media/lifecover.png";
import { User, BookOpen, Star } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('life_hero');
  
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src={bgcover}
          alt="Life Digital Environment"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20 max-w-3xl pb-24">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-6">
            {t('breadcrumb.home')} / {t('breadcrumb.solutions')} /{" "}
            <span className="text-[#79B9CE] underline underline-offset-2">
              {t('breadcrumb.life')}
            </span>
          </p>

          {/* Heading */}
          <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-5">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {t('subtitle')}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/25">
              <User size={15} />
              {t('badges.themes')}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/25">
              <BookOpen size={15} />
              {t('badges.multitouch')}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/25">
              <Star size={15} />
              {t('badges.motion')}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-3 rounded-xl text-white text-base font-semibold bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
              {t('buttons.project')}
            </button>

            <button className="px-10 py-3 rounded-xl text-[#A88EEF] font-semibold bg-white border border-white shadow-lg hover:bg-white/90 transition">
              <Link href="/catalogue">{t('buttons.catalogue')}</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}