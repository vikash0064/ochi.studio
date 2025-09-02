import React from "react";
import { motion } from 'framer-motion';


function Footer() {
  return (
    <footer data-scroll data-scroll-speed="-.2" className="footer bg-zinc-100  relative pt-20 pb-10 lg:pt-28 lg:pb-0 z-10">
      {/* Top Rounded Shape */}
      <span className="absolute w-full left-0 bottom-full -mb-1 h-4 rounded-tl-full rounded-tr-full bg-gray-100"></span>

      <div className="container mx-auto px-6">
        {/* Top Heading */}
        <div className="grid md:grid-cols-12 md:gap-y-6 mb-10">
          <div className="md:col-span-5 laptop:col-span-6">
            <h3 className="text-[13vh]  leading-none uppercase tracking-tighter font-bold text-black">eye-<br/>
opening</h3>
          </div>
          <div className="md:col-span-7 laptop:col-span-6">
            <h3 className="mb-10 text-[13vh]  leading-none uppercase tracking-tighter font-bold text-black">
              presentations
            </h3>

            {/* Grid Links */}
            <div className="grid grid-cols-2 gap-8">
              {/* Menu */}
              <div className="md:order-last md:flex underline-offset-2 underline decoration-zinc-500 text-black  laptop:pr-10">
                <div>
                  <p className="mb-2 font-medium">M:</p>
                  <ul className="leading-loose">
                    {[
                      "Home",
                      "Services",
                      "Our work",
                      "About us",
                      "Insights",
                      "Contact us",
                    ].map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-800 hover:underline transition"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-2 text-black font-medium">S:</p>
                <ul className="leading-loose underline-offset-2 underline decoration-zinc-500">
                  {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
                    (s, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-800 hover:underline transition"
                        >
                          {s}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Location & Email */}
              <div className="col-span-2 md:col-span-1 grid gap-6">
                <div className="leading-loose text-black">
                  <p className="mb-2 font-medium">L:</p>
                  <address className="not-italic underline-offset-2 underline decoration-zinc-500">
                    <span className="block hover:underline cursor-pointer">
                      202-1965 W 4th Ave
                    </span>
                    <span className="block hover:underline cursor-pointer">
                      Vancouver, Canada
                    </span>
                    <span className="block hover:underline cursor-pointer">
                      30 Chukarina St
                    </span>
                    <span className="block hover:underline cursor-pointer">
                      Lviv, Ukraine
                    </span>
                  </address>
                </div>

                <div className="leading-loose text-black">
                  <p className="mb-2 font-medium">E:</p>
                  <a
                    href="mailto:hello@ochi.design"
                    className="hover:underline underline-offset-2 underline decoration-zinc-500"
                  >
                    hello@ochi.design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grid  md:grid-cols-12 gap-y-4 md:items-end">
          {/* Logo */}
          <div className="mb-10 md:mb-0 md:col-span-5 laptop:col-span-6 ">
            <a className="inline-flex" href="#">
              <svg
                width="72"
                height="30"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.8393 10.2032C4.22951..." fill="currentColor"></path>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="opacity-50 md:col-span-4 laptop:col-span-4 md:-mr-8 mb-5 text-zinc-900">
            © ochi design 2025.{" "}
            <a href="#" className="hover:underline">
              Legal Terms
            </a>
          </div>

          {/* Website credit */}
          <div className="md:text-right opacity-50 md:col-span-3 laptop:col-span-2 mb-5">
            <a href="#" target="_blank" className="hover:underline text-zinc-900">
              Website by Obys
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
