import { LabelsItem } from '@/utils/types&schemas/Home/Expert_Teams';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselItem {
  id: string | number;
  media: string;
  name: string;
  title: string;
  description: string;
  labels: LabelsItem[];
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = false, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  React.useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = () => {
    if (isMobile) {
      return [currentIndex];
    } else if (isTablet) {
      const prev = (currentIndex - 1 + items.length) % items.length;
      return [prev, currentIndex];
    } else {
      const prev = (currentIndex - 1 + items.length) % items.length;
      const next = (currentIndex + 1) % items.length;
      return [prev, currentIndex, next];
    }
  };

  const visibleIndices = getVisibleItems();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        <div className="relative h-137.5 flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {items.map((item, index) => {
              const position = visibleIndices.indexOf(index);
              if (position === -1) return null;

              let isCenter = false;
              if (isMobile) {
                isCenter = true;
              } else if (isTablet) {
                isCenter = position === 1;
              } else {
                isCenter = position === 1;
              }

              return (
                <div
                  key={item.id}
                  className={`transition-all duration-500 ease-in-out ${
                    isCenter
                      ? 'z-20 scale-100 opacity-100'
                      : 'z-10 scale-90 opacity-50'
                  }`}
                >
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden w-70 sm:w-[320px] lg:w-87.5 ${
                    !isCenter ? 'blur-[2px]' : ''
                  }`}>
                    <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.media}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-a1 mb-2">
                        {item.name}
                      </h3>
                      <p className=" font-semibold mb-3 text-sm sm:text-base">
                        {item.title}
                      </p>
                      <p className="text-[#767676] text-xs sm:text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.labels.map((tag, tagIndex) => (
                          <span
                            key={tag.id}
                            className="px-2 sm:px-3 py-1 bg-primary-a1/20 text-primary-a1 text-xs rounded-md font-bold capitalize"
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-primary-a1'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;