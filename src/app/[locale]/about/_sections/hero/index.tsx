"use client";

import Image from "next/image";
import bgcover from "@/assets/media/aboutCover.jpg";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('about_hero');
  
  return (
    <section className="mt-10 z-1 relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={bgcover}
        alt="About cover background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#013045]/40 to-[#090019]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          
          {/* Breadcrumb */}
          <div className="text-white/70 text-sm mb-6">
            {t('breadcrumb.home')} / <span className="text-white/90">{t('breadcrumb.about')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base lg:text-lg leading-relaxed">
            {t('description')}
          </p>

        </div>
      </div>
    </section>
  );
}