import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Сколько стоит оспаривание кадастровой стоимости?",
      answer: "Стоимость услуг зависит от сложности объекта и составляет от 50 000 до 150 000 рублей. При этом экономия на налогах обычно в 10-20 раз превышает затраты на оценку. Первичная консультация — бесплатно."
    },
    {
      question: "Как долго длится процесс оспаривания?",
      answer: "Полный цикл от оценки до получения результата занимает 2-4 месяца. Сама независимая оценка проводится за 5-7 рабочих дней. Рассмотрение дела комиссией — до 1 месяца, судебное разбирательство (при необходимости) — до 2-3 месяцев."
    },
    {
      question: "Какие документы нужны для начала работы?",
      answer: "Для начала работы необходимы: правоустанавливающие документы на объект, кадастровый паспорт, справка о кадастровой стоимости, технический паспорт. Полный список документов мы предоставим после первичной консультации."
    },
    {
      question: "Гарантируете ли вы снижение кадастровой стоимости?",
      answer: "Мы предоставляем гарантию результата. Если по итогам нашей работы кадастровая стоимость не будет снижена, мы возвращаем 100% оплаченных средств. За 20 лет работы таких случаев было менее 2%."
    },
    {
      question: "На сколько процентов можно снизить кадастровую стоимость?",
      answer: "Размер снижения индивидуален для каждого объекта. В среднем нашим клиентам удается снизить кадастровую стоимость на 30-80%. Точные перспективы определяются после анализа документов и объекта."
    },
    {
      question: "Работаете ли вы с объектами по всей Карелии?",
      answer: "Да, мы работаем со всеми объектами недвижимости, расположенными на территории Республики Карелия. При необходимости выезжаем для осмотра объекта в любой район республики."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о процедуре оспаривания кадастровой стоимости
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border-0 shadow-card">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Остались вопросы? Получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+78142123456" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              +7 (8142) 12-34-56
            </a>
            <a 
              href="mailto:info@appraisal-karelia.ru" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md font-semibold hover:bg-accent transition-colors"
            >
              info@appraisal-karelia.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;