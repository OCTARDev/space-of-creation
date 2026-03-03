import img1 from '@/assets/media/feature1.png';
import img2 from '@/assets/media/feature2.png';
import img3 from '@/assets/media/feature3.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// ─── Types ────────────────────────────────────────────────────────────────────

interface CaseStudy {
  id: number;
  translationKey: string;
  image: any;
  badgeExtra?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    translationKey: 'school',
    image: img1,
  },
  {
    id: 2,
    translationKey: 'government',
    image: img2,
  },
  {
    id: 3,
    translationKey: 'venue',
    image: img3,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BadgeIcon() {
  return (
    <svg
      className="w-6  h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#F59E0B" opacity="0.2" />
      <circle cx="12" cy="12" r="7" fill="#F59E0B" opacity="0.4" />
      <path
        d="M12 6l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 15l-3.75 2.7 1.5-4.5L6 10.5h4.5z"
        fill="#F59E0B"
      />
    </svg>
  );
}

function MetricBadge({
  value,
  label,
  extra,
}: {
  value: string;
  label: string;
  extra?: string;
}) {
  return (
    <div className="absolute s-4 flex items-center gap-2 bg-white rounded-xl shadow-lg px-3 py-2 z-10">
      {extra && (
        <span className="bg-[#3BBFEF] text-white text-xs font-bold rounded-md px-2 py-1 mr-1">
          {extra}
        </span>
      )}
      <BadgeIcon />
      <div className="flex flex-col leading-tight">
        <span className="text-gray-900 font-bold text-sm">{value}</span>
        <span className="text-gray-500 text-[11px]">{label}</span>
      </div>
    </div>
  );
}

function ChallengeItem({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E84545] shrink-0" />
          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

function SolutionItem({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3BBFEF] shrink-0" />
          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

function ResultItem({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

function CaseStudyCard({ study, t }: { study: CaseStudy; t: any }) {
  const badgeExtra = (study as any).badgeExtra;
  const translationKey = `caseStudies.${study.translationKey}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-visible p-6 md:p-8">
      {/* Top section: text + image */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
        {/* Left: title + quote */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900 leading-snug">
            {t(`${translationKey}.title`)}
          </h3>
          <p className="text-[#302f2f] text-sm leading-relaxed italic">
            {t(`${translationKey}.quote`)}
          </p>
        </div>

        {/* Right: image with tag pill + metric badge */}
        <div className="relative shrink-0 w-full md:w-64 lg:w-72 xl:w-80">
          <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
            <Image
              src={study.image}
              alt={t(`${translationKey}.title`)}
              fill
              className="w-full h-screen w-screen"
            />
          </div>

          {/* Metric badge overlapping image bottom */}
          <MetricBadge
            value={t(`${translationKey}.badge.value`)}
            label={t(`${translationKey}.badge.label`)}
            extra={badgeExtra}
          />
        </div>
      </div>

      {/* Bottom section: challenge / solution / result */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div className="py-4 md:py-0 md:pr-6 flex flex-col gap-2">
          <span className="text-[#E84545] font-semibold text-sm">{t('labels.challenge')}</span>
          <ChallengeItem items={[t(`${translationKey}.challenge.0`)]} />
        </div>
        <div className="py-4 md:py-0 md:px-6 flex flex-col gap-2">
          <span className="text-[#3BBFEF] font-semibold text-sm">{t('labels.solution')}</span>
          <SolutionItem items={[t(`${translationKey}.solution.0`)]} />
        </div>
        <div className="py-4 md:py-0 md:pl-6 flex flex-col gap-2">
          <span className="text-[#22C55E] font-semibold text-sm">{t('labels.result')}</span>
          <ResultItem items={[t(`${translationKey}.result.0`)]} />
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Features() {
  const t = useTranslations('impact_features');
  
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          {t('title')}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} t={t} />
        ))}
      </div>
    </section>
  );
}