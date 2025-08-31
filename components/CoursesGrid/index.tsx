'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Filter, Search } from 'lucide-react';
import { fetchAllCourses } from '@/lib/api';
import CourseCard from '../CourseCard';

// ✅ Course interface matching your API response
interface CourseApiResponse {
  id: number;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  duration: string;
  level: string;
  Instructor_name: string;
  Instructor_image_url: string;
  students_numbers: string;
  starts: string; // rating
  created_at: string;
}


const CoursesGrid = () => {
  const [courses, setCourses] = useState<CourseApiResponse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseApiResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  
  const coursesPerPage = 12;

  useEffect(() => {
    const getCourses = async () => {
      try {
        console.log('🚀 CoursesGrid: Starting to fetch courses...');
        const data = await fetchAllCourses();
        
        console.group('🎨 Frontend Processing - CoursesGrid');
        console.log('📊 Total courses received:', data.length);
        console.log('📋 First course data:', data[0]);
        console.log('🏷️  Available levels:', Array.from(new Set(data.map(course => course.level))));
        console.groupEnd();
        
        setCourses(data);
        setFilteredCourses(data);
        setLoading(false);
      } catch (err: any) {
        console.error('❌ CoursesGrid Error:', err);
        setError('حدث خطأ أثناء تحميل الكورسات');
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  // Filter courses based on search and level
  useEffect(() => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.Instructor_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLevel) {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedLevel, courses]);

  const totalPages = Math.ceil((filteredCourses?.length || 0) / coursesPerPage);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

   const availableLevels = Array.from(new Set(courses.map(course => course.level)));

  if (loading) {
    return (
      <div className="bg-gradient-smooth-blend py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="flex flex-col justify-center items-center py-20 relative z-10">
          <div className="spinner-primary w-12 h-12 mb-4"></div>
          <span className="text-white text-lg font-semibold">جاري تحميل الكورسات...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-smooth-blend py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="text-center py-20 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-alert-red rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-2">خطأ في التحميل</h3>
            <p className="text-alert-red mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-smooth-blend py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Enhanced Filters Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 transform z-10 -translate-y-1/2 text-gray-800 h-5 w-5" />
                <input
                  type="text"
                  placeholder="ابحث عن كورس أو مدرب..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-300"
                />
              </div>

              {/* Level Filter */}
              <div className="relative min-w-48">
                <Filter className="absolute right-4 top-1/2 transform z-10 -translate-y-1/2 text-gray-800 h-5 w-5" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">جميع المستويات</option>
                  {availableLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="bg-primary-yellow text-primary-dark px-4 py-3 rounded-xl font-bold text-sm whitespace-nowrap">
                {filteredCourses.length} كورس
              </div>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">لم يتم العثور على كورسات</h3>
                <p className="text-gray-600 mb-6">جرب تغيير معايير البحث أو المرشحات</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevel('');
                  }}
                  className="btn-primary"
                >
                  إعادة تعيين المرشحات
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  index={index}
                  variant={index === 0 ? 'featured' : 'default'}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center mt-16 gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-2">
                
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-xl bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
                >
                  <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-12 h-12 rounded-xl font-bold text-sm transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-primary-yellow text-primary-dark shadow-lg scale-110'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-xl bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
                >
                  <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesGrid;
