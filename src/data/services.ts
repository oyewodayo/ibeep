import { Service } from "./types";
import { Code, Smartphone, Cloud, Brain, Users, BarChart2 } from "lucide-react";

export const services: Service[] = [
  {
    icon: { type: 'lucide', icon: Code },
    title: 'Web Development',
    description: 'Full-stack web applications using modern frameworks like React, Vue, Angular, Node.js, Python, and more. From simple websites to complex enterprise solutions.',
    gradient: 'from-blue-500 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
  },
  {
    icon: { type: 'lucide', icon: Smartphone },
    title: 'Mobile Development',
    description: 'Native iOS and Android apps, cross-platform solutions with React Native and Flutter. User-friendly mobile experiences that engage your customers.',
    gradient: 'from-emerald-500 to-emerald-700',
    bgGradient: 'from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900',
  },
  {
    icon: { type: 'lucide', icon: Cloud },
    title: 'Cloud & DevOps',
    description: 'Complete deployment infrastructure management on AWS, Azure, Google Cloud. CI/CD pipelines, monitoring, scaling, and security best practices.',
    gradient: 'from-purple-500 to-purple-700',
    bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
  },
  {
    icon: { type: 'lucide', icon: Brain },
    title: 'AI/ML Solutions',
    description: 'Machine learning models, deep learning applications, AI integration, and data analytics. Transform your business with intelligent automation.',
    gradient: 'from-orange-500 to-orange-700',
    bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
  },
  {
    icon: { type: 'lucide', icon: Users }, // You'll need to import Users from lucide-react
    title: 'Mentorship',
    description: 'Personalized 1-on-1 coaching and guidance for developers and entrepreneurs. Career advice, technical skill development, and leadership training.',
    gradient: 'from-pink-500 to-pink-700',
    bgGradient: 'from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900',
  },
  {
    icon: { type: 'lucide', icon: BarChart2 }, // You'll need to import BarChart2 from lucide-react
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, PPC, social media marketing, content creation, and conversion rate optimization.',
    gradient: 'from-amber-500 to-amber-700',
    bgGradient: 'from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900',
  },
];
