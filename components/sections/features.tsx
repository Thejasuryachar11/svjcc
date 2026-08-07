'use client';

import { motion } from 'framer-motion';
import { Award, Users, Laptop, Heart, Zap, Shield } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Faculty',
      description:
        'Highly qualified and experienced teachers with international certifications and continuous professional development.',
    },
    {
      icon: Users,
      title: 'Small Class Size',
      description:
        'Maintained student-teacher ratio ensures personalized attention and better learning outcomes for each child.',
    },
   
    {
      icon: Heart,
      title: 'Student Welfare',
      description:
        'Comprehensive counseling services, medical facilities, and dedicated staff for student well-being and development.',
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Our Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Why Shree Vidhya?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We combine academic rigor with holistic development to create an environment where every student can flourish.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
