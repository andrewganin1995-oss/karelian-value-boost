import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ответы на самые популярные <span className="text-primary">вопросы об оценке</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="faq-1" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
              В каких районах Карелии работаете?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground">
                Со всеми объектами Карелии, возможна работа и в других регионах по запросу.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
              Для чего нужна оценка недвижимости?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground">
                Оценка необходима для: ипотеки, наследства, получения кредита, судебных разбирательств, 
                аренды, личных целей, купли-продажи и других операций с недвижимостью.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
              Какие документы нужны для оценки?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground">
                Документы с характеристиками объекта: правоудостоверяющие документы, 
                техническая инвентаризация и другие документы, описывающие объект оценки.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
              Как определяется рыночная стоимость?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground">
                Индивидуальный расчет на основе рыночной ситуации и характеристик объекта. 
                Возможен подробный отчет (от 1000 ₽).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
              В чем отличие рыночной и кадастровой стоимости?
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground">
                Рыночная стоимость — это цена реальной сделки, определяемая индивидуально. 
                Кадастровая стоимость — это налоговая оценка, рассчитываемая методами массовой оценки.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;