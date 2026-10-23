import React from "react";

const doctors = [
  {
    name: "Jonathan Reed",
    specialty: "Gastroenterologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "Olivia Bennett",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "David Harris",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    name: "Emily Rogers",
    specialty: "Orthopedic",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
  {
    name: "Michael Carter",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2",
  },
  {
    name: "Sarah Thompson",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    text: "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
  },
  {
    name: "Michael Roberts",
    text: "The support I received was excellent. They truly cared about my needs.",
  },
  {
    name: "Sophia Martinez",
    text: "I felt valued and cared for. Their team made every effort to provide exceptional support.",
  },
];

export default function Doctors() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
          Our Team
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Meet our dedicated and experienced team
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Our experienced healthcare professionals are committed to providing
          compassionate care for every patient.
        </p>
      </section>

      {/* Doctors Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded-2xl bg-gray-50 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-80 overflow-hidden bg-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>

              <div className="flex items-center justify-between p-6">
                <div>
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {doctor.specialty}
                  </p>
                </div>

                <a
                  href="/contact"
                  aria-label={`Contact ${doctor.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-xl text-white transition hover:bg-teal-700"
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
              Testimonials
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              What our satisfied clients have to say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-gray-100 bg-white p-8"
              >
                <div className="mb-5 text-3xl text-teal-600">“</div>

                <p className="leading-7 text-gray-600">{item.text}</p>

                <h3 className="mt-6 font-semibold">{item.name}</h3>

                <p className="mt-1 text-sm text-gray-400">Patient</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-teal-700 px-6 py-12 text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Contact us for more information
          </h2>

          <p className="mt-4 max-w-xl text-teal-50">
            Have questions? Send us a message and our team will get back to you.
          </p>

          <form
            className="mt-8 grid gap-4 md:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Your form is ready to be connected to a backend.");
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              required
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-teal-100 focus:ring-2 focus:ring-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              required
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-teal-100 focus:ring-2 focus:ring-white"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-teal-100 focus:ring-2 focus:ring-white md:col-span-2"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-4 font-semibold text-teal-800 transition hover:bg-teal-50 md:col-span-2"
            >
              Submit Message →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
