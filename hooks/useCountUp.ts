import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
  isInView: boolean;
}

export const useCountUp = ({ 
  end, 
  duration = 3000, 
  decimals = 0, 
  start = 0,
  isInView 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (!isInView) return;

    const startAnimation = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(currentCount);

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(startAnimation);
      }
    };

    frameRef.current = requestAnimationFrame(startAnimation);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, end, duration, start]);

  return Math.floor(count * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
