import vr from "@/assets/media/Vr.png";
import frame from "@/assets/media/Frame.png";
import { FiMonitor } from "react-icons/fi";
import { FaGraduationCap, FaStar, FaTrophy } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState } from "react";

export default function HeroHeader() {
  const t = useTranslations('home_hero');
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeId = "WPX3_4RWXcw";
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <section className="z-20 relative overflow-hidden my-20 ">
      
      {/* Floating Planet */}
      <Image
        src={frame.src}
        alt="planet"
        width={400}
        height={400}
        className="absolute left-10 top-20 animate-bounce [animation-duration:3s] opacity-90 w-55 hidden md:block"
      />

      {/* Floating VR Headset */}
      <Image
        src={vr.src}
        width={400}
        height={400}
        alt="vr"
        className="absolute -z-10 right-1 top-100 animate-spin [animation-duration:3s] opacity-90"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <div className={`
              absolute w-full h-[70%] aspect-square top-[12%] left-0
              bg-linear-to-r from-[#2C67FF] to-[#FF4DED]
              blur-xl opacity-15 -z-10
        `}/>
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          {t('title')} <br />
          {t('title_break')}
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>

        {/* Badges */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          {[
            {
              label: t('badges.license'),
              icon: <FiMonitor className="text-gray-600 text-lg" />,
            },
            {
              label: t('badges.moe'),
              icon: <FaGraduationCap className="text-gray-600 text-lg" />,
            },
            {
              label: t('badges.teacher'),
              icon: <FaStar className="text-gray-600 text-lg" />,
            },
            {
              label: t('badges.award'),
              icon: <FaTrophy className="text-gray-600 text-lg" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 
                         bg-white/60 backdrop-blur-xl 
                         rounded-full 
                         border border-white/40 
                         shadow-sm
                         text-gray-700 text-sm font-medium
                         transition-all duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Browser Mockup */}
        <div className="relative mt-14 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Video — 16:9 aspect ratio */}
             {/* Video — 16:9 aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title="Life video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(107,130,144,0.4) 100%)",
                }}
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-16 h-16 p-5 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-gray-800 ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>

          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="bottom-0 left-0 w-full mt-30 bg-linear-to-r from-[#FEF1FE] to-[#E6F8FA] py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <Stat number="90%" label={t('stats.teacher')} />
          <Stat number="50K+" label={t('stats.users')} />
          <Stat number="40%" label={t('stats.engagement')} />
          <Stat number="100+" label={t('stats.institutions')} />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-gray-800">{number}</h3>
      <p className="text-gray-600 mt-1 text-sm">{label}</p>
    </div>
  );
}