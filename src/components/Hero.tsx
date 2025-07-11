import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Define the 5 colors you want to cycle through
  const colorPalette = [
    'from-blue-800 to-blue-600',    // Blue gradient
    'from-purple-800 to-indigo-600', // Purple gradient
    'from-green-800 to-teal-600',    // Green gradient
    'from-red-800 to-orange-600',    // Red gradient
    'from-yellow-600 to-amber-500'   // Yellow gradient
  ];

  // Sample slides - replace with your actual images
  const slides = [
    {
      id: 0,
      content: (
        <div className={`relative w-full bg-gradient-to-br ${colorPalette[currentColorIndex]} h-full flex items-center justify-center overflow-hidden transition-colors duration-300`}>
          {/* Rest of your slide 0 content remains the same */}
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `floatParticle ${8 + Math.random() * 10}s ease-in-out infinite both`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.6,
                  transform: `scale(${0.5 + Math.random()})`
                }}
              />
            ))}
          </div>

          {/* Main orbiting circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-100 h-100 border-2 border-blue-300 rounded-full opacity-30"
              style={{ 
                animation: 'orbit 25s linear infinite',
                boxShadow: '0 0 30px rgba(100, 200, 255, 0.2)'
              }}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-90 h-90 border border-blue-200 rounded-full opacity-40"
              style={{ 
                animation: 'orbitReverse 20s linear infinite',
                boxShadow: 'inset 0 0 20px rgba(100, 200, 255, 0.1)'
              }}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-48 h-48 border border-blue-100 rounded-full opacity-50"
              style={{ 
                animation: 'orbit 15s linear infinite',
                boxShadow: '0 0 40px rgba(100, 200, 255, 0.3)'
              }}
            />
          </div>

          {/* Animated hexagon core */}
          <div className="relative z-10 flex items-center justify-center">
            <div 
              className="w-24 h-24 bg-blue-500/30 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                animation: 'pulseGlow 4s ease-in-out infinite',
                boxShadow: '0 0 0 2px rgba(100, 200, 255, 0.5), inset 0 0 20px rgba(100, 200, 255, 0.3)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </div>
          </div>

          {/* Floating tech elements */}
          <div className="absolute top-1/4 right-1/4">
            <div 
              className="w-10 h-10 bg-blue-400/30 backdrop-blur-sm rounded-lg rotate-45"
              style={{
                animation: 'floatElement 8s ease-in-out infinite',
                boxShadow: '0 0 15px rgba(100, 200, 255, 0.3)'
              }}
            />
          </div>
          
          <div className="absolute bottom-1/3 left-1/4">
            <div 
              className="w-8 h-8 bg-blue-300/30 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                animation: 'floatElement 6s ease-in-out infinite reverse',
                boxShadow: '0 0 10px rgba(100, 200, 255, 0.2)'
              }}
            />
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <line 
              x1="50%" y1="50%" x2="70%" y2="30%" 
              stroke="rgba(100, 200, 255, 0.3)" 
              strokeWidth="1"
              strokeDasharray="5,5"
              style={{ animation: 'drawConnection 6s linear infinite' }}
            />
            <line 
              x1="50%" y1="50%" x2="30%" y2="70%" 
              stroke="rgba(100, 200, 255, 0.3)" 
              strokeWidth="1"
              strokeDasharray="5,5"
              style={{ 
                animation: 'drawConnection 6s linear infinite',
                animationDelay: '1.5s'
              }}
            />
          </svg>
        </div>
      ),
      alt: "Animated software development visualization"
    },
    // ... rest of your slides remain unchanged
    {
      id: 1,
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/images/1.jpg" 
            alt="Development team collaboration"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
          />
          <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg"></div>
          <div className="relative z-10 p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">Expert Development Team</h3>
            <p className="text-blue-100 font-light">We work as your dedicated technical team to build exceptional software</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/images/2.jpg" 
            alt="Code quality and performance"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm rounded-lg"></div>
          <div className="relative z-10 p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">Battle-Tested Solutions</h3>
            <p className="text-slate-100 font-light">First-class applications built with proven technologies and best practices</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Color cycling interval (fast changes - every 200ms)
    const colorInterval = setInterval(() => {
      if (currentSlide === 0) { // Only cycle colors for slide 0
        setCurrentColorIndex((prev) => (prev + 1) % colorPalette.length);
      }
    }, 200);
    
    // Slide changing interval (slower - every 10 seconds)
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    
    return () => {
      clearInterval(colorInterval);
      clearInterval(slideInterval);
    };
  }, [currentSlide]); // Add currentSlide to dependencies

  // Reset color index when slide changes back to 0
  useEffect(() => {
    if (currentSlide === 0) {
      setCurrentColorIndex(0);
    }
  }, [currentSlide]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ... rest of your component remains the same
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
           <div className="text-center lg:text-left">
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="mb-8 mt-5">
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                  Software Development. Excellent Mentorship
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                <span className="block text-slate-900 dark:text-white mb-2">Building the</span>
                <span className="block text-blue-600 dark:text-blue-400 font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">software.</span>
                <span className="block text-slate-900 dark:text-white mb-2">Empowering the</span>
                <span className="block text-blue-600 dark:text-blue-400 font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">business.</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                We build first-class, battle-tested applications for every sector. 
                Let us be your technical team while you focus on growing your business.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  Mentorship
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </div>

            {/* Scroll indicator - only visible on mobile */}
            <div className={`lg:hidden transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                onClick={scrollToServices}
                className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Scroll to services"
              >
                <ChevronDown className="w-8 h-8 mx-auto" />
              </button>
            </div>
          </div>
          {/* Right Column - Animated Slider */}
          <div className={`relative h-96 lg:h-[600px] transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            {/* Slide container */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {slide.content}
                </div>
              ))}
              
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes drawLine {
          0% { stroke-dasharray: 0 200; }
          100% { stroke-dasharray: 200 0; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;