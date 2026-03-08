import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
  </svg>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 transition-all duration-200"
  >
    {icon}
  </Link>
);

const Footer: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const currentYear = new Date().getFullYear();

  const solutions = [
    { key: "octar", href: "/octar" },
    { key: "vclab", href: "/vclab" },
    { key: "life", href: "/life" },
    { key: "ar", href: "/ar-stories" },
    { key: "learning", href: "/learning-support" },
    { key: "planetarium", href: "/planetarium" },
    { key: "vr", href: "/vr" },
  ];

  const companyItems = [
    { key: "home", href: "/" },
    { key: "impact", href: "/impact" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ];

  const contactRows = [
    {
      label: t("footer.contact.email"),
      value: "b2b@spaceforcreation.ae",
    },
    {
      label: t("footer.contact.phone"),
      value:  t("footer.contact.phoneValue"),
     
    },
    {
      label: t("footer.contact.location"),
      value: t("footer.contact.address"),
    },
    {
      label: t("footer.contact.license"),
      value: "1571670",
    },
  ];

  return (
    <footer
      className="bg-white border-t border-gray-200"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* ── Brand Column ── */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Space for Creation Logo"
                width={120}
                height={80}
                className="h-auto w-auto"
                priority
              />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed">
              {t("footer.brand.description")}
            </p>

            {/* Social Icons */}
            <div
              className={`flex gap-2 mt-1 ${
                isRTL ? "flex-row-reverse justify-end" : "flex-row"
              }`}
            >
              <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin size={16} />}
              />
              <SocialIcon
                href="https://facebook.com"
                icon={<Facebook size={16} />}
              />
              <SocialIcon
                href="https://instagram.com"
                icon={<Instagram size={16} />}
              />
              <SocialIcon href="https://tiktok.com" icon={<TikTokIcon />} />
            </div>
          </div>

          {/* ── Solutions Column ── */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-5">
              {t("footer.solutions.title")}
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {t(`footer.solutions.items.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company Column ── */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-5">
              {t("footer.company.title")}
            </h3>
            <ul className="space-y-3">
              {companyItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {t(`footer.company.items.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-5">
              {t("footer.contact.title")}
            </h3>
            <div className="space-y-3">
              {contactRows.map((row) => (
                <p key={row.label} className="text-sm text-gray-500">
                  <span className="font-medium text-gray-900">{row.label}</span>{" "}
                  {row.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          {t("footer.copyright", { year: currentYear })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;