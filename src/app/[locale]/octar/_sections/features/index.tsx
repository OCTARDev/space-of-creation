import React from 'react';
import { useTranslations } from 'next-intl';

const AlertTriangleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef2134" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const GraduationCapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const CheckBadgeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const LabIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#89278B"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3h6" />
    <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4h8.8A3 3 0 0 0 19 17l-5-9V3" />
    <path d="M8 14h8" />
  </svg>
);

const BulletItem = ({ text, color }: { text: string; color: string }) => (
  <li className="mt-2 flex items-start gap-2 text-gray-600 text-sm leading-snug">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }}></span>
    <span>{text}</span>
  </li>
)

export default function Features() {
  const t = useTranslations('octar_features');
  
  const cards = [
    {
      key: 'problem',
      icon: <AlertTriangleIcon />,
      bgColor: '#fee2e2',
      bulletColor: '#E84545',
      itemCount: 4
    },
    {
      key: 'solution',
      icon: <GraduationCapIcon />,
      bgColor: '#dbeafe',
      bulletColor: '#3A9DB2',
      itemCount: 4
    },
    {
      key: 'impact',
      icon: <CheckBadgeIcon />,
      bgColor: '#dcfce7',
      bulletColor: '#00A63E',
      itemCount: 4
    },
    {
      key: 'flexibility',
      icon: <LabIcon />,
      bgColor: '#FFF3FF',
      bulletColor: '#89278B',
      itemCount: 2
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.key} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div
              className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl"
              style={{ backgroundColor: card.bgColor }}
            >
              {card.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              {t(`cards.${card.key}.title`)}
            </h3>

            {Array.from({ length: card.itemCount }).map((_, index) => (
              <BulletItem
                key={index}
                text={t(`cards.${card.key}.items.${index}`)}
                color={card.bulletColor}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}