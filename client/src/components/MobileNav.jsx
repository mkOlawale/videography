// src/components/MobileNav.js
import React, { useState, useEffect } from 'react';

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', href: '#home' },
    { id: 'about', label: 'About', icon: '👤', href: '#about' },
    { id: 'portfolio', label: 'Work', icon: '📸', href: '#portfolio' },
    { id: 'experience', label: 'Journey', icon: '📈', href: '#experience' },
    { id: 'contact', label: 'Contact', icon: '💬', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
// Add this to your mobile menu useEffect
// useEffect(() => {
//   if (isMobileMenuOpen) {
//     document.body.classList.add('menu-open');
//   } else {
//     document.body.classList.remove('menu-open');
//   }
  
//   return () => {
//     document.body.classList.remove('menu-open');
//   };
// }, [isMobileMenuOpen]);

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-around p-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.href)}
            className={`relative p-3 rounded-xl transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {activeSection === item.id && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;