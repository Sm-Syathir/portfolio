"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar';
import Background from './components/Background';
import Main from './components/Main';
import Profile from "./components/Profile";
import Abot from "./components/Abot";




export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi dalam ms
      once: false,   // kalau true, animasi cuma sekali
    });
  }, []);

  return (
    <>
      <Background />
      <Navbar />
      <Main />
      <Profile />
      <Abot />

    </>
  );
}

