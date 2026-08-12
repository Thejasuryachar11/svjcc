'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  const features = [
    'State Syllabus Focus',
    'Creativity & Quality Education',
    'Cultural Development Programs',
    'Disciplined Learning Environment',
    'Affordable Fee Structure',
    'Safe & Secure Campus',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            About Our Coaching Centre
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Committed to Your Child&apos;s Success
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sree Vidhya Jyothi Coaching Centre (R) is a premier educational institution dedicated to fostering academic excellence, 
            character development, and personal growth in a supportive and inclusive environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/classroom.jpg"
                alt="Modern Classroom"
                width={4096}
                height={3072}
                style={{ width: '100%', height: '100%' }}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
              <p className="text-slate-800 font-semibold mb-2">Our Motive:</p>
              <p className="text-slate-700">Quality of Education with Low Budget Fee Structure - We focus on Creativity, Quality, Culture and Discipline</p>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sree Vidhya Jyothi Coaching Centre (R) has established itself as a beacon of educational excellence. We provide a nurturing environment where students can thrive academically and personally.
              we are committed to providing quality education with affordable fee structure. Our commitment to innovation, 
              student-centric learning, and holistic development sets us apart from other institutions.
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-slate-600 leading-relaxed"
            >
              Our curriculum is designed to nurture curiosity, creativity, and critical thinking while maintaining 
              the highest academic standards. We believe in preparing students not just for exams, but for life.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
