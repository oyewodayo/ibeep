import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRefs = useRef([]); // To animate each main section
  const benefitRefs = useRef([]); // To animate benefit items
  const howItWorksRefs = useRef([]); // To animate How It Works steps

  // Data for "What We Do" section
 const whatWeDoItems = [
    {
      title: 'Process Audit & Redesign',
      description: 'We start by evaluating how your business runs — from procurement and production to delivery and administration. We map your workflows, identify inefficiencies, and redesign for speed, simplicity, and control.',
      icon: '✅'
    },
    {
      title: 'Cost Optimization',
      description: 'We cut unnecessary expenses through supplier renegotiation, logistics efficiency, utility management, and lean workforce planning — without compromising quality.',
      icon: '💰'
    },
    {
      title: 'System Implementation',
      description: [
        'We digitize your operations by deploying fit-for-purpose tools like:',
        'Inventory and sales tracking systems',
        'ERP or accounting software',
        'CRM tools for customer management',
        'HR systems for attendance and payroll',
        'We also train your team to use them effectively.'
      ],
      icon: '⚙️'
    },
    {
      title: 'Performance Management',
      description: [
        'We design and implement simple KPI systems that help you:',
        'Track what matters',
        'Hold staff accountable',
        'Drive continuous improvement'
      ],
      icon: '📈'
    },
  ];

  // Data for "How It Works" section
  const howItWorksSteps = [
    'We Audit – Deep-dive into your operations and cost drivers',
    'We Redesign – Propose a simplified, efficient operating model',
    'We Implement – Help you execute process changes and install systems',
    'We Monitor – Track results and continuously improve performance',
  ];

  // Data for "What You Get" section
  const whatYouGetBenefits = [
    { benefit: 'Reduced Costs', outcome: 'Lower operational expenses, better margins', icon: '📉' },
    { benefit: 'Faster Execution', outcome: 'Shorter turnaround times and improved delivery', icon: '⏱' },
    { benefit: 'Data-Driven Decisions', outcome: 'Real-time visibility into performance', icon: '📊' },
    { benefit: 'Scalable Systems', outcome: 'Processes that grow with your business', icon: '🔄' },
    { benefit: 'Empowered Staff', outcome: 'Clear roles, accountability, and better morale', icon: '🤝' },
  ];

  // Data for "Who This Is For" section
  const whoThisIsForItems = [
    'FMCG companies with bottlenecks in production or distribution',
    'Retail & wholesale businesses with poor inventory control',
    'Services companies needing structure, speed, and visibility',
    'Owners overwhelmed by day-to-day operations',
  ];

  useEffect(() => {
    // Animation for main sections
    sectionRefs.current.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // When 80% of the section is in view
            toggleActions: 'play none none none', // Play once on enter
          }
        }
      );
    });

    // Staggered animation for "What You Get" benefits
    gsap.fromTo(benefitRefs.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: benefitRefs.current[0] || null, // Trigger based on the first item
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Staggered animation for "How It Works" steps
    gsap.fromTo(howItWorksRefs.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: howItWorksRefs.current[0] || null,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );


    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Helper to add refs to arrays
  const addToSectionRefs = (el) => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el); };
  const addToBenefitRefs = (el) => { if (el && !benefitRefs.current.includes(el)) benefitRefs.current.push(el); };
  const addToHowItWorksRefs = (el) => { if (el && !howItWorksRefs.current.includes(el)) howItWorksRefs.current.push(el); };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Introduction Section */}
        <div ref={addToSectionRefs} className="text-center mb-16 fade-in">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            ⚙ Business Improvement & Operational Efficiency
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            “We don’t just make things work — <br className="hidden sm:inline" />we make them work better.”
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At iBeep, we help businesses unlock higher performance by redesigning the way they operate — end to end. Whether you're battling high costs, staff inefficiencies, or inconsistent delivery, we step in to streamline operations, reduce waste, and improve output.
          </p>
        </div>

        {/* What We Do Section */}
        <div ref={addToSectionRefs} className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🔍 What We Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whatWeDoItems.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                </div>
                {Array.isArray(item.description) ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* How It Works Section */}
        <div ref={addToSectionRefs} className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🧩 How It Works
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-200 dark:bg-blue-800 h-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  ref={addToHowItWorksRefs}
                  className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}
                >
                  <div className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg flex-shrink-0
                                    ${index % 2 === 0 ? 'md:order-2 md:ml-4' : 'md:order-1 md:mr-4'}`}>
                    {index + 1}
                  </div>
                  <div className={`flex-1 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300
                                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div ref={addToSectionRefs} className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🚀 What You Get
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-50 dark:bg-blue-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                    Benefit
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                    Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {whatYouGetBenefits.map((item, index) => (
                  <tr key={index} ref={addToBenefitRefs} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex items-center">
                      <span className="text-xl mr-2">{item.icon}</span> {item.benefit}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                      {item.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Who This Is For Section */}
        <div ref={addToSectionRefs} className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            👥 Who This Is For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {whoThisIsForItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div ref={addToSectionRefs} className="text-center fade-in">
          <p className="mt-8 text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 max-w-4xl mx-auto leading-relaxed">
            Whether you're looking to cut costs, scale up, or simply gain control — iBeep gives you the tools, structure, and leadership to make it happen.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;