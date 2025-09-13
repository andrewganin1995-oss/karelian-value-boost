import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+78142123456" className="hover:text-primary transition-colors">
                  +7 (8142) 12-34-56
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@appraisal-karelia.ru" className="hover:text-primary transition-colors">
                  info@appraisal-karelia.ru
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href="https://t.me/appraisal_karelia" className="hover:text-primary transition-colors">
                  Telegram
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href="https://wa.me/78142123456" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                
                
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
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Оспаривание кадастровой стоимости
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Независимая оценка недвижимости
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Судебное сопровождение
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Консультации по налогообложению
              </a>
            </div>
          </div>
          
          {/* О компании */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">О компании</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Более 20 лет помогаем предпринимателям Карелии оспаривать кадастровую стоимость 
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
    </footer>;
};
export default Footer;