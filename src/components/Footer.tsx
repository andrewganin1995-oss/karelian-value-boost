import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-start">
            {/* Контакты */}
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-foreground">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+79937622440" className="hover:text-primary transition-colors">
                    +7 993 762-24-40
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:ocenka2440@gmail.com" className="hover:text-primary transition-colors break-all">
                    ocenka2440@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <a href="https://t.me/OcenkaAH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 bg-[#0088cc] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.333-.373-.12L9.864 13.17l-2.915-.918c-.64-.203-.658-.64.133-.953L18.16 7.21c.523-.193.985.12.733.953z" />
                    </svg>
                    Telegram
                  </a>
                  <a href="https://wa.me/message/NL6YV3L5746MB1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
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
                <p>Профессиональная оценка недвижимости в Карелии</p>
                <p>Более 15 лет опыта</p>
                <p>Аккредитация в крупнейших банках</p>
              </div>
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
  );
};
export default Footer;