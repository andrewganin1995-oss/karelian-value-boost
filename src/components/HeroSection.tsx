import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";
const HeroSection = () => {
  const scrollToForm = useScrollToForm();
  return <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            ПРОФЕССИОНАЛЬНЫЙ ОЦЕНЩИК
            <span className="block text-primary">НЕДВИЖИМОСТИ В КАРЕЛИИ</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Обоснованность и достоверность
          </div>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg mr-4" onClick={scrollToForm}>
              Рассчитать стоимость
            </Button>
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg" onClick={scrollToForm}>
              Получить консультацию
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground">Успешных дел</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+ лет</div>
              <p className="text-muted-foreground">Опыт работы</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;