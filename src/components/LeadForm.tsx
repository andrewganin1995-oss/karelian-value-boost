import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
    preferredContactMethod: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            contact: formData.contact,
            purpose: formData.purpose,
            preferred_contact_method: formData.preferredContactMethod,
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение часа",
      });
      
      setFormData({ name: "", contact: "", purpose: "", preferredContactMethod: "" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Получите <span className="text-primary">бесплатную</span> консультацию
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для предварительной оценки перспектив дела
          </p>
        </div>
        
        <div className="bg-background p-8 rounded-2xl shadow-elegant max-w-2xl mx-auto border border-primary/10 transition-smooth hover:shadow-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-foreground font-medium">Имя и фамилия *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Например: Иван Петров"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 rounded-xl border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 focus:bg-card transition-all duration-300 placeholder:text-muted-foreground/70"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="contact" className="text-foreground font-medium">Телефон или email *</Label>
              <Input
                id="contact"
                type="text"
                placeholder="Например: +7 (921) 123-45-67"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
                className="h-14 rounded-xl border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 focus:bg-card transition-all duration-300 placeholder:text-muted-foreground/70"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="purpose" className="text-foreground font-medium">Цель обращения</Label>
              <Select value={formData.purpose} onValueChange={(value) => setFormData({ ...formData, purpose: value })}>
                <SelectTrigger className="h-14 rounded-xl border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 transition-all duration-300">
                  <SelectValue placeholder="Выберите подходящий вариант" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border bg-background/95 backdrop-blur-sm">
                  <SelectItem value="cadastral-dispute">Оспаривание кадастровой стоимости</SelectItem>
                  <SelectItem value="property-valuation">Независимая оценка недвижимости</SelectItem>
                  <SelectItem value="tax-optimization">Консультация по налоговой оптимизации</SelectItem>
                  <SelectItem value="court-support">Судебное сопровождение</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="preferredContact" className="text-foreground font-medium">Предпочтительный способ связи</Label>
              <Select value={formData.preferredContactMethod} onValueChange={(value) => setFormData({ ...formData, preferredContactMethod: value })}>
                <SelectTrigger className="h-14 rounded-xl border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 transition-all duration-300">
                  <SelectValue placeholder="Выберите способ связи" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border bg-background/95 backdrop-blur-sm">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="call">Звонок</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Button type="submit" variant="hero" size="lg" className="w-full h-14 text-lg rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Получить бесплатную консультацию
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center pt-2">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="text-primary hover:underline transition-colors">
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