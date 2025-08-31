import { fetchAllInstructors, fetchInstructorById } from '@/lib/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InstructorProfile from '@/components/InstructorProfile/indext';


interface InstructorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const instructors = await fetchAllInstructors();
    return instructors.map(inst => ({ id: inst.id.toString() }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: InstructorPageProps): Promise<Metadata> {
  const { id } = await params;
  const instructor = await fetchInstructorById(Number(id));
  if (!instructor) {
    return {
      title: 'مدرب غير موجود',
      description: 'المدرب المطلوب غير موجود',
    };
  }
  return {
    title: instructor.Instructor_name,
    description: instructor.about_Instructor || 'مدرب في Eduvento',
  };
}

export default async function InstructorDetailsPage({ params }: InstructorPageProps) {
  const { id } = await params;
  const instructor = await fetchInstructorById(Number(id));
  if (!instructor) notFound();

  return (
    <>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary-enhanced overflow-hidden py-20 md:py-28 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl text-center leading-tight drop-shadow-lg">
          {instructor.Instructor_name}
        </h1>
        {instructor.specialization && (
          <span className="mt-5 inline-block bg-primary-yellow text-primary-dark px-8 py-2 rounded-full font-bold text-lg shadow-lg">
            {instructor.specialization}
          </span>
        )}
        
        <p className="mt-8 max-w-xl text-center text-lg text-indigo-200 whitespace-pre-line">
          {instructor.about_Instructor || 'مدرب محترف في Eduvento'}
        </p>
      </section>

      {/* Profile/Main Content */}
      <InstructorProfile instructor={instructor} />

      

    </>
  );
}
