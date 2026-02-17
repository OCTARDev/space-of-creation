import React from "react";

const CredentialsSection = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800">
          Our Credentials
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          Built on a foundation of expertise and compliance
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Official UAE License
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Commercial License No. 1571670 - Officially registered and
              operating in Dubai, UAE.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Content Alignment
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Developed in alignment with the UAE Ministry of Education (MOE)
              standards and international curricula.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Pedagogical Foundation
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              All products are designed with input from practicing teachers and
              subject matter experts to ensure educational effectiveness.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-left border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
              Regional Expertise
            </h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Solutions built from the ground up for the Arab world's curricula,
              cultures, and unique educational challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
