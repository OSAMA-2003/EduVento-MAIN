'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Course } from '@/lib/types'

import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award, 
  Play,
  CheckCircle,
  Globe,
  Download,
  Share2,
  Heart,
  TrendingUp,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CourseCard from '../CourseCard';

interface CourseDetailsProps {
  course: Course;
  relatedCourses?: any[];
}

const CourseDetails = ({ course, relatedCourses }: CourseDetailsProps) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const relatedRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const isSidebarInView = useInView(sidebarRef, { once: true, margin: '-100px' });
  const isRelatedInView = useInView(relatedRef, { once: true, margin: '-100px' });

  // ✅ Console logging for debugging
  console.group('🎯 COURSE DETAILS COMPONENT');
  console.log('📚 Course Data:', course);
  console.log('🔗 Related Courses:', relatedCourses);
  console.groupEnd();

  // ✅ Parse full_description to extract learning points
  const parseFullDescription = (fullDesc: string) => {
    if (!fullDesc) return [];
    
    // Split by numbers (1 -, 2 -, etc.) and filter empty strings
    const parts = fullDesc.split(/\d+\s*-\s*/).filter(part => part.trim());
    return parts.map(part => part.trim().replace(/\r\n/g, ''));
  };

  const learningPoints = parseFullDescription(course.WhatLearn);


  // Get level color

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
      case 'مبتدئ':
        return 'bg-secondary-green';
      case 'intermediate':
      case 'متوسط':
        return 'bg-primary-yellow text-primary-dark';
      case 'advanced':
      case 'متقدم':
      case 'higher':
        return 'bg-alert-red';
      default:
        return 'bg-logo-blue';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* ✅ Enhanced Hero Section */}
      <section className="relative bg-gradient-primary-enhanced text-white py-24 md:py-32 overflow-hidden" ref={heroRef}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          {/* Floating elements */}
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-primary-yellow/50 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              
              {/* Course Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Level Badge */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className={`inline-flex items-center gap-2 ${getLevelColor(course.level)} text-white px-6 py-3 rounded-full font-bold shadow-xl backdrop-blur-sm`}>
                    <TrendingUp className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
                  <span className="text-white">{course.title}</span>
                </h1>
                
                <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-lg">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: <Clock className="h-5 w-5" />, label: course.duration, color: 'bg-logo-blue' },
                    { icon: <Users className="h-5 w-5" />, label: `${course.students_numbers} طالب`, color: 'bg-secondary-green' },
                    { icon: <Star className="h-5 w-5" />, label: `${course.starts} `, color: 'bg-primary-yellow' },
                    { icon: <BookOpen className="h-5 w-5" />, label: `${learningPoints.length} موضوع`, color: 'bg-alert-red' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -2, scale: 1.05 }}
                    >
                      <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 text-white`}>
                        {stat.icon}
                      </div>
                      <span className="text-sm font-semibold">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Instructor Card */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 flex items-center justify-center border-2 border-white/30 shadow-xl">
                      {course.Instructor_image_url && course.Instructor_image_url !== "test Instructor_image 1" ? (
                        <Image
                          src={course.Instructor_image_url} 
                          alt={course.Instructor_name}
                          className="w-full h-full object-cover"
                          width={50}
                          height={50}
                        />
                        
                      ) : (
                        <Users className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-200 text-sm">المدرب</p>
                      <p className="font-bold text-xl text-white">{course.Instructor_name}</p>
                      <p className="text-primary-yellow text-sm">مدرب معتمد</p>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <a
                    href="https://wa.me/201201345760"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group btn-primary flex items-center justify-center gap-3 px-8 py-4 text-lg">
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>اشترك دلوقتي</span>
                    </button>
                  </a>
                  
                  <div className="flex gap-3">
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Course Image & Price Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {course.image_url && course.image_url !== "test image_url 1" ? (
                    <Image
                      src={course.image_url}
                      alt={course.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                       width={250}
                          height={150}
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-radial-blend flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <BookOpen className="h-24 w-24 text-white/80 drop-shadow-lg" />
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="h-8 w-8 text-logo-blue ml-1" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-yellow/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-green/30 rounded-full blur-2xl"></div>
                </div>
                
                {/* Enhanced Price Card */}
                {/* <motion.div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mt-8 border border-white/20 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-yellow/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-4xl font-bold text-primary-dark mb-4">
                      {course.discountedPrice ? (
                        <>
                          <span className="text-secondary-green">{course.discountedPrice} ج.م</span>
                          <br />
                          <span className="text-lg text-gray-500 line-through">
                            {course.price} ج.م
                          </span>
                        </>
                      ) : (
                        <span className="text-logo-blue">{course.price || 'مجاني'}</span>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-secondary-green" />
                        <span>وصول مدى الحياة</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Award className="h-4 w-4 text-primary-yellow" />
                        <span>شهادة إتمام</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Download className="h-4 w-4 text-logo-blue" />
                        <span>مواد قابلة للتحميل</span>
                      </div>
                    </div>
                    
                    <button className="w-full btn-gradient-primary text-lg font-bold py-4 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        اشترك الآن
                        <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                </motion.div> */}

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Enhanced Course Content */}
      <div className="container mx-auto px-4 py-20 relative">

         {/* ✅ Breadcrumb Navigation */}
        <motion.nav
          className="mb-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="مسار التنقل"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-logo-blue hover:text-secondary-green transition-colors font-medium">
                الرئيسية
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/courses" className="text-logo-blue hover:text-secondary-green transition-colors font-medium">
                الكورسات
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary-dark font-semibold" aria-current="page">
                {course.title || 'الكورس الحالي'}
              </span>
            </div>
          </div>
        </motion.nav>


        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="xl:col-span-2" ref={contentRef}>
              
              {/* Course Description */}
              <motion.section
                className="card-primary mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-logo-blue">وصف الكورس</h2>
                </div>
                <div className="text-gray-300 leading-relaxed text-lg">
                  {course.description}
                </div>
              </motion.section>

              {/* What You'll Learn */}
              {learningPoints.length > 0 && (
                <motion.section
                  className="card-primary mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-green to-primary-yellow rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-logo-blue">ماذا ستتعلم</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {learningPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                      >
                        <div className="w-6 h-6 bg-secondary-green rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Full Description */}
              <motion.section
                className="card-primary mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-alert-red rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-logo-blue">تفاصيل الكورس</h2>
                </div>
                <div className="text-gray-200 leading-relaxed whitespace-pre-line text-lg">
                  {course.full_description}
                </div>
              </motion.section>
            </div>

            {/* ✅ Enhanced Sidebar */}
            <div ref={sidebarRef}>
              
              {/* Course Info Card */}
              <motion.div
                className="card-primary mb-8 top-8"
                initial={{ opacity: 0, x: 30 }}
                animate={isSidebarInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-logo-blue">معلومات الكورس</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'المستوى', value: course.level, icon: <TrendingUp className="h-4 w-4" /> },
                    { label: 'المدة', value: course.duration, icon: <Clock className="h-4 w-4" /> },
                    { label: 'عدد الطلاب', value: course.students_numbers, icon: <Users className="h-4 w-4" /> },
                    { label: 'اللغة', value: course.language || 'العربية', icon: <Globe className="h-4 w-4" /> },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                      <div className="flex items-center gap-2">
                        <div className="text-logo-blue group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-gray-600 font-medium">{item.label}</span>
                      </div>
                      <span className="font-bold text-primary-dark">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Instructor Card */}
              <motion.div
                className="card-primary mb-8"
                initial={{ opacity: 0, x: 30 }}
                animate={isSidebarInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-yellow to-secondary-green rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-logo-blue">المدرب</h3>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-200 mx-auto mb-4 border-4 border-white shadow-xl">
                    {course.Instructor_image_url && course.Instructor_image_url !== "test Instructor_image 1" ? (
                      <Image
                        src={course.Instructor_image_url} 
                        alt={course.Instructor_name}
                        className="w-full h-full object-cover"
                         width={50}
                          height={50}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-logo-blue to-secondary-green">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-xl text-logo-blue mb-2">{course.Instructor_name}</h4>
                  <p className="text-gray-300 mb-4">مدرب معتمد</p>
                  
                  {/* <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-secondary-green">4.9</div>
                      <div className="text-xs text-gray-400">تقييم</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-yellow">50+</div>
                      <div className="text-xs text-gray-400">دورة</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-logo-blue">1K+</div>
                      <div className="text-xs text-gray-400">طالب</div>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Course Features */}
              <motion.div
                className="card-primary"
                initial={{ opacity: 0, x: 30 }}
                animate={isSidebarInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-logo-blue mb-6">مميزات الكورس</h3>
                <div className="space-y-4">
                  {[
                    { icon: <CheckCircle className="h-5 w-5" />, text: 'وصول مدى الحياة', color: 'text-secondary-green' },
                    { icon: <Award className="h-5 w-5" />, text: 'شهادة إتمام معتمدة', color: 'text-primary-yellow' },
                    { icon: <Download className="h-5 w-5" />, text: 'مواد قابلة للتحميل', color: 'text-logo-blue' },
                    { icon: <MessageCircle className="h-5 w-5" />, text: 'دعم تفاعلي', color: 'text-alert-red' },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                      <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    {/* ✅ Enhanced Related Courses */}
{relatedCourses && relatedCourses.length > 0 && (
  <section
    className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden"
    ref={relatedRef}
  >
    <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
    <div className="absolute inset-0 bg-pattern opacity-5"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary-yellow backdrop-blur-sm text-primary-dark px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg mb-6">
            كورسات مشابهة
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            كورسات قد تعجبك
          </h2>

          <div className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCourses.slice(0, 3).map((course, index) => (
            <div
              key={course.id}
            >
              <CourseCard
                course={course}
                index={index}
                variant={index === 0 ? "featured" : "default"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

    </div>
  );
};

export default CourseDetails;
