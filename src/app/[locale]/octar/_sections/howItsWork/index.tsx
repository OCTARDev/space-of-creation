import React from "react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

interface HowItWorksProps {
  steps?: Step[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const MonitorIcon = () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        ry="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8"
        y1="21"
        x2="16"
        y2="21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CloudSyncIcon = () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
      />
    </svg>
  );

  const HomeIcon = () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const defaultSteps: Step[] = [
    {
      number: "Step 01",
      icon: <MonitorIcon />,
      title: "Teach at School",
      description:
        "Teachers deliver AR-enhanced lessons in the classroom using curriculum-aligned digital content",
      features: [
        "Teacher selects lesson",
        "Students color workbooks",
        "AR activates learning",
      ],
      color: "#2D9CDB",
    },
    {
      number: "Step 02",
      icon: <CloudSyncIcon />,
      title: "Auto-Sync Progress",
      description:
        "Learning data automatically syncs to cloud infrastructure for all stakeholders",
      features: [
        "Real-time data sync",
        "Teacher dashboard updates",
        "Parent notifications sent",
      ],
      color: "#6366F1",
    },
    {
      number: "Step 03",
      icon: <HomeIcon />,
      title: "Reinforce at Home",
      description:
        "Students continue learning journey at home with parent guidance and same content",
      features: [
        "Home app access",
        "Parent-guided activities",
        "Progress tracking",
      ],
      color: "#10B981",
    },
  ];

  const processSteps = steps || defaultSteps;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          How It Works
        </h1>
        <p className="text-base md:text-lg text-gray-500">
          One ecosystem, seamless flow from classroom to home
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute z-10left-0 right-1 h-3.5 bg-gradient-to-r from-[#2D9CDB] via-[#6366F1] to-[#10B981]"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
                <div className="relative flex justify-center">
                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-1 mb-16 border-white shadow-md z-10 relative"
                      style={{ backgroundColor: step.color }}
                    ></div>
                  </div>

                  {/* Vertical dashed line from dot */}
                  <div className="absolute w-0.5 text-center left-1/2 -translate-x-1/2 h-8 border-l-2 border-dashed border-gray-300"></div>
                </div>

              {/* Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div
                        className="w-1.5 h-1.5 p-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Loop Badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <div       className="w-3 h-3 rounded-full shadow-md relative"
                      style={{ backgroundColor: "#10B981" }}
                    ></div>
            <span className="text-xl font-medium text-gray-700">
              Continuous Loop
            </span>
          </div>
        </div>

        {/* Curved Arrow (decorative) */}
        {/* <div className="hidden md:block text-center items-center absolute-bottom-12 left-1/2 -translate-x-1/2">
          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="opacity-20">
            <path 
              d="M 10 30 Q 100 -10, 190 30" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="4 4"
              fill="none"
            />
            <path 
              d="M 190 30 L 185 25 M 190 30 L 185 35" 
              stroke="#10B981" 
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
