'use client';

import { motion } from 'framer-motion';
import { BookOpen, Microscope, Globe, Music } from 'lucide-react';

export function AcademicsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Core Academics',
      description:
        'Comprehensive curriculum covering Mathematics, Science, English, Social Studies with expert guidance and personalized learning approaches.',
    },
    {
      icon: Microscope,
      title: 'Science & Technology',
      description:
        'Advanced lab facilities and hands-on experiments to develop scientific thinking and problem-solving skills.',
    },
    {
      icon: Globe,
      title: 'Languages & Culture',
      description:
        'Multi-language programs including English, Hindi, Sanskrit, and exposure to diverse cultural heritage.',
    },
    {
      icon: Music,
      title: 'Arts & Music',
      description:
        'Creative programs in visual arts, performing arts, music, and drama to foster artistic expression.',
    },
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
    <section id="academics" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Academic Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Comprehensive Programs for Every Student
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Following State Syllabus with classes from Nursery, LKG, UKG, 1st–5th, 6th–8th, and 9th–10th. 
            Our diverse academic programs are designed to develop well-rounded students with strong foundations 
            in all subjects and keen interest in learning.
          </p>
          <div className="mt-6 inline-block bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
            <p className="text-slate-700 font-semibold">Classes: Nursery, LKG, UKG, 1st–5th, 6th–8th, 9th–10th</p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed">{program.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
