"use client";

import Image from "next/image";
import bgcover from "@/assets/media/impactcover.png";

const stats = [
  { value: "42%", label: "Test Score Increase" },
  { value: "90%", label: "Message Recall Rate" },
  { value: "25min", label: "Increased Dwell Time" },
  { value: "100+", label: "Institutions Trust Us" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ── Background image + dark overlay ── */}
      <div className="relative  h-screen w-full" >
        <Image
          src={bgcover}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* dark gradient overlay — stronger on left so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        {/* ── Hero text content ── */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20 max-w-2xl pb-24">
          <h2 className="text-white text-5xl md:text-3xl font-extrabold leading-tight mb-4">
            Real Challenges, Tailored
            <br />
            Solutions, Measurable Results
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Explore how our partners have used FadaaTech solutions to achieve
            their specific goals—from boosting test scores to creating national
            awareness.
          </p>
          <div>
            <button className="px-8 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* ── Stats bar — inside the hero, pinned to bottom with blur ── */}
        <div className="absolute bottom-10 left-0 right-0 z-20 backdrop-blur-md bg-[#DEF9FF33] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4 gap-1"
              >
                <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-xs md:text-sm text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}