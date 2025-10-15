import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";
const HeroSection = () => {
  const scrollToForm = useScrollToForm();
  return <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-8">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Профессиональный оценщик
            <span className="block text-primary mt-2">недвижимости в Карелии</span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
            Обоснованность и достоверность
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 sm:pt-8 max-w-lg mx-auto sm:max-w-none">
            <Button variant="hero" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg" onClick={scrollToForm}>
              Рассчитать стоимость
            </Button>
            <Button variant="hero" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg" onClick={scrollToForm}>
              Получить консультацию
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 md:pt-16">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
              <p className="text-sm sm:text-base text-muted-foreground">Успешных дел</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary">15+ лет</div>
              <p className="text-sm sm:text-base text-muted-foreground">Опыт работы</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary">5000+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;