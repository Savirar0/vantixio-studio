import React from 'react';
import ContactSection from '../components/ContactSection';
import InstagramCard from '../components/InstagramCard';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <ContactSection />
      <InstagramCard />
    </div>
  );
};

export default ContactPage;
