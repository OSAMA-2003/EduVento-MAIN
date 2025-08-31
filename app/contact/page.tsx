'use client';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import ContactContent from '@/components/ContactContent';
import HeroComponent from '@/components/HeroComponent';

export default function Contact() {

  return (
    <main className="min-h-screen">

     

       {/* Hero */}
                <HeroComponent
                  headingTop="تواصل"
                  headingHighlight="معنا"
                  subtitle="نحن هنا لمساعدتك في رحلتك التعليمية. تواصل معنا وسنكون سعداء بالإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه"
                  stats={[
                    { icon: <Phone className="h-5 w-5 text-secondary-green" />, label: 'اتصال فوري ' },
                    { icon: <Mail className="h-5 w-5 text-primary-yellow" />, label: ' رد خلال 24 ساعة ' },
                    { icon: <MessageCircle className="h-5 w-5 text-logo-blue" />, label: 'استشارة مجانية ' },
                  ]}
                  ctaText="ابدأ المحادثة"
                  scrollToClass="contact-content"
                />


      {/* Contact Content */}
      <div className="contact-content">
        
        <ContactContent/>
      </div>

    </main>
  );
}
