'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
          {/* Left — Branding */}
          <div className="flex flex-col gap-4 md:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-15 h-15 relative">
                <Image
                  src="/logo.jpg"
                  alt="BlueMoon Coaching Centre Logo"
                  width={293}
                  height={256}
                  style={{ width: '100%', height: '100%' }}
                  className="object-contain rounded-full"
                />
              </div>

              <div>
                <p className="font-bold text-blue-400 text-base tracking-wide">
                  Sree Vidhya Jyothi Coaching Centre (R)
                </p>
                
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Excellence in Education — Nurturing young minds for a bright future
              through creativity, discipline and quality learning.
            </p>

            {/* <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          {/* Middle — Quick Links */}
          <div className="md:mx-auto">
            <h3 className="font-semibold text-white mb-4 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right — Contact */}
          <div className="md:ml-auto">
            <h3 className="font-semibold text-white mb-4 text-lg">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  #10/16, Ramodaya Complex, 8th Cross, Vishwesharaiah Layout, Sidedahalli Main Road, Banglore - 560073
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+917676485246"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  +91 9611323437
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:sreevidhyajyothi@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  sreevidhyajyothi@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Sree Vidhya Jyothi Coaching Centre (R). All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-slate-800 pt-8">
          <div className="bg-gradient-to-r from-blue-900/30 to-slate-900/30 rounded-xl p-6 text-center shadow-sm">
            <p className="text-slate-400 text-sm mb-2">
              Website Developed by{' '}
              <span className="text-blue-400 font-semibold">
               <a
                href="https://www.charvexglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Charvex Global LLP
              </a>
              </span>
            </p>

            

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-slate-400">
             

              <span className="hidden sm:inline text-slate-600">•</span>

              <a
                href="tel:+919482350233"
                className="hover:text-blue-400 transition-colors"
              >
                +91 94823 50233
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

