import { MentorshipTrack } from './types';
export const mentorshipTracks: MentorshipTrack[] = [
  {
    id: 'ai-ml',
    title: 'AI/ML & Deep Learning',
    icon: 'Brain',
    description: 'Master artificial intelligence, machine learning algorithms, and deep learning frameworks',
    duration: '6-12 months',
    level: 'Intermediate to Advanced',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    demand: 'High',
    salaryIncrease: '+180%'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    description: 'Learn cloud infrastructure, containerization, and deployment automation',
    duration: '4-8 months',
    level: 'Beginner to Advanced',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Monitoring'],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    demand: 'Very High',
    salaryIncrease: '+150%'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    icon: 'Smartphone',
    description: 'Build native and cross-platform mobile applications',
    duration: '4-6 months',
    level: 'Beginner to Intermediate',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
    demand: 'High',
    salaryIncrease: '+120%'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: 'Globe',
    description: 'Full-stack web development with modern frameworks and best practices',
    duration: '3-6 months',
    level: 'Beginner to Advanced',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Database', 'APIs'],
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    demand: 'Very High',
    salaryIncrease: '+140%'
  }
];