'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function AcademicsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const academicImages = [
    '/images/a1.png',
    '/images/a2.png',
    '/images/a3.png',
    '/images/a4.png',
    
  ];

  return (
    <>
      <section id="academics" className="py-20 bg-slate-50">
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
                Classes: Nursery, LKG, UKG, 1st–5th, 6th–8th, 9th–10th
              </p>
            </div>
          </motion.div>

          {/* 5 Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {academicImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Image
                  src={image}
                  alt={`Academic activity ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </button>
            ))}
          </motion.div>
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