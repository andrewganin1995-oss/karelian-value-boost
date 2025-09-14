import { ArrowRight } from "lucide-react";

const SectionB = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Как мы <span className="text-primary">работаем</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простой и прозрачный процесс оспаривания кадастровой стоимости
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center relative">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Анализ документов</h3>
            <p className="text-muted-foreground">
              Проверяем документы и перспективы оценки
            </p>
            <div className="hidden md:block absolute top-8 -right-4 text-primary">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Независимая оценка</h3>
            <p className="text-muted-foreground">
              Проводим оценку с осмотром и рыночным анализом
            </p>
            <div className="hidden md:block absolute top-8 -right-4 text-primary">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Результат</h3>
            <p className="text-muted-foreground">
              Отчет, соответствующий федеральным требованиям
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;