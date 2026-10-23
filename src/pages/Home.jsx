// pages/Home.jsx

const reviewers = [
  {
    name: "Patient",
    image:
      "https://framerusercontent.com/images/b5jTtFlE6UjvJaUpSs5797tQsSs.webp",
  },
  {
    name: "Patient",
    image:
      "https://framerusercontent.com/images/2aBRvSse0zJnzpuCOdsM4CUcy0.webp",
  },
  {
    name: "Patient",
    image:
      "https://framerusercontent.com/images/b5jTtFlE6UjvJaUpSs5797tQsSs.webp",
  },
];

export default function Home() {
  function handleSubmit(event) {
    event.preventDefault();
    // اتصال فرم به بک‌اند یا سرویس رزرو را اینجا اضافه کنید.
  }

  return (
    <main className="bg-white">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:min-h-[680px] md:grid-cols-2 md:gap-10 md:px-10 md:pb-20 md:pt-16">
        {/* متن و دکمه‌های سمت چپ */}
        <div className="order-1">
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-700">
            <span className="tracking-wide text-amber-400" aria-label="5 stars">
              ★★★★★
            </span>
            <span className="font-medium">5.0 (980 Reviews)</span>
          </div>

          <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
            Partner in health and wellness
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#737373] sm:text-lg sm:leading-8">
            Providing advanced healthcare solutions with a compassionate touch
            for every patient.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#087f70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#066b60]"
            >
              Book a call
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-full px-1 text-sm font-medium text-[#171717] transition hover:text-[#087f70]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#087f70]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-4 w-4 fill-current"
                >
                  <path d="M8 5.8c0-.8.9-1.3 1.6-.9l9 5.2a1 1 0 0 1 0 1.8l-9 5.2c-.7.4-1.6-.1-1.6-.9V5.8Z" />
                </svg>
              </span>
              Watch Video
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex items-center pl-1">
              {reviewers.map((reviewer, index) => (
                <img
                  key={`${reviewer.name}-${index}`}
                  src={reviewer.image}
                  alt=""
                  className={`h-11 w-11 rounded-full border-2 border-white object-cover ${
                    index > 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>

            <div>
              <p className="font-semibold text-[#171717]">5000+ Appointments</p>
              <p className="mt-0.5 text-sm text-[#737373]">
                Patients booked already
              </p>
            </div>
          </div>
        </div>

        {/* تصویر و کارت رزرو سمت راست */}
        <div className="order-2">
          <div className="relative mx-auto min-h-[470px] max-w-[560px] overflow-hidden rounded-[28px] bg-[#e8f1ef] sm:min-h-[560px]">
            <img
              src="https://framerusercontent.com/images/RiukRfppKWATQjdvnvRv1Rm48.jpg?scale-down-to=1024"
              alt="Healthcare professional with a patient"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white p-5 shadow-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-[#171717]">
                  Virtual Consultation
                </h2>

                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="tracking-wide text-amber-400">★★★★★</span>
                  <span>5.0 (980 Reviews)</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#087f70]"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Doctor
                  <input
                    type="text"
                    name="doctor"
                    placeholder="Dr Maria Cleven"
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#087f70]"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700 sm:col-span-2">
                  Location
                  <input
                    type="text"
                    name="location"
                    placeholder="Amsterdam"
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#087f70]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-1 min-h-11 rounded-full bg-[#087f70] px-5 text-sm font-semibold text-white transition hover:bg-[#066b60] sm:col-span-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* آمار ابتدای بخش بعدی سایت */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:px-10">
        <div className="border-t border-gray-100 pt-10">
          <p className="text-4xl font-semibold tracking-tight text-[#171717]">
            200K+
          </p>
          <p className="mt-2 text-gray-600">
            Cured satisfied patients around the globe
          </p>
        </div>
      </section>
    </main>
  );
}