import React from "react";
import { Link } from "react-router-dom";

const values = [
{
number: "01",
title: "Patient First",
description:
"We put every patient at the center of everything we do, providing care that is personal, respectful, and compassionate.",
},
{
number: "02",
title: "Expert Care",
description:
"Our experienced healthcare professionals work together to provide high-quality care using modern medical practices.",
},
{
number: "03",
title: "Compassion",
description:
"We believe that great healthcare is not only about treatment, but also about listening, understanding, and supporting our patients.",
},
];

export default function About() {
return ( <main className="min-h-screen bg-white">

```
  {/* ================= HERO ================= */}
  <section className="px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
    <div className="mx-auto max-w-7xl">

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
            About Us
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Healthcare that puts people first
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
            We are committed to providing exceptional healthcare
            with compassion, expertise, and a personal approach
            to every patient.
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
        <div className="overflow-hidden rounded-3xl bg-[#f3f7f5]">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
            alt="Healthcare professionals"
            className="h-[450px] w-full object-cover md:h-[550px]"
          />
        </div>

      </div>
    </div>
  </section>


  {/* ================= INTRODUCTION ================= */}
  <section className="bg-[#f3f7f5] px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-7xl">

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
            Who We Are
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
            A healthcare team you can trust
          </h2>
        </div>

        <div>
          <p className="leading-8 text-gray-500">
            Our goal is simple: to make high-quality healthcare
            accessible, comfortable, and personal. We bring
            together experienced doctors and healthcare
            professionals who are passionate about helping
            people live healthier lives.
          </p>

          <p className="mt-5 leading-8 text-gray-500">
            From preventive care to specialized treatment,
            we work closely with every patient to understand
            their needs and create a care experience that
            feels personal.
          </p>
        </div>

      </div>

    </div>
  </section>


  {/* ================= VALUES ================= */}
  <section className="px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-7xl">

      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
          Our Values
        </p>

        <h2 className="mt-5 text-3xl font-semibold text-gray-900 md:text-5xl">
          What guides the way we care
        </h2>
      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {values.map((value) => (
          <article
            key={value.number}
            className="rounded-3xl bg-[#f3f7f5] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="text-sm font-medium text-gray-400">
              {value.number}
            </span>

            <h3 className="mt-12 text-2xl font-semibold text-gray-900">
              {value.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              {value.description}
            </p>

          </article>
        ))}

      </div>

    </div>
  </section>


  {/* ================= STATS ================= */}
  <section className="bg-[#f3f7f5] px-5 py-20 md:px-8 md:py-24">
    <div className="mx-auto max-w-7xl">

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

        <div className="rounded-3xl bg-white p-7">
          <p className="text-4xl font-semibold text-[#087f70]">
            15+
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Years of experience
          </p>
        </div>


        <div className="rounded-3xl bg-white p-7">
          <p className="text-4xl font-semibold text-[#087f70]">
            20+
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Healthcare professionals
          </p>
        </div>


        <div className="rounded-3xl bg-white p-7">
          <p className="text-4xl font-semibold text-[#087f70]">
            10K+
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Patients helped
          </p>
        </div>


        <div className="rounded-3xl bg-white p-7">
          <p className="text-4xl font-semibold text-[#087f70]">
            24/7
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Patient support
          </p>
        </div>

      </div>

    </div>
  </section>


  {/* ================= MISSION ================= */}
  <section className="px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-7xl">

      <div className="grid overflow-hidden rounded-3xl bg-[#087f70] lg:grid-cols-2">

        {/* Image */}
        <div className="min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
            alt="Doctor caring for patient"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex items-center px-7 py-14 text-white md:px-12 md:py-16">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-teal-100">
              Our Mission
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Making healthcare better for everyone
            </h2>

            <p className="mt-6 leading-8 text-teal-50">
              We are dedicated to creating a healthcare experience
              where patients feel heard, respected, and supported.
              Our team combines medical expertise with genuine
              compassion to deliver care that makes a difference.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#087f70] transition hover:bg-teal-50"
            >
              Explore Our Services
              <span>↗</span>
            </Link>

          </div>

        </div>

      </div>

    </div>
  </section>


  {/* ================= CTA ================= */}
  <section className="px-5 pb-20 md:px-8 md:pb-28">
    <div className="mx-auto max-w-7xl rounded-3xl bg-[#f3f7f5] px-6 py-14 text-center md:px-12 md:py-20">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
        Get Started
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-gray-900 md:text-5xl">
        Your health is our priority
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-500">
        Take the next step toward better healthcare and
        connect with our experienced team.
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#087f70] px-7 py-4 font-semibold text-white transition hover:bg-[#066457]"
      >
        Book an Appointment
        <span>↗</span>
      </Link>

    </div>
  </section>

</main>


);
}
