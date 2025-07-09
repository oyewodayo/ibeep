import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides - replace with your actual images
  const slides = [
    {
      id: 0,
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Your existing animated graphics */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-80 h-80 border-2 border-blue-200 dark:border-blue-800 rounded-full opacity-30"
              style={{ animation: 'spin 20s linear infinite' }}
            ></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-64 h-64 border border-slate-300 dark:border-slate-600 rounded-full opacity-20"
              style={{ animation: 'spin 15s linear infinite reverse' }}
            ></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-48 h-48 border border-blue-300 dark:border-blue-700 rounded-full opacity-40"
              style={{ animation: 'spin 12s linear infinite' }}
            ></div>
          </div>
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full opacity-90"
                style={{
                  top: `${20 + (i * 8)}%`,
                  left: `${15 + (i * 9)}%`,
                  animation: `float ${3 + (i * 0.5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
          <div className="absolute top-16 right-16">
            <div 
              className="w-8 h-8 border-2 border-slate-400 dark:border-slate-500 rotate-45 opacity-40"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            ></div>
          </div>
          <div className="absolute bottom-20 left-12">
            <div 
              className="w-6 h-6 bg-blue-400 dark:bg-blue-600 opacity-50"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                animation: 'bounce 3s ease-in-out infinite'
              }}
            ></div>
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div 
              className="w-20 h-20 border-3 border-blue-600 dark:border-blue-400 opacity-70"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                animation: 'pulse 4s ease-in-out infinite'
              }}
            ></div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <line 
                x1="200" y1="100" x2="200" y2="300" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-slate-400 dark:text-slate-600"
                style={{ animation: 'drawLine 3s ease-in-out infinite alternate' }}
              />
              <line 
                x1="100" y1="200" x2="300" y2="200" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-slate-400 dark:text-slate-600"
                style={{
                  animation: 'drawLine 3s ease-in-out infinite alternate',
                  animationDelay: '1s'
                }}
              />
            </svg>
          </div>
        </div>
      ),
      alt: "Animated business visualization"
    },
    {
      id: 1,
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/images/1.jpg" 
            alt="Team collaboration"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
          />
          <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg"></div>
          <div className="relative z-10 p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">Collaborative Approach</h3>
            <p className="text-blue-100 font-light">We work hand-in-hand with your team to implement solutions</p>
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
            alt="Business growth chart"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm rounded-lg"></div>
          <div className="relative z-10 p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">Measurable Results</h3>
            <p className="text-slate-100 font-light">Trackable metrics to demonstrate your business growth</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
                  Business Management Excellence
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                <span className="block text-slate-900 dark:text-white mb-2">Managing the</span>
                <span className="block text-blue-600 dark:text-blue-400 font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">business.</span>
                <span className="block text-slate-900 dark:text-white mb-2">Empowering the</span>
                <span className="block text-blue-600 dark:text-blue-400 font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">founder.</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                We partner with entrepreneurs and business owners to navigate complex markets, 
                optimize operations, and unlock sustainable growth through strategic management.
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
                  Let's Manage Together
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  Learn More
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
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
          <div className={`relative h-96 lg:h-[600px] transition-all duration-1200 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
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