'use client';

import BlogsGrid from "@/components/BlogsGrid";
import HeroComponent from "@/components/HeroComponent";




export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <HeroComponent
        headingTop="مكتبة"
        headingHighlight="المقالات"
        subtitle={`اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا من خبراء المجال 
واكتشف آخر الاتجاهات في عالم البرمجة والتصميم`}
        ctaText="استكشف المقالات"
        scrollToClass="blogs-grid-section"
      />

      {/* ✅ Enhanced Content Section */}
      <section className="blogs-grid-section relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/20 to-transparent"></div>

        <div className="relative z-10">
          <BlogsGrid />
        </div>
      </section>
    </main>
  );
}
