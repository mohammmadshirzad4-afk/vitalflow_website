import React from "react";
import { Link } from "react-router-dom";

const services = [
{
number: "01",
title: "Primary Care",
description:
"Comprehensive healthcare for your everyday needs, from routine checkups to ongoing health management.",
icon: "✚",
},
{
number: "02",
title: "Cardiology",
description:
"Expert heart care focused on prevention, diagnosis, and treatment of cardiovascular conditions.",
icon: "♡",
},
{
number: "03",
title: "Dermatology",
description:
"Professional care for your skin, hair, and nails with personalized treatment plans.",
icon: "✦",
},
{
number: "04",
title: "Pediatrics",
description:
"Compassionate healthcare designed to support children through every stage of their development.",
icon: "⌁",
},
{
number: "05",
title: "Neurology",
description:
"Specialized diagnosis and treatment for conditions affecting the brain and nervous system.",
icon: "◉",
},
{
number: "06",
title: "Orthopedics",
description:
"Advanced care for bones, joints, muscles, and the overall musculoskeletal system.",
icon: "◇",
},
];

function ServiceCard({ service }) {
return ( <article className="group relative overflow-hidden rounded-3xl bg-[#f3f7f5] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8">
{/* Number */} <div className="flex items-start justify-between"> <span className="text-sm font-medium text-gray-400">
{service.number} </span>

```
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#087f70] shadow-sm transition duration-300 group-hover:bg-[#087f70] group-hover:text-white">
      {service.icon}
    </div>
  </div>

  {/* Content */}
  <div className="mt-14">
    <h2 className="text-2xl font-semibold text-gray-900">
      {service.title}
    </h2>

    <p className="mt-4 leading-7 text-gray-500">
      {service.description}
    </p>
  </div>

  {/* Bottom link */}
  <Link
    to="/contact"
    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#087f70]"
  >
    Learn more
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</article>


);
}

export default function Services() {
return ( <main className="min-h-screen bg-white">


  {/* Hero */}
  <section className="px-5 pb-16 pt-24 text-center md:pb-24 md:pt-32">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
      Our Services
    </p>

    <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
      Comprehensive care for your health and wellbeing
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
      From preventive care to specialized treatment, our experienced
      healthcare team is here to provide the care you need.
    </p>
  </section>

  {/* Services Grid */}
  <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.number}
          service={service}
        />
      ))}
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="bg-[#f3f7f5] px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

      {/* Left */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
          Why Choose Us
        </p>

        <h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Healthcare designed around you
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-gray-500">
          We believe healthcare should be personal, accessible,
          and centered around every individual patient.
        </p>

        <Link
          to="/doctors"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#087f70] px-7 py-4 font-semibold text-white transition hover:bg-[#066457]"
        >
          Meet Our Doctors
          <span>↗</span>
        </Link>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-3xl bg-white p-7">
          <div className="text-3xl font-semibold text-[#087f70]">
            15+
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Years of healthcare experience
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7">
          <div className="text-3xl font-semibold text-[#087f70]">
            20+
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Experienced healthcare professionals
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7">
          <div className="text-3xl font-semibold text-[#087f70]">
            10K+
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Patients cared for
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7">
          <div className="text-3xl font-semibold text-[#087f70]">
            24/7
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Support when you need it
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#087f70] px-6 py-14 text-center text-white md:px-12 md:py-20">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-100">
        Start Your Journey
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">
        Take the first step toward better health
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-7 text-teal-50">
        Our team is ready to help you find the right care
        for your needs.
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#087f70] transition hover:bg-teal-50"
      >
        Book an Appointment
        <span>↗</span>
      </Link>

    </div>
  </section>

</main>


);
}
