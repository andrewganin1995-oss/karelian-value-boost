import HeroSection from "@/components/HeroSection";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import PropertyCalculator from "@/components/PropertyCalculator";
import AboutCompany from "@/components/AboutCompany";
import ClientResults from "@/components/ClientResults";
import PriceList from "@/components/PriceList";
import DiscountSection from "@/components/DiscountSection";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AccordionSection from "@/components/AccordionSection";
import { Accordion } from "@/components/ui/accordion";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertyCalculator />
      <AboutCompany />
      
      <div className="py-10 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionSection title="Наши преимущества" value="advantages">
              <SectionA />
            </AccordionSection>
            
            <AccordionSection title="Как мы работаем" value="process">
              <SectionB />
            </AccordionSection>
            
            <AccordionSection title="Результаты наших клиентов" value="results">
              <ClientResults />
            </AccordionSection>
            
            <AccordionSection title="Прайс-лист на услуги оценки" value="prices">
              <PriceList />
            </AccordionSection>
            
            <AccordionSection title="Скидочная политика" value="discounts">
              <DiscountSection />
            </AccordionSection>
            
            <AccordionSection title="Часто задаваемые вопросы" value="faq">
              <FAQSection />
            </AccordionSection>
          </Accordion>
        </div>
      </div>
      
      <CTASection />
      <LeadForm />
      <ReviewsCarousel />
      <Footer />
    </main>
  );
};

export default Index;
