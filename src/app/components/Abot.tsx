"use client";
import { motion } from "framer-motion";
import React from "react";


export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen mt-70 flex items-center justify-center bg-white overflow-hidden"
    >
      {" "}
      {/* Glow kiri */}{" "}
      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-100 opacity-60 blur-[120px]" />{" "}
      {/* Glow kanan */}{" "}
      <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] rounded-full bg-blue-100 opacity-60 blur-[120px]" />{" "}

 <div
        className="relative mr-28 mb-70" // amount=0.2 berarti 20% section terlihat sudah trigger
      >
        <motion.h1
          className="text-black text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Hi, I’m Sulthan Muhammad Syathir
        </motion.h1>

        <motion.p
          className="text-black text-base tracking-wide max-w-6xl text-justify"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          You can call me Sulthan. I am an 11th grade student with an endless
          curiosity for knowledge. I like to discuss and explore artificial
          intelligence, technology, music, and movies. I am deeply interested
          in equations, theories, and algorithms. And of course, I also enjoy
          playing on social media. Beyond my school activities, I often spend
          my free time reading articles, watching educational videos, and
          experimenting with small coding projects. I believe that learning
          should not only be limited to the classroom but should also be
          applied to real-life situations. My dream is to contribute to the
          development of technology that can help people solve real problems,
          especially in education and communication. I’m always excited to
          collaborate, exchange ideas, and challenge myself with new projects
          that push me outside of my comfort zone.
        </motion.p>
      </div>
    </section>
  );
}