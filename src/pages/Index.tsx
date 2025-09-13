import HeroSection from "@/components/HeroSection";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import PriceList from "@/components/PriceList";
import DiscountSection from "@/components/DiscountSection";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectionA />
      <SectionB />
      <PriceList />
      <DiscountSection />
      <CTASection />
      <LeadForm />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
