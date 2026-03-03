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
  const t = useTranslations('vclab_keyfeatures');
  
  const defaultFeatures: Feature[][] = [
    [
      {
        translationKey: "safe",
        title: t('features.safe.title'),
        description: t('features.safe.description'),
        dotColor: "#4F46E5",
      },
      {
        translationKey: "cost",
        title: t('features.cost.title'),
        description: t('features.cost.description'),
        dotColor: "#32AB30",
      },
      {
        translationKey: "assessment",
        title: t('features.assessment.title'),
        description: t('features.assessment.description'),
        dotColor: "#0046DE",
      },
    ],
    [
      {
        translationKey: "progress",
        title: t('features.progress.title'),
        description: t('features.progress.description'),
        dotColor: "#F97316",
      },
      {
        translationKey: "simulations",
        title: t('features.simulations.title'),
        description: t('features.simulations.description'),
        dotColor: "#EC4899",
      },
      {
        translationKey: "bilingual",
        title: t('features.bilingual.title'),
        description: t('features.bilingual.description'),
        dotColor: "#3A9DB2",
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
        <p className="text-base text-[#8371A7]">{t('subtitle')}</p>
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