'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedNumberProps {
  value: string;
  isInView: boolean;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, isInView, duration = 2000, className = '' }: AnimatedNumberProps) => {
  // Extract number and suffix from value
  const extractNumber = (str: string) => {
    const match = str.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const getSuffix = (str: string) => {
    return str.replace(/\d+(?:\.\d+)?/, '');
  };

  const number = extractNumber(value);
  const suffix = getSuffix(value);
  const decimals = value.includes('.') ? value.split('.')[1].replace(/\D/g, '').length : 0;

  const animatedValue = useCountUp({
    end: number,
    duration,
    decimals,
    isInView
  });

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString('en-US');
  };

  return (
    <span className={className}>
      {formatNumber(animatedValue)}{suffix}
    </span>
  );
};

export default AnimatedNumber;
