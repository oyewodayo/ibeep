// components/mentorship/Hero.tsx
import React from 'react';
import { Star, Users, Clock, Award, ChevronRight, Play, BookOpen, Zap, TrendingUp, Sparkles, Target } from 'lucide-react';

interface HeroProps {
  testimonials: {
    text: string;
    name: string;
    role: string;
  }[];
  currentTestimonial: number;
  isVisible: boolean;
  mousePosition: { x: number; y: number };
  particles: Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>;
}

const Hero: React.FC<HeroProps> = ({ 
  testimonials, 
  currentTestimonial, 
  isVisible, 
  mousePosition, 
  particles 
}) => {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-white dark:bg-gray-900">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-100 dark:bg-blue-900/30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Success Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="animate-pulse">95% Success Rate</span>
            <TrendingUp className="w-4 h-4 ml-2" />
          </div>
          
          {/* Main Icon */}
          {/* <div className="relative inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-3xl mb-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-6">
            <BookOpen className="w-12 h-12 text-white animate-pulse" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div> */}
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block text-blue-600 dark:text-blue-400 animate-pulse">
              Tech Career
            </span>
            <span className="block">in Months</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get <span className="font-semibold text-blue-600">1-on-1 mentorship</span> from industry experts at 
            <span className="font-semibold text-orange-500"> top tech companies</span>. 
            Master AI/ML, Cloud, Mobile, and Web development with guaranteed results.
          </p>

          {/* Testimonials */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 overflow-hidden">
              <div className="relative flex items-center">
                <Play className="mr-3 w-6 h-6" />
                Start Free Trial
                <Sparkles className="ml-2 w-5 h-5 animate-pulse" />
              </div>
            </button>
            
            <button className="group px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="flex items-center">
                <Users className="mr-3 w-6 h-6" />
                Browse Mentors
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Expert Mentors', value: '50+', icon: Users, bg: 'bg-blue-500' },
              { label: 'Success Rate', value: '95%', icon: Target, bg: 'bg-green-500' },
              { label: 'Hours Mentored', value: '15K+', icon: Clock, bg: 'bg-orange-500' },
              { label: 'Avg. Rating', value: '4.9★', icon: Star, bg: 'bg-yellow-500' }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bg} rounded-2xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-gray-500 dark:text-gray-400">Trusted by professionals from:</div>
            {['Google', 'Microsoft', 'Netflix', 'Uber', 'OpenAI', 'Stripe'].map((company, index) => (
              <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;