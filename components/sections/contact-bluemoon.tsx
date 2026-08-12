'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactBluemoonSection() {
  return (
    <section id="contact-bluemoon" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find us on the map or reach out to us directly for any inquiries
          </p>
        </motion.div>

        {/* Map and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Section - Centered and taking up more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2"
          >
           <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62196.499291286644!2d77.45675820740527!3d13.017756176155084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23370e3e712b%3A0x86d84a2ffd20ea5a!2sSree%20Vidhya%20Jyothi%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1786071915684!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Sree Vidhya Jyothi Coaching Centre Location"
  />
</div>
            
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <a href="tel:+919611323437" className="text-green-600 hover:text-green-700 font-medium">
                    +91 9611323437
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 bg-purple-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:sreevidhyajyothi@gmail.com" className="text-purple-600 hover:text-purple-700 font-medium text-sm break-all">
                    sreevidhyajyothi@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 bg-amber-50 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Clock className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hours</h3>
                  <p className="text-slate-700 text-sm">
                    Mon - Fri: 5:00 PM - 8:00 PM IST<br />
                    Saturday: 4:00 PM - 8:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Address Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-300"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Complete Address</h3>
          <p className="text-slate-700">
            Sree Vidhya Jyothi Coaching Centre (R), #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073
          </p>
        </motion.div>
      </div>
    </section>
  );
}
