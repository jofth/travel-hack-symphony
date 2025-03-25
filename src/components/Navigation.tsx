
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = scrollPosition / totalScrollable;
      setScrollProgress(progress);

      // Find active section
      const sections = items.map(item => document.getElementById(item.id));
      let currentSectionId = items[0]?.id || '';
      
      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 200 && 
            scrollPosition < sectionTop + sectionHeight - 200) {
          currentSectionId = section.id;
        }
      });
      
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize values
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const navigateToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigatePrevNext = (direction: 'prev' | 'next') => {
    const currentIndex = items.findIndex(item => item.id === activeSection);
    if (currentIndex === -1) return;
    
    if (direction === 'prev' && currentIndex > 0) {
      navigateToSection(items[currentIndex - 1].id);
    } else if (direction === 'next' && currentIndex < items.length - 1) {
      navigateToSection(items[currentIndex + 1].id);
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
                    activeSection === item.id 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={() => navigateToSection(item.id)}
                >
                  {item.label}
                  {activeSection === item.id && (
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
                  activeSection === item.id 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => navigateToSection(item.id)}
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
          disabled={items.findIndex(item => item.id === activeSection) <= 0}
        >
          <ChevronUp size={20} className="text-gray-700" />
        </button>
        <button
          className="p-3 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-all duration-200"
          onClick={() => navigatePrevNext('next')}
          disabled={items.findIndex(item => item.id === activeSection) >= items.length - 1}
        >
          <ChevronDown size={20} className="text-gray-700" />
        </button>
      </div>
    </>
  );
};

export default Navigation;
