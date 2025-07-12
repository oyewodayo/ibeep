import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, MessageSquare, ArrowRight, ArrowLeft, DollarSign, CheckCircle, Sun, Moon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const StartAProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consultationType: 'general',
    budgetRange: '',
    gaps: []
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Generate calendar for current month
  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Calculate one month from today
    const oneMonthFromToday = new Date(today);
    oneMonthFromToday.setMonth(oneMonthFromToday.getMonth() + 1);
    
    // Get first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    // Get first day of week (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay();
    
    // Calculate days to show from previous month
    const daysFromPrevMonth = firstDayOfWeek;
    
    // Generate calendar days
    const calendarDays = [];
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i - 1);
      calendarDays.push({
        date: date,
        isCurrentMonth: false,
        isSelectable: false
      });
    }
    
    // Add days from current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = date.toDateString() === today.toDateString();
      const isPast = date < today;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      // Available if: not past, not weekend, and within first month from today
      const isWithinFirstMonth = date <= oneMonthFromToday;
      const isSelectable = !isPast && !isWeekend && isWithinFirstMonth;
      
      calendarDays.push({
        date: date,
        isCurrentMonth: true,
        isSelectable: isSelectable,
        isToday: isToday,
        isPast: isPast,
        isWeekend: isWeekend,
        isWithinFirstMonth: isWithinFirstMonth
      });
    }
    
    // Add days from next month to fill the grid
    const remainingDays = 42 - calendarDays.length; // 6 weeks × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(currentYear, currentMonth + 1, day);
      calendarDays.push({
        date: date,
        isCurrentMonth: false,
        isSelectable: false
      });
    }
    
    return calendarDays;
  };

  const getMonthName = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
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

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Prefer to discuss' },
  ];

  const gapOptions = [
    'We are struggling with defining a unique and coherent brand identity that sets us apart from competitors.',
    'We are exploring expansion into new markets, and need help adapting our brand to different cultural contexts while ensuring consistency.',
    'Our current website and/or product needs an improved experience and interface design that embodies our brand and identity.',
    'We are struggling to convey our value proposition to investors, hindering our ability to showcase the compelling reasons to invest in our vision.',
    'Our sales team is experiencing a difficulty articulating our value proposition, causing confusion among potential customers.',
    'We are facing unexpected negative reactions from the public due to a recent incident, that\'s hurting our reputation.',
    'We are navigating stakeholder uncertainty in our M&A, hence, the crucial need to minimize disruptions and maintain confidence.'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const selectedTimeLabel = timeSlots.find(t => t.value === selectedTime)?.label;
    const consultationTypeLabel = consultationTypes.find(t => t.value === formData.consultationType)?.label;
    const budgetRangeLabel = budgetRanges.find(b => b.value === formData.budgetRange)?.label;

    // Create email content
    const subject = `Technical Consultation Request: ${formData.name} - ${consultationTypeLabel}`;
    
    let body = `Dear FourthCanvas Team,\n\n`;
    body += `I would like to schedule a ${consultationTypeLabel} consultation.\n\n`;
    body += `Here are my details:\n`;
    body += `- Name: ${formData.name}\n`;
    body += `- Email: ${formData.email}\n`;
    body += `- Company: ${formData.company || 'Not provided'}\n`;
    body += `- Preferred Date: ${formattedDate}\n`;
    body += `- Preferred Time: ${selectedTimeLabel}\n`;
    
    if (formData.consultationType !== 'mentorship') {
      body += `- Budget Range: ${budgetRangeLabel}\n`;
    }
    
    body += `\nProject Details:\n${formData.message || 'None provided'}\n\n`;
    
    if (formData.gaps.length > 0) {
      body += `Gaps to Address:\n`;
      formData.gaps.forEach((gap, index) => {
        body += `${index + 1}. ${gap}\n`;
      });
      body += `\n`;
    }
    
    body += `Looking forward to discussing my project with your team.\n\nBest regards,\n${formData.name}`;

    // Encode for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:info@fourthcanvas.com?subject=${encodedSubject}&body=${encodedBody}`;

    try {
      window.open(mailtoLink, '_blank');
      
      // Show success message
      alert('Your email client should open with a pre-filled consultation request. Please review and send to complete your booking.');
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        message: '', 
        consultationType: 'general',
        budgetRange: '',
        gaps: []
      });
      setSelectedDate('');
      setSelectedTime('');
      setCurrentStep(1);

    } catch (error) {
      console.error("Error opening email client:", error);
      alert(`Please send an email manually to info@fourthcanvas.com with your consultation details.`);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGapToggle = (gap) => {
    setFormData(prev => ({
      ...prev,
      gaps: prev.gaps.includes(gap) 
        ? prev.gaps.filter(g => g !== gap)
        : [...prev.gaps, gap]
    }));
  };

  const canProceedToStep2 = selectedDate && selectedTime;
  const canProceedToStep3 = formData.name && formData.email && formData.consultationType;

  return (
    <>
    <Navigation/>
    <div className="min-h-screen my-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Schedule Consultation
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Let's discuss your project and find the perfect solution for your needs
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">Step {currentStep} of 3</span>
            <span className="text-sm text-slate-500 dark:text-gray-400">{Math.round((currentStep / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          {/* Step 1: Date & Time Selection */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Select a Date & Time
                </h2>
                <p className="text-slate-600 dark:text-gray-300">Choose your preferred consultation slot</p>
              </div>

              {/* Date Selection */}
              <div className="space-y-4">
                <label className="text-lg font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Select Date * - {getMonthName()} (Next 30 Days Available)
                </label>
                
                <div className="border border-slate-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 transition-colors">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center text-sm font-medium text-slate-600 dark:text-gray-400 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {generateCalendar().map((day, index) => {
                      const isSelected = selectedDate === day.date.toISOString().split('T')[0];
                      
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            if (day.isSelectable) {
                              setSelectedDate(day.date.toISOString().split('T')[0]);
                            }
                          }}
                          disabled={!day.isSelectable}
                          className={`
                            h-12 w-full text-sm rounded-lg transition-all font-medium
                            ${!day.isCurrentMonth 
                              ? 'text-slate-300 dark:text-gray-600 cursor-not-allowed' 
                              : day.isSelectable
                                ? isSelected
                                  ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg ring-2 ring-blue-200 dark:ring-blue-900'
                                  : 'text-slate-900 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400 border border-slate-200 dark:border-gray-700'
                                : day.isPast
                                  ? 'text-slate-300 dark:text-gray-600 bg-slate-50 dark:bg-gray-900 cursor-not-allowed line-through'
                                  : day.isWeekend
                                    ? 'text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-gray-900 cursor-not-allowed'
                                    : 'text-slate-400 dark:text-gray-500 bg-slate-50 dark:bg-gray-900 cursor-not-allowed'
                            }
                            ${day.isToday && day.isCurrentMonth && !isSelected ? 'ring-2 ring-blue-300 dark:ring-blue-600' : ''}
                            ${day.isWithinFirstMonth && day.isCurrentMonth && !day.isPast && !day.isWeekend ? 'font-semibold' : ''}
                          `}
                        >
                          {day.date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-blue-600 dark:bg-blue-500"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded border-2 border-blue-300 dark:border-blue-600"></div>
                      <span>Today</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded border border-slate-200 dark:border-gray-600"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-slate-100 dark:bg-gray-700"></div>
                      <span>Weekend</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-700"></div>
                      <span className="line-through">Past Date</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-4">
                <label className="text-lg font-medium text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Select Time *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.value}
                      type="button"
                      onClick={() => setSelectedTime(slot.value)}
                      className={`p-4 text-sm border rounded-lg transition-all ${
                        selectedTime === slot.value
                          ? 'bg-blue-600 dark:bg-blue-700 text-white border-blue-600 dark:border-blue-700 shadow-lg'
                          : 'bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200 border-slate-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep2}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    canProceedToStep2
                      ? 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800'
                      : 'bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Tell Us About Yourself
                </h2>
                <p className="text-slate-600 dark:text-gray-300">Basic information and consultation preferences</p>
              </div>

              {/* Consultation Type */}
              <div className="space-y-3">
                <label htmlFor="consultationType" className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Consultation Type *
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900"
                  required
                >
                  {consultationTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range - Only show if not mentorship */}
              {formData.consultationType !== 'mentorship' && (
                <div className="space-y-3">
                  <label htmlFor="budgetRange" className="text-sm font-medium text-slate-900 dark:text-gray-200 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Select a Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200 focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900"
                    required
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-gray-200">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-gray-500" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-gray-200">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-gray-500" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200"
                  placeholder="Your Company"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-gray-700 rounded-lg font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!canProceedToStep3 || (formData.consultationType !== 'mentorship' && !formData.budgetRange)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    canProceedToStep3 && (formData.consultationType === 'mentorship' || formData.budgetRange)
                      ? 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800'
                      : 'bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project Details and Gaps */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  Project Details
                </h2>
                <p className="text-slate-600 dark:text-gray-300">Tell us about your project and the gaps you need to address</p>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Tell us about your project
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400 dark:text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-200"
                    placeholder="What type of software do you want to build? What technologies are you considering? What's your timeline and budget range?"
                  />
                </div>
              </div>

              {/* Gaps Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  What gaps are you looking to close through this engagement with FourthCanvas? *
                </label>
                <div className="space-y-3">
                  {gapOptions.map((gap, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => handleGapToggle(gap)}
                        className={`mt-1 w-5 h-5 rounded border-2 transition-all ${
                          formData.gaps.includes(gap)
                            ? 'bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500 text-white'
                            : 'border-slate-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                        }`}
                      >
                        {formData.gaps.includes(gap) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <label className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed cursor-pointer">
                        {gap}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-gray-700 rounded-lg font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={formData.gaps.length === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    formData.gaps.length > 0
                      ? 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800'
                      : 'bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Schedule Consultation
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default StartAProject;