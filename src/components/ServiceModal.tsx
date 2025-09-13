import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    price: string;
    duration: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const scrollToForm = useScrollToForm();

  if (!isOpen || !service) return null;

  const handleGetConsultation = () => {
    onClose();
    scrollToForm();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-elegant animate-scale-in">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Описание услуги</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Что входит в услугу:</h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Стоимость</h4>
              <p className="text-2xl font-bold">{service.price}</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Срок выполнения</h4>
              <p className="text-xl">{service.duration}</p>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              onClick={handleGetConsultation}
              variant="hero" 
              className="w-full"
            >
              Получить консультацию по этой услуге
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;