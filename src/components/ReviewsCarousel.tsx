import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Александр П.",
      avatar: "АП",
      text: "Благодаря работе оценщика смогли снизить кадастровую стоимость офисного здания на 68%. Экономия составила более 2 млн рублей в год. Профессиональная работа, все сроки соблюдены.",
      rating: 5
    },
    {
      name: "Мария И.",
      avatar: "МИ", 
      text: "Обратилась для оспаривания кадастровой стоимости торгового помещения. Результат превзошел ожидания — снижение на 72%. Рекомендую как надежного специалиста.",
      rating: 5
    },
    {
      name: "Сергей Н.",
      avatar: "СН",
      text: "Работали с оценщиком по снижению стоимости производственных площадей. Получили снижение на 55%, что позволило существенно сократить налоговую нагрузку.",
      rating: 5
    },
    {
      name: "Елена К.",
      avatar: "ЕК",
      text: "Оценка квартиры для ипотеки прошла быстро и качественно. Банк принял отчет без замечаний. Спасибо за профессиональную работу!",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      avatar: "ДВ",
      text: "Снизили кадастровую стоимость земельного участка на 45%. Теперь налог стал в разы меньше. Очень доволен результатом!",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Отзывы наших <span className="text-primary">клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 500 предпринимателей Карелии уже сэкономили миллионы рублей
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="max-w-4xl mx-auto p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {review.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{review.name}</h3>
                        <div className="flex mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-primary fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                      "{review.text}"
                    </blockquote>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-elegant transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-elegant transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a 
              href="https://share.google/HHgKdKHKxTf0TiDSo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Смотреть все отзывы на Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;