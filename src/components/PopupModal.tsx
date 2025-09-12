import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PopupModalProps {
  onScrollToForm: () => void;
}

const PopupModal = ({ onScrollToForm }: PopupModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGetConsultation = () => {
    setIsVisible(false);
    onScrollToForm();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-lg shadow-elegant p-8 max-w-md w-full relative animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">
              Не упустите возможность!
            </h3>
            <p className="text-muted-foreground">
              Получите бесплатную консультацию по снижению кадастровой стоимости. 
              Экономьте до 80% на налогах уже сегодня!
            </p>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-sm text-primary font-semibold">
              ⚡ Ограниченное предложение
            </p>
            <p className="text-xs text-muted-foreground">
              Консультация доступна только для первых 10 клиентов этого месяца
            </p>
          </div>
          
          <Button 
            onClick={handleGetConsultation}
            variant="hero" 
            size="lg" 
            className="w-full"
          >
            Получить консультацию бесплатно
          </Button>
          
          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Может быть, позже
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;