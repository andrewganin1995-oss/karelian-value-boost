import { Phone, Mail } from "lucide-react";

const LeadForm = () => {
  return (
    <section id="lead-form" className="py-12 sm:py-16 md:py-20 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Получите <span className="text-primary">бесплатную</span> консультацию
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Свяжитесь с нами удобным способом — наш специалист ответит на все вопросы
          </p>
        </div>

        <div className="bg-background p-6 sm:p-8 md:p-10 rounded-2xl shadow-elegant max-w-2xl mx-auto border border-primary/10 transition-smooth hover:shadow-primary/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="tel:+79212282440"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  +7 (921) 228-24-40
                </div>
              </div>
            </a>

            <a
              href="mailto:282440@mail.ru"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                  282440@mail.ru
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
