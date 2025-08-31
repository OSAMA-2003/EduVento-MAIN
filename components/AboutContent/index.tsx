"use client";
import { useRef } from "react";
import {
  Award,
  Users,
  Target,
  Heart,
  BookOpen,
  Globe,
  TrendingUp,
  Zap,
  CheckCircle,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const AboutContent = () => {
  const valuesRef = useRef(null);
  const missionRef = useRef(null);



  const values = [
    {
      icon: Target,
      title: "الهدف",
      description:
        "هدفنا إننا نمكّن الناس عشان يكتسبوا المهارات اللي محتاجها سوق العمل الحديث، ويحققوا النجاح اللي بيحلموا بيه.",
      color: "from-logo-blue to-secondary-green",
    },
    {
      icon: Heart,
      title: "الشغف",
      description:
        "بناؤمن بقوة التعليم في تغيير الحياة، وبنسعى عشان نقدم تجربة تعليمية ملهمة ومؤثرة تلمس قلوب طلبتنا.",
      color: "from-primary-yellow to-alert-red",
    },
    {
      icon: Globe,
      title: "الرؤية",
      description:
        "رؤيتنا إننا نكون الشركة الرائدة في التعليم الرقمي في المنطقة العربية، ونساهم في بناء جيل واعد من المبدعين.",
      color: "from-secondary-green to-logo-blue",
    },
  ];

  const achievements = [
    { title: "شركة رائدة و متخصصة", description: "في التعليم التقني العملي" },
    { title: "شراكات استراتيجية", description: "مع العديد من شركات التكنولوجيا" },
    { title: "طريقة تعليم مبتكرة", description: "بتركّز على الشغل العملي" },
    { title: "مجتمع تعليمي قوي", description: "فيه مئات الطلبة والخبراء" },
  ];

  return (
    <div className="overflow-hidden">
      {/* ✅ Stats Section - Only change the number display */}
      {/* <section className="py-20 bg-gradient-mesh relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              إنجازاتنا بالأرقام
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 border border-white/20">
                  <div className={`w-14 h-14 bg-${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <AnimatedNumber 
                      value={stat.number} 
                      isInView={isStatsInView}
                      duration={stat.duration}
                    />
                  </div>
                  
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ✅ All other sections remain exactly the same */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative"
       
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-block bg-primary-yellow/20 text-primary-yellow px-4 py-2 rounded-full font-semibold text-sm mb-6">
                حكايتنا
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8 leading-tight">
                <span className=" gradient-text-secondary">رحلتنا</span> للتميز
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-secondary-green rounded-full"></span>
                  أكاديمية Eduvento بدأت سنة 2024 برؤية واضحة: إن التعليم التقني
                  عالي الجودة لازم يكون متاح لكل الناس في المنطقة العربية. بدأنا
                  واحنا عندنا إيمان عميق إن التعليم هو المفتاح الأساسي للتقدم
                  والتطور في حياة كل واحد سواء على المستوى الشخصي أو المهني.
                </p>

                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-logo-blue rounded-full"></span>
                  على مدار الشهور اللي فاتت، قدرنا ندرب مئات الطلبة وساعدناهم
                  يطوروا مهاراتهم ويلاقوا فرص شغل أحسن. إحنا فخورين جداً بإننا
                  جزء من رحلة نجاح طلبتنا وشاهدين على التغييرات الرهيبة اللي
                  حصلت في حياتهم المهنية.
                </p>

                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-primary-yellow rounded-full"></span>
                  النهاردة، مكملين في التطوير والابتكار عشان نقدم أحسن تجربة
                  تعليمية ممكنة، مع التركيز على الجودة والتفاعل والدعم المستمر
                  للطلبة بتوعنا. هدفنا إننا نكون معاهم خطوة بخطوة في كل مراحل
                  تطورهم المهني.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-green flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h4 className="font-semibold text-primary-dark text-sm group-hover:text-logo-blue transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <Image
                  src="/images/company.avif"
                  alt="قصتنا"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden"
        ref={valuesRef}
      >
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-yellow backdrop-blur-sm text-primary-dark px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg mb-6">
              قيمنا الأساسية
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="text-primary-yellow">المبادئ</span> اللي بنؤمن
              بيها
            </h2>

            <div className="w-32 h-2 bg-gradient-to-r from-primary-yellow via-secondary-green to-logo-blue mx-auto rounded-full shadow-lg mb-6"></div>

            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              إحنا بنؤمن بمجموعة من القيم الأساسية اللي بتوجّه شغلنا وبتحدد
              هويتنا في رحلة التعليم والتطوير
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 relative overflow-hidden">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10 text-center">
                    <div
                      className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      <value.icon className="h-10 w-10 text-primary-dark" />
                    </div>

                    <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-logo-blue transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tl from-white/5 to-transparent rounded-full translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative"
        ref={missionRef}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              <span className="md:text-gradient-primary">رسالتنا</span> ورؤيتنا
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="card-primary hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-logo-blue to-secondary-green rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-primary-dark" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-logo-blue transition-colors duration-300">
                  رسالتنا
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  بنسعى إننا نمكّن الأفراد في المنطقة العربية عن طريق إننا نقدم
                  لهم تعليم تقني عالي الجودة، مبني على أحدث المعايير العالمية،
                  ومتصمم عشان يواكب متطلبات سوق الشغل دلوقتي. إحنا بنؤمن إن
                  التعليم الكويس حق لكل الناس مش بس لفئة معينة.
                </p>

                <div className="mt-6 flex items-center gap-4 text-sm text-secondary-green font-semibold">
                  <Lightbulb className="h-5 w-5" />
                  <span>تعليم • تمكين • تطوير</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="card-primary hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 to-alert-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-alert-red rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-primary-dark" />
                </div>

                <h3 className="text-2xl font-bold text-primary pb-4 group-hover:text-primary-yellow transition-colors duration-300">
                  رؤيتنا
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  رؤيتنا إننا نكون المنصة الرائدة والأكثر ثقة في التعليم الرقمي
                  في المنطقة العربية، ونساهم في بناء جيل من المحترفين الشاطرين
                  اللي يقدروا ينافسوا عالمياً ويبدعوا في مجالاتهم، وفي نفس الوقت
                  نحافظ على هويتنا العربية وقيمنا الأصيلة.
                </p>

                <div className="mt-6 flex items-center gap-4 text-sm text-primary-yellow font-semibold">
                  <TrendingUp className="h-5 w-5" />
                  <span>ريادة • إبداع • تميز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Enhanced Features Grid */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative"
       
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            مميزات تخلينا في المقدمة
          </h3>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20">
          {[
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: "محتوى عملي",
              desc: "متصمم عشان تحقق نتايج حقيقية في سوق الشغل مع مشاريع على أرض الواقع",
              color: "primary",
              delay: 0,
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "مجتمع بيساندك",
              desc: "مش رحلة لوحدك لا مع جروب متعاون من الزملا والخبرا",
              color: "secondary",
              delay: 0.1,
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              title: "توجيه مهني",
              desc: "تجهيز CV، تحضير للمقابلات، وصلك بفرص شغل حقيقية",
              color: "accent",
              delay: 0.2,
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "شهادات معتمدة",
              desc: "شهادات معترف بيها في السوق تضيف قيمة حقيقية لملفك المهني",
              color: "success",
              delay: 0.3,
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "تعلم تفاعلي",
              desc: "ورش عمل تفاعلية ومشاريع عملية تضمن إنك تطبق اللي اتعلمته",
              color: "primary",
              delay: 0.4,
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "متابعة التقدم",
              desc: "تتبع تقدمك وتطورك مع تقارير كل فترة ونصايح شخصية",
              color: "secondary",
              delay: 0.5,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card-primary hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  feature.color === "primary"
                    ? "bg-gradient-primary"
                    : feature.color === "secondary"
                    ? "bg-secondary-green"
                    : feature.color === "accent"
                    ? "bg-primary-yellow"
                    : "bg-logo-blue"
                }`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg ${
                    feature.color === "primary"
                      ? "bg-gradient-primary"
                      : feature.color === "secondary"
                      ? "bg-secondary-green"
                      : feature.color === "accent"
                      ? "bg-primary-yellow"
                      : feature.color === "success"
                      ? "bg-logo-blue"
                      : "bg-gradient-primary"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h4 className="text-xl font-bold text-heading mb-3 group-hover:text-logo-blue transition-colors duration-300">
                  {feature.title}
                </h4>

                <p className="text-gray-300  leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
