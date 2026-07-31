'use client';

import { useState } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { AdmissionModal } from '@/components/shared/admission-modal';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { AcademicsSection } from '@/components/sections/academics';
import { FeaturesSection } from '@/components/sections/features';
import { FacilitiesSection } from '@/components/sections/facilities';
import { AdmissionsSection } from '@/components/sections/admissions';
import { GallerySection } from '@/components/sections/gallery';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { StatsSection } from '@/components/sections/stats';
import { StudentLifeSection } from '@/components/sections/student-life';
import { ContactBluemoonSection } from '@/components/sections/contact-bluemoon';
import { FAQSection } from '@/components/sections/faq';

export default function Home() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Add padding for fixed navbar */}
      <div className="pt-16">
        <HeroSection onAdmissionClick={() => setIsAdmissionModalOpen(true)} />
        <AboutSection />
        <AcademicsSection />
        <FeaturesSection />
        <FacilitiesSection />
        <StatsSection />
        <StudentLifeSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionsSection onAdmissionClick={() => setIsAdmissionModalOpen(true)} />
        <ContactBluemoonSection />
        <FAQSection />
      </div>

      <Footer />

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919611323437?text=Hello%20Sree%20Vidhya%20Jyothi%20Coaching%20Centre%20(R),%20I%20would%20like%20to%20inquire%20about%20your%20coaching%20programs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        title="Chat with us on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.513.909-2.588 2.283-3.039 3.826-1.674-1.38-2.727-3.331-2.727-5.501 0-4.446 3.662-8.049 8.264-8.049 2.213 0 4.285.848 5.845 2.354C15.138 1.897 16.823.857 18.708.857c4.437 0 8.038 3.614 8.038 8.05 0 2.17-1.053 4.121-2.727 5.501-.451-1.543-1.526-2.917-3.039-3.826a9.865 9.865 0 00-5.031-1.378M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" />
        </svg>
      </a>
    </main>
  );
}
