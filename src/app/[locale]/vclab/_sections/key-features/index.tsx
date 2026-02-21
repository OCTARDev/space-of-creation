import React from 'react';

interface Feature {
  title: string;
  description: string;
  dotColor: string;
}

interface KeyFeaturesProps {
  features?: Feature[][];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  const defaultFeatures: Feature[][] = [
    [
      {
        title: "Completely Safe",
        description: "Experiment with dangerous chemicals without any physical risk.",
        dotColor: "#4F46E5",
      },
      {
        title: "Cost Effective",
        description: "Replace thousands in equipment costs with a single subscription.",
        dotColor: "#32AB30",
      },
      {
        title: "Color-to-AR",
        description: "Students color physical workbooks that transform into 3D interactive AR experiences.",
        dotColor: "#0046DE",
      },
    ],
    [
      {
        title: "Progress Analytics",
        description: "Real-time dashboards showing engagement, completion rates, and learning gaps.",
        dotColor: "#F97316",
      },
      {
        title: "Realistic Simulations",
        description: "Physics-accurate reactions and true-to-life equipment.",
        dotColor: "#EC4899",
      },
      {
        title: "Bilingual Support",
        description: "Full Arabic and English content with linguistic authenticity.",
        dotColor: "#3A9DB2",
      },
    ],
  ];

  const columns = features || defaultFeatures;

  const Column: React.FC<{ items: Feature[] }> = ({ items }) => (
    <div className="flex flex-col mt-20">
      {items.map((feature, i) => (
        <div key={i} className="mb-4 flex gap-4">
          {/* Left: dot + line */}
          <div className="flex flex-col items-center">
            {/* Dot */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 shadow-xl">
  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: feature.dotColor }} />
</div>
              {/* Dashed line */}
              {i < items.length - 1 && (
                <div className="w-0.5 h-full min-h-[120px] border-l-2 border-dashed border-gray-300 mt-2"></div>
              )}
          </div>

          {/* Right: text */}
          <div className={i < items.length - 1 ? 'pb-10' : ''}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">The VCLAB Solution</h1>
        <p className="text-base text-[#8371A7]">All benefits of a physical lab, none of the limitations</p>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {columns.map((col, i) => (
          <Column key={i} items={col} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;