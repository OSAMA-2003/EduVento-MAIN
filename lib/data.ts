// // lib/data.ts
// import { Blog, Author, Category, Course, Lesson, Resource, Review } from './types';

// // ========== Authors Data ==========
// const authors: Author[] = [
//   {
//     id: 1,
//     name: 'أحمد محمد',
//     image: '/images/authors/ahmed-mohamed.jpg',
//     bio: 'خبير في التكنولوجيا التعليمية مع أكثر من 10 سنوات من الخبرة في مجال التدريس الرقمي.',
//     role: 'خبير تعليم إلكتروني'
//   },
//   {
//     id: 2,
//     name: 'سارة علي',
//     image: '/images/authors/sara-ali.jpg',
//     bio: 'متخصصة في تطوير المناهج التعليمية وتكنولوجيا التعليم.',
//     role: 'مطورة مناهج'
//   },
//   {
//     id: 3,
//     name: 'خالد حسن',
//     image: '/images/authors/khaled-hassan.jpg',
//     bio: 'مطور برمجيات تعليمية ومدون تقني في مجال EdTech.',
//     role: 'مطور برمجيات'
//   },
//   {
//     id: 4,
//     name: 'ليلى كمال',
//     image: '/images/authors/layla-kamal.jpg',
//     bio: 'مصممة تجارب تعليمية تفاعلية مع خبرة 8 سنوات في مجال UX التعليمي.',
//     role: 'مصممة تعليمية'
//   },
//   {
//     id: 5,
//     name: 'ياسر عبد الله',
//     image: '/images/authors/yasser-abdullah.jpg',
//     bio: 'خبير في الذكاء الاصطناعي وتطبيقاته التعليمية.',
//     role: 'خبير ذكاء اصطناعي'
//   }
// ];

// // ========== Categories Data ==========
// const categories: Category[] = [
//   { id: 1, name: 'التعليم الإلكتروني', icon: '💻' },
//   { id: 2, name: 'البرمجة', icon: '👨‍💻' },
//   { id: 3, name: 'التصميم', icon: '🎨' },
//   { id: 4, name: 'التسويق', icon: '📈' },
//   { id: 5, name: 'اللغات', icon: '🌐' },
//   { id: 6, name: 'الذكاء الاصطناعي', icon: '🤖' }
// ];

// // ========== Blogs Data ==========
// // Mock blogs data
// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: 'أهمية التكنولوجيا في التعليم الحديث',
//     excerpt: 'كيف غيرت التكنولوجيا وجه التعليم في العصر الحديث وما هي أهم الأدوات المستخدمة',
//     content: `
//       <h2>مقدمة</h2>
//       <p>في عصر التطور التكنولوجي السريع، أصبح التعليم أحد أهم المجالات المستفيدة من هذه التطورات.</p>
//       <h2>أهم الأدوات التعليمية</h2>
//       <ul>
//         <li>منصات التعليم الإلكتروني</li>
//         <li>التطبيقات التعليمية</li>
//         <li>الواقع الافتراضي والمعزز</li>
//       </ul>
//       <h2>خاتمة</h2>
//       <p>التكنولوجيا ستمكننا من تقديم تعليم أفضل للجميع في كل مكان.</p>
//     `,
//     image: '/images/blogs/blog-1.jpg',
//     category: 'التعليم الإلكتروني',
//     author: authors[0],
//     date: '2023-05-15',
//     readTime: '5 دقائق',
//     tags: ['تعليم', 'تكنولوجيا', 'تعليم إلكتروني']
//   },
//   {
//     id: 2,
//     title: 'أفضل منصات التعليم عن بعد',
//     excerpt: 'دليل شامل لأفضل المنصات التعليمية التي يمكنك الاعتماد عليها في رحلتك التعليمية',
//     content: `
//       <h2>مقدمة</h2>
//       <p>مع تزايد الاعتماد على التعليم عن بعد، ظهرت العديد من المنصات التعليمية المتميزة.</p>
//       <h2>أفضل المنصات</h2>
//       <ol>
//         <li>منصة إدراك</li>
//         <li>منصة رواق</li>
//         <li>Coursera</li>
//         <li>Udemy</li>
//       </ol>
//       <h2>كيف تختار المنصة المناسبة</h2>
//       <p>اختر المنصة بناءً على احتياجاتك ومستواك التعليمي.</p>
//     `,
//     image: '/images/blogs/blog-2.jpg',
//     category: 'التعليم عن بعد',
//     author: authors[1],
//     date: '2023-06-20',
//     readTime: '7 دقائق',
//     tags: ['تعليم عن بعد', 'منصات تعليمية', 'تعلم ذاتي']
//   },
//   {
//     id: 3,
//     title: 'مستقبل الذكاء الاصطناعي في التعليم',
//     excerpt: 'كيف سيغير الذكاء الاصطناعي وجه التعليم في السنوات القادمة',
//     content: `
//       <h2>مقدمة</h2>
//       <p>الذكاء الاصطناعي يغزو جميع المجالات، والتعليم ليس استثناءً.</p>
//       <h2>تطبيقات الذكاء الاصطناعي</h2>
//       <ul>
//         <li>التعليم الشخصي</li>
//         <li>التقييم التلقائي</li>
//         <li>المساعدات التعليمية الذكية</li>
//       </ul>
//       <h2>التحديات</h2>
//       <p>ما هي التحديات التي تواجه تطبيق الذكاء الاصطناعي في التعليم.</p>
//     `,
//     image: '/images/blogs/blog-3.jpg',
//     category: 'الذكاء الاصطناعي',
//     author: authors[2],
//     date: '2023-07-10',
//     readTime: '8 دقائق',
//     tags: ['ذكاء اصطناعي', 'تعليم', 'تكنولوجيا']
//   },
//   {
//     id: 4,
//     title: 'أدوات التعلم التعاوني عبر الإنترنت',
//     excerpt: 'أفضل الأدوات التي تمكن الطلاب والمعلمين من العمل معًا عن بعد',
//     content: `
//       <h2>مقدمة</h2>
//       <p>التعلم التعاوني أصبح أسهل مع الأدوات الرقمية الحديثة.</p>
//       <h2>أدوات التعاون</h2>
//       <ul>
//         <li>Google Classroom</li>
//         <li>Microsoft Teams</li>
//         <li>Zoom</li>
//         <li>Miro</li>
//       </ul>
//       <h2>نصائح للتعلم التعاوني الفعال</h2>
//       <p>كيف تحقق أقصى استفادة من التعلم التعاوني عبر الإنترنت.</p>
//     `,
//     image: '/images/blogs/blog-4.jpg',
//     category: 'التعلم التعاوني',
//     author: authors[0],
//     date: '2023-08-05',
//     readTime: '6 دقائق',
//     tags: ['تعاون', 'أدوات', 'تعليم عن بعد']
//   },
//   {
//     id: 5,
//     title: 'كيفية إنشاء محتوى تعليمي جذاب',
//     excerpt: 'نصائح عملية لإنشاء محتوى تعليمي يلفت انتباه الطلاب ويحقق أهداف التعلم',
//     content: `
//       <h2>مقدمة</h2>
//       <p>المحتوى الجيد هو أساس أي تجربة تعليمية ناجحة.</p>
//       <h2>عناصر المحتوى الجذاب</h2>
//       <ul>
//         <li>الوضوح والبساطة</li>
//         <li>التفاعلية</li>
//         <li>التنوع</li>
//         <li>الارتباط بالواقع</li>
//       </ul>
//       <h2>أدوات إنشاء المحتوى</h2>
//       <p>أفضل الأدوات لإنشاء محتوى تعليمي احترافي.</p>
//     `,
//     image: '/images/blogs/blog-5.jpg',
//     category: 'تصميم المحتوى',
//     author: authors[1],
//     date: '2023-09-12',
//     readTime: '9 دقائق',
//     tags: ['محتوى', 'تعليم', 'تصميم']
//   },
//   {
//     id: 6,
//     title: 'أثر الألعاب التعليمية على التحصيل الدراسي',
//     excerpt: 'دراسة لتأثير استخدام الألعاب في تحسين نتائج التعلم',
//     content: `
//       <h2>مقدمة</h2>
//       <p>التعلم القائم على الألعاب يحقق نتائج مذهلة في التحصيل الدراسي.</p>
//       <h2>فوائد الألعاب التعليمية</h2>
//       <ul>
//         <li>زيادة التحفيز</li>
//         <li>تحسين الفهم</li>
//         <li>تعزيز الاحتفاظ بالمعلومات</li>
//       </ul>
//       <h2>أمثلة على ألعاب تعليمية</h2>
//       <p>بعض الأمثلة الناجحة للألعاب التعليمية.</p>
//     `,
//     image: '/images/blogs/blog-6.jpg',
//     category: 'التعلم باللعب',
//     author: authors[2],
//     date: '2023-10-18',
//     readTime: '7 دقائق',
//     tags: ['ألعاب', 'تعليم', 'تحصيل']
//   }
// ];

// // ========== Courses Data ==========
// const courses: Course[] = [
//   {
//     id: 1,
//     title: 'تعلم تطوير الويب من الصفر',
//     description: 'هذه الدورة الشاملة ستأخذك من المبتدئ إلى المحترف في تطوير الويب باستخدام أحدث التقنيات مثل HTML5, CSS3, JavaScript, React, Node.js وقواعد البيانات.',
//     shortDescription: 'احترف تطوير الويب من الصفر إلى الاحتراف',
//     image: '/images/courses/web-development.jpg',
//     price: 599,
//     discountedPrice: 399,
//     duration: '8 أسابيع',
//     level: 'مبتدئ',
//     category: categories[1], // البرمجة
//     instructor: authors[2],
//     studentsEnrolled: 1245,
//     rating: 4.8,
//     certificate: true,
//     language: 'العربية',
//     lastUpdated: '2023-10-01',
//     requirements: [
//       'معرفة أساسية باستخدام الكمبيوتر',
//       'اتصال بالإنترنت',
//       'الرغبة في التعلم',
//       'تنزيل برنامج Visual Studio Code'
//     ],
//     whatYouWillLearn: [
//       'أساسيات HTML و CSS',
//       'برمجة JavaScript من الصفر',
//       'أطر عمل الويب الحديثة مثل React',
//       'التعامل مع قواعد البيانات',
//       'نشر المواقع على السيرفرات',
//       'أساسيات الأمان الإلكتروني'
//     ],
//     lessons: [
//       {
//         id: 1,
//         title: 'مقدمة في تطوير الويب',
//         duration: '45 دقيقة',
//         videoUrl: 'https://example.com/videos/web-intro',
//         description: 'تعرف على أساسيات تطوير الويب والمفاهيم الرئيسية',
//         isFree: true,
//         resources: [
//           {
//             id: 1,
//             name: 'ملخص الدرس الأول',
//             type: 'pdf',
//             url: '/resources/web-intro.pdf'
//           },
//           {
//             id: 2,
//             name: 'أكواد المثال',
//             type: 'document',
//             url: '/resources/web-intro-code.zip'
//           }
//         ]
//       },
//       {
//         id: 2,
//         title: 'أساسيات HTML',
//         duration: '1 ساعة 20 دقيقة',
//         videoUrl: 'https://example.com/videos/html-basics',
//         description: 'تعلم كل ما تحتاجه عن HTML لبناء هيكل المواقع',
//         isFree: false,
//         resources: [
//           {
//             id: 3,
//             name: 'مرجع HTML',
//             type: 'pdf',
//             url: '/resources/html-reference.pdf'
//           }
//         ]
//       }
//       // ... 10 more lessons
//     ],
//     reviews: [
//       {
//         id: 1,
//         author: authors[0],
//         rating: 5,
//         content: 'دورة رائعة تغطي كل ما يحتاجه المبتدئ بطريقة سهلة وممتعة',
//         date: '2023-10-15'
//       },
//       {
//         id: 2,
//         author: authors[3],
//         rating: 4,
//         content: 'المحتوى ممتاز لكن أتمنى المزيد من الأمثلة العملية',
//         date: '2023-10-20'
//       }
//       // ... 5 more reviews
//     ]
//   },
//   {
//     id: 2,
//     title: 'الذكاء الاصطناعي للمبتدئين',
//     description: 'تعلم أساسيات الذكاء الاصطناعي وتعلم الآلة وتطبيقاتها العملية في الحياة اليومية.',
//     shortDescription: 'مدخل شامل إلى عالم الذكاء الاصطناعي',
//     image: '/images/courses/ai-for-beginners.jpg',
//     price: 699,
//     discountedPrice: 499,
//     duration: '6 أسابيع',
//     level: 'مبتدئ',
//     category: categories[5], // الذكاء الاصطناعي
//     instructor: authors[4],
//     studentsEnrolled: 876,
//     rating: 4.7,
//     certificate: true,
//     language: 'العربية',
//     lastUpdated: '2023-09-15',
//     requirements: [
//       'معرفة أساسية بالرياضيات',
//       'خبرة بسيطة في البرمجة',
//       'الرغبة في تعلم التقنيات الحديثة'
//     ],
//     whatYouWillLearn: [
//       'مفاهيم الذكاء الاصطناعي الأساسية',
//       'أساسيات تعلم الآلة',
//       'الشبكات العصبية البسيطة',
//       'تحليل البيانات الأساسي',
//       'تطبيقات عملية للذكاء الاصطناعي'
//     ],
//     lessons: [
//       // ... lessons for AI course
//     ],
//     reviews: [
//       // ... reviews for AI course
//     ]
//   },
//   // ... 4 more course objects
// ];

// // ========== Data Fetching Functions ==========

// // Blog Functions
// export function getAllBlogs(): Blog[] {
//   return blogs;
// }

// export function getBlogById(id: number): Blog | undefined {
//   return blogs.find(blog => blog.id === id);
// }

// export function getLatestBlogs(count: number = 5): Blog[] {
//   return [...blogs].sort((a, b) => 
//     new Date(b.date).getTime() - new Date(a.date).getTime()
//   ).slice(0, count);
// }

// export function getRelatedBlogs(currentBlogId: number, count: number = 3): Blog[] {
//   const currentBlog = getBlogById(currentBlogId);
//   if (!currentBlog) return [];
  
//   return blogs
//     .filter(blog => 
//       blog.id !== currentBlogId && 
//       blog.tags.some(tag => currentBlog.tags.includes(tag))
//     .slice(0, count));
// }

// // Course Functions
// export function getAllCourses(): Course[] {
//   return courses;
// }

// export function getCourseById(id: number): Course | undefined {
//   return courses.find(course => course.id === id);
// }

// export function getFeaturedCourses(count: number = 4): Course[] {
//   return [...courses]
//     .sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
//     .slice(0, count);
// }

// export function getCoursesByCategory(categoryId: number): Course[] {
//   return courses.filter(course => course.category.id === categoryId);
// }

// export function getRelatedCourses(currentCourseId: number, count: number = 3): Course[] {
//   const currentCourse = getCourseById(currentCourseId);
//   if (!currentCourse) return [];
  
//   return courses
//     .filter(course => 
//       course.id !== currentCourseId && 
//       (course.category.id === currentCourse.category.id || 
//        course.instructor.id === currentCourse.instructor.id)
//     )
//     .slice(0, count);
// }

// export function getPopularInstructors(count: number = 3): Author[] {
//   const instructorCourses = courses.reduce((acc, course) => {
//     acc[course.instructor.id] = (acc[course.instructor.id] || 0) + course.studentsEnrolled;
//     return acc;
//   }, {} as Record<number, number>);

//   return [...authors]
//     .filter(author => instructorCourses[author.id])
//     .sort((a, b) => instructorCourses[b.id] - instructorCourses[a.id])
//     .slice(0, count);
// }