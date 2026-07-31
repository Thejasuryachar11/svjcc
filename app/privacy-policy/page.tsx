'use client';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600 text-lg mb-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-700 leading-relaxed">
                  Sree Vidhya Jyothi Coaching Centre (R) ("we," "us," "our," or "Coaching Centre") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may collect on the 
                  site includes:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Student information for admission inquiries</li>
                  <li>Communication preferences</li>
                  <li>Device and usage information</li>
                  <li>Cookie data and tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and 
                  customized experience. Specifically, we may use information collected about you via the site to:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Process admission inquiries</li>
                  <li>Send administrative information and updates</li>
                  <li>Respond to your inquiries</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Security of Your Information</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed">
                  If you have questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-slate-700"><strong>Email:</strong> sreevidhyajyothi@gmail.com</p>
                  <p className="text-slate-700"><strong>Phone:</strong> +91 96113 23437</p>
                  <p className="text-slate-700"><strong>Phone:</strong> +91 83106 18798</p>
                  <p className="text-slate-700"><strong>Address:</strong> #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
