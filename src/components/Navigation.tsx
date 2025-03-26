
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  path: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Find current index
      const currentIndex = items.findIndex(item => item.path === currentPath);
      if (currentIndex === -1) return;

      // Handle arrow keys and space bar
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ' || event.key === 'j' || event.key === 'l') {
        event.preventDefault();
        if (currentIndex < items.length - 1) {
          navigate(items[currentIndex + 1].path);
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'k' || event.key === 'h') {
        event.preventDefault();
        if (currentIndex > 0) {
          navigate(items[currentIndex - 1].path);
        }
      } else if (event.key === 'Home') {
        event.preventDefault();
        navigate(items[0].path);
      } else if (event.key === 'End') {
        event.preventDefault();
        navigate(items[items.length - 1].path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [items, currentPath, navigate]);

  useEffect(() => {
    // Calculate scroll progress for the progress bar (aesthetic only)
    const currentIndex = Math.max(0, items.findIndex(item => item.path === currentPath));
    const progress = items.length > 1 ? currentIndex / (items.length - 1) : 0;
    setScrollProgress(progress);
  }, [currentPath, items]);

  const navigateToSlide = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const navigatePrevNext = (direction: 'prev' | 'next') => {
    const currentIndex = items.findIndex(item => item.path === currentPath);
    if (currentIndex === -1) return;
    
    if (direction === 'prev' && currentIndex > 0) {
      navigateToSlide(items[currentIndex - 1].path);
    } else if (direction === 'next' && currentIndex < items.length - 1) {
      navigateToSlide(items[currentIndex + 1].path);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-100 z-50">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Desktop Navigation */}
      <div className={cn(
        "fixed top-0 left-0 w-full z-40 hidden md:block",
        className
      )}>
        <div className="glass-panel backdrop-blur-md border-b border-slate-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-lg font-medium text-gradient">
              Travel Hack Symphony
            </div>
            <nav className="flex space-x-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative",
                    currentPath === item.path 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => navigateToSlide(item.path)}
                >
                  {item.label}
                  {currentPath === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-grow-x" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 backdrop-blur shadow-sm md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/90 backdrop-blur-lg md:hidden transform transition-transform duration-300",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col space-y-4 w-full px-8">
            {items.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-md transition-all",
                  currentPath === item.path 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => navigateToSlide(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
        <button
          className="p-3 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-all duration-200"
          onClick={() => navigatePrevNext('prev')}
          disabled={items.findIndex(item => item.path === currentPath) <= 0}
        >
          <ChevronUp size={20} className="text-gray-700" />
        </button>
        <button
          className="p-3 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-all duration-200"
          onClick={() => navigatePrevNext('next')}
          disabled={items.findIndex(item => item.path === currentPath) >= items.length - 1}
        >
          <ChevronDown size={20} className="text-gray-700" />
        </button>
      </div>
    </>
  );
};

export default Navigation;
