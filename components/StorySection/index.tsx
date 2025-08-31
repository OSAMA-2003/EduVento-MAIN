'use client';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  Quote,
  Star,
  Award,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const StorySection = () => {
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const roadmapRef = useRef(null);

  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-100px' });
  const isRoadmapInView = useInView(roadmapRef, { once: true, margin: '-100px' });

  // Stats data with enhanced styling
  const stats = [
    { 
      value: "73%", 
      label: "من الشركات بتفضل حد عنده مهارات عملية حتى لو تقديره مش عالي",
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      value: "65%", 
      label: "من الخريجين بيشتغلوا في مجال مختلف تمامًا عن اللي درسوه",
      icon: <Users className="h-6 w-6" />
    },
    { 
      value: "80%", 
      label: "من الشباب بيقولوا إنهم 'مش عارفين يبدأوا منين' بعد التخرج",
      icon: <Target className="h-6 w-6" />
    }
  ];

  // State for animated numbers
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isStatsInView) return;

    const targetValues = stats.map(stat => parseInt(stat.value.replace('%', '')));
    let animationFrame: number;
    const startTime = performance.now();
    const duration = 2000;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const updatedValues = targetValues.map(target => Math.floor(easeOutQuart * target));
      setAnimatedValues(updatedValues);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isStatsInView]);

  // Enhanced test questions
  const questions = [
    { 
      text: "عندك CV شكله احترافي؟", 
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      text: "عملت بورتفوليو بأعمالك أو مشاريعك؟", 
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      text: "دخلت إنترفيو قبل كده واتقبلت؟", 
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      text: "تعرف تشتغل كفريلانسر أو على منصات شغل حر؟", 
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      text: "فاهم متطلبات شغلك في السوق الفعلي؟", 
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  // Enhanced roadmap steps
  const roadmap = [
    { 
      step: "1", 
      title: "اكتشف نفسك", 
      description: "نعرفك على مهارات السوق الفعلية والمجالات اللي ليك فيها فرص حقيقية",
      icon: <Target className="h-8 w-8" />,
      color: "primary"
    },
    { 
      step: "2", 
      title: "طوّر نفسك", 
      description: "تدرب عملي مع موجهين بيشتغلوا فعلًا في المجال",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "secondary"
    },
    { 
      step: "3", 
      title: "جهّز شغلك", 
      description: "نساعدك تعمل بورتفوليو، CV، ولينكدإن قوي",
      icon: <Award className="h-8 w-8" />,
      color: "accent"
    },
    { 
      step: "4", 
      title: "ابدأ رحلتك", 
      description: "نوصلك لفرص تدريب وشغل أو فريلانس حقيقية",
      icon: <Zap className="h-8 w-8" />,
      color: "success"
    }
  ];

  // Enhanced testimonials
  // const testimonials = [
  //   { 
  //     name: "محمود أحمد", 
  //     role: "خريج تجارة", 
  //     quote: "مكنتش عارف أبدأ منين، Eduvento ساعدتني أشتغل على نفسي وأدخل أول شغل ليا.",
  //     image: "👨‍💼",
  //     rating: 5
  //   },
  //   { 
  //     name: "ندى محمد", 
  //     role: "خريجة إعلام", 
  //     quote: "اتعلمت هنا أكتر من سنين الكلية… كله عملي، كله واضح، كله مفيد.",
  //     image: "👩‍💻",
  //     rating: 5
  //   }
  // ];

  // Skills that college doesn't teach
  const collegeGaps = [
    { title: "مهارات تواصل", icon: <Users className="h-6 w-6" /> },
    { title: "شغل في فرق", icon: <Users className="h-6 w-6" /> },
    { title: "التفكير في حلول", icon: <Target className="h-6 w-6" /> },
    { title: "إدارة وقت", icon: <CheckCircle className="h-6 w-6" /> },
    { title: "تنفيذ فعلي مش مذاكرة", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <section id='story' className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* ✅ Enhanced Heading Section */}
        <div ref={headingRef}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-yellow-50 md:text-gradient-accent">الحكاية اللي</span>{" "}
            <span className="text-primary-yellow">محدش قالك عليها</span>
          </motion.h2>

          <motion.div
            className="card-primary max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-heading mb-6">
                طالب أو خريج ولسه مش لاقي طريق واضح؟
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                لو حسيت إنك واقف في حتة غريبة، مش عارف تبدأ منين، ولا تروح على فين...
                <span className="font-semibold text-heading"> حابب أقولك: إنت مش لوحدك.</span>
              </p>
            </div>

            {/* ✅ Enhanced Quotes Section */}
            <div className="bg-gradient-to-r from-logo-blue/10 to-secondary-green/10 border border-logo-blue/20 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                {[
                  "اتعلمت كتير، بس معرفش أطبّق.",
                  "بقدّم على شغل ومفيش رد.",
                  "كل وظيفة مكتوب فيها (خبرة مطلوبة)!",
                  "أنا كويس… بس مش عارف أوصل ده لأي شركة."
                ].map((quote, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Quote className="h-5 w-5 text-logo-blue mt-1 flex-shrink-0" />
                    <p className="text-gray-300 font-medium italic">{quote}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-alert-red/10 border border-alert-red/30 rounded-xl p-6">
              <p className="text-lg text-alert-red font-bold">
                دي مش غلطتك، بس لازم تكون مسؤوليتك.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ✅ Enhanced Reality Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            خليني أقولك الواقع بصراحة:
          </h3>

          <div className="bg-gradient-primary text-white p-8 rounded-2xl mb-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-primary-yellow" />
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-4">
  سوق الشغل دلوقتي مش بيدوّر على &quot;المتفوقين&quot;...
</p>
            <p className="text-2xl md:text-3xl font-bold text-primary-yellow">
  بيدوّر على &quot;الجاهزين&quot;!
</p>
          </div>
        </motion.div>

        {/* ✅ Enhanced Stats Section */}
        <div ref={statsRef} className="py-16 mb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-primary hover:shadow-2xl group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity "></div>
                  
                  <div className="flex items-center justify-center mb-4 text-logo-blue">
                    {stat.icon}
                  </div>
                  
                  <div className="text-6xl font-bold  text-yellow-200 mb-4">
                    {animatedValues[index]}%
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              className="text-xl text-white text-center mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isStatsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              يعني المنافسة عالية جدًا، ولو ماجهزتش نفسك كويس... هتتأخر، حتى لو كنت شاطر.
            </motion.p>
          </div>
        </div>

        {/* ✅ Enhanced Test Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-6">
            اختبر نفسك دلوقتي:
          </h3>

          <p className="text-xl text-gray-200 text-center mb-8">
            جاوب على الأسئلة دي في دماغك بسرعة 👇
          </p>

          <div className="max-w-3xl mx-auto">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                className="card-primary mb-4 text-right hover:shadow-lg transition-shadow duration-300 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-logo-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="text-logo-blue group-hover:text-secondary-green transition-colors duration-300">
                    {question.icon}
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
                    {question.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="alert-warning max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Zap className="h-6 w-6" />
            <div>
              <p className="text-lg font-semibold text-center mt-8 mb-4">
  لو إجابتك أغلبها <span className="text-red-600 font-bold">لأ</span>...<br />
  <span className="text-primary-dark font-bold">يبقى Eduvento معموله علشانك.</span>
</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ✅ Enhanced College Gap Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-green mb-6">
            ليه الكلية مش كفاية؟
          </h3>

          <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto">
            الكلية بتعلمك <span className="text-primary-yellow font-semibold">&quot;الأساس&quot;</span>، لكن الشغل محتاج:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {collegeGaps.map((item, index) => (
              <motion.div
                key={index}
                className="card-primary hover:shadow-xl group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-logo-blue group-hover:text-secondary-green transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="text-gray-300 font-semibold group-hover:text-gray-400 transition-colors duration-300">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-200 text-center max-w-4xl mx-auto">
            ودي كلها مش بتتشرح في المحاضرات، لكنها بتتحط في الـ CV والإنترفيو، 
            <span className="text-primary-yellow font-semibold"> وبتفرق فعلًا.</span>
          </p>
        </motion.div>

        {/* ✅ Enhanced Roadmap Section */}
        <div ref={roadmapRef} className="mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-8">
            خريطة الطريق مع Eduvento:
          </h3>

          <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto">
            تعالى نشوف إزاي ممكن نجهزك خطوة بخطوة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((step, index) => (
              <motion.div
                key={index}
                className="card-primary hover:shadow-2xl group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isRoadmapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
              >
                {/* Step connector line */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary-yellow" />
                  </div>
                )}

                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    step.color === 'primary' ? 'bg-gradient-primary' :
                    step.color === 'secondary' ? 'bg-secondary-green' :
                    step.color === 'accent' ? 'bg-primary-yellow' :
                    'bg-logo-blue'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-heading mb-3 group-hover:text-logo-blue transition-colors duration-300">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Enhanced Testimonials */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-green mb-12">
            ناس شبهك قالوا إيه؟
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-primary hover:shadow-2xl group cursor-pointer relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 left-6">
                  <Quote className="h-8 w-8 text-primary-yellow" />
                </div>
                
                <div className="text-center pt-6">
                  <div className="text-4xl mb-4">{testimonial.image}</div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary-yellow fill-current" />
                    ))}
                  </div>
                  
                 <p className="text-gray-300 italic mb-6 text-lg leading-relaxed group-hover:text-gray-400 transition-colors ">
  &quot;{testimonial.quote}&quot;
</p>

                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-200 font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* ✅ Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              جاهز تبدأ رحلتك؟
            </h3>
            <p className="text-primary-dark/80 mb-6 text-lg">
              انضم مئات الطلاب اللي غيروا مستقبلهم معانا
            </p>
           
            <button className="btn-primary">
              <Link href='/courses' >
              ابدأ دلوقتي
              </Link>
            </button>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
