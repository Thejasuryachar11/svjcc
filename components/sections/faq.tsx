'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the admission process at BlueMoon?',
      answer:
        'Our admission process includes filling an application form, taking an entrance exam, a personal interview with our admission team, and final selection. You can start the process anytime during the academic year.',
    },
    {
      question: 'What are the tuition fees and payment options?',
      answer:
        'Tuition fees vary based on class level. We offer flexible payment options including monthly, quarterly, and annual payment plans. Contact our finance office for detailed fee structure.',
    },
    {
      question: 'Do you provide transportation facilities?',
      answer:
        'Yes, we have a comprehensive Coaching Centre bus service covering various routes in the city. Transportation fee is separate from tuition and can be customized based on your route.',
    },
    {
      question: 'What extracurricular activities are available?',
      answer:
        'We offer a wide range of activities including sports (cricket, basketball, badminton), cultural programs, coding clubs, debate, photography, music, and various academic clubs.',
    },
    {
      question: 'Are scholarships available for students?',
      answer:
        'Yes, we offer merit-based scholarships for academically excellent students and need-based scholarships for deserving students. Apply during the admission process.',
    },
    {
      question: 'What is the student-teacher ratio?',
      answer:
        'We maintain a favorable student-teacher ratio of 25:1 to ensure personalized attention and better academic support for each student.',
    },
    {
      question: 'How does BlueMoon ensure student safety?',
      answer:
        'We have advanced security measures including CCTV monitoring, trained security personnel, secure access control, regular safety drills, and a dedicated counseling team.',
    },
    {
      question: 'What is the dress code policy?',
      answer:
        'BlueMoon has a formal Coaching Centre uniform that students are required to wear. The uniform code varies slightly by class level and season.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Help & Support
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about admissions, facilities, and Coaching Centre life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-lg border border-slate-200 hover:border-blue-300 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gradient-to-br from-blue-50 to-white border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Didn&apos;t find what you&apos;re looking for?</h3>
          <p className="text-blue-100 mb-2">
            Our admissions team is ready to help answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <span className="text-sm text-blue-100">
              <strong>Email:</strong> sreevidhyajyothi@gmail.com
            </span>
            <span className="hidden sm:inline text-blue-100">•</span>
            <span className="text-sm text-blue-100">
              <strong>Phone:</strong> +91 9611323437, +91 8310618798
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sreevidhyajyothi@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Email Us
            </a>
            <a
              href="tel:+917676485246"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
