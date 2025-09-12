import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь была бы интеграция с CRM или email сервисом
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение часа",
    });
    
    setFormData({ name: "", contact: "", purpose: "" });
  };

  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Получите <span className="text-primary">бесплатную</span> консультацию
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для предварительной оценки перспектив дела
          </p>
        </div>
        
        <div className="bg-background p-8 rounded-lg shadow-card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Имя и фамилия *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contact">Телефон или email *</Label>
              <Input
                id="contact"
                type="text"
                placeholder="+7 (999) 123-45-67 или email@example.com"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Цель обращения</Label>
              <Select value={formData.purpose} onValueChange={(value) => setFormData({ ...formData, purpose: value })}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Выберите цель обращения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cadastral-dispute">Оспаривание кадастровой стоимости</SelectItem>
                  <SelectItem value="property-valuation">Независимая оценка недвижимости</SelectItem>
                  <SelectItem value="tax-optimization">Консультация по налоговой оптимизации</SelectItem>
                  <SelectItem value="court-support">Судебное сопровождение</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" variant="hero" size="lg" className="w-full h-12 text-lg">
              Получить бесплатную консультацию
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="text-primary hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;