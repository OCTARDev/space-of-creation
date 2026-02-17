import vr from "@/assets/media/Vr.png";
import frame from "@/assets/media/Frame.png";
import { FiMonitor } from "react-icons/fi";
import { FaGraduationCap, FaStar, FaTrophy } from "react-icons/fa";

export default function HeroHeader() {
  return (
    <section className="z-20 relative overflow-hidden my-20 ">
      
      {/* Floating Planet */}
      <img
        src={frame.src}
        alt="planet"
        className="absolute left-10 top-20 animate-bounce [animation-duration:3s] opacity-90 w-55 hidden md:block"
      />

      {/* Floating VR Headset */}
      <img
        src={vr.src}
        alt="vr"
        className="absolute -z-10 right-1 top-100 animate-spin [animation-duration:3s]  opacity-90"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <div className={`
              absolute w-full h-[70%] aspect-square  top-[12%] left-0
              bg-linear-to-r from-[#2C67FF]  to-[#FF4DED]
              blur-xl opacity-15 -z-10
              `}/>
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Transform Objectives into <br />
          Immersive AR/VR Experiences
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          UAE's #1 provider of curriculum-aligned AR/VR solutions for education,
          government campaigns, and immersive venues. Trusted by 50K+ active users
          across the region.
        </p>

        {/* Badges */}
     <div className="mt-6 flex justify-center gap-6 flex-wrap">
  {[
    {
      label: "UAE License 1571670",
      icon: <FiMonitor className="text-gray-600 text-lg" />,
    },
    {
      label: "MOE Aligned",
      icon: <FaGraduationCap className="text-gray-600 text-lg" />,
    },
    {
      label: "90%+ Teacher Adoption",
      icon: <FaStar className="text-gray-600 text-lg" />,
    },
    {
      label: "Award-Winning EdTech",
      icon: <FaTrophy className="text-gray-600 text-lg" />,
    },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 px-6 py-3 
                 bg-white/60 backdrop-blur-xl 
                 rounded-full 
                 border border-white/40 
                 shadow-sm
                 text-gray-700 text-sm font-medium
                 transition-all duration-300"
    >
      {item.icon}
      <span>{item.label}</span>
    </div>
  ))}
</div>
        {/* Browser Mockup */}
        <div className="relative mt-14 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Browser Top */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>

            {/* Video Placeholder */}
            <div className="relative h-100 bg-grid-pattern bg-gray-50 flex items-center justify-center">
              
              {/* Ripple Effect */}
              <div className="absolute w-40 h-40 rounded-full bg-blue-400/30 animate-ping"></div>
              
              {/* Play Button */}
              <button className="relative w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className=" bottom-0 left-0 w-full mt-30 bg-linear-to-r from-[#FEF1FE] to-[#E6F8FA] py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          
          <Stat number="90%" label="Teacher Adoption" />
          <Stat number="50K+" label="Active Users" />
          <Stat number="40%" label="Engagement Increase" />
          <Stat number="100+" label="Institutions Trust Us" />
          
        </div>
      </div>
    </section>
  );
}

function Stat({ number:number, label }: { number: string; label: string }) {
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-gray-800">{number}</h3>
      <p className="text-gray-600 mt-1 text-sm">{label}</p>
    </div>
  );
}
