import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed  inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 md:px-20 md:py-6">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          aria-label="Vital+Flow home"
        >
          <img
            src="../assets/w3sZiBC05z4WZCxZn5XzvnOKr4.svg"
            alt=""
            className="h-8 w-auto"
          />
          <span className="text-lg font-semibold">Vital+Flow</span>
        </NavLink>

        <div className="hidden items-center gap-8 font-bold md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#087f70]"
                  : "text-gray-800 hover:text-[#087f70]"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="rounded-full bg-[#087f70] px-5 py-2 text-white hover:bg-[#066b60]">
            Book a call
          </button>
        </div>

        <button
          type="button"
          className="rounded p-2 text-gray-800 hover:bg-gray-100 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t bg-white px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4 font-bold">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#087f70]"
                    : "text-gray-800 hover:text-[#087f70]"
                }
              >
                {label}
              </NavLink>
            ))}
            <button className="mt-2 w-full rounded-full bg-[#087f70] px-5 py-3 text-white hover:bg-[#066b60]">
              Book a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
