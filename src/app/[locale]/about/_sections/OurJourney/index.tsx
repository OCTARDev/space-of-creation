import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineProps {
  items?: TimelineItem[];
}

const OurJourney: React.FC<TimelineProps> = ({ items }) => {
  const defaultItems: TimelineItem[] = [
    {
      title: "From SMARTY to FadaaTech",
      description: "Our focus has remained constant: building complete learning ecosystems, not isolated apps. We evolved from our initial work as SMARTY to become FadaaTech, always staying true to our mission of empowering educators."
    },
    {
      title: "Proudly UAE-Based",
      description: "A proudly UAE-based company (Dubai License 1571670), developing solutions from the ground up for the region's curricula, cultures, and challenges."
    },
    {
      title: "wOur Mission Today",
      description:"Transforming education in the Arab world through immersive technology that puts teachers in control and unlocks extraordinary potential in every learner."
    }
  ];

  const timelineItems = items || defaultItems;

  return (
    <div className="mt-20 w-full max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Our Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          Building complete learning ecosystems, not isolated apps
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-8 mb-12 last:mb-0">
            {/* Timeline line and dot */}
            <div className="relative flex flex-col items-center">
              {/* Gradient dot */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#E67EE8] to-[#A1E4F4] flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E67EE8] to-[#A1E4F4]"></div>
                </div>
              </div>
              
              {/* Dashed line */}
              {index < timelineItems.length - 1 && (
                <div className="w-0.5 h-full min-h-[120px] border-l-2 border-dashed border-gray-300 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2 pb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default OurJourney;