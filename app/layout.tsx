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
    default: 'EduVento  ',
    template: ' EduVento',
  },
  description: 'شركة رائدة في التعليم الرقمي تهدف إلى تمكين الأفراد من اكتساب المهارات اللازمة لمواكبة التطور التقني والمهني في العصر الحديث',

  icons: [{ rel: "icon", url: "/images/logo2.png" }],
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