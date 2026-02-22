import React from 'react'
import { FiZap } from "react-icons/fi";

const AlertTriangleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)
const MagicIcon = () => {
  return (
    <FiZap
      size={28}
      color="#E09B00" // golden color like your image
    />
  );
};

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
              text="Audiences are overwhelmed by content and have learned to ignore traditional campaigns."
                color="#E84545"
              
            />
            <BulletItem
              text="Messages are seen briefly, forgotten quickly, and rarely acted upon."
              color="#E84545"
            />
            <BulletItem
              text="Passive storytelling fails to create emotional connection or lasting recall."
              color="#E84545"
            />
        </div>

        {/* Card 2 - The Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
         <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl" style={{ backgroundColor:'#FFF3DA' }}> {/* bg-orange-100 equivalent */}
  <MagicIcon />
</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">The Solution</h3>
            <BulletItem
              text="Immersive AR stories that place the audience inside the message, not in front of it."
              color="#F3A600"
            />
            <BulletItem
              text="Interactive campaigns designed for exploration, participation, and sharing."
              color="#F3A600"
            />
            <BulletItem
              text="The story unfolds through action, not observation."
              color="#F3A600"
            />
           
        </div>

        {/* Card 3 - Measured Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="mb-5 w-12 h-12 flex items-center justify-center  rounded-2xl bg-green-100">
            <CheckBadgeIcon />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">Measured Impact</h3>
            <BulletItem
              text="Higher engagement rates compared to traditional digital campaigns."
              color="#00A63E"
            />
            <BulletItem
              text="Stronger message recall through experiential storytelling."
              color="#00A63E"
            />
            <BulletItem
              text="Increased organic sharing and audience-driven amplification."
              color="#00A63E"
            />
           
        </div>

      </div>
    </section>
  )
}