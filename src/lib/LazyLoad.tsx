import { useState, useEffect, useRef, ReactNode } from "react";

const LazyLoad = ({
  children,
  placeholder = <p>Chargement...</p>,
}: {
  children: ReactNode;
  placeholder?: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const currentDomRef = domRef.current;
    if (currentDomRef) {
      observer.observe(currentDomRef);
      return () => observer.unobserve(currentDomRef);
    }
  }, []);

  return <div ref={domRef}>{isVisible ? children : placeholder}</div>;
};

export default LazyLoad;
