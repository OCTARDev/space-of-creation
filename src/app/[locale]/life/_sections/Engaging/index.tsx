import { FaWindows, FaAndroid } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function EngagingSection() {
  const t = useTranslations('life_engaging');
  
  return (
    <section className="bg-white flex flex-col items-center justify-center text-center px-6 py-16 min-h-[300px]">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl leading-tight mb-4">
        {t('title')}
      </h1>
      <p className="text-gray-500 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
        {t('subtitle.line1')}
        <br />
        {t('subtitle.line2')}
        <br />
        {t('subtitle.line3')}
      </p>
      <div className="flex flex-row items-center justify-center gap-4">
        {/* Web Platform Button */}
        <button className="flex items-center gap-3 text-white rounded-xl px-6 py-3.5 transition-colors duration-200 min-w-[170px]" style={{ backgroundColor: '#503E74' }}>
          <FaWindows className="text-2xl shrink-0 text-white" />
          <div className="text-start leading-tight">
            <div className="text-[10px] text-purple-200 font-normal tracking-wide">{t('web.prefix')}</div>
            <div className="text-sm font-bold">{t('web.label')}</div>
          </div>
        </button>

        {/* Android App Button */}
        <button className="flex items-center gap-3 border border-gray-300 hover:border-gray-400 text-gray-800 rounded-xl px-6 py-3.5 transition-colors duration-200 bg-white min-w-[170px]">
          <FaAndroid className="text-2xl shrink-0 text-gray-700" />
          <div className="text-start leading-tight">
            <div className="text-[10px] text-gray-400 font-normal tracking-wide">{t('android.prefix')}</div>
            <div className="text-sm font-bold">{t('android.label')}</div>
          </div>
        </button>
      </div>
    </section>
  );
}