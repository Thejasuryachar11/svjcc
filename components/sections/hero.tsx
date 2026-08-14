'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PrimaryButton } from '@/components/shared/buttons';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from "react";

interface HeroProps {
  onAdmissionClick: () => void;
}

const images = [
  "/1.1.jpg",
  "/a3.png",
  "/3.jpg",
  "/4.jpg",
  "/event.jpg"
];

export function HeroSection({ onAdmissionClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
  const durations = [10000, 3000, 3000, 3000];

  const timer = setTimeout(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  }, durations[currentImageIndex]);

  return () => clearTimeout(timer);
}, [currentImageIndex]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Welcome to Sree Vidhya Jyothi Coaching Centre (R)
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 mb-2 leading-tight">
                Sree Vidhya 
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                Jyothi Coaching Centre (R)
              </h1>
              <p className="text-xl text-slate-600 mt-4 font-semibold">Excellence in Education, Nurturing Future Leaders</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              Sree Vidhya Jyothi Coaching Centre (R) is dedicated to providing world-class education with modern facilities, 
              experienced faculty, and a nurturing environment where every student can thrive and achieve their full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <PrimaryButton onClick={onAdmissionClick}>
                Apply for Admission
              </PrimaryButton>
              
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-8 mt-12 pt-8 border-t border-slate-200"
            >
              <div>
                <p className="text-3xl font-bold text-blue-600">25+</p>
                <p className="text-slate-600 text-sm">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">250+</p>
                <p className="text-slate-600 text-sm">Students Enrolled</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-slate-600 text-sm">Expert Faculty</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative h-full"
>
  <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">

    {images.map((image, index) => (
      <Image
        key={image}
        src={image}
        alt={`Campus ${index + 1}`}
        width={image === '/1.1.jpg' ? 3072 : 4096}
        height={image === '/1.1.jpg' ? 4096 : 3072}
        priority={index === 0}
        className={`absolute inset-0 object-contain transition-opacity duration-1000 ${
          index === currentImageIndex ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: '100%', height: '100%' }}
      />
    ))}

    {/* Overlay badge */}
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-end justify-center pb-6">
      <div className="text-white text-center">
        <p className="font-bold text-lg">
          Sree Vidhya Jyothi Coaching Centre (R)
        </p>
        <p className="text-sm">Modern Campus & Facilities</p>
      </div>
    </div>
  </div>
</motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"
        >
          <a
            href="#about"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
