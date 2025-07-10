import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, Users, Award, ChevronRight, Play, BookOpen, Code, Brain, Cloud, Smartphone, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mentorship = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [hoveredMentor, setHoveredMentor] = useState(null);
  const heroRef = useRef(null);
  const mentorsRef = useRef(null);
  const tracksRef = useRef(null);

  const mentorshipTracks = [
    {
      id: 'ai-ml',
      title: 'AI/ML & Deep Learning',
      icon: Brain,
      description: 'Master artificial intelligence, machine learning algorithms, and deep learning frameworks',
      duration: '6-12 months',
      level: 'Intermediate to Advanced',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Learn cloud infrastructure, containerization, and deployment automation',
      duration: '4-8 months',
      level: 'Beginner to Advanced',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Monitoring'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Build native and cross-platform mobile applications',
      duration: '4-6 months',
      level: 'Beginner to Intermediate',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Globe,
      description: 'Full-stack web development with modern frameworks and best practices',
      duration: '3-6 months',
      level: 'Beginner to Advanced',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Database', 'APIs'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI/ML Research Scientist',
      company: 'Former Google AI',
      specialties: ['Deep Learning', 'Computer Vision', 'NLP'],
      experience: '8+ years',
      rating: 4.9,
      students: 150,
      track: 'ai-ml',
      bio: 'PhD in Computer Science with expertise in deep learning and computer vision. Published 25+ research papers and led AI teams at top tech companies.',
      achievements: ['Google AI Researcher', 'Published 25+ Papers', 'TensorFlow Contributor'],
      image: '/images/mentor-1.jpg', // Will be blurred
      price: '$120/hour',
      availability: 'Weekends'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Senior DevOps Engineer',
      company: 'Netflix',
      specialties: ['AWS', 'Kubernetes', 'Infrastructure'],
      experience: '10+ years',
      rating: 4.8,
      students: 200,
      track: 'cloud-devops',
      bio: 'Senior DevOps engineer with extensive experience in cloud infrastructure and scalable systems. Built deployment pipelines serving millions of users.',
      achievements: ['AWS Certified Solutions Architect', 'Kubernetes Expert', 'Netflix Scale Systems'],
      image: '/images/mentor-2.jpg',
      price: '$100/hour',
      availability: 'Evenings'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      title: 'Mobile App Architect',
      company: 'Uber',
      specialties: ['React Native', 'iOS', 'Android'],
      experience: '7+ years',
      rating: 4.9,
      students: 120,
      track: 'mobile-dev',
      bio: 'Mobile development expert who has built apps used by millions. Specializes in cross-platform development and mobile architecture.',
      achievements: ['Uber Mobile Team Lead', 'React Native Core Contributor', '10M+ App Downloads'],
      image: '/images/mentor-3.jpg',
      price: '$90/hour',
      availability: 'Flexible'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Full-Stack Architect',
      company: 'Stripe',
      specialties: ['React', 'Node.js', 'System Design'],
      experience: '9+ years',
      rating: 4.8,
      students: 180,
      track: 'web-dev',
      bio: 'Full-stack engineer with deep expertise in modern web technologies. Built payment systems handling billions in transactions.',
      achievements: ['Stripe Senior Engineer', 'Open Source Maintainer', 'Tech Conference Speaker'],
      image: '/images/mentor-4.jpg',
      price: '$110/hour',
      availability: 'Weekdays'
    },
    {
      id: 5,
      name: 'Dr. Priya Patel',
      title: 'Machine Learning Engineer',
      company: 'OpenAI',
      specialties: ['LLMs', 'Transformers', 'MLOps'],
      experience: '6+ years',
      rating: 5.0,
      students: 90,
      track: 'ai-ml',
      bio: 'ML engineer working on cutting-edge language models. Expert in transformer architectures and large-scale ML systems.',
      achievements: ['OpenAI Research Team', 'Transformer Expert', 'MLOps Pioneer'],
      image: '/images/mentor-5.jpg',
      price: '$150/hour',
      availability: 'Weekends'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      title: 'Cloud Solutions Architect',
      company: 'Microsoft Azure',
      specialties: ['Azure', 'Microservices', 'Security'],
      experience: '12+ years',
      rating: 4.9,
      students: 250,
      track: 'cloud-devops',
      bio: 'Cloud architect with extensive experience in enterprise solutions. Designed cloud infrastructure for Fortune 500 companies.',
      achievements: ['Microsoft MVP', 'Azure Architect Expert', 'Enterprise Solutions'],
      image: '/images/mentor-6.jpg',
      price: '$130/hour',
      availability: 'Evenings'
    }
  ];

  const filteredMentors = selectedTrack === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.track === selectedTrack);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power3.out'
      }
    );

    // Tracks animation
    gsap.fromTo(tracksRef.current?.children || [], 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: tracksRef.current,
          start: 'top 80%'
        }
      }
    );

    // Mentors animation
    gsap.fromTo(mentorsRef.current?.children || [], 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: mentorsRef.current,
          start: 'top 80%'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-8 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Level Up Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Skills</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get personalized mentorship from industry experts at top tech companies. 
              Master AI/ML, Cloud, Mobile, and Web development with hands-on guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Start Your Journey
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                Browse Mentors
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Expert Mentors', value: '50+', icon: Users },
                { label: 'Success Rate', value: '95%', icon: Award },
                { label: 'Hours Mentored', value: '10K+', icon: Clock },
                { label: 'Average Rating', value: '4.9', icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Tracks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your <span className="text-blue-600">Learning Track</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Structured learning paths designed by industry experts to take you from beginner to professional
            </p>
          </div>

          <div ref={tracksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mentorshipTracks.map((track) => (
              <div
                key={track.id}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                  selectedTrack === track.id 
                    ? `border-blue-500 ${track.bgColor} shadow-lg` 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTrack(track.id)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${track.color} rounded-xl mb-4`}>
                  <track.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {track.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {track.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{track.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{track.level}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {track.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                  {track.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      +{track.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedTrack === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Mentors
            </button>
            {mentorshipTracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedTrack === track.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Your <span className="text-blue-600">Expert Mentors</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn from industry professionals at top tech companies
            </p>
          </div>

          <div ref={mentorsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                onMouseEnter={() => setHoveredMentor(mentor.id)}
                onMouseLeave={() => setHoveredMentor(null)}
              >
                {/* Mentor Image - Blurred */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center relative overflow-hidden">
                      {/* Blurred face placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/30 dark:bg-black/30 rounded-full backdrop-blur-xl flex items-center justify-center">
                          <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      {/* Blur overlay */}
                      <div className="absolute inset-0 backdrop-blur-md bg-white/10 dark:bg-black/10"></div>
                    </div>
                  </div>
                  
                  {/* Online status */}
                  <div className="absolute bottom-0 right-1/2 transform translate-x-8 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>

                {/* Mentor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {mentor.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {mentor.company}
                  </p>
                </div>

                {/* Rating and Stats */}
                <div className="flex justify-center items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-gray-900 dark:text-white">{mentor.rating}</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {mentor.students} students
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {mentor.experience}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {mentor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-6 line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {mentor.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Award className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Availability */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div>
                    <span className="text-gray-500">Price:</span>
                    <span className="font-semibold text-gray-900 dark:text-white ml-1">{mentor.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Available:</span>
                    <span className="font-semibold text-gray-900 dark:text-white ml-1">{mentor.availability}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Book Session
                  </Button>
                  <Button variant="outline" className="w-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 py-3 rounded-xl">
                    View Profile
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How <span className="text-blue-600">Mentorship</span> Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple steps to accelerate your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Track',
                description: 'Select the technology track that aligns with your career goals',
                icon: BookOpen
              },
              {
                step: '02',
                title: 'Find Your Mentor',
                description: 'Browse expert mentors and choose based on experience and specialization',
                icon: Users
              },
              {
                step: '03',
                title: 'Book Sessions',
                description: 'Schedule 1-on-1 sessions that fit your schedule and learning pace',
                icon: Clock
              },
              {
                step: '04',
                title: 'Start Learning',
                description: 'Get personalized guidance, code reviews, and career advice',
                icon: Code
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Tech Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who have transformed their careers with expert mentorship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;