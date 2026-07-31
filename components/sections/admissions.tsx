'use client';

import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '@/components/shared/buttons';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';

interface AdmissionsProps {
  onAdmissionClick: () => void;
}

export function AdmissionsSection({ onAdmissionClick }: AdmissionsProps) {
  const process = [
    {
      step: 1,
      title: 'Application',
      description: 'Fill out the online application form with required details',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Entrance Exam',
      description: 'Take our assessment test for your respective class level',
      icon: Calendar,
    },
    {
      step: 3,
      title: 'Interview',
      description: 'Meet with our admission counselor for a personal discussion',
      icon: Users,
    },
    {
      step: 4,
      title: 'Selection',
      description: 'Receive admission decision and join our family',
      icon: CheckCircle,
    },
  ];

  const requirements = [
    'Birth Certificate',
    'Previous Coaching Centre Marksheet',
    'Medical Report',
    'Photo ID',
    'Address Proof',
    'Parent/Guardian ID',
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
            We welcome applications from bright and motivated students. Our transparent admission process ensures 
            fair evaluation of every candidate.
          </p>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Admission Process</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="relative"
                >
                  {item.step < 4 && (
                    <div className="hidden lg:block absolute top-16 right-0 w-12 h-1 bg-blue-300" />
                  )}
                  <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Step {item.step}: {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Eligibility and Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h3>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="mb-6 text-blue-100 leading-relaxed">
              Our admissions team is excited to meet you and help you join the family. 
              We accept applications throughout the academic year.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold mb-1">Contact Us</p>
                <p className="text-blue-100">sreevidhyajyothi@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-blue-100"> +91 96113 23437</p>
                <p className="text-blue-100"> +91 83106 18798</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-blue-100">#10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073</p>
              </div>
            </div>
            <button
              onClick={onAdmissionClick}
              className="w-full bg-white hover:bg-yellow-300 text-blue-600 hover:text-blue-700 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Application Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
