import React from 'react'
import { MdTouchApp } from "react-icons/md";

const AlertTriangleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)


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
              text="Learning spaces are static and disconnected from how students actually engage with the world."
                color="#E84545"
              
            />
            <BulletItem
              text="Traditional classrooms fail to sustain attention, context, and emotional engagement."
              color="#E84545"
            />
            <BulletItem
              text="Content is delivered, but experiences are not lived."
              color="#E84545"
            />
        </div>

        {/* Card 2 - The Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
         <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-100">
  <MdTouchApp className="text-blue-600 w-6 h-6" />
</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">The Solution</h3>
            <BulletItem
              text="A Life Digital Environment that transforms physical spaces into immersive, interactive learning worlds."
              color="#0040CA"
            />
            <BulletItem
              text="Wall-to-wall digital layers that respond to movement, content, and context."
              color="#0040CA"
            />
            <BulletItem
              text="Learning becomes an experience students explore, not information they receive."
              color="#0040CA"
            />
           
        </div>

        {/* Card 3 - Measured Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="mb-5 w-12 h-12 flex items-center justify-center  rounded-2xl bg-green-100">
            <CheckBadgeIcon />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">Measured Impact</h3>
            <BulletItem
              text="Increased student engagement and time-on-task inside learning spaces."
              color="#00A63E"
            />
            <BulletItem
              text="Improved concept retention through immersive, multi-sensory experiences."
              color="#00A63E"
            />
            <BulletItem
              text="Higher participation rates across different learning styles."
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