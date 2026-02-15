import React from "react";
import {
  Monitor,
  Beaker,
  Laptop,
  Globe,
  Headset,
  Smartphone,
} from "lucide-react";

interface Solution {
  id: string;
  title: string;
  description: string;
  linkText: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  color: string;
}

const SolutionsPortfolio: React.FC = () => {
  const solutions: Solution[] = [
    {
      id: "1",
      title: "OCTAR Ecosystem",
      color:"#3A9DB2",
      
      description:
        "Teacher-led AR platform bridging classroom and home. 400+ lessons, bilingual, MOE-aligned.",
      linkText: "Explore the Ecosystem",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#CFF7FF" />
          <path
            d="M14 32H34C35.1046 32 36 31.1046 36 30V16C36 14.8954 35.1046 14 34 14L14 14C12.8954 14 12 14.8954 12 16L12 30C12 31.1046 12.8954 32 14 32Z"
            stroke="#3A9DB2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 36H20"
            stroke="#3A9DB2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      id: "2",
      title: "VCLAB Virtual Labs",
      color:"#298B27",
      description:
        "50+ safe science experiments. 42% test score improvement, unlimited repetition.",
      linkText: "Run a Virtual Lab",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#DCFCE7" />
          <path
            d="M19 12H29"
            stroke="#298B27"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.0003 12V20.3925L34.8566 33.485C34.9477 33.6367 34.9969 33.8098 34.9993 33.9867C35.0016 34.1636 34.957 34.338 34.8699 34.492C34.7829 34.6461 34.6565 34.7742 34.5037 34.8635C34.351 34.9527 34.1772 34.9998 34.0003 35H14.0003C13.8233 35.0001 13.6494 34.9531 13.4964 34.864C13.3435 34.7748 13.2169 34.6467 13.1297 34.4926C13.0425 34.3385 12.9978 34.164 13.0001 33.987C13.0024 33.81 13.0516 33.6368 13.1428 33.485L21.0003 20.3925V12"
            stroke="#298B27"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9531 27.1351C18.6069 26.8251 20.9531 26.9588 23.9994 28.5001C28.0306 30.5413 30.8431 30.1138 32.4369 29.4563"
            stroke="#298B27"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "3",
      title: "Life Digital Environment",
      color:"#0040CA",
      description:
        "Wall-to-wall interactive spaces. Multi-touch, motion-tracked, customizable themes.",
      linkText: "Enter the Space",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#DAE3FF" />
          <path
            d="M16 17.5C16 15.7761 16.6848 14.1228 17.9038 12.9038C19.1228 11.6848 20.7761 11 22.5 11C24.2239 11 25.8772 11.6848 27.0962 12.9038C28.3152 14.1228 29 15.7761 29 17.5"
            stroke="#0040CA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9995 36L13.3345 29.75C13.0082 29.1761 12.9222 28.4964 13.0952 27.8593C13.2681 27.2222 13.6861 26.6794 14.2578 26.3493C14.8295 26.0192 15.5086 25.9287 16.1468 26.0974C16.7851 26.2661 17.3306 26.6805 17.6645 27.25L19.9995 31V17.5C19.9995 16.837 20.2629 16.2011 20.7318 15.7322C21.2006 15.2634 21.8365 15 22.4995 15C23.1626 15 23.7985 15.2634 24.2673 15.7322C24.7361 16.2011 24.9995 16.837 24.9995 17.5V24.5C24.9995 23.837 25.2629 23.2011 25.7318 22.7322C26.2006 22.2634 26.8365 22 27.4995 22C28.1626 22 28.7985 22.2634 29.2673 22.7322C29.7361 23.2011 29.9995 23.837 29.9995 24.5V26.5C29.9995 25.837 30.2629 25.2011 30.7318 24.7322C31.2006 24.2634 31.8365 24 32.4995 24C33.1626 24 33.7985 24.2634 34.2673 24.7322C34.7361 25.2011 34.9995 25.837 34.9995 26.5V31C34.9995 34 33.9995 36 33.9995 36"
            stroke="#0040CA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "4",
      title: "Educational Planetarium",
      color:"#E66604",
      description:
        "Curriculum-aligned astronomy programs. MOE-approved. Dome-p, all grade levels.",
      linkText: "Explore the Universe",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#FFE2C0" />
          <path
            d="M17 14L9 32H25L17 14Z"
            stroke="#F97316"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 32H39L31 14H17V32"
            stroke="#F97316"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: "5",
      title: "VR Experiences",
      color:"#89278B",
      description:
        "Immersive VR journeys for education and events. Learn headsets, expert guidance.",
      linkText: "Step Into VR",

      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 6H28V11"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 26H4V21"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 21V26H23"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 11V6H9"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 8L23 12V20L16 24L9 20V12L16 8Z"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 12L16 16L23 12"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 16V24"
            stroke="#89278B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "6",
      title: "AR Campaigns",
      color:"#CA8A00",
      description:
        "Transform messages into viral AR experiences. 90% recall, 3x traditional engagement.",
      linkText: "Launch an AR Campaign",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#FFF2BF" />
          <path
            d="M28.5002 24.2074L32.9727 26.8986C33.0872 26.9692 33.2199 27.0044 33.3544 26.9999C33.4888 26.9953 33.6188 26.9511 33.7282 26.8728C33.8375 26.7945 33.9214 26.6857 33.9691 26.56C34.0168 26.4343 34.0264 26.2973 33.9965 26.1661L32.7802 21.1424L36.7602 17.7824C36.8625 17.6962 36.9368 17.5814 36.9735 17.4528C37.0102 17.3242 37.0078 17.1876 36.9664 17.0603C36.9251 16.9331 36.8468 16.8211 36.7415 16.7387C36.6362 16.6562 36.5086 16.607 36.3752 16.5974L31.1515 16.1836L29.139 11.4161C29.0857 11.2926 28.9974 11.1873 28.885 11.1134C28.7726 11.0394 28.641 11 28.5065 11C28.3719 11 28.2403 11.0394 28.1279 11.1134C28.0155 11.1873 27.9272 11.2926 27.874 11.4161L25.8615 16.1836L20.6377 16.5974C20.5038 16.6059 20.3755 16.6543 20.2693 16.7363C20.163 16.8183 20.0838 16.9303 20.0417 17.0577C19.9996 17.1851 19.9967 17.3222 20.0331 17.4514C20.0696 17.5805 20.1439 17.6958 20.2465 17.7824L24.2265 21.1424L23.0002 26.1661C22.9704 26.2973 22.9799 26.4343 23.0276 26.56C23.0753 26.6857 23.1592 26.7945 23.2685 26.8728C23.3779 26.9511 23.5079 26.9953 23.6423 26.9999C23.7768 27.0044 23.9095 26.9692 24.024 26.8986L28.5002 24.2074Z"
            stroke="#CA8A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3062 22.6938L11 30.0001"
            stroke="#CA8A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.6575 30.3423L13 36.9998"
            stroke="#CA8A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.785 30.2148L22 36.9998"
            stroke="#CA8A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Our Solutions Portfolio
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive AR/VR solutions for every need
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`${solution.iconBgColor} ${solution.iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}
              >
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className={`inline-flex items-center  hover:text-${solution.color}-600 font-medium text-sm transition-colors group`}
                style={{ color: solution.color }}
              >
                {solution.linkText}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1  transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPortfolio;
