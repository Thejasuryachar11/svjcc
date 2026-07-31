'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function FacilitiesSection() {
  const facilities = [
    {
      id: 1,
      title: 'Modern Library',
      description: 'Extensive collection of books, digital resources, and quiet study areas for research and learning.',
      image: '/library.jpg',
    },
    {
      id: 2,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including basketball court, cricket ground, and swimming pool.',
      image: '/sports.jpg',
    },
    {
      id: 3,
      title: 'Advanced Science Lab',
      description: 'State-of-the-art laboratory with modern equipment for practical experimentation and discovery.',
      image: '/lab.jpg',
    },
    {
      id: 4,
      title: 'Graduation Ceremony',
      description: 'Celebrating student achievements with pride and creating memorable moments for our community.',
      image: '/graduation.jpg',
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
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Campus Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            World-Class Infrastructure
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our campus is equipped with modern facilities designed to support academic excellence 
            and overall student development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={itemVariants}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{facility.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
