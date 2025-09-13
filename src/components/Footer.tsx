import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import ServiceModal from "@/components/ServiceModal";

const Footer = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = {
    cadastral: {
      title: "Оспаривание кадастровой стоимости",
      description: "Профессиональное снижение кадастровой стоимости недвижимости через судебные инстанции. Наша команда имеет многолетний опыт успешного ведения дел по оспариванию завышенной кадастровой стоимости.",
      features: [
        "Анализ документов и перспектив дела",
        "Проведение независимой оценки объекта",
        "Подготовка пакета документов для суда",
        "Представительство в судебных инстанциях",
        "Получение нового кадастрового паспорта",
        "Сопровождение до полного завершения дела"
      ],
      price: "от 15 000 ₽",
      duration: "2-6 месяцев"
    },
    valuation: {
      title: "Независимая оценка недвижимости",
      description: "Профессиональная оценка рыночной стоимости недвижимости с выдачей официального отчета, соответствующего всем требованиям законодательства РФ.",
      features: [
        "Выезд оценщика на объект",
        "Фотофиксация состояния объекта",
        "Анализ рыночных данных",
        "Применение трех подходов к оценке",
        "Подготовка отчета об оценке",
        "Консультации по результатам оценки"
      ],
      price: "от 5 000 ₽",
      duration: "3-5 дней"
    },
    court: {
      title: "Судебное сопровождение",
      description: "Полное юридическое сопровождение дел по спорам о недвижимости в судах всех инстанций. Защита ваших интересов на всех этапах судебного процесса.",
      features: [
        "Подготовка процессуальных документов",
        "Участие в судебных заседаниях",
        "Работа с экспертами и свидетелями",
        "Обжалование неблагоприятных решений",
        "Исполнение судебных решений",
        "Консультации на всех этапах процесса"
      ],
      price: "от 25 000 ₽",
      duration: "индивидуально"
    },
    consultation: {
      title: "Консультации по налогообложению",
      description: "Экспертные консультации по вопросам налогообложения недвижимости, оптимизации налоговых платежей и использованию льгот.",
      features: [
        "Анализ налоговой нагрузки",
        "Поиск возможностей оптимизации",
        "Консультации по льготам",
        "Помощь в общении с налоговой",
        "Разработка стратегии снижения налогов",
        "Постоянная поддержка по налоговым вопросам"
      ],
      price: "от 3 000 ₽",
      duration: "1-2 дня"
    }
  };

  const handleServiceClick = (serviceKey: string) => {
    setSelectedService(services[serviceKey as keyof typeof services]);
    setIsModalOpen(true);
  };

  return (
    <>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
      <footer className="bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Контакты */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+79937622440" className="hover:text-primary transition-colors">
                    +79937622440
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:ocenka2440@gmail.com" className="hover:text-primary transition-colors">
                    ocenka2440@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <a href="https://t.me/+79937622440" className="hover:text-primary transition-colors">
                    Telegram
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <a href="https://wa.me/+79937622440" className="hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Режим работы */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Режим работы</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div>Пн-Пт: 9:00 - 18:00</div>
                    <div>Сб: 10:00 - 16:00</div>
                    <div>Вс: выходной</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Услуги */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Услуги</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleServiceClick("cadastral")}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors w-full"
                >
                  Оспаривание кадастровой стоимости
                </button>
                <button
                  onClick={() => handleServiceClick("valuation")}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors w-full"
                >
                  Независимая оценка недвижимости
                </button>
                <button
                  onClick={() => handleServiceClick("court")}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors w-full"
                >
                  Судебное сопровождение
                </button>
                <button
                  onClick={() => handleServiceClick("consultation")}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors w-full"
                >
                  Консультации по налогообложению
                </button>
              </div>
            </div>
            
            {/* О компании */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">О компании</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Более 15 лет помогаем предпринимателям Карелии оспаривать кадастровую стоимость 
                и экономить на налогах. Лицензированный оценщик с безупречной репутацией.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © 2024 Оценщик недвижимости Карелия. Все права защищены.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;