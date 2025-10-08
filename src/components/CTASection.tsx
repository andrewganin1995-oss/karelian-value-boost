import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";

const CTASection = () => {
  const scrollToForm = useScrollToForm();
  
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Остались вопросы? Получите бесплатную консультацию
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наш специалист свяжется с вами для предварительной консультации по вопросам оценки.
        </p>
        <div className="flex justify-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90"
            onClick={scrollToForm}
          >
            Оставить заявку
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
  );
};

export default CTASection;