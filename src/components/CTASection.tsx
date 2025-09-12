import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { useState } from "react";
import Calculator from "@/components/Calculator";

const CTASection = () => {
  const scrollToForm = useScrollToForm();
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  
  return (
    <>
      <Calculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)}
        onGetConsultation={() => {
          setIsCalculatorOpen(false);
          scrollToForm();
        }}
      />
      <section className="py-20 bg-gradient-primary">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Готовы снизить налоги на недвижимость?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Получите бесплатную консультацию и узнайте, на сколько можно снизить 
          кадастровую стоимость вашего объекта
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90"
            onClick={scrollToForm}
          >
            Бесплатная консультация
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
            onClick={() => setIsCalculatorOpen(true)}
          >
            Рассчитать экономию
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-primary-foreground/90">
            <div className="text-2xl font-bold">Бесплатно</div>
            <div className="text-sm">Первая консультация</div>
          </div>
          <div className="text-primary-foreground/90">
            <div className="text-2xl font-bold">5-7 дней</div>
            <div className="text-sm">Срок проведения оценки</div>
          </div>
          <div className="text-primary-foreground/90">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">Гарантия результата</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTASection;