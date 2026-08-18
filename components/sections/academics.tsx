'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function AcademicsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const academicImages = [
    { src: '/images/a1.png', width: 1618, height: 972 },
    { src: '/images/a2.png', width: 1012, height: 1555 },
    { src: '/images/a3.png', width: 1578, height: 997 },
    { src: '/images/a4.png', width: 1537, height: 1023 },
  ];

  return (
    <>
      <section id="academics" className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Academic Excellence
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
              Comprehensive Programs for Every Student
            </h2>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Following State Syllabus with classes from Nursery, LKG, UKG,
              1st–5th, 6th–8th, and 9th–10th. Our academic approach is designed
              to develop strong foundations and encourage a keen interest in
              learning.
            </p>

            <div className="mt-6 inline-block bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
  <p className="text-slate-700 font-semibold">
    Classes: 8th • 9th • 10th [CBSE • ICSE • State Syllabus],PUC : Science • Commerce • NEET • JEE • KCET • COMED-K(Competitive Exams)
  </p>
</div>
          </motion.div>

          {/* Auto Scrolling Images */}
          <div className="mt-12 relative overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {/* First set */}
              {academicImages.map((image, index) => (
                <button
                  key={`first-${image.src}`}
                  type="button"
                  onClick={() => setSelectedImage(image.src)}
                  className="group flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <Image
                    src={image.src}
                    alt={`Academic activity ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="420px"
                  />
                </button>
              ))}

              {/* Duplicate set for seamless marquee */}
              {academicImages.map((image, index) => (
                <button
                  key={`second-${image.src}`}
                  type="button"
                  onClick={() => setSelectedImage(image.src)}
                  className="group flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <Image
                    src={image.src}
                    alt={`Academic activity ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="420px"
                  />
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/20 text-white text-2xl hover:bg-white/30 transition"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Academic activity"
              width={1600}
              height={1200}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}