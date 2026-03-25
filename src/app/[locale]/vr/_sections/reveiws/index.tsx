import { useTranslations } from "next-intl";

export default function WhatOurClientsSay() {
  const t = useTranslations("vr_reviews");

  const testimonials = [
    { key: "teacher", accent: "#7C3AED", icon: "🎓" },
    { key: "coordinator", accent: "#0EA5E9", icon: "💧" },
    { key: "student", accent: "#10B981", icon: "🌐" },
  ];

  return (
    <section className="w-full py-24 px-6 bg-[#F8F7FF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500&display=swap');

        .vr-section {
          font-family: 'DM Sans', sans-serif;
        }

        .vr-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #1a1030;
          line-height: 1.2;
        }

        .vr-subtitle {
          color: #7C3AED;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .vr-card {
          background: white;
          border-radius: 20px;
          padding: 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border: 1px solid rgba(124, 58, 237, 0.08);
          box-shadow: 0 2px 20px rgba(124, 58, 237, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .vr-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          border-radius: 20px 20px 0 0;
        }

        .vr-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(124, 58, 237, 0.12);
        }

        .vr-card:hover::before {
          transform: scaleX(1);
        }

        .vr-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          background: var(--accent-light);
          flex-shrink: 0;
        }

        .vr-card-header {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #1a1030;
          line-height: 1.35;
        }

        .vr-quote {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.75;
          flex: 1;
        }

        .vr-stat-bar {
          height: 3px;
          border-radius: 99px;
          background: #f0ebff;
          overflow: hidden;
          margin-top: auto;
        }

        .vr-stat-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 99px;
          width: 0;
          transition: width 1s ease 0.3s;
        }

        .vr-card:hover .vr-stat-fill {
          width: var(--fill-width);
        }
      `}</style>

      <div className="vr-section max-w-6xl mx-auto text-center">
        <p className="vr-subtitle mb-4">{t("subtitle")}</p>
        <h2 className="vr-title">{t("title")}</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="vr-card text-start"
              style={{
                "--accent": item.accent,
                "--accent-light": `${item.accent}18`,
                "--fill-width": ["95%", "95%", "95%"][index],
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <div className="vr-icon-wrap">{item.icon}</div>
                <h3 className="vr-card-header">
                  {t(`testimonials.${item.key}.header`)}
                </h3>
              </div>

              <p className="vr-quote">
                {t(`testimonials.${item.key}.quote`)}
              </p>

              <div className="vr-stat-bar">
                <div className="vr-stat-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}