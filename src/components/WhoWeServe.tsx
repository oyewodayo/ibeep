import React, { useState } from 'react';
import { Rocket, Building, Globe2, ArrowRight, Check } from 'lucide-react';

const WhoWeServe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const clientTypes = [
    {
      icon: Rocket,
      title: 'Local Entrepreneurs',
      description: 'Ambitious founders and startup teams looking to scale their businesses in challenging markets.',
      characteristics: ['Early to growth stage', 'Local market focus', 'Scaling challenges'],
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      accent: 'border-blue-200 dark:border-blue-800',
      hoverBg: 'dark:group-hover:bg-blue-950/20',
    },
    {
      icon: Building,
      title: 'Business Asset Owners',
      description: 'Established business owners seeking professional management to optimize operations and growth.',
      characteristics: ['Established revenue', 'Operational complexity', 'Growth optimization'],
      color: 'from-emerald-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      accent: 'border-emerald-200 dark:border-emerald-800',
      hoverBg: 'dark:group-hover:bg-emerald-950/20',
    },
    {
      icon: Globe2,
      title: 'Foreign Companies',
      description: 'International businesses entering or expanding within the Nigerian and West African markets.',
      characteristics: ['Market entry', 'Local partnerships', 'Regulatory navigation'],
      color: 'from-purple-500 to-indigo-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30',
      iconBg: 'bg-purple-100 dark:bg-purple-900/50',
      accent: 'border-purple-200 dark:border-purple-800',
      hoverBg: 'dark:group-hover:bg-purple-950/20',
    },
  ];

  return (
    <section id='who-we-serve' className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg dark:shadow-blue-500/25">
            <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm"></div>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-6">
            Who We <span className="font-medium text-blue-600 dark:text-blue-400">Serve</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We partner with <span className="font-semibold text-gray-800 dark:text-gray-200">visionary leaders</span> and organizations at various stages of their business journey, providing tailored solutions for sustainable growth.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-64"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-64"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${client.bgPattern} border-2 ${client.accent} overflow-hidden ${client.hoverBg}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 dark:bg-gray-700/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 dark:bg-gray-600/30 rounded-full blur-lg"></div>

                {/* Icon Section */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${client.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md dark:shadow-gray-900/50`}>
                    <IconComponent className={`w-8 h-8 bg-gradient-to-r ${client.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                    {client.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                  {client.description}
                </p>

                {/* Characteristics */}
                <div className="space-y-3 relative z-10">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${client.color} rounded-full mr-2`}></div>
                    Key Focus Areas
                  </h4>
                  
                  {client.characteristics.map((characteristic, charIndex) => (
                    <div
                      key={charIndex}
                      className={`flex items-center text-gray-700 dark:text-gray-300 transform transition-all duration-300 ${
                        isHovered ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${charIndex * 100}ms` }}
                    >
                      <div className={`w-5 h-5 rounded-full ${client.iconBg} flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Check className={`w-3 h-3 bg-gradient-to-r ${client.color} bg-clip-text text-transparent`} />
                      </div>
                      <span className="font-medium">
                        {characteristic}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 relative z-10">
                  <button className={`group/btn flex items-center text-sm font-semibold bg-gradient-to-r ${client.color} bg-clip-text text-transparent hover:opacity-80 transition-all duration-300`}>
                    Learn More About Our Services
                    <ArrowRight className={`w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform bg-gradient-to-r ${client.color} bg-clip-text text-transparent`} />
                  </button>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${client.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses who have transformed their operations with our expertise.
          </p>
          <a href='#contact' className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-500/25">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;