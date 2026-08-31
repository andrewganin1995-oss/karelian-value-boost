import { Users, Gift, TrendingUp, Star } from "lucide-react";

const DiscountSection = () => {
  const discounts = [
    {
      icon: Users,
      title: "Комплексный заказ (2 объекта и более)",
      discount: "скидка 10–15%",
      description: "При оценке нескольких объектов одновременно"
    },
    {
      icon: Star,
      title: "Постоянные клиенты и партнёры (банки, агентства)",
      discount: "скидка 7–10%",
      description: "Для наших постоянных клиентов и деловых партнеров"
    },
    {
      icon: Gift,
      title: "Льготные категории (пенсионеры, молодые семьи с ипотекой)",
      discount: "скидка 5%",
      description: "Социальная поддержка для льготных категорий граждан"
    },
    {
      icon: TrendingUp,
      title: "Приведи друга",
      discount: "скидка 10%",
      description: "10% скидка на следующий заказ при обращении нового клиента по вашей рекомендации"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Скидочная</span> политика
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выгодные условия для разных категорий клиентов и типов заказов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discounts.map((item, index) => {
            const IconComponent = item.icon;
            const isPositive = !item.discount.includes("надбавка") && !item.discount.includes("без скидок");
            const isNeutral = item.discount.includes("без скидок");
            
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg shadow-card transition-smooth hover:shadow-elegant"
              >
                <div className="mb-4">
                  <IconComponent className={`w-12 h-12 ${isPositive ? 'text-primary' : isNeutral ? 'text-muted-foreground' : 'text-orange-500'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className={`text-xl font-bold mb-3 ${isPositive ? 'text-primary' : isNeutral ? 'text-muted-foreground' : 'text-orange-500'}`}>
                  {item.discount}
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg shadow-card text-center">
          <h3 className="text-2xl font-bold mb-4">Как получить скидку?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Скидки предоставляются автоматически при соответствии условиям или по запросу клиента. 
            Скидки не суммируются между собой. Действует максимальная применимая скидка.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;