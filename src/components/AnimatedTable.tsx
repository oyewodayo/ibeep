import React, { useEffect, useRef, useState } from 'react';

const AnimatedBubble = ({ index, delay }) => {
  const bubbleRef = useRef(null);
  
  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    const animateBubble = () => {
      const duration = 15000 + Math.random() * 10000; // 15-25 seconds
      const startX = Math.random() * window.innerWidth;
      const endX = startX + (Math.random() - 0.5) * 200;
      const size = 20 + Math.random() * 80; // 20-100px
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${startX}px`;
      bubble.style.bottom = '-100px';
      bubble.style.opacity = '0';
      
      // Animate upward with slight horizontal drift
      bubble.animate([
        { 
          transform: 'translateY(0) scale(1)', 
          opacity: '0',
          left: `${startX}px`
        },
        { 
          transform: 'translateY(-50vh) scale(1.1)', 
          opacity: '0.6',
          left: `${startX + (endX - startX) * 0.3}px`
        },
        { 
          transform: 'translateY(-100vh) scale(0.8)', 
          opacity: '0',
          left: `${endX}px`
        }
      ], {
        duration: duration,
        easing: 'linear',
        iterations: 1
      }).onfinish = () => {
        setTimeout(animateBubble, Math.random() * 3000); // Random delay before next bubble
      };
    };

    const initialDelay = delay + Math.random() * 2000;
    setTimeout(animateBubble, initialDelay);
  }, [delay]);

  return (
    <div
      ref={bubbleRef}
      className="absolute pointer-events-none rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-pink-400/20 backdrop-blur-sm border border-white/10"
      style={{
        filter: 'blur(0.5px)',
        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(59,130,246,0.1)'
      }}
    />
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

const AnimatedChallengeCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [bubbles, setBubbles] = useState([]);

  const cardData = [
    {
      challenge: 'No technical team',
      solution: 'Dedicated development experts',
      icon: '👥',
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'from-blue-600 to-indigo-700'
    },
    {
      challenge: 'Outdated technology',
      solution: 'Modern, scalable solutions',
      icon: '🚀',
      color: 'from-emerald-500 to-teal-600',
      hoverColor: 'from-emerald-600 to-teal-700'
    },
    {
      challenge: 'Slow development cycles',
      solution: 'Agile, rapid delivery',
      icon: '⚡',
      color: 'from-purple-500 to-violet-600',
      hoverColor: 'from-purple-600 to-violet-700'
    },
    {
      challenge: 'High development costs',
      solution: 'Cost-effective solutions',
      icon: '💰',
      color: 'from-amber-500 to-orange-600',
      hoverColor: 'from-amber-600 to-orange-700'
    },
    {
      challenge: 'Poor code quality',
      solution: 'Battle-tested, clean code',
      icon: '🔧',
      color: 'from-rose-500 to-pink-600',
      hoverColor: 'from-rose-600 to-pink-700'
    },
    {
      challenge: 'Limited technical expertise',
      solution: 'Full-stack development team',
      icon: '🎯',
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'from-cyan-600 to-blue-700'
    }
  ];

  useEffect(() => {
    // Initialize bubbles
    const bubbleCount = 12;
    const initialBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      delay: i * 1000
    }));
    setBubbles(initialBubbles);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="relative py-16 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 min-h-screen overflow-hidden" ref={containerRef}>
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <AnimatedBubble key={bubble.id} index={bubble.id} delay={bubble.delay} />
        ))}
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <span className="text-2xl">💻</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200 mb-6">
            Your Challenges, Our Code
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how <span className="font-semibold text-blue-600 dark:text-blue-400">iBeep</span> transforms common development challenges into powerful software solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((data, index) => (
            <div
              key={index}
              ref={el => {
                if (el && !cardRefs.current.includes(el)) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${hoveredCard === index ? 'scale-105 -translate-y-2' : 'hover:scale-102'}
                ${hoveredCard !== null && hoveredCard !== index ? 'opacity-75 scale-95' : ''}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              role="article"
              tabIndex={0}
              aria-label={`Challenge: ${data.challenge}, Solution: ${data.solution}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hoveredCard === index ? data.hoverColor : data.color} opacity-10 transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-white/30 dark:border-gray-700/30 p-8 h-full flex flex-col justify-between min-h-[280px] shadow-xl">
                {/* Animated Background Pattern */}
                <div className={`absolute inset-0 opacity-5 transition-all duration-700 ${hoveredCard === index ? 'scale-110 rotate-2' : 'scale-100'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-current to-transparent" />
                </div>

                {/* Icon */}
                <div className={`text-5xl mb-6 transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}`}>
                  {data.icon}
                </div>

                {/* Challenge Text */}
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300 ${hoveredCard === index ? 'text-gray-700 dark:text-white' : ''}`}>
                    {data.challenge}
                  </h3>

                  {/* Solution - Always visible but with enhanced animation on hover */}
                  <div className={`transition-all duration-500 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-180' : 'scale-100'}`}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className={`text-sm font-medium bg-gradient-to-r ${data.color} bg-clip-text text-transparent transition-all duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`}>
                        {data.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute bottom-4 right-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>

                {/* Shimmer Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-1000 ${hoveredCard === index ? 'translate-x-full' : '-translate-x-full'}`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
         
          <a href='#contact' className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Start Your Development Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChallengeCards;