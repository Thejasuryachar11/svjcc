'use client';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600 text-lg mb-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-slate-700 leading-relaxed">
                  By accessing and using the Sree Vidhya Jyothi Coaching Centre (R) website, you accept and agree to be bound by and 
                  comply with the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on Sree Vidhya Jyothi Coaching Centre (R)'s website for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software</li>
                  <li>Removing any copyright or other proprietary notations</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                <p className="text-slate-700 leading-relaxed">
                  The materials on Sree Vidhya Jyothi Coaching Centre (R)'s website are provided "as is". Sree Vidhya Jyothi Coaching Centre (R) 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including, without limitation, implied warranties or conditions of merchantability, fitness for 
                  a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                <p className="text-slate-700 leading-relaxed">
                  In no event shall Sree Vidhya Jyothi Coaching Centre (R) or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) arising 
                  out of the use or inability to use the materials on Sree Vidhya Jyothi Coaching Centre (R)'s website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-slate-700 leading-relaxed">
                  The materials appearing on Sree Vidhya Jyothi Coaching Centre (R)'s website could include technical, typographical, 
                  or photographic errors. Sree Vidhya Jyothi Coaching Centre (R) does not warrant that any of the materials on its 
                  website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Modifications</h2>
                <p className="text-slate-700 leading-relaxed">
                  Sree Vidhya Jyothi Coaching Centre (R) may revise these terms of service for its website at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
                <p className="text-slate-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-slate-700"><strong>Email:</strong> sreevidhyajyothi@gmail.com</p>
                  <p className="text-slate-700"><strong>Phone:</strong> +91 7676485246</p>
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
