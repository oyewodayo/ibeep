import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Cloud, Brain, Users, BarChart2, ChevronRight } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';
import { services } from '../data/services';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);
  const [imageOffset, setImageOffset] = useState(0);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Enhanced parallax scroll effect with multiple layers
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
    };

    // Mouse movement tracking for interactive effects
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Auto-scrolling image animation
    let animationFrame;
    let lastTimestamp = 0;
    const scrollSpeed = 0.2; // pixels per frame

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Only update position if the section is visible
      if (sectionRef.current && isElementInViewport(sectionRef.current)) {
        setImageOffset(prev => (prev + scrollSpeed * (delta / 16)) % 2000); // Modulo to loop
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Helper function to check if element is in viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 relative overflow-hidden min-h-screen"
    >
     <ParallaxBackground intensity={0.8} enableMouseParallax={false} scrollMultiplier={1.2}/>

      {/* Content */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl space-x-3 md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Our Core
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              Expertise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            From technical development to business growth services, we provide end-to-end solutions 
            to help your organization thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating geometric shapes */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-20 h-20 border-2 border-current rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                  <div className="w-16 h-16 border border-current transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {service.icon.type === 'lucide' ? (
                        <div className={`...`}>
                          <service.icon.icon className="w-8 h-8 text-white" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img 
                            src={service.icon.src} 
                            alt={service.icon.alt || service.title}
                            width={32}
                            height={32}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white mb-6 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center mt-8 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-all duration-300">
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Learn more
                    </span>
                    <div className="ml-2 w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                      <div className="w-6 h-0.5 bg-current transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Interactive particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-current opacity-30 rounded-full"
                        style={{
                          top: `${20 + (i * 10)}%`,
                          right: `${10 + (i * 8)}%`,
                          animation: `float ${2 + (i * 0.3)}s ease-in-out infinite`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-800 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            Ready to build your next software solution?
          </p>
          <a
            href="/start-a-project"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Start Your Project
            <ChevronRight/>
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Services;