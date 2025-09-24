'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
  Users,
  Award,
  ChevronRight,
  Handshake,
} from 'lucide-react';

import { FaWhatsapp } from "react-icons/fa";

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/courses', label: 'الكورسات' },
    { href: '/about', label: 'من نحن' },
    { href: '/blogs', label: 'المقالات' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  const courseCategories = [
    'تطوير المواقع',
    'التصميم الجرافيكي',
    'التسويق الرقمي',
    'إدارة المشاريع',
    'الذكاء الاصطناعي',
  ];

  const successPartners = [
    { href: '/sponsors', label: 'الرعاة الاستراتيجيين' },
    { href: '/partners', label: 'شركاؤنا في التعليم' },
    { href: '/instructors', label: 'المدربين المعتمدين' },
    { href: '/ambassadors', label: 'سفراء Eduvento' },
  ];

  const collaborationOpportunities = [
    { href: '/join?type=trainer', label: 'انضم كـ مدرب معتمد' },
    { href: '/join?type=marketer', label: 'انضم كـ مسوّق شريك' },
    { href: '/join?type=sponsor', label: 'كن سفير Eduvento في جامعتك' },
    { href: '/join?type=sponsor', label: 'رعاية فعالياتنا وبرامجنا' },
    { href: '/join?type=sponsor', label: 'شراكات استراتيجية طويلة المدى' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/EduventoLearning', label: 'Facebook' },
    
    { icon: Instagram, href: 'https://www.instagram.com/eduventolearning', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/edv-ler/', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/201201345760', label: 'Whatsapp' },
  ];

  return (
    <footer className="bg-gradient-primary-enhanced relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 nav-gradient"></div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
      </div>

    

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-2xl font-bold text-white md:text-left">
                <Image src={'/images/logo.png'} alt={'logo'} width={120} height={120} />
              </Link>
             
            </div>
            <p className="text-gray-200 leading-relaxed">
              شركة رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية لتطوير مهاراتك وتحقيق أهدافك المهنية.
            </p>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary-yellow" />
                تابعنا على
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="h-5 w-5  text-primary-yellow" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-yellow transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Success Partners */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-logo-blue" />
              شركاء النجاح
            </h3>
            <ul className="space-y-3">
              {successPartners.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-logo-blue transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Opportunities */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              
              
              <Handshake className="h-5 w-5 text-secondary-green" />
              
              فرص التعاون
            </h3>
            <ul className="space-y-3">
              {collaborationOpportunities.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-secondary-green transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary-yellow" />
              تواصل معنا
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary-yellow" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                 support@eduvento.online
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-secondary-green/20 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="h-4 w-4 text-secondary-green" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  01201345760
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-logo-blue/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-logo-blue" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  سوهاج، مصر
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary-yellow" />
                © {currentYear} Eduvento Company. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users className="h-3 w-3" />
                <span>صُنع بحب في مصر</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-primary-yellow transition-colors duration-300 flex items-center gap-1 group">
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 flex items-center gap-1 group">
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                شروط الاستخدام
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-logo-blue transition-colors duration-300 flex items-center gap-1 group">
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                الدعم الفني
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
