import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutCompany = () => {
  const handleOpenFile = () => {
    // Открываем файл S.jpg
    window.open("/S.jpg", "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            О <span className="text-primary">компании</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Мы предоставляем профессиональные услуги по независимой оценке недвижимости в Республике Карелия с 2010 года.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={handleOpenFile}
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Посмотреть сертификаты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;