import React from 'react'

const AlertTriangleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const LabIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#89278B"   // soft purple
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3h6" />
    <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4h8.8A3 3 0 0 0 19 17l-5-9V3" />
    <path d="M8 14h8" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)


const BulletItem = ({ text, color }: { text: string; color: string }) => (
  <li className="mt-2 flex items-start gap-2 text-gray-600 text-sm leading-snug">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }}></span>

    <span>{text}</span>
  </li>
)

export default function Features() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 - The Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
   <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl" 
     style={{ backgroundColor: '#fee2e2' }}> {/* bg-red-100 equivalent */}
  <AlertTriangleIcon />
</div>

          <h3 className="text-lg font-semibold text-gray-900 mb-5">The Challenge</h3>
          
             <BulletItem
              text="Traditional science labs are limited by cost, safety concerns, and availability."
                color="#E84545"
              
            />
            <BulletItem
              text="Most students learn experiments theoretically, without enough hands-on practice to build real understanding or confidence."
              color="#E84545"
            />
        </div>

        {/* Card 2 - The Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
         <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-100">
  <LabIcon />
</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">The VCLAB Experience</h3>
            <BulletItem
              text="VCLAB provides fully customized virtual laboratories where students can safely run unlimited experiments."
              color="#89278B"
            />
            <BulletItem
              text="No equipment. No risk. No scheduling constraints — just immersive, practical learning anytime."
              color="#89278B"
            />
           
        </div>

        {/* Card 3 - Measured Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="mb-5 w-12 h-12 flex items-center justify-center  rounded-2xl bg-green-100">
            <CheckBadgeIcon />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">Measured Impact</h3>
            <BulletItem
              text="Deeper understanding of scientific concepts."
              color="#00A63E"
            />
            <BulletItem
              text="Higher student engagement and participation."
              color="#00A63E"
            />
            <BulletItem
              text="Equal hands-on experience for every learner."
              color="#00A63E"
            />
            <BulletItem
              text="Stronger readiness for real-world labs."
              color="#00A63E"
            />
        </div>

      </div>
    </section>
  )
}