"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import AOS from "aos";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const menu = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // animasi navbar muncul
  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // deteksi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle klik menu (scroll + refresh AOS)
  // handle klik menu (scroll + reset animasi AOS)
// handle klik menu (scroll + reset animasi AOS)
const handleScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const aosElements = el.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        // paksa reset animasi
        el.classList.remove("aos-animate");

        void (el as HTMLElement).offsetWidth;
      });

      AOS.refresh();
    }, 700);
  }
};


  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-20 flex justify-center w-[90%] max-w-4xl">
      <div
        className={`flex gap-10 px-10 py-3 rounded-full transition-all duration-500
          ${showNav ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          ${
            scrolled
              ? "bg-white/5 backdrop-blur-xl border border-gray-200 shadow-md"
              : "bg-white/5 backdrop-blur-xl border border-white/30"
          }`}
      >
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={`
              ${inter.className} relative font-medium text-sm 
              text-gray-600 hover:text-black transition-colors
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-gradient-to-r 
              after:from-sky-400 after:to-blue-600 
              after:transition-all after:duration-300 
              hover:after:w-full
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
