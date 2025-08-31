'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ArrowLeft, Play,Facebook,  Twitter,  Instagram,  Linkedin, } from 'lucide-react';


import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: '/images/h1.jpg',
      title: "لو لسه بتدوّر على أول خطوة… إحنا هنقولك تبدأ منين",
      subtitle: "ابدأ رحلتك التعليمية معانا واكتشف عالم جديد من المعرفة والمهارات",
      stats: { courses: "50+", students: "1000+", rating: "4.9" }
    },
    {
      image: '/images/h2.jpg',
      title: "الكل بيتكلم عن الكورسات... بس مين بيحكيلك عن الواقع؟",
      subtitle: "تعلم من خبراء متخصصين وطبق اللي اتعلمته في مشاريع حقيقية",
      stats: { courses: "30+", students: "800+", rating: "4.8" }
    },
    {
      image: '/images/h3.jpg',
      title: "الجامعة مش كفاية… وإحنا هنا علشان نكمّل الصورة!",
      subtitle: "كورسات عملية تأهلك لسوق العمل وتخليك مستعد للمستقبل",
      stats: { courses: "40+", students: "1200+", rating: "4.9" }
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* ✅ Updated overlay with brand gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-logo-blue/60 to-primary-dark/90" />
              
              {/* ✅ Pattern overlay */}
              <div className="absolute inset-0 bg-pattern opacity-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0   bg-black/80 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-6xl mx-auto"
            >
              {/* ✅ Enhanced title with gradient text */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="block text-white leading-[80px] md:leading-[120px] drop-shadow-2xl">
                  {slides[activeSlide].title}
                </span>
              </motion.h1>
              
              {/* ✅ Updated subtitle */}
              <motion.p
                className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[activeSlide].subtitle}
              </motion.p>

              {/* ✅ Stats Section */}
              {/* <motion.div
                className="flex flex-wrap justify-center gap-8 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <BookOpen className="h-5 w-5 text-primary-yellow" />
                  <span className="font-semibold text-white">{slides[activeSlide].stats.courses} كورس</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <div className="w-5 h-5 bg-secondary-green rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">👥</span>
                  </div>
                  <span className="font-semibold text-white">{slides[activeSlide].stats.students} طالب</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Star className="h-5 w-5 text-primary-yellow fill-current" />
                  <span className="font-semibold text-white">{slides[activeSlide].stats.rating} تقييم</span>
                </div>
              </motion.div> */}

              {/* ✅ Updated CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="#story">
                  <button className="group bg-primary-yellow text-primary-dark px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                    <span>اعرف أكتر</span>
                    <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                
                <Link href="/courses">
                  <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-primary-dark flex items-center gap-3">
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>شاهد الكورسات</span>
                  </button>
                </Link>
              </motion.div>

              {/* ✅ Additional brand element */}
              {/* <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10">
                  <div className="w-3 h-3 bg-secondary-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-200">متاح الآن - ابدأ مجاناً</span>
                </div>
              </motion.div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse z-20">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer transition-all duration-500 ${
              index === activeSlide 
                ? 'w-12 h-4' 
                : 'w-4 h-4'
            }`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveSlide(index)}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-500 ${
                index === activeSlide 
                  ? 'bg-primary-yellow shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
            
            {/* Active indicator glow effect */}
            {index === activeSlide && (
              <div className="absolute inset-0 rounded-full bg-primary-yellow animate-ping opacity-30" />
            )}
          </motion.div>
        ))}
      </div>

      

      {/* ✅ Side social links
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {['E', 'D', 'U', 'V','E','N','T','O'].map((social, index) => (
          <motion.a
            key={social}
            href="#"
            className="w-12 h-12  bg-white/10 hover:bg-black hover:text-white backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70  hover:border-primary-yellow group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-medium">{social.charAt(0)}</span>
          </motion.a>
        ))}
      </div> */}

      {/* ✅ Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-yellow/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
