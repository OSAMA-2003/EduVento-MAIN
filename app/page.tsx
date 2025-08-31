'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularCourses from '@/components/PopularCourses';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import WhatPeopleSay from '@/components/WhatPeopleSay';
import Footer from '@/components/Footer';
import StorySection from '@/components/StorySection';


export default function Home() {


   useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden"
     >
      
      <HeroSection />
      <StorySection/>
      <WhyChooseUs />
      <PopularCourses />
      <WhatPeopleSay/>
      <BlogsSection />
      <ContactSection />
      
    </main>
  );
}