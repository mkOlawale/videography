// src/components/YouTubeShowcase.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const YouTubeShowcase = () => {
  const sectionRef = useRef();
  const containerRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample YouTube video data - replace with your actual videos
  const youtubeVideos = [
    {
      id: 1,
      title: "Cinematic Wedding Film",
      description: "A beautiful wedding story captured with cinematic techniques and emotional storytelling",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
      views: "125K",
      duration: "3:45",
      category: "Wedding",
      year: "2024"
    },
    {
      id: 2,
      title: "Music Video - 'Eternal Dreams'",
      description: "Official music video featuring stunning visuals and creative cinematography",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      youtubeId: "dQw4w9WgXcQ",
      views: "89K",
      duration: "4:22",
      category: "Music Video",
      year: "2024"
    },
    {
      id: 3,
      title: "Brand Commercial - Tech Product",
      description: "Professional product showcase with dynamic lighting and smooth camera movements",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      youtubeId: "dQw4w9WgXcQ",
      views: "67K",
      duration: "2:15",
      category: "Commercial",
      year: "2023"
    },
    {
      id: 4,
      title: "Travel Documentary - Mountains",
      description: "Breathtaking landscape cinematography from remote mountain locations",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      youtubeId: "dQw4w9WgXcQ",
      views: "142K",
      duration: "8:30",
      category: "Documentary",
      year: "2023"
    },
    {
      id: 5,
      title: "Fashion Film - Urban Style",
      description: "Urban fashion story with dynamic editing and color grading",
      thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      youtubeId: "dQw4w9WgXcQ",
      views: "78K",
      duration: "2:45",
      category: "Fashion",
      year: "2024"
    }
  ];

  useEffect(() => {
    // Section header animation
    gsap.fromTo('.showcase-header-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Video cards animation
    gsap.fromTo('.video-card',
      { 
        opacity: 0, 
        y: 80,
        scale: 0.9,
        rotationY: 10
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating animation for cards
    gsap.to('.video-card', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "sine.inOut"
    });

  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="showcase-header-item">
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium mb-4">
              Video Portfolio
            </span>
          </div>
          <div className="showcase-header-item">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Visual <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">Storytelling</span> Showcase
            </h2>
          </div>
          <div className="showcase-header-item">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my finest work in cinematography, editing, and visual storytelling. 
              Each project represents a unique creative challenge and solution.
            </p>
          </div>
          <div className="showcase-header-item">
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full mx-auto mt-6"></div>
          </div>
        </div>

        {/* Video Showcase Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {youtubeVideos.map((video, index) => (
            <div
              key={video.id}
              className="video-card group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => openModal(video)}
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <div className="w-0 h-0 border-l-[12px] border-l-gray-900 dark:border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {video.category}
                    </span>
                    <span className="px-2 py-1 bg-black/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <span>👁️ {video.views}</span>
                    <span>•</span>
                    <span>{video.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                
                {/* CTA Button */}
                <div className="mt-4 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group/btn">
                    <span className="text-sm font-medium">Watch Video</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-lg">🎬</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create stunning visual content that tells your unique story 
              and captivates your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center"
              >
                <span>Start a Project</span>
                <span className="text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button 
                onClick={() => window.open('https://youtube.com/your-channel', '_blank')}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center"
              >
                <span>View More on YouTube</span>
                <span className="text-xl">📺</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              ×
            </button>
            
            {/* Video Container */}
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>👁️ {selectedVideo.views} views</span>
                <span>•</span>
                <span>⏱️ {selectedVideo.duration}</span>
                <span>•</span>
                <span>📅 {selectedVideo.year}</span>
                <span>•</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                  {selectedVideo.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeShowcase;