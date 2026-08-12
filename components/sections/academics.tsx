'use client';

import { motion } from 'framer-motion';

export function AcademicsSection() {
  return (
    <section id="academics" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Academic Excellence
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Comprehensive Programs for Every Student
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Following State Syllabus with classes from Nursery, LKG, UKG,
            1st–5th, 6th–8th, and 9th–10th. Our academic approach is designed
            to develop strong foundations and encourage a keen interest in
            learning.
          </p>

          <div className="mt-6 inline-block bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
            <p className="text-slate-700 font-semibold">
              Classes: Nursery, LKG, UKG, 1st–5th, 6th–8th, 9th–10th
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}