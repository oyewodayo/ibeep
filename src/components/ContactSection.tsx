import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ConsultationScheduler from './ConsultationScheduler';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Let's Build Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your ideas into powerful software? Let's discuss how we can bring your vision to life.
          </p>
          
          {/* Add consultation scheduler CTA */}
          <div className="mt-8">
            <Button
              onClick={() => setIsSchedulerOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 text-lg font-medium group transition-all duration-300"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Technical Consultation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-8">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Send us a Message</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Or use the scheduler above for a direct consultation</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-600 dark:focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-600 dark:focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-900 dark:text-slate-300">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-600 dark:focus:border-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-300">
                  Project Details *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="pl-10 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-600 dark:focus:border-blue-500"
                    placeholder="Tell us about your project requirements, preferred technologies, timeline, and budget..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-3 text-lg font-medium group transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-sm p-8">
              <h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-6">Why Partner With iBeep?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Battle-Tested Code</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-light">Production-ready applications built with industry best practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Full-Stack Expertise</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-light">Complete technical team covering all aspects of software development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Flexible Tech Stack</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-light">We work with your preferred technologies or recommend the best fit</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">End-to-End Support</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-light">From development to deployment and ongoing maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-8">
              <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">
                Schedule a technical consultation to discuss your project requirements and explore how we can help you build exceptional software.
              </p>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-light">
                <div>📧 info@iBeepbm.com</div>
                <div>📱 +2348087396740</div>
                <div>🌍 Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Scheduler Modal */}
      <ConsultationScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
      />
    </section>
  );
};

export default ContactSection;