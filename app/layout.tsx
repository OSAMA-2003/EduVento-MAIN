import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Footer from '@/components/Footer';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: 'أكاديمية التعلم الرقمي - دورات تدريبية معتمدة',
    template: ' أكاديمية التعلم الرقمي',
  },
  description: 'أكاديمية رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      
      <body className={cairo.className}>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}