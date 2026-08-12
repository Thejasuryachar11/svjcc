'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/1.1.jpg', alt: 'Campus Building', category: 'Campus' },
    { src: '/classroom.jpg', alt: 'Modern Classroom', category: 'Academics' },
    { src: '/library.jpg', alt: 'Coaching Centre Library', category: 'Facilities' },
    { src: '/lab.jpg', alt: 'Science Lab', category: 'Academics' },
    { src: '/sports.jpg', alt: 'Sports Complex', category: 'Sports' },
    { src: '/event.jpg', alt: 'Coaching Centre Event', category: 'Events' },
    { src: '/graduation.jpg', alt: 'Graduation Ceremony', category: 'Events' },
    { src: '/logo.jpeg', alt: 'Coaching Centre Logo', category: 'Identity' },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Photo Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Moments Of Ours
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our campus life, academic activities, and special moments captured throughout the year.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.src === '/1.1.jpg' ? 3072 : image.src === '/library.jpg' ? 2072 : image.src === '/graduation.jpg' ? 2052 : 4096}
                height={image.src === '/1.1.jpg' ? 4096 : image.src === '/library.jpg' ? 1379 : image.src === '/graduation.jpg' ? 3024 : 3072}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full h-96 md:h-screen md:max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery"
              width={selectedImage === '/1.1.jpg' ? 3072 : selectedImage === '/library.jpg' ? 2072 : selectedImage === '/graduation.jpg' ? 2052 : 4096}
              height={selectedImage === '/1.1.jpg' ? 4096 : selectedImage === '/library.jpg' ? 1379 : selectedImage === '/graduation.jpg' ? 3024 : 3072}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
