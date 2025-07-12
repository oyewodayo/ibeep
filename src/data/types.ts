import { LucideIcon } from "lucide-react";

// src/data/types.ts
export interface MentorshipTrack {
  id: string;
  title: string;
  icon: string; // This will match Lucide icon names
  description: string;
  duration: string;
  level: string;
  technologies: string[];
  color: string;
  bgColor: string;
  demand: string;
  salaryIncrease: string;
}

export interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  specialties: string[];
  experience: string;
  rating: number;
  students: number;
  track: string;
  bio: string;
  achievements: string[];
  price: string;
  availability: string;
  responseTime: string;
  successRate: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface SuccessStory {
  name: string;
  role: string;
  quote: string;
  before: string;
  after: string;
  duration: string;
  image: string;
}

export type ServiceIcon = 
  | { type: 'lucide'; icon: LucideIcon }
  | { type: 'image'; src: string; alt?: string };

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
  iconType?: 'lucide' | 'image'; // Optional flag to distinguish types
}