import { CheckCircle } from "lucide-react";

const SectionA = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-primary">преимущества</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-3xl mx-auto space-y-2">
            <p>• Более 15 лет опыта в оценке недвижимости для жителей Карелии.</p>
            <p>• Более 10 лет опыта успешного снижения кадастровой стоимости для предпринимателей.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Профессиональный оценщик</h3>
            <p className="text-muted-foreground">
              Оценщик имеет все необходимые документы для проведения независимой оценки недвижимости и соответствует ФЗ № 135-ФЗ
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Оценка для любых целей – 100% результат</h3>
            <p className="text-muted-foreground">
              Независимая оценка имущества (ипотека, наследство, аренда, купля-продажа, суд и др.)
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Аккредитация</h3>
            <p className="text-muted-foreground">
              Сбербанк, Газпромбанк, Уралсиб, Связьбанк и другие
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Оптимизация налогообложения</h3>
            <p className="text-muted-foreground">
              Снижение кадастровой стоимости. Полное сопровождение в Центре госкадастровой оценки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionA;