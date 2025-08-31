'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { fetchAllArticles } from '@/lib/api';
import { Blog } from '@/lib/types';
import BlogCard from '../BlogCard';

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const blogsPerPage = 10;


 useEffect(() => {
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const data = await fetchAllArticles();
      console.log(data)

      if (data && data.length > 0) {
        setBlogs(data); 
      } else {
        setError("مفيش مقالات متاحة دلوقتي");
      }
    } catch (err: any) {
      console.error("Failed to load blogs:", err);
      setError(err.message || "حدث خطأ أثناء تحميل المقالات");
    } finally {
      setLoading(false);
    }
  };

  loadBlogs();
}, []);

  // Filter blogs
  const filteredBlogs = useMemo(() => {
  return blogs.filter(blog => {
    const title = blog.title ? blog.title.toLowerCase() : "";  
    const search = searchTerm ? searchTerm.toLowerCase() : "";  

    const matchesSearch = title.includes(search);
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}, [blogs, searchTerm, selectedCategory]);


  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = useMemo(() => {
    return filteredBlogs.slice(
      (currentPage - 1) * blogsPerPage,
      currentPage * blogsPerPage
    );
  }, [filteredBlogs, currentPage]);

  const categories = Array.from(new Set(blogs.map(blog => blog.category))).filter(Boolean); // Filter out any undefined/null categories

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  if (loading) {
    return (
      <div className="bg-gradient-smooth-blend py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="flex flex-col justify-center items-center py-20 relative z-10">
          <div className="spinner-primary w-12 h-12 mb-4"></div>
          <span className="text-white text-lg font-semibold">جاري تحميل المقالات...</span>
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

  if (blogs.length === 0) {
    return (
      <div className="bg-gradient-smooth-blend py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="text-center py-20 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary-dark mb-2">لا توجد مقالات</h3>
            <p className="text-gray-600 mb-4">لا توجد مقالات متاحة حالياً</p>
            <Link href="/" className="btn-primary">
              العودة للصفحة الرئيسية
            </Link>
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
        
        {/* ✅ Enhanced Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="text-primary-yellow">جميع</span>{" "}
            <span className="text-white">المقالات</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            استكشف مكتبة شاملة من المقالات التقنية والتعليمية
          </p>
        </motion.div>

        {/* ✅ Enhanced Filters */}
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
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 h-5 w-5" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-48">
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">جميع الفئات</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="bg-primary-yellow text-primary-dark px-4 py-3 rounded-xl font-bold text-sm whitespace-nowrap">
                {filteredBlogs.length} مقالة
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Blogs Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto">
                <BookOpen className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark mb-4">لم يتم العثور على مقالات</h3>
                <p className="text-gray-600 mb-6">جرب تغيير معايير البحث أو الفئات</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="btn-primary"
                >
                  إعادة تعيين المرشحات
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog, index) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  index={index}
                  
                  
                  variant={index === 0 ? 'featured' : 'default'}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* ✅ Enhanced Pagination */}
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
                  aria-label="الصفحة السابقة"
                >
                  <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-xl font-bold text-sm transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-primary-yellow text-primary-dark shadow-lg scale-110'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-xl bg-white/20 text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
                  aria-label="الصفحة التالية"
                >
                  <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

       
      </div>
    </div>
  );
};

export default BlogsGrid;
