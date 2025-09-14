import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";

export const serviceData = {
  "Оценка для ипотеки": {
    title: "Оценка для ипотеки",
    description: "Профессиональная оценка недвижимости для получения ипотечного кредита. Отчет соответствует всем требованиям банков и принимается без дополнительных вопросов.",
    features: [
      "Выезд оценщика на объект",
      "Фотофиксация объекта и прилегающей территории", 
      "Анализ рыночной стоимости аналогичных объектов",
      "Подготовка отчета в соответствии с ФСО",
      "Согласование с банком при необходимости"
    ],
    price: "от 3 000 ₽",
    duration: "1-2 дня"
  },
  "Оценка для наследства": {
    title: "Оценка для наследства",
    description: "Определение рыночной стоимости наследуемого имущества для нотариального оформления и расчета госпошлины.",
    features: [
      "Оценка на дату смерти наследодателя",
      "Подготовка справки о стоимости для нотариуса",
      "Консультации по процедуре оформления",
      "Работа со всеми видами недвижимости"
    ],
    price: "от 2 500 ₽", 
    duration: "1-3 дня"
  },
  "Оценка для суда": {
    title: "Оценка для суда",
    description: "Независимая судебная экспертиза стоимости недвижимости для разрешения споров и судебных разбирательств.",
    features: [
      "Экспертное заключение для суда",
      "Участие эксперта в судебных заседаниях",
      "Ответы на вопросы суда и сторон",
      "Соответствие всем процессуальным требованиям"
    ],
    price: "от 15 000 ₽",
    duration: "5-10 дней"
  },
  "Оспаривание кадастровой стоимости": {
    title: "Оспаривание кадастровой стоимости",
    description: "Снижение кадастровой стоимости недвижимости для уменьшения налогового бремени. Полное сопровождение процедуры.",
    features: [
      "Анализ перспектив снижения стоимости",
      "Независимая оценка рыночной стоимости",
      "Подготовка и подача документов в комиссию",
      "Судебное представительство при необходимости",
      "Гарантия результата"
    ],
    price: "от 50 000 ₽",
    duration: "2-4 месяца"
  },
  "Консультации по оптимизации налогообложения": {
    title: "Консультации по оптимизации налогообложения",
    description: "Помогаем разобраться в налоговых вопросах, связанных с недвижимостью, и оптимизировать налоговые платежи",
    features: [
      "Анализ налоговой нагрузки",
      "Рекомендации по оптимизации",
      "Разработка стратегии снижения налогов",
      "Консультации по действующему законодательству"
    ],
    price: "от 3 000 ₽",
    duration: "1 день"
  },
  "Оценка для залога": {
    title: "Оценка для залога",
    description: "Определение залоговой стоимости недвижимости для получения кредитов под залог имущества.",
    features: [
      "Оценка залоговой стоимости",
      "Мониторинг стоимости в течение срока кредита",
      "Работа с банками и МФО",
      "Быстрое оформление документов"
    ],
    price: "от 5 000 ₽",
    duration: "1-3 дня"
  }
};

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