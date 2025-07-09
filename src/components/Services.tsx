import React, { useEffect, useRef, useState } from 'react';
import { Building2, Globe, Settings, Users } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  const services = [
    {
      icon: Building2,
      title: 'Business Management',
      description: 'Comprehensive operational oversight and strategic execution to optimize your business performance and drive sustainable growth.',
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
    },
    {
      icon: Globe,
      title: 'Nigerian Market Entry',
      description: 'Navigate the complexities of the Nigerian market with expert guidance on regulations, partnerships, and local business practices.',
      gradient: 'from-emerald-500 to-emerald-700',
      bgGradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900',
    },
    {
      icon: Settings,
      title: 'OEM Representation',
      description: 'Local market execution partner for global manufacturers. Licensing, compliance, sales, customer service. Tailored to energy, tech, FMCG, and industrial sectors.',
      gradient: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
    },
    {
      icon: Users,
      title: 'Advisory + Execution',
      description: 'Beyond consultation - we roll up our sleeves and work alongside your team to implement strategies and achieve results.',
      gradient: 'from-orange-500 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
    },
  ];

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

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 relative overflow-hidden min-h-screen"
    >
      {/* Parallax Background Image */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.7}px) scale(1.1)`,
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexgrid" width="200" height="173.2" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 150 43.3 L 150 129.9 L 100 173.2 L 50 129.9 L 50 43.3 Z" 
                        fill="none" stroke="rgba(59, 130, 246, 0.4)" stroke-width="2"/>
                  <circle cx="100" cy="86.6" r="8" fill="rgba(168, 85, 247, 0.3)"/>
                  <circle cx="50" cy="43.3" r="4" fill="rgba(16, 185, 129, 0.4)"/>
                  <circle cx="150" cy="43.3" r="4" fill="rgba(245, 101, 101, 0.4)"/>
                  <circle cx="50" cy="129.9" r="4" fill="rgba(251, 191, 36, 0.4)"/>
                  <circle cx="150" cy="129.9" r="4" fill="rgba(139, 92, 246, 0.4)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexgrid)"/>
            </svg>
          `)}')`,
          backgroundSize: '200px 173px'
        }}
      >
        {/* Reduced gradient overlay for more visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-white/60 to-slate-50/70 dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80"></div>
        
        {/* Large dramatic geometric shapes */}
        <div 
          className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: `translate(${scrollY * 0.4}px, ${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        
        <div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-25"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 101, 101, 0.4) 0%, rgba(251, 191, 36, 0.4) 50%, rgba(139, 92, 246, 0.4) 100%)',
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
            transform: `translate(${-scrollY * 0.5}px, ${scrollY * 0.4}px) rotate(${-scrollY * 0.08}deg)`
          }}
        ></div>

        {/* Floating tech elements */}
        <div 
          className="absolute top-1/3 left-1/4 w-20 h-20 border-4 border-blue-400 opacity-60"
          style={{
            transform: `translate(${scrollY * 0.6}px, ${scrollY * 0.3}px) rotate(${scrollY * 0.2}deg)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        ></div>
        
        <div 
          className="absolute top-1/2 right-1/3 w-16 h-16 border-3 border-purple-400 opacity-50"
          style={{
            transform: `translate(${-scrollY * 0.4}px, ${scrollY * 0.5}px) rotate(${scrollY * 0.15}deg)`
          }}
        ></div>
        
        <div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 border-4 border-emerald-400 rounded-full opacity-40"
          style={{
            transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.6}px)`
          }}
        ></div>
      </div>
      {/* Animated foreground elements with stronger movement */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.15}px) scale(${1 + scrollY * 0.0005})`
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-scrollY * 0.25}px, ${scrollY * 0.18}px) scale(${1 + scrollY * 0.0003})`
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-orange-500 to-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${scrollY * 0.12}px, ${scrollY * 0.1}px) scale(${1 + scrollY * 0.0004})`
          }}
        ></div>
        
        {/* Additional moving tech patterns */}
        <div 
          className="absolute top-10 right-1/4 opacity-30"
          style={{
            transform: `translate(${scrollY * 0.8}px, ${scrollY * 0.6}px)`
          }}
        >
          <div className="w-32 h-32 border-2 border-dashed border-blue-400 rounded-lg transform rotate-45"></div>
        </div>
        
        <div 
          className="absolute bottom-20 right-10 opacity-25"
          style={{
            transform: `translate(${-scrollY * 0.7}px, ${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-purple-400 rounded-full"
              style={{
                top: `${i * 8}px`,
                left: `${i * 12}px`,
                opacity: 0.6 - (i * 0.1)
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mb-8">
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            What We
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              Deliver
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            We provide comprehensive business management services that bridge the gap 
            between strategy and execution, turning vision into measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
                
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
                      <service.icon className="w-8 h-8 text-white" />
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
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-current opacity-30 rounded-full"
                        style={{
                          top: `${20 + (i * 12)}%`,
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
            Ready to transform your business operations?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <div className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45 -mt-1 ml-3"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Services;