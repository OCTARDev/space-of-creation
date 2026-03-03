"use client";

import Image from "next/image";
import bgcover from "@/assets/media/learncover.png";
import { Star, Users, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('learning_hero');
  
  const badges = [
    { key: 'engagement', icon: Users },
    { key: 'safe', icon: Star },
    { key: 'centers', icon: Globe },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src={bgcover}
          alt="Learning-Support"
          fill
          priority
          className="h-full shadow-gray-200 object-cover object-center"
        />

        {/* Softer / darker overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20 max-w-2xl pb-24">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-6">
            {t('breadcrumb.home')} / {t('breadcrumb.solutions')} /{" "}
            <span className="text-[#79B9CE]">{t('breadcrumb.learning')}</span>
          </p>

          {/* For */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-2 max-w-md">
            {t('for')}
          </p>

          {/* Heading */}
          <h2 className="text-white text-5xl md:text-4xl font-extrabold leading-tight mb-6">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {t('subtitle')}
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
          
          <div>
            <button className="px-6 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}