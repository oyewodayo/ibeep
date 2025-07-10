import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Cloud, Brain } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using modern frameworks like React, Vue, Angular, Node.js, Python, and more. From simple websites to complex enterprise solutions.',
      gradient: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native iOS and Android apps, cross-platform solutions with React Native and Flutter. User-friendly mobile experiences that engage your customers.',
      gradient: 'from-emerald-500 to-emerald-700',
      bgGradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Complete deployment infrastructure management on AWS, Azure, Google Cloud. CI/CD pipelines, monitoring, scaling, and security best practices.',
      gradient: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Machine learning models, deep learning applications, AI integration, and data analytics. Transform your business with intelligent automation.',
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 relative overflow-hidden min-h-screen"
    >
      {/* Enhanced Multi-Layer Parallax Background */}
      <div className="absolute inset-0 will-change-transform">
        
        {/* Layer 1: Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="techgrid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="none" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/>
                    <path d="M 50 0 L 50 100" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/>
                    <path d="M 0 50 L 100 50" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/>
                    <circle cx="50" cy="50" r="2" fill="rgba(59, 130, 246, 0.3)"/>
                    <circle cx="0" cy="0" r="1" fill="rgba(168, 85, 247, 0.4)"/>
                    <circle cx="100" cy="0" r="1" fill="rgba(16, 185, 129, 0.4)"/>
                    <circle cx="0" cy="100" r="1" fill="rgba(245, 101, 101, 0.4)"/>
                    <circle cx="100" cy="100" r="1" fill="rgba(251, 191, 36, 0.4)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#techgrid)"/>
              </svg>
            `)}')`,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Layer 2: Floating Code Elements */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.1}px)`
          }}
        >
         {/* Floating code snippets */}
        <div className="absolute top-20 left-10 opacity-20 dark:opacity-30">
          <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <div className="text-green-400 font-mono text-xs">
              <div>{`const app = () => {`}</div>
              <div className="ml-2">{`  return <div>Hello</div>`}</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
          <div className="absolute top-40 right-20 opacity-20 dark:opacity-30">
            <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="text-blue-400 font-mono text-xs">
                <div>function deploy() {`{`}</div>
                <div className="ml-2">build && push</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 left-1/4 opacity-20 dark:opacity-30">
            <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg shadow-lg transform rotate-3 hover:-rotate-3 transition-transform duration-500">
              <div className="text-purple-400 font-mono text-xs">
                <div>class AI {`{`}</div>
                <div className="ml-2">predict(data)</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Dynamic Geometric Shapes */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.7}px) rotate(${scrollY * 0.05}deg)`
          }}
        >
          {/* Large animated shapes */}
          <div 
            className="absolute -top-32 -left-32 w-[800px] h-[800px] opacity-10"
            style={{
              background: `conic-gradient(from ${scrollY * 0.2}deg, 
                rgba(59, 130, 246, 0.3), 
                rgba(168, 85, 247, 0.3), 
                rgba(16, 185, 129, 0.3), 
                rgba(245, 101, 101, 0.3),
                rgba(59, 130, 246, 0.3))`,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`
            }}
          />
          
          <div 
            className="absolute -bottom-32 -right-32 w-[600px] h-[600px] opacity-15"
            style={{
              background: `linear-gradient(${45 + scrollY * 0.1}deg, 
                rgba(245, 101, 101, 0.4) 0%, 
                rgba(251, 191, 36, 0.4) 50%, 
                rgba(139, 92, 246, 0.4) 100%)`,
              borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
              transform: `translate(${-scrollY * 0.4}px, ${scrollY * 0.3}px) rotate(${-scrollY * 0.08}deg)`
            }}
          />
        </div>

        {/* Layer 4: Interactive Mouse-Following Elements */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
          }}
        >
          <div className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-blue-400 opacity-30 rounded-full"
               style={{ transform: `rotate(${scrollY * 0.2}deg)` }} />
          <div className="absolute top-2/3 right-1/4 w-24 h-24 border-2 border-purple-400 opacity-25"
               style={{ 
                 transform: `rotate(${scrollY * 0.15}deg)`,
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }} />
        </div>

        {/* Layer 5: Animated Binary Rain Effect */}
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            transform: `translateY(${scrollY * 1.2}px)`
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${-20 + (scrollY * 0.5 + i * 50) % window.innerHeight}px`,
                animation: `binaryFall ${3 + (i % 3)}s linear infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Layer 6: Gradient Overlay with Dynamic Colors */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              ${135 + scrollY * 0.05}deg, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(255, 255, 255, 0.6) 50%, 
              rgba(255, 255, 255, 0.8) 100%
            )`,
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Dark mode gradient overlay */}
        <div 
          className="absolute inset-0 dark:block hidden"
          style={{
            background: `linear-gradient(
              ${135 + scrollY * 0.05}deg, 
              rgba(15, 23, 42, 0.9) 0%, 
              rgba(30, 41, 59, 0.8) 50%, 
              rgba(15, 23, 42, 0.9) 100%
            )`
          }}
        />

        {/* Layer 7: Floating Tech Icons */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        >
          {/* React Icon */}
          <div 
            className="absolute top-20 right-1/4 opacity-20"
            style={{
              transform: `rotate(${scrollY * 0.3}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`
            }}
          >
            <div className="w-16 h-16 border-4 border-cyan-400 rounded-full relative">
              <div className="absolute inset-2 border-2 border-cyan-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Node.js Icon */}
          <div 
            className="absolute bottom-40 left-1/5 opacity-20"
            style={{
              transform: `rotate(${-scrollY * 0.2}deg) scale(${1 + Math.cos(scrollY * 0.01) * 0.1})`
            }}
          >
            <div className="w-12 h-12 bg-green-400 transform rotate-45"></div>
          </div>

          {/* Cloud Icon */}
          <div 
            className="absolute top-1/2 left-10 opacity-20"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`
            }}
          >
            <div className="w-20 h-12 bg-blue-400 rounded-full relative">
              <div className="absolute -top-2 left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="absolute -top-1 right-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Layer 8: Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translate(${Math.sin(scrollY * 0.01 + i) * 20}px, ${Math.cos(scrollY * 0.01 + i) * 20}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            What We
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              Build
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            From web applications to AI solutions, we deliver battle-tested software 
            that scales with your business across every industry.
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
              <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
                
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
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Start Your Project
            <div className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45 -mt-1 ml-3"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;