import { CheckCircle } from "lucide-react";

const SectionA = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-primary">преимущества</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 20 лет опыта в оценке недвижимости и успешном снижении кадастровой стоимости 
            для предпринимателей Карелии
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Лицензированный оценщик</h3>
            <p className="text-muted-foreground">
              Имеем все необходимые лицензии и аккредитации для проведения независимой оценки недвижимости
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">100% успешных дел</h3>
            <p className="text-muted-foreground">
              Высокий процент успешного оспаривания кадастровой стоимости благодаря опыту и профессионализму
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Гарантия результата</h3>
            <p className="text-muted-foreground">
              Предоставляем гарантию на наши услуги. Если не снизим стоимость — вернем деньги
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Быстрые сроки</h3>
            <p className="text-muted-foreground">
              Проводим оценку в течение 5-7 рабочих дней. Оперативно подготавливаем документы для суда
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Полное сопровождение</h3>
            <p className="text-muted-foreground">
              Ведем дело от оценки до получения положительного решения суда включительно
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
            <div className="mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Экономия до 80%</h3>
            <p className="text-muted-foreground">
              Наши клиенты экономят от 30% до 80% на налогах благодаря снижению кадастровой стоимости
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionA;