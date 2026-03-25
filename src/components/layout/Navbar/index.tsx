"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiChevronDown } from "react-icons/fi";
import {
  PiCubeFocus,
  PiFlask,
  PiHandPointing,
  PiSparkle,
  PiHeart,
  PiTent,
  PiVirtualReality,
} from "react-icons/pi";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

// Defined OUTSIDE component so it never remounts — transition works correctly
const underlineStyle = (active: boolean): React.CSSProperties => ({
  display: "block",
  height: "2px",
  width: "100%",
  backgroundColor: "#a855f7",
  borderRadius: "9999px",
  transform: active ? "scaleX(1)" : "scaleX(0)",
  transformOrigin: "left center",
  transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  marginTop: "3px",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const t = useTranslations();


  const solutions = [
    { name: `${t("contact.solutions.octar")}`, icon: <PiCubeFocus color="#32a8a4" />, href: "/octar" },
    { name: `${t("contact.solutions.vclab")}`, icon: <PiFlask color="#36ba53" />, href: "/vclab" },
    { name: `${t("contact.solutions.life")}`, icon: <PiHandPointing color="#364eba" />, href: "/life" },
    { name: `${t("contact.solutions.ar")}`, icon: <PiSparkle color="#b3ba36" />, href: "/ar-stories" },
    { name: `${t("contact.solutions.learning")}`, icon: <PiHeart color="#ba3636" />, href: "/learning-support" },
    { name: `${t("contact.solutions.planetarium")}`, icon: <PiTent color="#E09B00" />, href: "/planetarium" },
    { name: `${t("contact.solutions.vr")}`, icon: <PiVirtualReality color="#ad36ba" />, href: "/vr" },
  ];


  return (
    <nav className="top-0 left-0 right-0 py-6 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={500}
              height={500}
              className="hidden sm:block h-auto w-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ms-auto">

            {/* Home */}
            <Link
              href="/"
              className="flex flex-col font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300"
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span>{t("navbar.home")}</span>
              <span style={underlineStyle(hoveredLink === "home")} />
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setOpenDropdown(true); setHoveredLink("solutions"); }}
              onMouseLeave={() => { setOpenDropdown(false); setHoveredLink(null); }}
            >
              <button className="flex flex-col font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <span className="flex items-center gap-1">
                  {t("navbar.solutions")}
                  <FiChevronDown
                    className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`}
                  />
                </span>
                <span style={underlineStyle(hoveredLink === "solutions")} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-10 left-0 w-80 bg-white rounded-2xl shadow-xl p-5 transition-all duration-300 ${
                  openDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="space-y-4">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <span className="text-xl text-purple-600">{item.icon}</span>
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact */}
            <Link
              href="/impact"
              className="flex flex-col font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300"
              onMouseEnter={() => setHoveredLink("impact")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span>{t("navbar.impact")}</span>
              <span style={underlineStyle(hoveredLink === "impact")} />
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="flex flex-col font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300"
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span>{t("navbar.about")}</span>
              <span style={underlineStyle(hoveredLink === "about")} />
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden p-5 md:flex items-center gap-3  pl-8 ms-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r p-2 from-[#A88EEF] to-[#79B9CE] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              {t("navbar.contact")}
            </Link>
            <LanguageSwitcher className="mx-2" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
                    <LanguageSwitcher className="mx-2" />

          <Link href="/" className="block font-bold">{t("navbar.home")}</Link>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <button className="text-gray-600 font-bold hover:text-gray-900 flex items-center gap-1">
              {t("navbar.solutions")}
              <FiChevronDown
                className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute top-10 left-0 w-80 bg-white rounded-2xl shadow-xl p-5 transition-all duration-300 ${
                openDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="space-y-4">
                
                {solutions.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <span className="text-xl text-purple-600">{item.icon}</span>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/impact" className="block">{t("navbar.impact")}</Link>
          <Link href="/about" className="block">{t("navbar.about")}</Link>
          <Link href="/contact" className="block bg-purple-500 text-white px-4 py-2 rounded-lg">
            {t("navbar.contact")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;