"use client";
import "./style.css";

const solutions = [
  'OCTAR Ecosystem',
  'VCLAB Virtual Labs',
  'Life Digital Environment',
  'AR Stories & Campaigns',
  'Learning Support',
 'Educational Planetarium',
  'VR Experiences' 
];

export default function Contact() {
  //   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     alert("Demo booked! We'll contact you within 24 hours.");
  //   };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      
    >

         <div className={`
              absolute w-full h-[70%] aspect-square  top-[12%] left-0
              bg-linear-to-r from-[#2C67FF]  to-[#FF4DED]
              blur-xl opacity-15 -z-10
              `}/>
      {/* Hero text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Let's Transform Your Vision
        </h1>
        <p className="text-sm text-gray-500">
          Schedule a personalized demo or speak with our team
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md px-8 py-8">
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Schedule Your Demo
        </h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Your name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="your full name"
              //   value={formData.name}
              //   onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Work email address"
              //   value={formData.email}
              //   onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Phone <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              //   value={formData.phone}
              //   onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Organization <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Organization or Institution name"
              //   value={formData.organization}
              //   onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          {/* Solution dropdown */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              What are you interested in ?{" "}
              <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                name="solution"
                // value={formData.solution}
                // onChange={handleChange}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white cursor-pointer"
              >
                <option value="" disabled>
                  Select a solution
                </option>
                {solutions.map((s) => (
                  <option key={s} value={s} className="text-gray-800">
                    {s}
                  </option>
                ))}
              </select>
              <div className="my-2 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></svg>
              </div>
            </div>
          </div>

          {/* Challenges textarea */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Briefly describe your goals or challenges{" "}
              <span className="text-red-400">*</span>
            </label>
            <textarea
              name="challenges"
              placeholder="What challenges are you solving ?"
              //   value={formData.challenges}
              //   onChange={handleChange}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            // onClick={handleSubmit}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "linear-gradient(90deg, #a78bfa 0%, #818cf8 100%)",
            }}
          >
            Book a Demo
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            We'll contact you within 24 hours. No spam.
          </p>
        </div>
        
      </div>

         <section className="relative w-full py-24 mt-20 text-center overflow-hidden">
        {/* Background: SVG waves layer */}
        <div className="absolute inset-0 svgc bg-transparent bg-[url('/waves.svg')] bg-contain bg-bottom bg-no-repeat" />

        {/* Gradient overlay on top of SVG — makes dots look tinted/transparent like Image 1 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(144,31,233,0.15),rgba(0,163,255,0.15))] mix-blend-multiply" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Prefer to Talk Directly?{" "}
          </h1>

         

          <div className="mb-6"></div>

          <p className="text-gray-800 z-10">
            Call : +971 54 797 5397
          </p>
          <p className="text-gray-800 z-10">
            Email: b2b@spaceforcreation.ae{" "}
          </p>
          <p className="text-gray-800 z-10">
            Adress : Dubai, UAE | License: 1571670{" "}
          </p>
        </div>
      </section>

   
    </div>
  );
}
