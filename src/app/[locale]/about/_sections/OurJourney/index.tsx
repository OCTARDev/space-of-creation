import React from 'react';
import { useTranslations } from 'next-intl';

interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineProps {
  items?: TimelineItem[];
}

const OurJourney: React.FC<TimelineProps> = ({ items }) => {
  const t = useTranslations('about_ourjourney');
  
  const defaultItems: TimelineItem[] = [
    {
      title: t('items.evolution.title'),
      description: t('items.evolution.description')
    },
    {
      title: t('items.pride.title'),
      description: t('items.pride.description')
    },
    {
      title: t('items.mission.title'),
      description: t('items.mission.description')
    }
  ];

  const timelineItems = items || defaultItems;

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          {t('subtitle')}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-8 mb-12 last:mb-0">
            {/* Timeline line and dot */}
            <div className="relative flex flex-col items-center">
              {/* Gradient dot */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#E67EE8] to-[#A1E4F4] flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E67EE8] to-[#A1E4F4]"></div>
                </div>
              </div>
              
              {/* Dashed line */}
              {index < timelineItems.length - 1 && (
                <div className="w-0.5 h-full min-h-[120px] border-l-2 border-dashed border-gray-300 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2 pb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;