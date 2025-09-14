import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutCompany = () => {
  const handleOpenFile = () => {
    // Открываем файл S.jpg
    window.open("/S.jpg", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            О <span className="text-primary">компании</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Мы предоставляем профессиональные услуги по независимой оценке недвижимости в Республике Карелия с 2009 года.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg"
            onClick={handleOpenFile}
          >
            <FileText className="w-5 h-5 mr-2" />
            Посмотреть сертификаты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;