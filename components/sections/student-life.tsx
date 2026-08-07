'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Music, Trophy, BookOpen, Users } from 'lucide-react';

export function StudentLifeSection() {
  const activities = [
    {
      icon: Music,
      title: 'Cultural Programs',
      description: 'Annual cultural festivals, music performances, and cultural exchange programs throughout the year.',
    },
    
    {
      icon: BookOpen,
      title: 'Clubs & Societies',
      description: 'Student-led clubs including debate, coding, photography, and various academic interest groups.',
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Social responsibility programs where students engage in community welfare and environmental initiatives.',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Beyond Classroom
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Student Life
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our campus life extends beyond academics with diverse activities, clubs, and programs 
            that help students discover their passions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
                alt="Student Event"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                We believe education extends beyond textbooks. Our comprehensive programs focus on developing 
                well-rounded individuals with strong character, leadership skills, and a passion for learning.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{activity.title}</h4>
                      <p className="text-sm text-slate-600">{activity.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
