'use client';

import CoursesGrid from '@/components/CoursesGrid';
import HeroComponent from '@/components/HeroComponent';
import WhatPeopleSay from '@/components/WhatPeopleSay';


export default function CoursesPage() {


  return (
    <main className="min-h-screen">




      {/* Hero */}
              <HeroComponent
                headingTop=" جميع الدورات "
                headingHighlight="التدريبية"
                subtitle={`اكتشف مجموعة واسعة من الدورات التدريبية المتخصصة المصممة لتطوير مهاراتك المهنية
              وتحقيق أهدافك في عالم التكنولوجيا والأعمال`}
                
                ctaText=" استكشف الكورسات "
                scrollToClass="courses-grid-section"
              />
      
                
      {/* Courses Grid Section */}
      <section className="courses-grid-section">
        <CoursesGrid />
      </section>
      <section>
        <WhatPeopleSay/>
      </section>

    </main>
  );
}
