import { CheckCircle } from "lucide-react";

const SectionA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-primary">преимущества</span>
          </h2>
          <div className="text-base text-muted-foreground max-w-3xl mx-auto space-y-1">
            <p>Более 15 лет опыта в оценке недвижимости для жителей Карелии</p>
            <p>Более 10 лет опыта успешного снижения кадастровой стоимости для предпринимателей</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Профессиональный оценщик</h3>
            <p className="text-sm text-muted-foreground">
              Все необходимые документы для независимой оценки согласно ФЗ № 135-ФЗ
            </p>
          </div>
          
          <div className="bg-card/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Оценка для любых целей</h3>
            <p className="text-sm text-muted-foreground">
              Ипотека, наследство, аренда, купля-продажа, суд и другие цели
            </p>
          </div>
          
          <div className="bg-card/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Аккредитация</h3>
            <p className="text-sm text-muted-foreground">
              Сбербанк, Газпромбанк, Уралсиб, Связьбанк и другие банки
            </p>
          </div>
          
          <div className="bg-card/50 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Оптимизация налогов</h3>
            <p className="text-sm text-muted-foreground">
              Снижение кадастровой стоимости с полным сопровождением
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionA;