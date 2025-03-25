
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  animationDelay?: number;
}

interface ValueChartProps {
  data: ChartDataPoint[];
  title?: string;
  subtitle?: string;
  maxValue?: number;
  unit?: string;
  className?: string;
  variant?: 'default' | 'horizontal' | 'circle';
}

const ValueChart: React.FC<ValueChartProps> = ({
  data,
  title,
  subtitle,
  maxValue,
  unit = "",
  className,
  variant = 'default'
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Calculate the maximum value if not provided
  const calculatedMaxValue = maxValue || Math.max(...data.map(d => d.value)) * 1.2;

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

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isVisible, animationStarted]);

  const renderVerticalChart = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {data.map((item, index) => (
        <div 
          key={item.label} 
          className="stagger-item flex flex-col p-5 rounded-xl bg-white/60 backdrop-blur border border-white/20 shadow-subtle"
        >
          <div className="text-lg font-medium mb-2">{item.label}</div>
          <div className="mt-auto">
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: animationStarted ? `${(item.value / calculatedMaxValue) * 100}%` : '0%',
                  background: item.color || `hsl(${index * 40}, 70%, 60%)`,
                  transitionDelay: `${(item.animationDelay || index * 0.1) + 0.3}s`
                }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 text-sm">{unit}</span>
              <span className="text-2xl font-semibold">
                {animationStarted ? item.value.toLocaleString() : '0'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHorizontalChart = () => (
    <div className="space-y-6 mt-6">
      {data.map((item, index) => (
        <div key={item.label} className="stagger-item">
          <div className="flex justify-between mb-2">
            <span className="font-medium">{item.label}</span>
            <span className="font-semibold">
              {animationStarted ? `${unit}${item.value.toLocaleString()}` : `${unit}0`}
            </span>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: animationStarted ? `${(item.value / calculatedMaxValue) * 100}%` : '0%',
                background: item.color || `hsl(${index * 40}, 70%, 60%)`,
                transitionDelay: `${(item.animationDelay || index * 0.1) + 0.3}s`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderCircleChart = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {data.map((item, index) => {
        const percentage = (item.value / calculatedMaxValue) * 100;
        const circumference = 2 * Math.PI * 40;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;
        
        return (
          <div 
            key={item.label} 
            className="stagger-item flex flex-col items-center p-4 rounded-xl bg-white/60 backdrop-blur border border-white/20 shadow-subtle"
          >
            <div className="relative w-24 h-24 mb-3">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color || `hsl(${index * 40}, 70%, 60%)`}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={animationStarted ? strokeDashoffset : circumference}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  style={{
                    transition: 'stroke-dashoffset 1.5s ease-out',
                    transitionDelay: `${(item.animationDelay || index * 0.1) + 0.3}s`
                  }}
                />
                <text
                  x="50"
                  y="50"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-xl font-semibold"
                >
                  {animationStarted ? Math.round(percentage) + '%' : '0%'}
                </text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-medium">{item.label}</div>
              <div className="text-xl font-semibold mt-1">
                {animationStarted ? `${unit}${item.value.toLocaleString()}` : `${unit}0`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div 
      ref={chartRef}
      className={cn("stagger-item", className)}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      {variant === 'default' && renderVerticalChart()}
      {variant === 'horizontal' && renderHorizontalChart()}
      {variant === 'circle' && renderCircleChart()}
    </div>
  );
};

export default ValueChart;
