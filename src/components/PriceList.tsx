import { Button } from "@/components/ui/button";
import { useScrollToForm } from "@/hooks/useScrollToForm";

const PriceList = () => {
  const scrollToForm = useScrollToForm();

  const priceData = [
    {
      type: "Земельный участок (жилое)",
      quantity: "1 ед.",
      price: "от 5000",
      timeline: "1–3"
    },
    {
      type: "Квартира (апартаменты)",
      quantity: "1 ед.",
      price: "от 2500",
      timeline: "1–3"
    },
    {
      type: "Индивидуальный дом с участком",
      quantity: "1 ед.",
      price: "от 6500",
      timeline: "договорные"
    },
    {
      type: "Постройки вспомогательные",
      quantity: "1 ед.",
      price: "от 3500",
      timeline: "договорные"
    },
    {
      type: "Гараж капитальный",
      quantity: "1 ед.",
      price: "от 2500",
      timeline: "1–3"
    },
    {
      type: "Земельный участок (коммерч.)",
      quantity: "1 ед.",
      price: "от 10000",
      timeline: "договорные"
    },
    {
      type: "Отдельно‑стоящее здание",
      quantity: "1 ед.",
      price: "от 10000",
      timeline: "договорные"
    },
    {
      type: "Встроенное помещение",
      quantity: "1 ед.",
      price: "от 9000",
      timeline: "договорные"
    },
    {
      type: "Имущественный комплекс",
      quantity: "1 ед.",
      price: "от 20000",
      timeline: "договорные"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Прайс-лист на <span className="text-primary">услуги оценки</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Стоимость независимой оценки недвижимости для оспаривания кадастровой стоимости
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Услуга</th>
                  <th className="px-6 py-4 text-left font-semibold">Цена</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-6 py-4 font-medium">{item.type}</td>
                    <td className="px-6 py-4 text-primary font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg"
            onClick={scrollToForm}
          >
            Рассчитать возможную экономию
          </Button>
        </div>

        <div className="mt-8 bg-primary/10 p-6 rounded-lg">
          <p className="text-lg font-semibold text-center mb-2">
            Цена заключения по оценке для всех услуг — 1 000 ₽
          </p>
          <p className="text-sm text-muted-foreground text-center">
            * Указанные цены являются базовыми. Итоговая стоимость может варьироваться в зависимости от сложности объекта
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceList;