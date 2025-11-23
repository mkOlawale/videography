// src/sections/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const scrollIndicatorRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Staggered text animation
    tl.fromTo('.hero-title-line', 
      { opacity: 0, y: 100, rotationX: 45 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.2
      }
    ).fromTo(subtitleRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    ).fromTo('.hero-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      "-=0.5"
    ).fromTo('.hero-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      "-=0.3"
    );

    // Image animation with parallax
    gsap.fromTo(imageRef.current,
      { 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(10px) brightness(1.2)"
      },
      { 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.5
      }
    );

    // Continuous floating animation for image
    gsap.to(imageRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Background elements animation
    gsap.to('.floating-element', {
      y: -20,
      rotation: 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 2,
      ease: "sine.inOut"
    });

  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-950"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-10 left-5 w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full opacity-40"></div>
        <div className="floating-element absolute top-40 right-8 w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full opacity-30"></div>
        <div className="floating-element absolute bottom-40 left-10 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full opacity-50"></div>
        <div className="floating-element absolute top-1/2 right-20 w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px),
                             linear-gradient(to bottom, gray 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 lg:py-0 gap-12 lg:gap-8">
          
          {/* Text Content - Mobile First */}
          <div ref={textRef} className="z-10 w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6 lg:mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
                Available for Projects
              </span>
            </div>

            {/* Main Title */}
            <div ref={titleRef} className="mb-6 lg:mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <div className="overflow-hidden">
                  <span className="hero-title-line block bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent leading-[0.9]">
                    Nikhil
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="hero-title-line block bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent leading-[0.9] mt-2">
                    Kanojia
                  </span>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={subtitleRef} className="mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
                  Visual Storyteller
                </p>
                <div className="hidden sm:block w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"></div>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
                  Creative Director
                </p>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10">
              Crafting cinematic narratives and capturing timeless moments through photography 
              and videography. Specializing in emotional storytelling, brand campaigns, and 
              visual experiences that resonate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 lg:mb-16">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="hero-btn px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Explore My Portfolio</span>
                <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="hero-btn px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <span className="text-lg">📸</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { number: '6+', label: 'Years Experience' },
                { number: '150+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="hero-stat text-center group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image - Mobile Optimized */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-2xl mx-auto">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform-gpu">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Nikhil Kanojia - Professional Photographer and Videographer"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="eager"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                
                {/* Decorative Camera Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📷</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      <div>Canon R5</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">4K Video</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl transform rotate-12 z-0 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-4 w-24 h-24 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-2xl transform -rotate-6 z-0 hidden sm:block"></div>
              
              {/* Floating Video Reel */}
              <div className="absolute -bottom-8 right-4 sm:right-8 bg-white dark:bg-gray-800 px-5 py-4 rounded-2xl shadow-2xl z-20 border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 cursor-pointer hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">▶</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">Showreel 2024</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Watch my work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden lg:block"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">Scroll to Discover</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;