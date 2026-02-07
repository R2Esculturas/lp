
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "50px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal-container ${isActive ? 'active' : ''} ${className}`}
      style={{ willChange: isActive ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default Reveal;
