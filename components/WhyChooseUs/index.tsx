'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CheckCircle, 
  ArrowLeft, 
  Users, 
  Target, 
  BookOpen, 
  Briefcase,
  Star,
  Award,
  TrendingUp,
  Zap,
  X,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const comparisonRef = useRef(null);
  const featuresRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isComparisonInView = useInView(comparisonRef, { once: true, margin: '-100px' });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.1, delay },
  });

  const slideIn = (direction = 'left', delay = 0) => ({
    initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    animate: isComparisonInView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.8, delay },
  });

  return (
    <section className="py-20 bg-secondary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div ref={ref} className="container mx-auto max-w-7xl px-4 space-y-16 relative z-10">
        
        {/* ✅ Enhanced Hero Header */}
        <motion.div className="text-center" {...fadeIn(0)}>
         
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-50 md:text-gradient-accent">ليه تختار </span>
            <span className="text-primary-yellow">Eduvento</span>
            <span className="text-primary-yellow">؟</span>
          </h2>
          
          <motion.div
            className="w-24 h-2 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: '96px' } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl text-gray-300  mt-6 max-w-3xl mx-auto leading-relaxed"
            {...fadeIn(0.3)}
          >
            اكتشف الفرق الحقيقي في تجربة تعليمية متصممة خصوصًا عشان توصل لأهدافك في الشغل
          </motion.p>
        </motion.div>

        {/* ✅ Enhanced Value Proposition */}
        <motion.div 
          className="relative"
          {...fadeIn(0.2)}
        >
          <div className="card-primary hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Target className="h-8 w-8" />
                </div>
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 group-hover:text-logo-blue transition-colors duration-300">
                  رحلة كاملة مش مجرد كورسات
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  هنبدأ معاك من اللي إنت فيه دلوقتي ونوصلك للمكان اللي عايز تكون فيه. مش مجرد محتوى تعليمي، 
                  لا ده <span className="text-secondary-green font-semibold">خطة تطوير شخصية ومهنية كاملة</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Enhanced Comparison Section */}
        <div ref={comparisonRef} className="grid md:grid-cols-2 gap-8">
          
          {/* Eduvento Advantages */}
          <motion.div 
            className="relative"
            {...slideIn('left', 0)}
          >
            <div className="card-primary border-2 border-secondary-green/20 hover:border-secondary-green/40 hover:shadow-2xl transition-all duration-500 group">
              {/* Success badge */}
              <div className="absolute -top-4 right-6">
                <div className="bg-secondary-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ الأحسن
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-green mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-green rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  اللي يميز Eduvento:
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { 
                      text: "تقييم في الأول لمستواك واحتياجاتك", 
                      icon: <Target className="h-5 w-5" /> 
                    },
                    { 
                      text: "تركيز على التطبيق العملي والمشاريع", 
                      icon: <BookOpen className="h-5 w-5" /> 
                    },
                    { 
                      text: "متابعة لحد ما توصل للنتيجة", 
                      icon: <TrendingUp className="h-5 w-5" /> 
                    },
                    { 
                      text: "خطط شخصية لكل متدرب", 
                      icon: <Users className="h-5 w-5" /> 
                    }
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4 text-gray-300  p-3 rounded-lg hover:bg-secondary-green/5 transition-colors duration-300 group-hover:bg-secondary-green/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isComparisonInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    >
                      <div className="w-8 h-8 bg-secondary-green/20 rounded-full flex items-center justify-center text-secondary-green flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-lg leading-relaxed">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Others Disadvantages */}
          <motion.div 
            className="relative"
            {...slideIn('right', 0.2)}
          >
            <div className="card-primary border-2 border-alert-red/20 hover:border-alert-red/40 hover:shadow-2xl transition-all duration-500 group">
              {/* Warning badge */}
              <div className="absolute -top-4 right-6">
                <div className="bg-alert-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⚠️ متروحش هناك
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-alert-red mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-alert-red rounded-full flex items-center justify-center">
                    <X className="h-6 w-6 text-white" />
                  </div>
                  اللي بيقدموه الباقيين:
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { 
                      text: "كلام نظري من غير تطبيق عملي", 
                      icon: <X className="h-5 w-5" /> 
                    },
                    { 
                      text: "تدريب من غير متابعة أو تقييم", 
                      icon: <X className="h-5 w-5" /> 
                    },
                    { 
                      text: "خلص الكورس وخلصت العلاقة", 
                      icon: <X className="h-5 w-5" /> 
                    },
                    { 
                      text: "قوالب جاهزة للكل", 
                      icon: <X className="h-5 w-5" /> 
                    }
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4 text-gray-300  p-3 rounded-lg hover:bg-alert-red/5 transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isComparisonInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    >
                      <div className="w-8 h-8 bg-alert-red/20 rounded-full flex items-center justify-center text-alert-red flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-lg leading-relaxed">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        

        {/* ✅ Enhanced CTA Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-primary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-20"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-primary-yellow/20 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-secondary-green/20 rounded-full"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-yellow" />
                </div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                مش لوحدك في الرحلة دي
              </h3>
              
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                انضم لـ <span className="text-primary-yellow font-bold">مئات الطلاب</span> اللي حققوا أهدافهم المهنية 
                بمساعدة خبرانا ولحقوا يشتغلوا في وظايف أحلامهم
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href='/courses' >
                <motion.button 
                  className="btn-primary group flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />

                  <span>ابدأ رحلتك دلوقتي</span>
                </motion.button>
                </Link>

              <Link href='/about'>
                <button className="text-white/90 hover:text-white font-semibold py-3 px-6 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300">
                  اعرف أكتر
                </button>
              </Link>

              
              </div>
              
            
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
