import React from "react";
import per_s_1 from "@/assets/media/per_s_1.png"
import per_s_2 from "@/assets/media/per_s_2.png"
import per_s_3 from "@/assets/media/per_s_3.png"
import per_s_4 from "@/assets/media/per_s_4.png"

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "For Schools",
    description:
      "Curriculum-aligned AR/VR learning ecosystems. 90%+ teacher adoption, 40% engagement increase.",
    image: per_s_1.src,
  },
  {
    title: "For Government",
    description:
      "Public awareness campaigns with 90% recall rate. Transform messages into viral AR experiences.",
    image: per_s_2.src,
  },
  {
    title: "For Centers & Events",
    description:
      "Become the #1 attraction. 25-minute increased dwell time with interactive digital environments.",
    image: per_s_3.src,
  },
  {
    title: "For Specialized Learning",
    description:
      "Safe practice environments for ASD, ADHD, dyslexia. Evidence-based AR/VR tools with 83% engagement improvement.",
    image: per_s_4.src,
  },
];

const SolutionGrid: React.FC = () => {
  return (
    <section className="bg-white-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-white-800">
          Find Your Perfect Solution
        </h2>
        <p className="text-white-500 mt-2">
          Choose your path to immersive transformation
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl outline-1 outline-blue-100 hover:outline-blue-500 transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-white-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionGrid;
