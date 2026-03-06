"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";

const LanguageSwitcher = ({ isUp = false, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languageMap = {
    en: { name: "English", nativeName: "English", flag: <RiEnglishInput />, symbol: "EN" },
    ar: { name: "Arabic", nativeName: "العربية", flag: <GrLanguage />, symbol: "ع" },
  };

  // The language we'd switch TO (opposite of current)
  const otherLocale = currentLocale === "en" ? "ar" : "en";
  const otherLanguage = languageMap[otherLocale as keyof typeof languageMap];

  const changeLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    const searchString = searchParams.toString();
    const fullPath = searchString ? `${newPath}?${searchString}` : newPath;
    router.push(fullPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: any) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative grow z-50 ${className}`}
      ref={dropdownRef}
    >
      {/* Trigger Button — shows the language you'd switch TO */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between gap-2 px-3 py-2
          rounded-lg hover:shadow-md
          transition-all duration-200 hover:border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        "
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <div className="flex items-center gap-2 ms-2 text-gray-500">
          <span className="shrink-0">
            <FaLanguage size={24} />
          </span>
          {/* Show the OTHER locale's symbol so user knows what they're switching to */}
          <span className="font-bold">{otherLanguage?.symbol}</span>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            className={`
              ${isUp ? "bottom-full mb-1" : "top-full mt-1"}
              absolute start-0 w-40 bg-white
              border border-primary-a1
              rounded-lg shadow-lg z-50
            `}
          >
            {routing.locales.map((locale) => {
              const language = languageMap[locale as keyof typeof languageMap];
              const isSelected = locale === currentLocale;

              return (
                <button
                  key={locale}
                  onClick={() => changeLanguage(locale)}
                  className={`
                    flex items-center justify-between px-4 py-3 w-full
                    text-left hover:bg-primary-a1 hover:text-gray-200 rounded-lg
                    transition-colors duration-150 font-medium
                    ${isSelected ? "bg-blue-50 text-primaryA1" : "text-black"}
                  `}
                  role="menuitem"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0">{language?.flag}</span>
                    <span>{language?.nativeName}</span>
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;