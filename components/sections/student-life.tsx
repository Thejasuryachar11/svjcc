'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Languages, Globe } from 'lucide-react';

export function StudentLifeSection() {
  const subjects = [
    {
      icon: Languages,
      title: 'English',
      description:
        'Easy learning of reading, writing, grammar, vocabulary, and basic communication.',
    },
    {
      icon: BookOpen,
      title: 'Kannada',
      description:
        'Simple lessons in reading, writing, grammar, spelling, and understanding Kannada.',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description:
        'Step-by-step learning of basic concepts, calculations, problem-solving, and practice.',
    },
    {
      icon: Globe,
      title: 'Social Science',
      description:
        'Easy explanations of History, Geography, Civics, and important social concepts.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section id="student-life" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Academic Coaching
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Learn Better, Score Better
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple and effective coaching to help students understand
            concepts, complete their schoolwork, and improve their academic
            performance.
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
                src="/3.jpg"
                alt="Students receiving academic coaching"
                width={4096}
                height={3072}
                style={{ width: '100%', height: '100%' }}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Subjects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {subjects.map((subject, index) => {
              const Icon = subject.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-5 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-1">
                      {subject.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}