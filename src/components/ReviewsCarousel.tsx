import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Андрей Г.",
      avatar: "АГ",
      text: "Прекрасный оценщик, лучший специалист в Карелии.",
      rating: 5
    },
    {
      name: "Мирослав С.",
      avatar: "МС", 
      text: "Быстро подготовили сложный отчет. Советую!",
      rating: 5
    },
    {
      name: "Федор Ф.",
      avatar: "ФФ",
      text: "Алла – отличный оценщик! Работаем 6 лет, гибкие цены, короткие сроки. Отчеты всегда проходят и в комиссии, и в суде.",
      rating: 5
    },
    {
      name: "Иван С.",
      avatar: "ИС",
      text: "Алла Геннадьевна – специалист своего дела! Очень советую.",
      rating: 5
    },
    {
      name: "Марина Т.",
      avatar: "МТ",
      text: "Если Вам нужна профессиональная, грамотная оценка Вашей недвижимости, то обращайтесь именно сюда!!! Работу свою сделали на отлично!",
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
    const interval = setInterval(nextSlide, 4000);
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
              href="https://maps.app.goo.gl/zqA9guX6ErJwCje68" 
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