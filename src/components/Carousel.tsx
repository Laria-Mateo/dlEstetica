import React, { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  showDots = true,
  autoPlay = false,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % childrenArray.length;
      goToSlide(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, childrenArray.length]);

  const goToSlide = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const slideWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / slideWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start"
            style={{ minWidth: '100%' }}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && childrenArray.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-[#65c6b6] scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel; 