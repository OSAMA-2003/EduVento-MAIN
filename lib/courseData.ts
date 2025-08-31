// export interface Course {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   video: string;
//   instructor: {
//     name: string;
//     bio: string;
//     image: string;
//     experience: string;
//   };
//   duration: string;
//   students: number;
//   rating: number;
//   price: number;
//   curriculum: string[];
//   requirements: string[];
//   outcomes: string[];
//   level: string;
//   language: string;
//   certificate: boolean;
// }


// // New data

// export const coursesData: Course[] = [
//   {
//     id: 1,
//     title: 'تطوير المواقع الإلكترونية',
//     description: 'دورة شاملة في تطوير المواقع الإلكترونية من الصفر حتى الاحتراف. ستتعلم في هذه الدورة جميع التقنيات الحديثة المستخدمة في تطوير المواقع بما في ذلك HTML5, CSS3, JavaScript, React, Node.js وقواعد البيانات.',
//     image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     video: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     instructor: {
//       name: 'أحمد محمد',
//       bio: 'مطور ويب محترف مع أكثر من 8 سنوات خبرة في تطوير المواقع والتطبيقات',
//       image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
//       experience: '8+ سنوات',
//     },
//     duration: '40 ساعة',
//     students: 1250,
//     rating: 4.8,
//     price: 299,
//     curriculum: [
//       'مقدمة في تطوير المواقع',
//       'HTML5 المتقدم',
//       'CSS3 والتصميم المتجاوب',
//       'JavaScript الأساسي',
//       'JavaScript المتقدم',
//       'React.js',
//       'Node.js والخوادم',
//       'قواعد البيانات',
//       'مشروع متكامل',
//     ],
//     requirements: [
//       'معرفة أساسية بالحاسوب',
//       'لا توجد خبرة برمجية مطلوبة مسبقاً',
//       'جهاز حاسوب مع اتصال بالإنترنت',
//     ],
//     outcomes: [
//       'بناء مواقع ويب متكاملة',
//       'استخدام التقنيات الحديثة في التطوير',
//       'التعامل مع قواعد البيانات',
//       'نشر المواقع على الإنترنت',
//     ],
//     level: 'مبتدئ إلى متقدم',
//     language: 'العربية',
//     certificate: true,
//   },
//   {
//     id: 2,
//     title: 'التصميم الجرافيكي',
//     description: 'احترف التصميم الجرافيكي باستخدام Adobe Photoshop و Illustrator. تعلم أساسيات التصميم والألوان والخطوط وكيفية إنشاء تصاميم احترافية للطباعة والويب.',
//     image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     video: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     instructor: {
//       name: 'سارة أحمد',
//       bio: 'مصممة جرافيك محترفة مع خبرة 6 سنوات في التصميم الرقمي والطباعة',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
//       experience: '6+ سنوات',
//     },
//     duration: '35 ساعة',
//     students: 980,
//     rating: 4.9,
//     price: 249,
//     curriculum: [
//       'أساسيات التصميم الجرافيكي',
//       'نظرية الألوان والخطوط',
//       'Adobe Photoshop الأساسي',
//       'Adobe Photoshop المتقدم',
//       'Adobe Illustrator الأساسي',
//       'Adobe Illustrator المتقدم',
//       'تصميم الهوية البصرية',
//       'التصميم للطباعة والويب',
//       'مشاريع عملية',
//     ],
//     requirements: [
//       'جهاز حاسوب بمواصفات متوسطة',
//       'تثبيت برامج Adobe Creative Suite',
//       'لا توجد خبرة مسبقة مطلوبة',
//     ],
//     outcomes: [
//       'إتقان برامج Adobe Photoshop و Illustrator',
//       'تصميم هويات بصرية احترافية',
//       'إنشاء تصاميم للطباعة والويب',
//       'فهم أساسيات التصميم والألوان',
//     ],
//     level: 'مبتدئ',
//     language: 'العربية',
//     certificate: true,
//   },
//   {
//     id: 3,
//     title: 'التسويق الرقمي',
//     description: 'تعلم استراتيجيات التسويق الرقمي الحديثة وإدارة الحملات الإعلانية على منصات التواصل الاجتماعي ومحركات البحث. اكتسب مهارات SEO و SEM والتسويق بالمحتوى.',
//     image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     video: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     instructor: {
//       name: 'محمد علي',
//       bio: 'خبير تسويق رقمي مع 7 سنوات خبرة في إدارة الحملات الإعلانية الناجحة',
//       image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
//       experience: '7+ سنوات',
//     },
//     duration: '30 ساعة',
//     students: 1500,
//     rating: 4.7,
//     price: 199,
//     curriculum: [
//       'مقدمة في التسويق الرقمي',
//       'استراتيجيات التسويق',
//       'تحسين محركات البحث (SEO)',
//       'الإعلانات المدفوعة (SEM)',
//       'التسويق عبر وسائل التواصل',
//       'التسويق بالمحتوى',
//       'التسويق بالبريد الإلكتروني',
//       'تحليل البيانات والمقاييس',
//       'حملات إعلانية عملية',
//     ],
//     requirements: [
//       'معرفة أساسية بالإنترنت',
//       'حساب على منصات التواصل الاجتماعي',
//       'لا توجد خبرة تسويقية مطلوبة',
//     ],
//     outcomes: [
//       'إنشاء استراتيجيات تسويق فعالة',
//       'إدارة حملات إعلانية ناجحة',
//       'تحسين ظهور المواقع في محركات البحث',
//       'تحليل أداء الحملات التسويقية',
//     ],
//     level: 'مبتدئ إلى متوسط',
//     language: 'العربية',
//     certificate: true,
//   },
//   {
//     id: 4,
//     title: 'تطوير تطبيقات الموبايل',
//     description: 'احترف تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS باستخدام React Native و Flutter. تعلم كيفية بناء تطبيقات عملية ونشرها على متاجر التطبيقات.',
//     image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     video: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     instructor: {
//       name: 'خالد حسن',
//       bio: 'مطور تطبيقات موبايل محترف مع 5 سنوات خبرة في تطوير التطبيقات',
//       image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
//       experience: '5+ سنوات',
//     },
//     duration: '50 ساعة',
//     students: 750,
//     rating: 4.8,
//     price: 399,
//     curriculum: [
//       'مقدمة في تطوير التطبيقات',
//       'أساسيات React Native',
//       'التنقل بين الشاشات',
//       'إدارة الحالة',
//       'التعامل مع APIs',
//       'قواعد البيانات المحلية',
//       'الإشعارات والخدمات',
//       'نشر التطبيقات',
//       'مشروع تطبيق متكامل',
//     ],
//     requirements: [
//       'معرفة أساسية بـ JavaScript',
//       'جهاز حاسوب بمواصفات جيدة',
//       'هاتف ذكي للاختبار',
//     ],
//     outcomes: [
//       'تطوير تطبيقات موبايل احترافية',
//       'نشر التطبيقات على المتاجر',
//       'التعامل مع APIs والخدمات',
//       'تصميم واجهات مستخدم جذابة',
//     ],
//     level: 'متوسط',
//     language: 'العربية',
//     certificate: true,
//   },
//   {
//     id: 5,
//     title: 'إدارة المشاريع',
//     description: 'تعلم أساسيات إدارة المشاريع والحصول على شهادة PMP. اكتسب مهارات التخطيط والتنفيذ والمراقبة والتحكم في المشاريع باستخدام أفضل الممارسات العالمية.',
//     image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     video: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
//     instructor: {
//       name: 'فاطمة سعد',
//       bio: 'مديرة مشاريع معتمدة PMP مع 10 سنوات خبرة في إدارة المشاريع الكبيرة',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
//       experience: '10+ سنوات',
//     },
//     duration: '25 ساعة',
//     students: 650,
//     rating: 4.6,
//     price: 179,
//     curriculum: [
//       'مقدمة في إدارة المشاريع',
//       'دورة حياة المشروع',
//       'التخطيط والجدولة',
//       'إدارة المخاطر',
//       'إدارة الفريق',
//       'إدارة التكلفة والجودة',
//       'التواصل وإدارة أصحاب المصلحة',
//       'أدوات إدارة المشاريع',
//       'التحضير لامتحان PMP',
//     ],
//     requirements: [
//       'خبرة عملية في العمل بالمشاريع',
//       'شهادة جامعية أو دبلوم',
//       'رغبة في الحصول على شهادة PMP',
//     ],
//     outcomes: [
//       'إتقان أساسيات إدارة المشاريع',
//       'التحضير لامتحان PMP',
//       'استخدام أدوات إدارة المشاريع',
//       'قيادة فرق العمل بفعالية',
//     ],
//     level: 'متوسط إلى متقدم',
//     language: 'العربية',
//     certificate: true,
//   },
// ];

// export const getCourseById = (id: number): Course | undefined => {
//   return coursesData.find(course => course.id === id);
// };

// export const getAllCourses = (): Course[] => {
//   return coursesData;
// };