import Link from "next/link";
import "./style.css";
import { useTranslations } from "next-intl";

export default function BookOctarSection() {
  const t = useTranslations("octar_book");

  return (
    <section className="relative w-full py-24 px-6 text-center overflow-hidden">
      {/* Background: SVG waves layer */}
      <div className="absolute inset-0 svgc bg-transparent bg-[url('/waves.svg')] bg-contain bg-bottom bg-no-repeat" />

      {/* Gradient overlay on top of SVG — makes dots look tinted/transparent like Image 1 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(144,31,233,0.15),rgba(0,163,255,0.15))] mix-blend-multiply" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          {t("title")}
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">{t("subtitle")}</p>

        <div className="mb-6">
          <button className="px-8 py-3 rounded-2xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
            <Link href={"/contact"}>{t("button")}</Link>
          </button>
        </div>
     

        <p className="text-black-800 text-3xl z-10">
          {t("call")} {t("phone")}
        </p>
      </div>
    </section>
  );
}
