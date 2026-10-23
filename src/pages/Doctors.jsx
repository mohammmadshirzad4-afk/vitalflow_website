import React from "react";
import { Link } from "react-router-dom";

const doctors = [
{
name: "Jonathan Reed",
specialty: "Gastroenterologist",
image:
"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
},
{
name: "Olivia Bennett",
specialty: "Dermatologist",
image:
"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
},
{
name: "David Harris",
specialty: "Pediatrician",
image:
"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
},
{
name: "Emily Rogers",
specialty: "Orthopedic",
image:
"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
},
{
name: "Michael Carter",
specialty: "Cardiologist",
image:
"https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=700&q=80",
},
{
name: "Sarah Thompson",
specialty: "Neurologist",
image:
"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
},
];

function DoctorCard({ doctor }) {
return ( <article className="group overflow-hidden rounded-2xl bg-[#f5f8f7] transition duration-300 hover:-translate-y-2 hover:shadow-xl">
{/* Doctor Image */} <div className="h-[340px] overflow-hidden"> <img
       src={doctor.image}
       alt={doctor.name}
       loading="lazy"
       className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
     /> </div>

```
  {/* Doctor Information */}
  <div className="flex items-center justify-between gap-4 p-6">
    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        {doctor.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {doctor.specialty}
      </p>
    </div>

    <Link
      to="/contact"
      aria-label={`Book an appointment with ${doctor.name}`}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#087f70] text-2xl text-white transition hover:bg-[#066457]"
    >
      ↗
    </Link>
  </div>
</article>


);
}

export default function Doctors() {
return ( <main className="min-h-screen bg-white">
{/* Hero Section */} <section className="px-5 pb-16 pt-24 text-center md:pb-24 md:pt-32"> <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#087f70]">
Our Team </p>

```
    <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
      Meet our dedicated and experienced team
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
      Our team of dedicated healthcare professionals is committed
      to providing personalized care and helping you live a
      healthier, happier life.
    </p>
  </section>

  {/* Doctors Grid */}
  <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.name} doctor={doctor} />
      ))}
    </div>
  </section>

  {/* Appointment CTA */}
  <section className="px-5 pb-20 md:px-8 md:pb-28">
    <div className="mx-auto max-w-7xl rounded-3xl bg-[#087f70] px-6 py-14 text-center text-white md:px-12 md:py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-100">
        Your Health Matters
      </p>

      <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">
        Get the care you deserve
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-7 text-teal-50">
        Our experienced team is here to support your healthcare
        journey with personalized attention.
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#087f70] transition hover:bg-teal-50"
      >
        Book an Appointment
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </section>
</main>


);
}
