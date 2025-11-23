// src/sections/Experience.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef();
  const timelineRef = useRef();
  const headerRef = useRef();

  const experiences = [
    {
      year: "2018",
      title: "Started Creative Journey",
      description: "Began photography and videography journey with basic equipment and self-learning",
      icon: "🎬",
      category: "Beginning"
    },
    {
      year: "2019",
      title: "First Professional Projects",
      description: "Started working on paid projects including events and portrait sessions",
      icon: "💼",
      category: "Professional"
    },
    {
      year: "2020",
      title: "Music Video Specialization",
      description: "Expanded into music video production and cinematic storytelling",
      icon: "🎵",
      category: "Specialization"
    },
    {
      year: "2021",
      title: "Travel Cinematography",
      description: "Started creating travel documentaries and lifestyle content",
      icon: "✈️",
      category: "Expansion"
    },
    {
      year: "2022",
      title: "Brand Collaborations",
      description: "Worked with brands for product photography and commercial videos",
      icon: "🤝",
      category: "Collaboration"
    },
    {
      year: "2023",
      title: "Professional Studio Setup",
      description: "Established professional studio for advanced photography and videography",
      icon: "🎥",
      category: "Studio"
    },
    {
      year: "2024",
      title: "Current Focus",
      description: "Continuing to push creative boundaries in cinematic storytelling and visual arts",
      icon: "🚀",
      category: "Innovation"
    }
  ];

  useEffect(() => {
    // Header animation
    gsap.fromTo('.experience-header-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Timeline items animation
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotationX: index % 2 === 0 ? 15 : -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Timeline line animation
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating animation for dots
    gsap.to('.timeline-dot', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-16 lg:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <div className="experience-header-item">
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium mb-4">
              My Journey
            </span>
          </div>
          <div className="experience-header-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Creative <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Evolution</span>
            </h2>
          </div>
          <div className="experience-header-item">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings with basic equipment to crafting cinematic masterpieces, 
              follow my transformative journey through the lens of creativity and innovation.
            </p>
          </div>
          <div className="experience-header-item">
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full mx-auto mt-6"></div>
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          
          {/* Main Timeline Line */}
          <div className="timeline-line absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 origin-top"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} w-full lg:w-1/2`}>
                  <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]">
                    
                    {/* Year & Category */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{exp.icon}</span>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.year}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                        {exp.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-tight">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"
                          style={{ width: `${((index + 1) / experiences.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {index + 1}/{experiences.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot - Mobile Optimized */}
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="timeline-dot relative">
                    {/* Outer Ring */}
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full flex items-center justify-center shadow-lg">
                      {/* Inner Dot */}
                      <div className="w-3 h-3 bg-white dark:bg-gray-800 rounded-full"></div>
                    </div>
                    {/* Connecting Line for Mobile */}
                    {index < experiences.length - 1 && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 lg:hidden"></div>
                    )}
                  </div>
                </div>

                {/* Year Marker for Desktop */}
                <div className={`hidden lg:block flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'} ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className={`p-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="text-5xl font-black text-gray-200 dark:text-gray-700 opacity-60">
                      {exp.year}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Journey Progress Footer */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The Journey Continues...
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Every project brings new challenges and opportunities to grow. 
                I'm excited to see where this creative path leads next.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
              >
                <span>Join My Next Chapter</span>
                <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;