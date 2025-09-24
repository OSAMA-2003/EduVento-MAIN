'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { fetchAllCourses } from '@/lib/api';
import CourseCard from '@/components/CourseCard';
import { CourseApiResponse } from '@/lib/types';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const PopularCourses = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isCardInView = useInView(cardRef, { once: true, margin: '-100px' });
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const [courses, setCourses] = useState<CourseApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      console.log('🚀 PopularCourses: Fetching popular courses...');
      const data = await fetchAllCourses();

      // ✅ Use backend order directly (limit to 8 if needed)
      const popular = data.slice(0, 8);

      setCourses(popular);
    } catch (err) {
      console.error('❌ PopularCourses Error:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

  return (
    <section className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden" ref={ref}>
      {/* ✅ Enhanced Background with Brand Gradients */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-logo-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ✅ Enhanced Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-primary-yellow">الدورات</span>{" "}
            <span className="text-white">الأكثر طلبًا</span>
          </h2>
          
          <motion.div
            className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full shadow-lg mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: '96px' } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
اعرف أكتر الكورسات المطلوبة اللي بتساعد آلاف الناس يطوروا من مهاراتهم ويحققوا أحلامهم في الشغل            </p>
        </motion.div>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-4">
              <div className="spinner-primary w-8 h-8"></div>
              <span className="text-white text-lg">جاري تحميل الدورات الشعبية...</span>
            </div>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <BookOpen className="h-16 w-16 text-white/50 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">لا توجد دورات متاحة</h3>
              <p className="text-gray-200">سيتم إضافة دورات جديدة قريباً</p>
            </div>
          </div>
        ) : (
          <motion.div
            ref={cardRef}
            // initial={{ opacity: 0, y: 50 }}
            animate={isCardInView ? { opacity: 0, y: 0 } : { opacity: 1, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative md:px-10 md:py-5">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet-custom',
                  bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                dir="rtl"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                className="pb-16"
              >
                {courses.map((course, index) => (
                  <SwiperSlide key={course.id}>
                    {/* ✅ Using CourseCard Component */}
                    <CourseCard 
                      course={course}
                      index={index}
                      variant={index === 0 || index === 3 || index === 6 ? 'featured' : 'default'} // Mix featured and default variants
                      showInstructor={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* ✅ Enhanced Custom Navigation Arrows */}
              <button className="custom-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full w-14 h-14 items-center justify-center text-logo-blue hover:bg-white hover:text-secondary-green transition-all duration-300 group border border-white/20">
                <ArrowLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button className="custom-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full w-14 h-14 items-center justify-center text-logo-blue hover:bg-white hover:text-secondary-green transition-all duration-300 group border border-white/20">
                <ArrowLeft className="rotate-180 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ✅ Enhanced CTA Section */}
        <motion.div
          ref={ctaRef}
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              مستعد لتطوير مهاراتك؟
            </h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              اكتشف مجموعة واسعة من الدورات المصممة خصيصاً لتحقيق أهدافك المهنية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/courses"
                className="group btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              >
                <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>عرض جميع الدورات</span>
                <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/about"
                className="text-white/90 hover:text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                تعرف علينا أكثر
              </Link>
            </div>

           
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default PopularCourses;
