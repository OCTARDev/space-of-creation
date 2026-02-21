import React from 'react'

const AlertTriangleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef2134" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const GraduationCapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
    
          <h3 className="text-lg font-semibold text-gray-900 mb-5">Measured Impact</h3>
          
             <BulletItem
              text="Learning breaks between classroom instruction and home reinforcement."
                color="#E84545"
              
            />
            <BulletItem
              text="Teachers deliver lessons, but progress becomes hard to track beyond school."
              color="#E84545"
            />
            <BulletItem
              text="Parents want to help, yet lack clear guidance and visibility."
              color="#E84545"
            />
            <BulletItem
              text="School leaders struggle with alignment, engagement, and measurable impact across environments"
              color="#E84545"
            />
        </div>

        {/* Card 2 - The Solution */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl" style={{ backgroundColor: '#dbeafe' }}> {/* bg-blue-100 equivalent */}
            <GraduationCapIcon />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">The Solution</h3>
            <BulletItem
              text="One connected ecosystem linking classroom teaching with guided home engagement."
              color="#3A9DB2"
            />
            <BulletItem
              text="Teacher-led curriculum control aligned with approved standards."
              color="#3A9DB2"
            />
            <BulletItem
              text="Student learning enhanced through interactive AR without workflow disruption."
              color="#3A9DB2"
            />
            <BulletItem
              text="Parent-enabled reinforcement that supports learning continuity."
              color="#3A9DB2"
            />
        </div>

        {/* Card 3 - Measured Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="mb-5 w-12 h-12 flex items-center justify-center  rounded-2xl bg-green-100">
            <CheckBadgeIcon />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-5">Measured Impact</h3>
            <BulletItem
              text="Increased student engagement through curriculum-aligned interactive learning."
              color="#00A63E"
            />
            <BulletItem
              text="Continuous learning between school and home."
              color="#00A63E"
            />
            <BulletItem
              text="Clear visibility into progress, participation, and learning gaps."
              color="#00A63E"
            />
            <BulletItem
              text="Stronger parent trust without added teacher workload."
              color="#00A63E"
            />
        </div>

      </div>
    </section>
  )
}