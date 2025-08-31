'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [joinOpen, setJoinOpen] = useState(false);
  const [joinOpen2, setJoinOpen2] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكورسات', href: '/courses' },
    { name: 'المقالات', href: '/blogs' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY <= 80);
      setHasScrolled(currentScrollY > 30);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);



  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0%' },
    exit: { opacity: 0, y: '-100%' },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'} ${hasScrolled ? 'nav-gradient shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
      initial={false}
      animate={showNav ? 'visible' : 'hidden'}
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex items-center justify-between h-16 md:h-20 flex-row-reverse md:flex-row">
          <Link href="/" className="text-2xl font-bold text-white md:text-left">
            <Image src={'/images/logo.png'} alt={'logo'} width={120} height={120} />
          </Link>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors text-white hover:text-logo-blue text-lg`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative" onMouseEnter={() => setJoinOpen(true)} onMouseLeave={() => setJoinOpen(false)}>
              <button
                className="font-medium text-white hover:text-logo-blue text-lg flex items-center gap-1"
                onClick={() => setJoinOpen((v) => !v)}
                type="button"
              >
                شركاء النجاح
                <svg className={`w-4 h-4 transition-transform ml-1 ${joinOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {joinOpen && (
                  <motion.ul
                    className="absolute -left-10 mt-3 min-w-[175px] z-40 bg-white text-black shadow-lg rounded-xl py-2 border border-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li><Link href="/sponsors" className="block px-6 py-3 hover:bg-secondary-green/20 transition-colors hover:text-logo-blue">الرعاة الاستراتيجيين</Link></li>
                    <li><Link href="/partners" className="block px-6 py-3 hover:bg-secondary-green/20 transition-colors hover:text-logo-blue">شركاؤنا في التعليم</Link></li>
                    <li><Link href="/instructors" className="block px-6 py-3 hover:bg-primary-yellow/20 transition-colors hover:text-logo-blue">المدربين المعتمدين</Link></li>
                    <li><Link href="/ambassadors" className="block px-6 py-3 hover:bg-logo-blue/10 transition-colors hover:text-logo-blue">سفراء Eduvento</Link></li>
                   
                  </motion.ul>
                )}
              </AnimatePresence>

              
               
            </div>
            <div className="relative" onMouseEnter={() => setJoinOpen2(true)} onMouseLeave={() => setJoinOpen2(false)}>
                      <button className="font-medium text-white hover:text-logo-blue text-lg flex items-center gap-1" onClick={() => setJoinOpen2((v) => !v)}>
                        فرص التعاون
                        <svg className={`w-4 h-4 ml-1 ${joinOpen2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {joinOpen2 && (
                          <motion.ul
                            className="absolute top-full  mt-4  min-w-[190px] bg-white text-black shadow-xl rounded-xl py-2 border border-gray-100"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <li><Link href="/join?type=trainer" className="block px-6 py-3 hover:bg-secondary-green/20 transition-colors hover:text-logo-blue">انضم كـ مدرب معتمد</Link></li>
                            <li><Link href="/join?type=marketer" className="block px-6 py-3 hover:bg-primary-yellow/20 transition-colors hover:text-logo-blue">انضم كـ مسوّق شريك</Link></li>
                            <li><Link href="/join?type=sponsor" className="block px-6 py-3 hover:bg-logo-blue/10 transition-colors hover:text-logo-blue">كن سفير Eduvento في جامعتك</Link></li>
                            <li><Link href="/join?type=sponsor" className="block px-6 py-3 hover:bg-logo-blue/10 transition-colors hover:text-logo-blue">رعاية فعالياتنا وبرامجنا</Link></li>
                            <li><Link href="/join?type=sponsor" className="block px-6 py-3 hover:bg-logo-blue/10 transition-colors hover:text-logo-blue">شراكات استراتيجية طويلة المدى</Link></li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
          </div>

         <label className="hamburger md:hidden">
  <input
    type="checkbox"
    checked={isOpen}
    onChange={() => setIsOpen(!isOpen)}
    aria-label="Toggle menu"
  />
  <svg viewBox="0 0 32 32">
    <path
      className="line line-top-bottom"
      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
    />
    <path className="line" d="M7 16 27 16" />
  </svg>
</label>

        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden nav-gradient absolute top-14 left-0 right-0 z-40  text-white shadow-md p-6 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="text-xl block py-2 ">
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <button className="text-xl w-full text-right py-2 flex justify-between items-center " onClick={() => setJoinOpen(!joinOpen)}>
                    شركاء النجاح
                    <svg className={`w-5 h-5 transition-transform ${joinOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {joinOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-2 space-y-3">
                        <Link href="/sponsors" onClick={() => setIsOpen(false)} className="block text-md">الرعاة الاستراتيجيين</Link>
                        <Link href="/partners" onClick={() => setIsOpen(false)} className="block text-md">شركاؤنا في التعليم</Link>
                        <Link href="/instructors" onClick={() => setIsOpen(false)} className="block text-md">المدربين المعتمدين</Link>
                        <Link href="/ambassadors" onClick={() => setIsOpen(false)} className="block text-md">سفراء Eduvento</Link>
                       
                      </motion.div>
                    )}

                  </AnimatePresence>
                   
                </motion.div>
                <button className="text-xl w-full font-bold text-yellow-200 text-right flex justify-between items-center" onClick={() => setJoinOpen2(!joinOpen2)}>
                          فرص التعاون
                          <svg className={`w-4 h-4 transition-transform ${joinOpen2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {joinOpen2 && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-6 space-y-2">
                              <Link href="/join?type=trainer" onClick={() => setIsOpen(false)} className="block text-md">انضم كـ مدرب معتمد</Link>
                              <Link href="/join?type=marketer" onClick={() => setIsOpen(false)} className="block text-md">انضم كـ مسوّق شريك</Link>
                              <Link href="/join?type=sponsor" onClick={() => setIsOpen(false)} className="block text-md">كن سفير Eduvento في جامعتك</Link>
                              <Link href="/join?type=sponsor" onClick={() => setIsOpen(false)} className="block text-md">رعاية فعالياتنا وبرامجنا</Link>
                              <Link href="/join?type=sponsor" onClick={() => setIsOpen(false)} className="block text-md">شراكات استراتيجية طويلة المدى</Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;