export default function WhatOurClientsSay() {
  const testimonials = [
    {
      quote:
        '"VCLAB transformed our physics program. Students who struggled now achieve 42% higher test scores. Safer, unlimited, and more engaging than our physical lab ever was."',
      initials: 'DR',
      name: 'Dr. Rashid Al-Mansoori',
      title: 'Science Head, Al Noor School',
    },
    {
      quote:
        '"Our water conservation campaign reached 10,000+ students with 90% message recall. The AR storybook made our message unforgettable."',
      initials: 'FM',
      name: 'Fatima Al-Mazrouei',
      title: 'UAE Environmental Agency',
    },
    {
      quote:
        '"Life Digital became our #1 photo spot. 25 minutes average increased dwell time and unprecedented social media engagement."',
      initials: 'DR',
      name: 'Khalid Saeed',
      title: 'Discovery Mall Abu Dhabi',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-sm text-[#8371A7]">
          Real results from educators, campaign managers, and venue operators
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left"
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center text-gray-700 font-semibold">
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
