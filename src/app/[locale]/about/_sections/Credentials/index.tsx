import React from "react";
import { useTranslations } from 'next-intl';

const CredentialsSection = () => {
  const t = useTranslations('about_credentials');
  
  const credentials = [
    { key: 'license' },
    { key: 'alignment' },
    { key: 'pedagogical' },
    { key: 'regional' }
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800">
          {t('title')}
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          {t('subtitle')}
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {t(`cards.${credential.key}.title`)}
              </h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                {t(`cards.${credential.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;