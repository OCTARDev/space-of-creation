import React from 'react';
import { useTranslations } from 'next-intl';

interface Feature {
  title: string;
  description: string;
  dotColor: string;
  translationKey: string;
}

interface KeyFeaturesProps {
  features?: Feature[][];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  const t = useTranslations('arstories_keyfeatures');
  
  const defaultFeatures: Feature[][] = [
    [
      {
        translationKey: "safety",
        title: t('features.safety.title'),
        description: t('features.safety.description'),
        dotColor: "#4F46E5",
      },
      {
        translationKey: "heritage",
        title: t('features.heritage.title'),
        description: t('features.heritage.description'),
        dotColor: "#32AB30",
      },
    ],
    [
      {
        translationKey: "environmental",
        title: t('features.environmental.title'),
        description: t('features.environmental.description'),
        dotColor: "#F97316",
      },
    ],
  ];

  const columns = features || defaultFeatures;

  const Column: React.FC<{ items: Feature[] }> = ({ items }) => (
    <div className="flex flex-col mt-20">
      {items.map((feature, i) => (
        <div key={feature.translationKey} className="mb-4 flex gap-4">
          {/* Left: dot + line */}
          <div className="flex flex-col items-center">
            {/* Dot */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 shadow-xl">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: feature.dotColor }} />
            </div>
            {/* Dashed line */}
            {i < items.length - 1 && (
              <div className="w-0.5 h-full min-h-[120px] border-l-2 border-dashed border-gray-300 mt-2"></div>
            )}
          </div>

          {/* Right: text */}
          <div className={i < items.length - 1 ? 'pb-10' : ''}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">{t('title')}</h1>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {columns.map((col, i) => (
          <Column key={i} items={col} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;