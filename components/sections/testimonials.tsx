'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    if (!autoScroll) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [autoScroll]);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      message:
        'Sree Vidhya Jyothi Coaching Centre has completely transformed my son\'s academic journey. The dedicated teachers and supportive environment have made all the difference.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Parent',
      message:
        'My daughter has grown not just academically but also personally at Sree Vidhya Jyothi Coaching Centre. The holistic approach to education is truly remarkable.',
      rating: 5,
    },
    {
      name: 'Arjun Verma',
      role: 'Student',
      message:
        'Sree Vidhya Jyothi Coaching Centre is more than just a Coaching Centre; it\'s a family. The teachers care about our growth, and the facilities are world-class.',
      rating: 5,
    },
    {
      name: 'Anjali Singh',
      role: 'Parent',
      message:
        'The infrastructure, faculty, and overall environment at Sree Vidhya Jyothi Coaching Centre are outstanding. I would definitely recommend it to other parents.',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      role: 'Student',
      message:
        'The co-curricular activities and sports programs at Sree Vidhya Jyothi Coaching Centre helped me discover my talents and build confidence.',
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      role: 'Parent',
      message:
        'Excellent teaching quality and student safety are top priorities. I\'m very impressed with the Coaching Centre\'s management.',
      rating: 5,
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
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            What Parents & Students Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from our community members who have experienced the Sree Vidhya Jyothi Coaching Centre difference.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-blue-400 text-blue-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-700 mb-4 leading-relaxed italic">
                &quot;{testimonial.message}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-blue-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-blue-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-blue-400 text-blue-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-700 mb-4 leading-relaxed italic">
                &quot;{testimonials[currentIndex].message}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-blue-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-blue-600">{testimonials[currentIndex].role}</p>
              </div>

              {/* Counter */}
              <p className="text-center text-sm text-slate-500 mt-6">
                {currentIndex + 1} of {testimonials.length}
              </p>
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => {
                setAutoScroll(false);
                setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
              }}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              title="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => {
                setAutoScroll(false);
                setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
              }}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              title="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => setAutoScroll(!autoScroll)}
              className={`p-2 rounded-lg transition-colors font-medium text-sm px-4 ${
                autoScroll
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-slate-300 hover:bg-slate-400 text-slate-700'
              }`}
              title={autoScroll ? 'Pause auto-scroll' : 'Resume auto-scroll'}
            >
              {autoScroll ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
