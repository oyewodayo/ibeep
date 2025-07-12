import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, Users, Award, ChevronRight, Play, BookOpen, Code, Brain, Cloud, Smartphone, Globe, Zap, TrendingUp, Target, Sparkles } from 'lucide-react';
import { mentorshipTracks } from '../data/mentorshipTracks';
import { mentors } from '../data/mentors';
import { testimonials } from '../data/testimonials';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/mentorship/Hero';

const Mentorship = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [hoveredMentor, setHoveredMentor] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const mentorsRef = useRef(null);
  const tracksRef = useRef(null);

  // Animated background particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));



  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reveal animation on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);



  const filteredMentors = selectedTrack === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.track === selectedTrack);

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <Hero 
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        isVisible={isVisible}
        mousePosition={mousePosition}
        particles={particles}
      />

      {/* Enhanced Mentorship Tracks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Path</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Structured learning paths designed by industry experts with guaranteed career outcomes
            </p>
          </div>

          <div ref={tracksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mentorshipTracks.map((track, index) => (
              <div
                key={track.id}
                className={`group relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${
                  selectedTrack === track.id 
                    ? `border-blue-500 ${track.bgColor} shadow-xl scale-105` 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 hover:scale-105'
                }`}
                onClick={() => setSelectedTrack(track.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Demand Badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {track.demand} Demand
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${track.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <track.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {track.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {track.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Duration:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{track.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Level:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{track.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Salary Boost:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">{track.salaryIncrease}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {track.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                  {track.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-md font-medium">
                      +{track.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedTrack === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              All Mentors ({mentors.length})
            </button>
            {mentorshipTracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedTrack === track.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                {track.title} ({mentors.filter(m => m.track === track.id).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Mentors</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn from the best. Our mentors are currently working at top tech companies.
            </p>
          </div>

          <div ref={mentorsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor, index) => (
              <div
                key={mentor.id}
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-purple-500 relative overflow-hidden"
                onMouseEnter={() => setHoveredMentor(mentor.id)}
                onMouseLeave={() => setHoveredMentor(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Success Badge */}
                {/* <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">{mentor.successRate}</span>
                </div> */}

                {/* Online Status */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium"></span>
                </div>

                {/* Mentor Avatar */}
                <div className="relative mb-6 mt-8">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-white" />
                    {/* <span className="absolute text-xs font-bold text-white">{mentor.rating}</span> */}
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{mentor.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{mentor.company}</p>
                  
                  <div className="flex justify-center space-x-2 mb-4">
                    {mentor.specialties.slice(0, 2).map((specialty, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                        {specialty}
                      </span>
                    ))}
                    {mentor.specialties.length > 2 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium">
                        +{mentor.specialties.length - 2}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{mentor.bio}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Experience</div>
                    <div className="font-bold text-gray-900 dark:text-white">{mentor.experience}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Students</div>
                    <div className="font-bold text-gray-900 dark:text-white">{mentor.students}+</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Price</div>
                    <div className="font-bold text-gray-900 dark:text-white">{mentor.price}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Response</div>
                    <div className="font-bold text-gray-900 dark:text-white">{mentor.responseTime}</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Notable Achievements:</h4>
                  <ul className="space-y-2">
                    {mentor.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Award className="w-4 h-4 text-yellow-500" />
                        </div>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gray-800 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Book your Spot
                </button>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-purple-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              View All Mentors
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real people, real results. See how mentorship transformed their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "Software Engineer at Google",
                quote: "The mentorship program helped me land my dream job at Google within 6 months. My mentor's guidance on system design was invaluable.",
                before: "$85K",
                after: "$220K",
                duration: "6 months",
                image: "bg-gradient-to-r from-blue-500 to-purple-500"
              },
              {
                name: "Mike R.",
                role: "DevOps Lead at Netflix",
                quote: "I doubled my salary and got promoted to Lead DevOps Engineer thanks to my mentor's expertise in cloud architecture.",
                before: "$110K",
                after: "$250K",
                duration: "8 months",
                image: "bg-gradient-to-r from-green-500 to-emerald-500"
              },
              {
                name: "Priya K.",
                role: "ML Engineer at OpenAI",
                quote: "From complete beginner to working on cutting-edge AI models. My mentor's patience and knowledge were game-changing.",
                before: "$70K",
                after: "$190K",
                duration: "9 months",
                image: "bg-gradient-to-r from-pink-500 to-rose-500"
              }
            ].map((story, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 ${story.image}`} />
                
                {/* Story Content */}
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className={`w-20 h-20 ${story.image} rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 mx-auto`}>
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                    "{story.quote}"
                  </blockquote>
                  
                  {/* Name */}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{story.role}</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Before</div>
                      <div className="font-bold text-gray-900 dark:text-white line-through">{story.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Duration</div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">After</div>
                      <div className="font-bold text-green-600 dark:text-green-400">{story.after}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Zap className="w-5 h-5 mr-2" />
            <span>Limited Spots Available</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Career?</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Join hundreds of professionals who accelerated their careers with 1-on-1 mentorship from top industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Schedule Call
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: Clock, text: 'Flexible Scheduling' },
              { icon: Award, text: 'Guaranteed Results' },
              { icon: Users, text: '1-on-1 Mentorship' },
              { icon: Star, text: '4.9/5 Satisfaction' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <item.icon className="w-5 h-5 text-blue-500 dark:text-purple-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Mentorship</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">AI/ML Track</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">TechMentor</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <Footer/>
    </>
  );
};

export default Mentorship;