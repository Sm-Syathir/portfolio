"use client";
import { motion } from "framer-motion";
import TextType from "./TextType";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Main() {
  return (
    <section
      id="home"
      className="relative  min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className={`${poppins.className} md:text-4xl font-extrabold text-gray-900`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: false }} 
          >
            Sulthan Muhammad Syathir
          </motion.h1>

          <motion.h2
            className="mt-4 text-2xl font-bold text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <span>I am a </span>
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              De
            </span>
            <TextType
              text={["signer", "veloper"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={false}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
            />
          </motion.h2>

          <motion.p
            className={`${inter.className} mt-3 text-black text-justify text-base`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            viewport={{ once: false }}
          >
            I am a high school student with a passion for technology,
            particularly in software engineering and artificial intelligence.
            Motivated by a vision to make innovation more accessible for
            students across{" "}
            <span className="font-semibold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Indonesia
            </span>
            , I strive to combine creativity with technical skills to create
            meaningful solutions.
          </motion.p>

          <motion.div
            className="mt-6 grid grid-cols-[max-content_max-content] items-center gap-x-65"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <a
              className="inline-flex items-center gap-2 
               bg-gradient-to-r from-sky-400 to-blue-600 
               text-white font-semibold py-2 px-6 rounded-full 
               shadow-md transition-transform duration-300 hover:shadow-lg hover:from-blue-500 hover:to-sky-400"
            >
              <span>Resume</span>
              <img
                src="/assets/download.png"
                alt="Download"
                className="w-5 h-5"
              />
            </a>

            <div className="flex space-x-7">
              <a
                href="https://github.com/Sm-Syathir"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6 group transition-transform duration-500 ease-out hover:scale-110"
              >
                <img
                  src="/Assets/github.png"
                  alt="GitHub"
                  className="absolute inset-0 w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/Assets/github.png"
                  alt="GitHub"
                  className="absolute inset-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sulthan-muhammad-syathir-a723a7325/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6 group transition-transform duration-500 ease-out hover:scale-110"
              >
                <img
                  src="/Assets/linkedin.png"
                  alt="LinkedIn"
                  className="absolute inset-0 w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/Assets/linkedin1.png"
                  alt="LinkedIn"
                  className="absolute inset-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>

              <a
                href="https://www.instagram.com/sm_syathir/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6 group transition-transform duration-500 ease-out hover:scale-110"
              >
                <img
                  src="/Assets/instagram.png"
                  alt="Instagram"
                  className="absolute inset-0 w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/Assets/instagram1.png"
                  alt="Instagram"
                  className="absolute inset-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
