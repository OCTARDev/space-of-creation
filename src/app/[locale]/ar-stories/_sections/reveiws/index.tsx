import { useTranslations } from 'next-intl';

export default function WhatOurClientsSay() {
  const t = useTranslations('arstories_reviews');
  
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
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-start flex flex-col"
            >
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {t(`testimonials.${item.key}.quote`)}
              </p>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}