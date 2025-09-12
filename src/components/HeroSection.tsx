import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Самый котируемый
            <span className="block text-primary">оценщик Карелии</span>
            с 20-летним стажем работы
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Профессионально оспариваем кадастровую стоимость недвижимости. 
            Снижение налогов до 80% для предпринимателей Республики Карелия.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Получить консультацию
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-4 text-lg">
              Узнать стоимость
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Успешных дел</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">20 лет</div>
              <p className="text-muted-foreground">Опыт работы</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;