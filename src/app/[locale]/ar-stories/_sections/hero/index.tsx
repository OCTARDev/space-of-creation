  "use client";

  import Image from "next/image";
  import bgcover from "@/assets/media/arcover.png";
  import { Star, Users, Globe } from "lucide-react";

  const stats = [
    { value: "90%", label: "Message Recall" },
    { value: "10k+", label: "Citizens Reached" },
    { value: "3x", label: "Higher Engagement" },
    { value: "100%", label: "WebAR (No App)" },
  ];

  export default function Hero() {
    return (
      <section className="relative overflow-hidden">
        <div className="relative h-screen w-full">
          
          {/* Background Image */}
          <Image
            src={bgcover}
            alt="VCLAB"
            fill
            priority
            className="h-full"
          />

          {/* Softer / darker overlay (less bright than before) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20 max-w-2xl pb-24">
            
            {/* Breadcrumb */}
            <p className="text-sm text-gray-300 mb-6">
              Home / Solutions /{" "}
              <span className="text-[#79B9CE]">AR Stories & Campaigns </span>
            </p>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
Ideal for: Government & NGOs
 Ideal for: Events            </p>

            {/* Heading */}
            <h2 className="text-white text-5xl md:text-4xl font-extrabold leading-tight mb-6">
OCTAR AR Stories & Campaigns            </h2>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
Transform your message into an unforgettable immersive experience. AR campaigns that people actively engage with, share, and remember.            </p>
    

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                <Users size={16} />
                90% message Recall
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                <Star size={16} />
                3x  Engagement
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                <Globe size={16} />
                  No App Required
              </div>
            </div>
           <div>
               <button className="px-6 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition">
            Request Campaign Consultation
            </button>
           </div>

            {/* CTA */}
          
          </div>
          

          {/* Stats Bar — same position as your original (correct) */}
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
