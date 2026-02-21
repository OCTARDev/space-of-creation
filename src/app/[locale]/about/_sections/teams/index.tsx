"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/assets/media/aboutteam1.png";
import img2 from "@/assets/media/aboutteam2.png";
import img3 from "@/assets/media/aboutteam3.png";

export default function Team() {
  return (
    <div className="py-20 px-4 bg-[#fefdff]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-500">
            Passionate educators, seasoned developers, and creative designers
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          
          {/* Educators Card */}
          <div className="flex flex-col shadow-lg rounded-2xl p-6 bg-white">
            <div className="relative h-72 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#EBFCFF] to-[#F7F4FF]">
              <Image src={img1} alt="Educators" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Educators</h3>
            <p className="text-gray-600 leading-relaxed">
              Passionate teachers who understand classroom realities and student needs.
            </p>
          </div>

          {/* Developers Card */}
          <div className="flex flex-col shadow-lg rounded-2xl p-6 bg-white">
            <div className="relative h-72 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#EBFCFF] to-[#F7F4FF]">
              <Image src={img2} alt="Developers" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Developers</h3>
            <p className="text-gray-600 leading-relaxed">
              Seasoned software engineers building robust, scalable solutions.
            </p>
          </div>

          {/* Designers Card */}
          <div className="flex flex-col shadow-lg rounded-2xl p-6 bg-white">
            <div className="relative h-72 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#EBFCFF] to-[#F7F4FF]">
              <Image src={img3} alt="Designers" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Designers</h3>
            <p className="text-gray-600 leading-relaxed">
              Creative minds crafting engaging, intuitive user experiences.
            </p>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="bg-gradient-to-b from-[#EBFCFF] to-[#F7F4FF] rounded-2xl px-8 py-8">
          <p className="text-gray-600 text-center leading-relaxed">
            <span className="font-semibold text-gray-700">United by one belief:</span>{" "}
            immersive technology, when guided by pedagogy, can unlock extraordinary potential in every learner.
          </p>
        </div>

      </div>
    </div>
  );
}