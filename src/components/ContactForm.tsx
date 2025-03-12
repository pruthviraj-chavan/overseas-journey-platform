
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Prepare WhatsApp URL with form data
      const message = `New Enquiry from ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APreferred Country: ${formData.country}%0AMessage: ${formData.message}`;
      const whatsappURL = `https://wa.me/918788312094?text=${message}`;
      
      // Show success message
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
      });
      
      // Open WhatsApp with the message
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Form submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="glass-card p-8 rounded-xl shadow-card border border-gray-100">
      <h3 className="text-2xl font-bold text-emprise-blue mb-6">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-emprise-blue mb-1">
            Your Name <span className="text-emprise-pink">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emprise-pink/50 focus:border-emprise-pink transition-all"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-emprise-blue mb-1">
            Email Address <span className="text-emprise-pink">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emprise-pink/50 focus:border-emprise-pink transition-all"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-emprise-blue mb-1">
            Phone Number <span className="text-emprise-pink">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emprise-pink/50 focus:border-emprise-pink transition-all"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-emprise-blue mb-1">
            Preferred Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emprise-pink/50 focus:border-emprise-pink transition-all"
          >
            <option value="">Select a country</option>
            <option value="Russia">Russia</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Germany">Germany</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-emprise-blue mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emprise-pink/50 focus:border-emprise-pink transition-all resize-none"
            placeholder="Tell us about your requirements"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </button>
        </div>
        
        <div className="text-xs text-emprise-blue/60 text-center mt-4">
          By submitting this form, you agree to our privacy policy and consent to be contacted regarding your enquiry.
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
