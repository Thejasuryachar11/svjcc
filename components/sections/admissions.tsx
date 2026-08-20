'use client';

import { motion } from 'framer-motion';

interface AdmissionsProps {
  onAdmissionClick: () => void;
}

export function AdmissionsSection({ onAdmissionClick }: AdmissionsProps) {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Admissions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Join Our Family
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We welcome applications from bright and motivated students. Our transparent
            admission process ensures fair evaluation of every candidate.
          </p>
        </motion.div>

        {/* Centered Admission CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Apply?
          </h3>

          <p className="mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Our admissions team is excited to meet you and help you join the family.
            We accept applications throughout the academic year.
          </p>

          <div className="space-y-5 mb-8">
            <div>
              <p className="font-semibold mb-1">Contact Us</p>
              <p className="text-blue-100">
                sreevidhyajyothi@gmail.com
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-blue-100">+91 9611323437</p>
              {/* <p className="text-blue-100">+91 83106 18798</p> */}
            </div>
            <div>
              <p className="font-semibold mb-1">WhatsApp</p>
              <p className="text-blue-100">+91 8310618798</p>
              {/* <p className="text-blue-100">+91 83106 18798</p> */}
            </div>

            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-blue-100 max-w-2xl mx-auto">
                #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout,
                Sidedahalli Main Road, Banglore - 560073
              </p>
            </div>
          </div>

          <button
            onClick={onAdmissionClick}
            className="w-full max-w-md mx-auto bg-white hover:bg-yellow-300 text-blue-600 hover:text-blue-700 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Application Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}