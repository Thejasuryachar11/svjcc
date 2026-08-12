'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Auto-fill WhatsApp message with form data
    const whatsappMessage = `Hello Sree Vidhya Jyothi Coaching Centre (R),\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappLink = `https://wa.me/917676485246?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '#10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9611323437, +91 83106 18798',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sreevidhyajyothi@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Contact BlueMoon
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to us for any queries or to schedule a campus visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.details}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Quick Contact */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-slate-600 text-center mb-4">
              Or connect with us directly via WhatsApp
            </p>
            <a
              href="https://wa.me/917676485246"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Visit Us</h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
  <div className="rounded-xl overflow-hidden shadow-lg">
  <iframe
    title="Location Map"
    src="https://www.google.com/maps?q=13.0854206,77.4251527&z=17&output=embed"
    width="100%"
    height="420"
    style={{ border: 0 }}
    loading="lazy"
  />
</div>
</div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-slate-700 text-sm">
              <strong>Address:</strong> #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073
            </p>
            <p className="text-slate-700 text-sm mt-2">
              <strong>View on Google Maps:</strong> <a href="https://maps.app.goo.gl/g67vKwJHMVScbY517" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Click here</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
