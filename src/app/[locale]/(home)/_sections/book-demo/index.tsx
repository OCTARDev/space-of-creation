export default function BookDemoSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#A88EEF] to-[#79B9CE]  py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          Ready to Transform Your Institution?
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Schedule a personalized 20-minute demo
        </p>

        {/* CTA Button */}
        <div className="mb-6">
          <button className="px-8 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r  from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
            Book Your Free Demo
          </button>
        </div>

        {/* Phone */}
        <p className="text-gray-800 text-base">
          Or call : +971 54 797 5397
        </p>
      </div>

      {/* Decorative dotted wave (approximation) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-32 opacity-30"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,160 C240,120 480,200 720,160 C960,120 1200,200 1440,160 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
    </section>
  );
}
