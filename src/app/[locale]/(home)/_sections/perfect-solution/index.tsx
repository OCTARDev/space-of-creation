import React from "react";
import { useTranslations } from 'next-intl';
import per_s_1 from "@/assets/media/per_s_1.png"
import per_s_2 from "@/assets/media/per_s_2.png"
import per_s_3 from "@/assets/media/per_s_3.png"
import per_s_4 from "@/assets/media/per_s_4.png"
import Link from "next/link";

const SolutionGrid: React.FC = () => {
  const t = useTranslations('home_perfect_solutions');
  
  const cards = [
    {
      key: 'government',
      image: per_s_2.src,
      Link:"/ar-stories",
    },
    {
      key: 'schools',
      image: per_s_1.src,
        Link: "/octar"

    },
    {
      key: 'centers',
      image: per_s_3.src,
        Link:"/life"

    },
    {
      key: 'specialized',
      image: per_s_4.src,
        Link: "/learning-support"

    },
  ];

  return (
    <section className="bg-white-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-white-800">
          {t('title')}
        </h2>
        <p className="text-white-500 mt-2">
          {t('subtitle')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 
                         hover:border-blue-500 
                         hover:shadow-xl 
                         transition-all duration-300 ease-in-out 
                         overflow-hidden"
            >
              <Link href={card.Link}>
                   {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={t(`cards.${card.key}.title`)}
                  className="w-full h-64 object-cover 
                             transition-transform duration-500 ease-in-out 
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`cards.${card.key}.description`)}
                </p>
              </div>
              </Link>
       
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionGrid;