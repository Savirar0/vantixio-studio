import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE_NUMBER, CONTACT_PHONE_LINK, SERVICES_DATA } from '../constants';
import { animateContact } from '../animations';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', otherService: '', source: '', otherSource: '', message: '' });
  const contactRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', service: '', otherService: '', source: '', otherSource: '', message: '' });
  };

  useEffect(() => {
    if (contactRef.current) {
      animateContact(contactRef.current);
    }
  }, []);

  return (
    <section ref={contactRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-[#F9FAFB]">
            Ready to <span className="text-[#1D4ED8]">Create the Future?</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Let’s start building. Whether you have a vision or need a solution, we’re here to make it happen. Reach out today, and let’s create something groundbreaking.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors">
                <svg className="h-5 w-5 mr-3 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {CONTACT_EMAIL}
              </a>
              <a href={CONTACT_PHONE_LINK} className="flex items-center text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors">
                 <svg className="h-5 w-5 mr-3 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {CONTACT_PHONE_NUMBER}
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              />
            </div>
            <div>
              <label htmlFor="service" className="sr-only">Service of Interest</label>
              <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              >
                  <option value="" disabled>What service are you interested in?</option>
                  {SERVICES_DATA.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  <option value="Other">Other</option>
              </select>
            </div>
            {formData.service === 'Other' && (
              <div>
                <label htmlFor="otherService" className="sr-only">Other Service</label>
                <input
                  type="text"
                  name="otherService"
                  id="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  required
                  placeholder="Please specify your service of interest"
                  className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
                />
              </div>
            )}
            <div>
                <label htmlFor="source" className="sr-only">How did you hear about us?</label>
                <select
                    name="source"
                    id="source"
                    value={formData.source}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
                >
                    <option value="" disabled>How did you hear about us?</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                </select>
            </div>
             {formData.source === 'Other' && (
              <div>
                <label htmlFor="otherSource" className="sr-only">Other Source</label>
                <input
                  type="text"
                  name="otherSource"
                  id="otherSource"
                  value={formData.otherSource}
                  onChange={handleChange}
                  required
                  placeholder="Please specify how you heard about us"
                  className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
                />
              </div>
            )}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-[#111827] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D4ED8] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#121212] focus:ring-[#3B82F6]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;