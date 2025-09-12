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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center relative">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Анализ документов</h3>
            <p className="text-muted-foreground">
              Проверяем документы на объект и определяем перспективы снижения кадастровой стоимости
            </p>
            <div className="hidden lg:block absolute top-8 -right-4 text-primary">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Независимая оценка</h3>
            <p className="text-muted-foreground">
              Проводим профессиональную оценку с выездом на объект и анализом рыночных данных
            </p>
            <div className="hidden lg:block absolute top-8 -right-4 text-primary">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Подача документов</h3>
            <p className="text-muted-foreground">
              Готовим и подаем все необходимые документы в комиссию по рассмотрению споров
            </p>
            <div className="hidden lg:block absolute top-8 -right-4 text-primary">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              4
            </div>
            <h3 className="text-xl font-semibold mb-4">Результат</h3>
            <p className="text-muted-foreground">
              Получаем положительное решение и новую кадастровую стоимость с существенным снижением
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-card p-8 rounded-lg shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Результаты наших клиентов</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Торговый центр</span>
                  <span className="text-primary font-bold">-65% налога</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Офисное здание</span>
                  <span className="text-primary font-bold">-78% налога</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Производственный комплекс</span>
                  <span className="text-primary font-bold">-52% налога</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Складские помещения</span>
                  <span className="text-primary font-bold">-71% налога</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">2.8 млрд</div>
              <p className="text-xl text-muted-foreground">рублей сэкономили наши клиенты за последние 3 года</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;