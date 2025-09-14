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
          {/* Общие вопросы об оценке */}
          <AccordionItem value="general" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-xl font-bold hover:text-primary transition-colors py-6">
              Общие вопросы об оценке
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">В каких районах Карелии работаете?</h4>
                  <p className="text-muted-foreground">
                    Со всеми объектами Карелии, возможна работа и в других регионах по запросу.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Для чего нужна оценка недвижимости?</h4>
                  <p className="text-muted-foreground">
                    Оценка необходима для: ипотеки, наследства, получения кредита, судебных разбирательств, 
                    аренды, личных целей, купли-продажи и других операций с недвижимостью.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Какие документы нужны для оценки?</h4>
                  <p className="text-muted-foreground">
                    Документы с характеристиками объекта: правоудостоверяющие документы, 
                    техническая инвентаризация и другие документы, описывающие объект оценки.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Как определяется рыночная стоимость?</h4>
                  <p className="text-muted-foreground">
                    Индивидуальный расчет на основе рыночной ситуации и характеристик объекта. 
                    Возможен подробный отчет (от 1000 ₽).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">В чем отличие рыночной и кадастровой стоимости?</h4>
                  <p className="text-muted-foreground">
                    Рыночная стоимость — это цена реальной сделки, определяемая индивидуально. 
                    Кадастровая стоимость — это налоговая оценка, рассчитываемая методами массовой оценки.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Вопросы о снижении кадастровой стоимости */}
          <AccordionItem value="cadastral" className="bg-card rounded-lg px-6 border-0 shadow-card">
            <AccordionTrigger className="text-left text-xl font-bold hover:text-primary transition-colors py-6">
              Вопросы о снижении кадастровой стоимости
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Сколько времени занимает процедура?</h4>
                  <p className="text-muted-foreground">
                    От подачи документов до получения результата обычно проходит 2-4 месяца, 
                    в зависимости от загруженности комиссии.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Какая экономия возможна?</h4>
                  <p className="text-muted-foreground">
                    В среднем удается снизить кадастровую стоимость на 30-70%. 
                    Конкретная сумма экономии зависит от характеристик объекта.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Есть ли гарантия результата?</h4>
                  <p className="text-muted-foreground">
                    Мы берем в работу только перспективные дела. При отрицательном решении 
                    комиссии предусмотрен частичный возврат средств.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;