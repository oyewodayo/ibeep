import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Development', href: '#services' },
        { label: 'Cloud & DevOps', href: '#services' },
        { label: 'AI/ML Solutions', href: '#services' },
        { label: 'Technical Consulting', href: '#services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#who-we-serve' },
        { label: 'Our Process', href: '#how-we-work' },
        { label: 'Technologies', href: '#services' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Developer Mentorship', href: '#' },
        { label: 'Tech Stack Guide', href: '#' },
        { label: 'Project Portfolio', href: '#' },
        { label: 'Free Consultation', href: '#contact' },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white transition-colors duration-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-light text-white mb-4">iBeep</h3>
              <p className="text-slate-300 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                Building first-class, battle-tested applications for businesses across every sector. 
                Your trusted technical partner for software development excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@iBeepbm.com" className="hover:text-blue-400 transition-colors">
                 info@ibeep.co
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+2348087396740" className="hover:text-blue-400 transition-colors">
                  +2348036131267
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https:/linkedin.com/company/ibeephq"
                className="w-10 h-10 bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                 href="https:/x.com/ibeepnetworks"
                className="w-10 h-10 bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <X className="w-5 h-5" />
               
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-medium text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-300 dark:text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-slate-800 dark:border-slate-700 pt-12 mb-12">
          <div className="max-w-md">
            <h4 className="text-xl font-medium text-white mb-3">Stay Updated</h4>
            <p className="text-slate-300 dark:text-slate-400 mb-6">
              Get the latest insights on software development trends and best practices.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 dark:bg-slate-700 border border-slate-700 dark:border-slate-600 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-medium transition-colors duration-300 flex items-center gap-2 group">
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} iBeep Software Development. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;