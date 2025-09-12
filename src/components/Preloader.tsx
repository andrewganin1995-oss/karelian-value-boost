import { useState, useEffect } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-out">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="text-primary font-semibold text-lg">
          Загружаем оценку...
        </div>
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-primary animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;