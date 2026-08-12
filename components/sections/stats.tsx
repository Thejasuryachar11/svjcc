'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/shared/counter';

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
           Our Core
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A testament to our commitment to excellence and success in education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <Counter end={25} label="Years of Excellence" suffix="+" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <Counter end={250} label="Active Students" suffix="+" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <Counter end={15} label="Expert Faculty" suffix="+" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <Counter end={100} label="Academic Success Rate" suffix="%" />
          </motion.div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-400/30"
        >
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-white">100%</div>
            <p className="text-blue-100">Student Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-white">100%</div>
            <p className="text-blue-100">Board Exam Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-white">50+</div>
            <p className="text-blue-100">Awards & Achievements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
