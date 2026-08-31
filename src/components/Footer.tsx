import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Контакты */}
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-foreground">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+79212282440" className="hover:text-primary transition-colors">
                    +7 (921) 228-24-40
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:282440@mail.ru" className="hover:text-primary transition-colors break-all">
                    282440@mail.ru
                  </a>
                </div>
              </div>
            </div>
            
            
            {/* Режим работы */}
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-foreground">Режим работы</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div>Пн-Пт: 9:00 - 18:00</div>
                    <div>Сб: 10:00 - 16:00</div>
                    <div>Вс: выходной</div>
                  </div>
                </div>
              </div>
            </div>

            
            {/* О компании */}
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-foreground">О компании</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => window.open("/1.jpg", "_blank")}
                >
                  Профессиональная оценка недвижимости в Карелии
                </p>
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => window.open("/2.jpg", "_blank")}
                >
                  Более 15 лет опыта
                </p>
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => window.open("/3.jpg", "_blank")}
                >
                  Аккредитация в крупнейших банках
                </p>
              </div>
            </div>
            
          </div>
          
          <div className="border-t border-border mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 col-span-full">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              <div className="text-muted-foreground text-xs sm:text-sm">
                © 2024 Оценщик недвижимости Карелия. Все права защищены.
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm">
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
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
  );
};
export default Footer;