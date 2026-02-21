export default function WhatOurClientsSay() {
  const testimonials = [
    {
      quote:
        '"My students finally understand oxidation-reduction reactions. They can experiment until they truly get it, without worrying about making mistakes.',
      initials: 'DR',
      name: 'Dr. Sarah Ahmed',
      title: 'Chemistry Teacher',
    },
    {
      quote:
        'Our water conservation campaign reached 10,000+ students with 90% message recall. The AR storybook made our message unforgettable.',
      initials: 'MC',
      name: 'Michael Chen',
      title: 'Science Coordinator',
    },
    {
      quote:
        '"Life Digital became our #1 photo spot. 25 minutes average increased dwell time and unprecedented social media engagement.',
      initials: 'DR',
      name: 'Layla Hassan',
      title: 'Grade 10 Student',
    },
  ];

  return (
    <section className="w-full py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
Real Impact from Educators and Students
        </h2>
        <p className="mt-3 text-sm text-[#8371A7]">
          Real results from educators, campaign managers, and venue operators
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left flex flex-col"
            >
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {item.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center text-gray-700 font-semibold flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
