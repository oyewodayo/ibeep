import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface ConsultationSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationScheduler = ({ isOpen, onClose }: ConsultationSchedulerProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consultationType: 'general'
  });
  const { toast } = useToast();

  // Generate available dates (next 30 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

    while (dates.length < 20) {
      const dayOfWeek = currentDate.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  // Available time slots
  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
  ];

  const consultationTypes = [
    { value: 'general', label: 'General Technical Consultation' },
    { value: 'web-development', label: 'Web Development Project' },
    { value: 'mobile-development', label: 'Mobile App Development' },
    { value: 'cloud-devops', label: 'Cloud & DevOps Solutions' },
    { value: 'ai-ml', label: 'AI/ML Development' },
    { value: 'mentorship', label: 'Developer Mentorship Program' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!selectedDate || !selectedTime) {
    toast({
      title: "Please select date and time",
      description: "Both date and time are required to schedule your consultation.",
      variant: "destructive",
    });
    return;
  }

  const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const selectedTimeLabel = timeSlots.find(t => t.value === selectedTime)?.label;
  const consultationTypeLabel = consultationTypes.find(t => t.value === formData.consultationType)?.label;

  // Create email content
  const subject = `Technical Consultation Request: ${formData.name} - ${consultationTypeLabel}`;
  
  let body = `Dear iBeep Development Team,\n\n`;
  body += `I would like to schedule a ${consultationTypeLabel} consultation.\n\n`;
  body += `Here are my details:\n`;
  body += `- Name: ${formData.name}\n`;
  body += `- Email: ${formData.email}\n`;
  body += `- Company: ${formData.company || 'Not provided'}\n`;
  body += `- Preferred Date: ${formattedDate}\n`;
  body += `- Preferred Time: ${selectedTimeLabel}\n\n`;
  body += `Project Details:\n${formData.message || 'None provided'}\n\n`;
  body += `Looking forward to discussing my project with your team.\n\nBest regards,\n${formData.name}`;

  // Encode for URL
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const mailtoLink = `mailto:info@iBeepbm.com/?subject=${encodedSubject}&body=${encodedBody}`;

  // Track if email client opened successfully
  let emailClientOpened = false;

  try {
    // Open email client in a new tab/window
    const newWindow = window.open(mailtoLink, '_blank');
    
    // Check if the new window was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback to current window
      window.location.href = mailtoLink;
    }

    // Set a flag that we attempted to open the email client
    emailClientOpened = true;

    // Set up fallback detection
    const fallbackTimeout = setTimeout(() => {
      if (!emailClientOpened) {
        showManualEmailInstructions();
      }
    }, 2000);

    // If we get here, assume the email client opened successfully
    clearTimeout(fallbackTimeout);
    
    toast({
      title: "Ready to Send!",
      description: "Your email client should open with a pre-filled consultation request. Please review and send to complete your booking.",
    });

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '', consultationType: 'general' });
    setSelectedDate('');
    setSelectedTime('');
    onClose();

  } catch (error) {
    console.error("Error opening email client:", error);
    showManualEmailInstructions();
  }

  function showManualEmailInstructions() {
    // Store form data in case user needs to copy it
    const formDataForManual = {
      ...formData,
      date: formattedDate,
      time: selectedTimeLabel,
      consultationType: consultationTypeLabel
    };

    // Show detailed instructions
    toast({
      title: "Email Client Not Found",
      variant: "destructive",
      duration: 10000, // Longer duration
      action: (
        <Button 
          variant="outline" 
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(formDataForManual, null, 2));
            toast({
              title: "Copied!",
              description: "Form data copied to clipboard.",
            });
          }}
        >
          Copy Details
        </Button>
      ),
      description: (
        <div className="space-y-2">
          <p>Please send an email manually to <strong>info@iBeepbm.com</strong> with the following details:</p>
          <pre className="text-xs p-2 bg-gray-100 rounded">
            {JSON.stringify(formDataForManual, null, 2)}
          </pre>
        </div>
      ),
    });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl dark:text-white font-light text-slate-900">
            Schedule Your Technical Consultation
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Consultation Type */}
          <div className="space-y-2">
            <label htmlFor="consultationType" className="text-sm dark:text-white font-medium text-slate-900">
              Consultation Type *
            </label>
            <select
              id="consultationType"
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 focus:border-blue-600 focus:outline-none"
              required
            >
              {consultationTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Select Date *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto">
              {getAvailableDates().map((date, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                  className={`p-2 text-sm border rounded-md transition-all ${
                    selectedDate === date.toISOString().split('T')[0]
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {date.toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Select Time *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  onClick={() => setSelectedTime(slot.value)}
                  className={`p-2 text-sm border rounded-md transition-all ${
                    selectedTime === slot.value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-900">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-slate-900">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-900">
              Tell us about your project
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="pl-10"
                placeholder="What type of software do you want to build? What technologies are you considering? What's your timeline and budget range?"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationScheduler;