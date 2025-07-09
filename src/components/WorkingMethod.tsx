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
      title: 'Clarity & Control Over Your Business',
      description: 'Get structured systems, documented processes, and performance dashboards that remove guesswork and give you full visibility into your business.',
      features: [
        'Standard operating procedures (SOPs)',
        'Financial discipline and reporting',
        'Real-time insights and tracking'
      ],
      color: 'bg-blue-600',
    },
    {
      icon: Zap,
      title: 'Operational Efficiency & Cost Savings',
      description: 'We optimize how your business runs — reducing waste, improving productivity, and cutting unnecessary expenses.',
      features: [
        'Lean process redesign',
        'Technology implementation (ERP, inventory, CRM)',
        'Supplier and logistics optimization'
      ],
      color: 'bg-emerald-600',
    },
    {
      icon: BarChart2,
      title: 'Revenue Growth & Market Expansion',
      description: 'From building your sales strategy to creating distribution channels, we help you grow faster and smarter.',
      features: [
        'Sales team setup and training',
        'Pricing and route-to-market strategies',
        'Channel development (offline & digital)'
      ],
      color: 'bg-purple-600',
    },
    {
      icon: LifeBuoy,
      title: 'Rescue & Recovery for Distressed Businesses',
      description: 'Stuck? Losing money? We step in as interim managers to stabilize and rebuild the business from the inside out.',
      features: [
        'Turnaround strategy and execution',
        'Cash flow control',
        'Temporary leadership and restructuring'
      ],
      color: 'bg-amber-600',
    },
    {
      icon: Globe,
      title: 'Local Execution for Foreign Businesses',
      description: 'Foreign companies looking to enter or expand in Nigeria get a trusted local operator to handle on-ground execution.',
      features: [
        'Local entity setup',
        'Regulatory compliance',
        'Full subsidiary management'
      ],
      color: 'bg-red-600',
    },
    {
      icon: Handshake,
      title: 'Flexible Engagement Models',
      description: 'Whether you want us to manage your business end-to-end, fix key areas, or co-own the outcome, we have a model that works.',
      features: [
        'Monthly retainer',
        'Profit-sharing model',
        'Equity partnership'
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

    // Background animation
    const bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
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
            Real Partnership. Real Results.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-4 font-light">
            When you choose iBeep Business Management, you get more than advice — you get a business partner committed to delivering measurable outcomes.
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
                    Here's what you gain
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
            What This Means for You
          </h3>
         <AnimatedTable/>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-8">
            "iBeep doesn't just solve problems. We unlock potential."
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            Let us help you run your business better — or run it for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseiBeep;