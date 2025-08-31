import { fetchAllPartners, fetchPartnerById } from '@/lib/api'; 
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';


interface PartnerPageProps {
  params: Promise<{
    id: string;
  }>;
}

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  try {
    const partners = await fetchAllPartners();
    return partners.map(partner => ({ id: partner.id.toString() }));
  } catch (error) {
    console.error('Error generating static params for partners:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const partner = await fetchPartnerById(Number(id));
    if (!partner) {
      return {
        title: 'شريك غير موجود',
        description: 'الشريك المطلوب غير موجود',
      };
    }
    return {
      title: partner.partner_name,
      description: partner.description || 'شريك تعليمي في Eduvento',
    };
  } catch (error) {
    return {
      title: 'خطأ في تحميل الشريك',
      description: 'حدث خطأ أثناء تحميل معلومات الشريك',
    };
  }
}

export default async function PartnerDetailsPage({ params }: PartnerPageProps) {
  const { id } = await params;
  
  try {
    const partner = await fetchPartnerById(Number(id));
    if (!partner) notFound();

    return (
      <>
        <Navigation />

        {/* Header / Hero Section */}
        <section className="min-h-screen bg-gradient-primary-enhanced py-20 md:py-28 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col items-center gap-14 text-center">
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <Image
                src={partner.logo_url}
                alt={`صورة ${partner.partner_name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold">{partner.partner_name}</h1>

            {partner.description && (
              <p className="mt-4 max-w-xl text-white/90 text-lg md:text-xl font-medium">
                {partner.description}
              </p>
            )}
          </div>
        </section>

        {/* Partner Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b pb-2 border-gray-200">
              معلومات الشريك
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              {partner.website_url && (
                <div>
                  <strong className="text-gray-900">الموقع الإلكتروني:</strong>{' '}
                  <a
                    href={partner.website_url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {partner.website_url}
                  </a>
                </div>
              )}
              {partner.country && (
                <div>
                  <strong className="text-gray-900">الدولة:</strong> {partner.country}
                </div>
              )}
              {/* Add more partner details as needed */}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  } catch (error) {
    console.error('Error loading partner:', error);
    notFound();
  }
}