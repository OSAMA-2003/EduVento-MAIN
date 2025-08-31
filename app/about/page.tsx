'use client';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import AboutContent from '@/components/AboutContent';
import { BookOpen, Users, Award, } from 'lucide-react';
import HeroComponent from '@/components/HeroComponent';

export default function About() {


  return (
    <main className="min-h-screen">
      
      {/* Hero */}
        <HeroComponent
          headingTop="من"
          headingHighlight="نحن"
          subtitle="أكاديمية رائدة في التعليم الرقمي تهدف إلى تمكين الأفراد من اكتساب المهارات اللازمة لمواكبة التطور التقني والمهني في العصر الحديث"
         
          ctaText="اكتشف قصتنا"
          scrollToClass="about-content"
        />


      {/* About Content */}
      <div className="about-content">
        <AboutContent />
      </div>

      
    </main>
  );
}
