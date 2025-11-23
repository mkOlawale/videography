// src/sections/Portfolio.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Portfolio = () => {
  const sectionRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Music Video Project",
  //     category: "music",
  //     type: "video",
  //     thumbnail: "/api/placeholder/600/400",
  //     videoUrl: "https://youtu.be/qkHGCZyOJW8",
  //     description: "Cinematic music video showcasing emotional storytelling"
  //   },
  //   {
  //     id: 2,
  //     title: "Portrait Series",
  //     category: "portraits",
  //     type: "photo",
  //     thumbnail: "/api/placeholder/600/400",
  //     description: "Emotional portrait photography capturing raw moments"
  //   },
  //   {
  //     id: 3,
  //     title: "Travel Cinematic",
  //     category: "travel",
  //     type: "video", 
  //     thumbnail: "/api/placeholder/600/400",
  //     videoUrl: "https://youtu.be/GDOfMczkhzc",
  //     description: "Travel documentary with cinematic visuals"
  //   },
  //   {
  //     id: 4,
  //     title: "Event Coverage",
  //     category: "events",
  //     type: "photo",
  //     thumbnail: "/api/placeholder/600/400",
  //     description: "Candid event photography capturing authentic moments"
  //   },
  //   {
  //     id: 5,
  //     title: "Product Visuals",
  //     category: "product",
  //     type: "photo",
  //     thumbnail: "/api/placeholder/600/400",
  //     description: "Professional product photography with creative lighting"
  //   },
  //   {
  //     id: 6,
  //     title: "Lifestyle Shoot",
  //     category: "lifestyle",
  //     type: "photo",
  //     thumbnail: "/api/placeholder/600/400",
  //     description: "Lifestyle photography telling everyday stories"
  //   }
  // ];

  // Updated Portfolio section with real image links
const projects = [
  {
    id: 1,
    title: "Music Video Project",
    category: "music",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "https://youtu.be/qkHGCZyOJW8",
    description: "Cinematic music video showcasing emotional storytelling"
  },
  {
    id: 2,
    title: "Concert Performance",
    category: "music",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1571266028243-43cfef0da8a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "https://youtu.be/GDOfMczkhzc",
    description: "Live concert footage with dynamic lighting and energy"
  },
  {
    id: 3,
    title: "Emotional Portraits",
    category: "portraits",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    description: "Emotional portrait photography capturing raw moments"
  },
  {
    id: 4,
    title: "Studio Portraits",
    category: "portraits",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Professional studio portrait session with creative lighting"
  },
  {
    id: 5,
    title: "Mountain Journey",
    category: "travel",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1464822759849-deb9df5f46c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Travel documentary with cinematic mountain visuals"
  },
  {
    id: 6,
    title: "Cityscape Cinematic",
    category: "travel",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Urban cinematic footage showcasing city life and architecture"
  },
  {
    id: 7,
    title: "Wedding Celebration",
    category: "events",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Candid wedding photography capturing love and celebration"
  },
  {
    id: 8,
    title: "Corporate Event",
    category: "events",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Professional corporate event coverage and candid moments"
  },
  {
    id: 9,
    title: "Luxury Product Shoot",
    category: "product",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    description: "High-end product photography with creative composition"
  },
  {
    id: 10,
    title: "Fashion Product",
    category: "product",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Fashion product photography showcasing details and texture"
  },
  {
    id: 11,
    title: "Urban Lifestyle",
    category: "lifestyle",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Lifestyle photography telling everyday urban stories"
  },
  {
    id: 12,
    title: "Adventure Lifestyle",
    category: "lifestyle",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Outdoor adventure lifestyle shots in natural environments"
  }
];
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'music', name: 'Music Videos' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'travel', name: 'Travel' },
    { id: 'events', name: 'Events' },
    { id: 'product', name: 'Product' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [filteredProjects]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Work
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  {/* Project thumbnail */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {project.type === 'video' ? '🎥 Video Project' : '📷 Photo Project'}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center">
                      <div className="text-2xl mb-2">
                        {project.type === 'video' ? '▶️' : '👁️'}
                      </div>
                      <p className="font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              ✕
            </button>
            
            <div className="p-8 overflow-y-auto max-h-[90vh]">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                {selectedProject.type === 'video' ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Video Project - {selectedProject.videoUrl}
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-gray-600 dark:text-gray-300">Photo Gallery</p>
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {selectedProject.description}
              </p>
              
              {selectedProject.videoUrl && (
                <div className="mt-6">
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;