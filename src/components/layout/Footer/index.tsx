import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const solutions = [
    { key: 'octar', href: '/octar' },
    { key: 'vclab', href: '/vclab' },
    { key: 'life', href: '/life' },
    { key: 'ar', href: '/ar-stories' },
    { key: 'learning', href: '/learning-support' },
    { key: 'planetarium', href: '/planetarium' },
    { key: 'vr', href: '/vr' },
  ];

  const companyItems = [
    { key: 'home', href: '/' },
    { key: 'impact', href: '/impact' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-1 items-start">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Space of Creation Logo"
                width={200}
                height={300}
                className="h-auto w-auto"
                priority
              />
            </Link>

            <p className="text-gray-600 leading-relaxed">
              {t('brand.description')}
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {t('solutions.title')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {solutions.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors duration-300"
                  >
                    {t(`solutions.items.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {t('company.title')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {companyItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors duration-300"
                  >
                    {t(`company.items.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {t('contact.title')}
            </h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>
                <span className="font-medium text-gray-900">{t('contact.email')}</span>{" "}
  
              </p>

              <p>
                <span className="font-medium text-gray-900">{t('contact.phone')}</span>{" "}
             
              </p>

              <p>
                <span className="font-medium text-gray-900">{t('contact.location')}</span>{" "}
                {t('contact.address')}
              </p>

              <p>
                <span className="font-medium text-gray-900">{t('contact.license')}</span>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;