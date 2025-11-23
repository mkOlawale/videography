// src/App.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import MobileNav from './components/MobileNav';
import './styles/globals.css';
import YouTubeShowcase from './sections/YouTubeShowcase';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global animation configurations
    gsap.config({
      nullTargetWarn: false,
    });
  }, []);

  return (
    <div className="app bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar /> <br /> <br />
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <YouTubeShowcase />
        <Experience />
        <Contact />
      </main>
      <MobileNav />
    </div>
  );
}

export default App;