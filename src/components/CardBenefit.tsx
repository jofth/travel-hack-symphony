
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CardBenefitProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  value?: string;
  color?: string;
  isRecommended?: boolean;
  className?: string;
  variant?: 'default' | 'compact' | 'feature';
  animationDelay?: number;
}

const CardBenefit: React.FC<CardBenefitProps> = ({
  title,
  description,
  icon,
  value,
  color = "#006FCF",
  isRecommended = false,
  className,
  variant = 'default',
  animationDelay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, animationDelay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationDelay]);

  const variantStyles = {
    default: "p-6 flex flex-col",
    compact: "p-4 flex flex-row items-center",
    feature: "p-6 flex flex-col items-center text-center"
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-xl bg-white relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 card-3d-effect stagger-item",
        variantStyles[variant],
        animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        {
          "ring-2 ring-primary": isRecommended,
          "card-stack": variant !== 'compact'
        },
        className
      )}
      style={{ 
        transitionDelay: `${animationDelay}s`,
        borderTop: `3px solid ${color}`
      }}
    >
      {isRecommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-bl-lg">
            Recommended
          </div>
        </div>
      )}
      
      {variant === 'compact' ? (
        <>
          {icon && <div className="mr-4 text-gray-700">{icon}</div>}
          <div>
            <h3 className="font-medium text-base">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            {value && <div className="text-lg font-semibold mt-2">{value}</div>}
          </div>
        </>
      ) : variant === 'feature' ? (
        <>
          {icon && <div className="mb-4 text-gray-700">{icon}</div>}
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {value && <div className="text-xl font-semibold mt-4">{value}</div>}
        </>
      ) : (
        <>
          {icon && <div className="mb-4 text-gray-700">{icon}</div>}
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {value && <div className="text-xl font-semibold mt-4">{value}</div>}
        </>
      )}
    </div>
  );
};

export default CardBenefit;
