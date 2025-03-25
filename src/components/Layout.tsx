
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "min-h-screen w-full bg-gradient-to-br from-background to-secondary",
      className
    )}>
      <div className="slide-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
