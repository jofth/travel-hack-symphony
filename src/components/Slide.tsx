import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'center' | 'split' | 'feature';
  background?: 'default' | 'light' | 'dark' | 'blue' | 'gradient';
}

const Slide: React.FC<SlideProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  variant = 'default',
  background = 'default'
}) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Keep the slide visible once it's been seen
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, []);

  const backgroundClasses = {
    default: "bg-background",
    light: "bg-white",
    dark: "bg-gray-900 text-white",
    blue: "bg-gradient-to-br from-amex-blue to-delta-blue text-white",
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-50"
  };

  const variantClasses = {
    default: "px-6 py-16 md:px-16 md:py-24",
    center: "px-6 py-16 md:px-16 md:py-24 flex flex-col items-center justify-center text-center",
    split: "grid md:grid-cols-2 gap-8 p-6 md:p-0 md:pr-16",
    feature: "px-6 py-16 md:px-16 md:py-24 flex flex-col items-center",
  };

  return (
    <div 
      id={id}
      ref={slideRef}
      className={cn(
        "slide-section min-h-screen w-full flex flex-col",
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(
        "w-full max-w-7xl mx-auto h-full",
        variantClasses[variant],
        isVisible ? "stagger-visible" : ""
      )}>
        {title && (
          <div className="mb-8 stagger-item">
            {subtitle && <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{subtitle}</p>}
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Slide;
