
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Layout from './Layout';

interface SlideLayoutProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'center' | 'split' | 'feature';
  background?: 'default' | 'light' | 'dark' | 'blue' | 'gradient';
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  variant = 'default',
  background = 'default'
}) => {
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
    <Layout className={cn(backgroundClasses[background], className)}>
      <div 
        id={id}
        className={cn(
          "min-h-screen w-full flex flex-col justify-center",
        )}
      >
        <div className={cn(
          "w-full max-w-7xl mx-auto h-full stagger-visible",
          variantClasses[variant],
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
    </Layout>
  );
};

export default SlideLayout;
