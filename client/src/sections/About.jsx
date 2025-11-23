// src/sections/About.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();
  const statsRef = useRef();
  const specializationsRef = useRef();

  useEffect(() => {
    // Content animation
    gsap.fromTo('.about-content-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation with enhanced effects
    gsap.fromTo(imageRef.current,
      { 
        opacity: 0, 
        x: 100, 
        scale: 0.8,
        rotationY: 15,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationY: 0,
        filter: "blur(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats counter animation
    gsap.fromTo('.stat-number',
      { innerText: 0 },
      {
        innerText: (i, target) => {
          const value = parseInt(target.getAttribute('data-value'));
          return value;
        },
        duration: 2,
        stagger: 0.3,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Specializations animation
    gsap.fromTo('.specialization-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: specializationsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="about-content-item">
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Crafting Visual Stories That <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Resonate</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div ref={contentRef} className="space-y-8 order-2 lg:order-1">
            {/* Introduction */}
            <div className="about-content-item">
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                Hello, I'm <strong className="text-gray-900 dark:text-white font-semibold">Nikhil Kanojia</strong> — 
                a passionate visual storyteller based in Mumbai & Lucknow, dedicated to capturing 
                emotions and narratives through my lens.
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-6 about-content-item">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Since beginning my creative journey in 2018, I've evolved through hands-on experience, 
                collaborating with diverse clients and continuously pushing the boundaries of visual storytelling.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach blends <strong className="text-gray-900 dark:text-white">minimalistic aesthetics</strong> with 
                <strong className="text-gray-900 dark:text-white"> emotional depth</strong>, creating visuals that don't just 
                show moments, but tell compelling stories that resonate with audiences.
              </p>
            </div>

            {/* Quick Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-6 py-6 about-content-item">
              {[
                { value: 6, label: 'Years Experience' },
                { value: 150, label: 'Projects Completed' },
                { value: 100, label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    <span className="stat-number" data-value={stat.value}>0</span>+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Specializations & Details - Mobile Optimized */}
            <div ref={specializationsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 about-content-item">
              {/* Specializations */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                  Specializations
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Portraits', 'Music Videos', 'Cinematic Films', 'Product Shots', 'Events', 'Brand Films'].map((item, index) => (
                    <div key={index} className="specialization-item flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                  Get In Touch
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: '📍', text: 'Mumbai & Lucknow' },
                    { icon: '📞', text: '+91 6394901353' },
                    { icon: '📧', text: 'visualsbynikhil19@gmail.com' }
                  ].map((detail, index) => (
                    <div key={index} className="specialization-item flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                      <span className="text-gray-500 dark:text-gray-400 text-lg">{detail.icon}</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div ref={imageRef} className="relative order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform-gpu border-8 border-white dark:border-gray-800">
                {/* Professional Photographer Image */}
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Nikhil Kanojia - Professional Photographer and Videographer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Name Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nikhil Kanojia</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Photographer & Videographer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-2xl transform rotate-12 z-0 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-gray-300 to-gray-400 dark:from-gray-500 dark:to-gray-600 rounded-3xl transform -rotate-6 z-0 hidden sm:block"></div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-xl z-10 border border-gray-100 dark:border-gray-700 flex items-center gap-3 group/badge hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">6+ Years Experience</span>
              </div>

              {/* Camera Equipment Badge */}
              <div className="absolute top-6 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-lg z-10 border border-gray-100 dark:border-gray-700 transform -rotate-6 hidden sm:flex items-center gap-2 group/gear hover:scale-105 transition-transform duration-300">
                <span className="text-xl">🎥</span>
                <span className="font-medium text-gray-900 dark:text-white text-xs">4K Pro Gear</span>
              </div>

              {/* Creative Badge */}
              <div className="absolute top-1/4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-lg z-10 border border-gray-100 dark:border-gray-700 transform rotate-12 hidden sm:flex items-center gap-2 group/creative hover:scale-105 transition-transform duration-300">
                <span className="text-xl">✨</span>
                <span className="font-medium text-gray-900 dark:text-white text-xs">Creative Vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20 about-content-item">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with stunning visuals that tell your unique story.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto group"
            >
              <span>Start Your Project</span>
              <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;