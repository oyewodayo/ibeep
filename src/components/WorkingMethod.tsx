import React, { useEffect, useRef } from 'react';
import { Target, BarChart2, Zap, LifeBuoy, Globe, Handshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTable from './AnimatedTable';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyChooseiBeep = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const benefits = [
    {
      icon: Target,
      title: 'Technical Excellence & Best Practices',
      description: 'Get clean, maintainable code following industry standards, comprehensive testing, and documentation that ensures long-term success.',
      features: [
        'Clean architecture and design patterns',
        'Comprehensive testing and CI/CD',
        'Detailed documentation and code reviews'
      ],
      color: 'bg-blue-600',
    },
    {
      icon: Zap,
      title: 'Rapid Development & Deployment',
      description: 'We leverage modern frameworks and agile methodologies to deliver high-quality software faster without compromising quality.',
      features: [
        'Agile development methodology',
        'Modern tech stack and frameworks',
        'Automated deployment pipelines'
      ],
      color: 'bg-emerald-600',
    },
    {
      icon: BarChart2,
      title: 'Scalable & Future-Ready Solutions',
      description: 'Build applications that grow with your business using cloud-native architectures and scalable technologies.',
      features: [
        'Cloud-native architecture',
        'Microservices and API-first design',
        'Performance optimization and monitoring'
      ],
      color: 'bg-purple-600',
    },
    {
      icon: LifeBuoy,
      title: 'Dedicated Technical Support',
      description: 'Get ongoing support, maintenance, and updates to keep your applications running smoothly and securely.',
      features: [
        '24/7 monitoring and support',
        'Regular security updates',
        'Performance optimization and bug fixes'
      ],
      color: 'bg-amber-600',
    },
    {
      icon: Globe,
      title: 'Cross-Platform & Multi-Technology',
      description: 'We work with your preferred tech stack or recommend the best technologies for your specific use case and requirements.',
      features: [
        'Multiple programming languages',
        'Cross-platform development',
        'Technology consulting and recommendations'
      ],
      color: 'bg-red-600',
    },
    {
      icon: Handshake,
      title: 'Flexible Engagement Models',
      description: 'Choose from various partnership models that fit your budget, timeline, and project requirements.',
      features: [
        'Dedicated development team',
        'Project-based development',
        'Technical consulting and mentorship'
      ],
      color: 'bg-indigo-600',
    },
  ];

  useEffect(() => {
    // Animation for heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });

    // Animation for cards
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        },
      });

      // Hover animation
      const hoverTL = gsap.timeline({ paused: true });
      hoverTL.to(card.querySelector('.card-icon'), {
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
      });
      hoverTL.to(card.querySelector('.card-content'), {
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
      }, '<');

      card.addEventListener('mouseenter', () => hoverTL.play());
      card.addEventListener('mouseleave', () => hoverTL.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section 
      id="why-choose-iBeep" 
      ref={sectionRef}
      className="py-24 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Why Choose <span className="font-medium text-blue-600 dark:text-blue-400">iBeep</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Real Partnership. Real Code. Real Results.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-4 font-light">
            When you choose iBeep Software Development, you get more than code — you get a technical partner committed to delivering exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={addToCardRefs}
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group cursor-default transform hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="text-center mb-8 flex flex-col items-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-xl mb-6 transition-transform duration-300 card-icon`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="card-content">
                  <h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                    {benefit.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-4">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    What you get
                  </h4>
                </div>
                {benefit.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <div className={`w-2 h-2 ${benefit.color} rounded-full mr-3 flex-shrink-0`}></div>
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-medium text-center text-slate-900 dark:text-white mb-8">
            What This Means for Your Business
          </h3>
         <AnimatedTable/>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-8">
            "iBeep doesn't just write code. We build solutions that transform businesses."
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            Let us be your technical team while you focus on growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseiBeep;