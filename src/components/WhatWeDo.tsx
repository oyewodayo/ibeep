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
      title: 'Custom Software Development',
      description: 'We build tailored applications from scratch using modern technologies. From web apps to mobile solutions, we create software that perfectly fits your business needs.',
      icon: '💻'
    },
    {
      title: 'Technology Consulting',
      description: 'Not sure which tech stack to choose? We analyze your requirements and recommend the best technologies, frameworks, and architectures for your project.',
      icon: '🔍'
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description: [
        'We handle your entire deployment infrastructure:',
        'Cloud setup and configuration (AWS, Azure, GCP)',
        'CI/CD pipeline implementation',
        'Monitoring, scaling, and security',
        'Database management and optimization'
      ],
      icon: '☁️'
    },
    {
      title: 'Mentorship & Training',
      description: [
        'We offer comprehensive mentorship programs for aspiring developers in:',
        'AI/ML and Deep Learning',
        'Cloud technologies and DevOps',
        'Mobile and Web development',
        'Software engineering best practices'
      ],
      icon: '🎓'
    },
  ];

  // Data for "How It Works" section
  const howItWorksSteps = [
    'Discovery – We understand your requirements, goals, and technical constraints',
    'Planning – We design the architecture and choose the optimal tech stack',
    'Development – We build your solution using agile methodologies',
    'Deployment – We deploy and configure your application in production',
    'Support – We provide ongoing maintenance and feature enhancements',
  ];

  // Data for "What You Get" section
  const whatYouGetBenefits = [
    { benefit: 'High-Quality Code', outcome: 'Clean, maintainable, and well-documented code', icon: '🔧' },
    { benefit: 'Faster Time to Market', outcome: 'Rapid development and deployment cycles', icon: '⚡' },
    { benefit: 'Scalable Solutions', outcome: 'Applications that grow with your business', icon: '📈' },
    { benefit: 'Technical Expertise', outcome: 'Access to experienced developers and architects', icon: '👨‍💻' },
    { benefit: 'Ongoing Support', outcome: 'Continuous maintenance and feature updates', icon: '🛠️' },
  ];

  // Data for "Who This Is For" section
  const whoThisIsForItems = [
    'Startups needing an MVP or technical co-founder',
    'Businesses looking to digitize their operations',
    'Companies wanting to modernize legacy systems',
    'Organizations needing dedicated development teams',
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
            💻 Software Development & Technical Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            "We don't just write code — <br className="hidden sm:inline" />we build solutions that work."
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At iBeep, we specialize in creating first-class, battle-tested applications for every sector. Whether you need a technical team or want to enhance your existing capabilities, we deliver software that drives real business value.
          </p>
        </div>

        {/* What We Do Section */}
        <div ref={addToSectionRefs} className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🚀 What We Do
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
            ⚙️ How We Work
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
            🎯 What You Get
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
            🎯 Who This Is For
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
            Whether you need a complete technical team or want to enhance your existing capabilities — iBeep delivers the software solutions that power your success.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;