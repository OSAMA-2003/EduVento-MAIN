import { fetchAllInstructors } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدربينا',
  description: 'تعرف على فريق المدربين المحترفين في Eduvento',
};


export default async function InstructorsPage() {
  const instructors = await fetchAllInstructors();

  return (
    <>
   
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-primary-enhanced text-white py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
       
        <h1
          className="relative z-10 text-5xl md:text-6xl font-extrabold drop-shadow-lg max-w-4xl text-center"
          
        >
          فريق المدربين
        </h1>
        <p
          className="relative z-10 mt-8 max-w-2xl text-center text-lg md:text-xl text-white/90 font-medium"
          
        >
          تعرف على فريق المدربين المحترفين والمسارات التدريبية التي يقودونها في Eduvento
        </p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-t from-white/10 to-transparent pointer-events-none " />
      </section>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 py-20 px-10">
        <div className="container mx-auto max-w-7xl">
          {instructors.length === 0 ? (
            <div className="text-center py-24 overflow-hidden">
              <div className="bg-white/90 rounded-2xl p-8 mx-auto max-w-md shadow ">
                <Image
                  src="/icons/user-group.svg"
                  alt="No instructors"
                  width={56}
                  height={56}
                  className="mx-auto mb-4 opacity-60"
                />
                <h2 className="text-2xl font-bold text-primary-dark mb-2">لا يوجد مدربون حالياً</h2>
                <p className="text-gray-500 mb-2">سيتم إضافة المزيد قريباً — تابعنا!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-9">
              {instructors.map((instructor) => (
                <Link
                  href={`/instructors/${instructor.id}`}
                  key={instructor.id}
                  className="group relative block rounded-2xl overflow-hidden bg-white border border-white/20 shadow-lg hover:shadow-2xl hover:border-primary-yellow/40 transition-all duration-300 "
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    {instructor.Instructor_image_url ? (
                      <Image
                        src={instructor.Instructor_image_url}
                        alt={`صورة ${instructor.Instructor_name}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 25vw"
                        priority={false}
                      />
                    ) : (
                      <div className="flex items-center justify-center bg-gradient-to-tr from-gray-100 via-blue-50 to-gray-200 text-gray-400 h-full w-full text-4xl">
                        <span>👤</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-primary-yellow/20 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-dark group-hover:text-logo-blue mb-1 text-center truncate">
                      {instructor.Instructor_name}
                    </h3>
                    {instructor.specialization && (
                      <p className="text-center font-semibold text-secondary-green text-sm mb-2 truncate">
                        {instructor.specialization}
                      </p>
                    )}
                    {instructor.about_Instructor && (
                      <p className="text-center text-gray-600 text-sm line-clamp-3">
                        {instructor.about_Instructor}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      
    </>
  );
}
