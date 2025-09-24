'use client';

import Image from 'next/image';
import { Instructor } from '@/lib/types';

interface InstructorProfileProps {
  instructor: Instructor;
}

export default function InstructorProfile({ instructor }: InstructorProfileProps) {
  return (
    <div className="max-w-5xl mx-auto mt-12 mb-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Profile Image */}
        <div className="relative w-full aspect-square bg-gradient-to-tr from-logo-blue/30 to-primary-yellow/20">
          {instructor.Instructor_image_url ? (
            <Image
              src={instructor.Instructor_image_url}
              alt={`صورة ${instructor.Instructor_name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-6xl bg-gray-100">👤</div>
          )}
        </div>

        {/* Info */}
        <div className="md:col-span-2 flex flex-col justify-center py-8 px-6 md:px-10 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-logo-blue">{instructor.Instructor_name}</h2>

         

          

          {instructor.about_Instructor ? (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{instructor.about_Instructor}</p>
          ) : (
            <p className="text-gray-400 italic">لا تتوفر بيانات السيرة الذاتية لهذا المدرب.</p>
          )}
        </div>
      </div>
    </div>
  );
}
