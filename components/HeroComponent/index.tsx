'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';

interface Stat {
  icon: React.ReactNode;
  label: string;
}

interface HeroComponentProps {
  headingTop: string;
  headingHighlight: string;
  subtitle: string;
  stats?: Stat[];
  ctaText?: string;
  scrollToClass?: string;
}

export default function HeroComponent({
  headingTop,
  headingHighlight,
  subtitle,
  stats = [],
  ctaText = 'اكتشف المزيد',
  scrollToClass = '',
}: HeroComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-gradient-primary-enhanced relative overflow-hidden" ref={ref}>
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-80"></div>
      </div>

      <div className="container mx-auto py-24 md:py-32 px-4 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto "
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:leading-[120px]">
            <span className="text-white drop-shadow-2xl leading-[80px] md:leading-[120px]">{headingTop}</span>
            <br />
            <span className="text-primary-yellow drop-shadow-2xl  ">{headingHighlight}</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-8 drop-shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {stats.length > 0 && (
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  {stat.icon}
                  <span className="font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {ctaText && scrollToClass && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => {
                  const element = document.querySelector(`.${scrollToClass}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-primary-yellow text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
              >
                <span>{ctaText}</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
