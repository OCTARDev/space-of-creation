import { useTranslations } from 'next-intl';

export default function WhatOurClientsSay() {
  const t = useTranslations('vclab_reviews');
  
  const testimonials = [
    {
      key: 'teacher',
    },
    {
      key: 'coordinator',
    },
    {
      key: 'student',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          {t('title')}
        </h2>
        <p className="mt-3 text-sm text-[#8371A7]">
          {t('subtitle')}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left flex flex-col"
            >
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {t(`testimonials.${item.key}.quote`)}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center text-gray-700 font-semibold flex-shrink-0">
                  {t(`testimonials.${item.key}.initials`)}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    {t(`testimonials.${item.key}.name`)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t(`testimonials.${item.key}.title`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}