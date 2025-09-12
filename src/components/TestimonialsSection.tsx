import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      company: "ООО «Северные технологии»",
      text: "Благодаря работе оценщика смогли снизить кадастровую стоимость офисного здания на 68%. Экономия составила более 2 млн рублей в год. Профессиональная работа, все сроки соблюдены.",
      rating: 5,
    },
    {
      name: "Мария Иванова",
      company: "ИП Иванова М.В.",
      text: "Обратилась для оспаривания кадастровой стоимости торгового помещения. Результат превзошел ожидания — снижение на 72%. Рекомендую как надежного специалиста.",
      rating: 5,
    },
    {
      name: "Сергей Николаев",
      company: "ООО «Карельский лес»",
      text: "Работали с оценщиком по снижению стоимости производственных площадей. Получили снижение на 55%, что позволило существенно сократить налоговую нагрузку. Отличный результат!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Отзывы наших <span className="text-primary">клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 500 предпринимателей Карелии уже сэкономили миллионы рублей благодаря нашим услугам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-card transition-smooth hover:shadow-elegant">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-card p-8 rounded-lg shadow-card">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Рекомендуют</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;