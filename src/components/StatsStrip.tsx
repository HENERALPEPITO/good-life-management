import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const StatItem = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-6xl md:text-8xl font-heading text-black mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs font-body font-bold text-accent uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-black">
      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <StatItem value={8} label="ARTISTS" />
        <StatItem value={4} label="GENRES" />
        <StatItem value={50} label="STREAMS" suffix="M+" />
        <StatItem value={15} label="YEARS EXPERIENCE" suffix="+" />
      </div>
    </section>
  );
};

export default StatsStrip;
