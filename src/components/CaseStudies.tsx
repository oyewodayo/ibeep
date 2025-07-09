
import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      title: 'E-commerce Scale-Up',
      industry: 'Retail Technology',
      challenge: 'Local e-commerce platform struggling with operational efficiency and market expansion.',
      solution: 'Implemented streamlined logistics, optimized pricing strategy, and developed strategic partnerships.',
      results: ['250% revenue growth', '40% cost reduction', '5x market expansion'],
      timeline: '18 months',
    },
    {
      icon: Users,
      title: 'Manufacturing Partnership',
      industry: 'Industrial Manufacturing',
      challenge: 'Family-owned manufacturer needed professional management to modernize operations.',
      solution: 'Introduced modern ERP systems, restructured operations, and developed export capabilities.',
      results: ['60% efficiency improvement', 'ISO certification achieved', 'International market entry'],
      timeline: '24 months',
    },
    {
      icon: Zap,
      title: 'Fintech Market Entry',
      industry: 'Financial Technology',
      challenge: 'International fintech company seeking to enter the Nigerian market.',
      solution: 'Navigated regulatory requirements, established local partnerships, and launched MVP.',
      results: ['Regulatory approval', '50K+ user acquisition', 'Local team established'],
      timeline: '12 months',
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Real transformations achieved through strategic partnership and hands-on management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.title}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm p-8 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-600 rounded-sm mr-4">
                  <caseStudy.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white">{caseStudy.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{caseStudy.industry}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Challenge</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 font-light">{caseStudy.challenge}</p>
                
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Solution</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">{caseStudy.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Key Results</h4>
                <div className="space-y-2">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                      <span className="font-light">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 dark:text-slate-300 font-light">Timeline</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{caseStudy.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
