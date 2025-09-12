import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Calculator as CalculatorIcon } from "lucide-react";

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onGetConsultation: () => void;
}

const Calculator = ({ isOpen, onClose, onGetConsultation }: CalculatorProps) => {
  const [formData, setFormData] = useState({
    propertyType: "",
    area: "",
    currentValue: "",
    location: "",
    year: ""
  });

  const [estimatedSavings, setEstimatedSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    if (!formData.currentValue || !formData.propertyType || !formData.area) return;
    
    const currentValue = parseFloat(formData.currentValue);
    let savingsPercent = 0;

    // Базовый процент экономии в зависимости от типа недвижимости
    switch (formData.propertyType) {
      case "residential":
        savingsPercent = 25;
        break;
      case "commercial":
        savingsPercent = 45;
        break;
      case "industrial":
        savingsPercent = 60;
        break;
      case "land":
        savingsPercent = 35;
        break;
      case "warehouse":
        savingsPercent = 50;
        break;
      default:
        savingsPercent = 30;
    }

    // Корректировка по площади (больше площадь - больше экономия)
    const area = parseFloat(formData.area);
    if (area > 1000) savingsPercent += 10;
    else if (area > 500) savingsPercent += 5;

    // Корректировка по году постройки (старые здания - больше экономия)
    const year = parseInt(formData.year);
    if (year && year < 2000) savingsPercent += 10;
    else if (year && year < 2010) savingsPercent += 5;

    const maxSavings = Math.min(savingsPercent, 75); // Максимум 75% экономии
    const savings = (currentValue * maxSavings) / 100;
    setEstimatedSavings(savings);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSavings();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalculatorIcon className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Калькулятор экономии</CardTitle>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-muted-foreground">
            Рассчитайте предварительную экономию на налогах при снижении кадастровой стоимости
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Тип недвижимости *</Label>
              <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип недвижимости" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Жилая недвижимость</SelectItem>
                  <SelectItem value="commercial">Коммерческая недвижимость</SelectItem>
                  <SelectItem value="industrial">Промышленная недвижимость</SelectItem>
                  <SelectItem value="land">Земельный участок</SelectItem>
                  <SelectItem value="warehouse">Складская недвижимость</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Площадь (кв.м) *</Label>
              <Input
                id="area"
                type="number"
                placeholder="Например: 150"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentValue">Текущая кадастровая стоимость (₽) *</Label>
              <Input
                id="currentValue"
                type="number"
                placeholder="Например: 5000000"
                value={formData.currentValue}
                onChange={(e) => setFormData({ ...formData, currentValue: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Местоположение</Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите район" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrozavodsk">Петрозаводск</SelectItem>
                  <SelectItem value="kondopoga">Кондопога</SelectItem>
                  <SelectItem value="kostomuksha">Костомукша</SelectItem>
                  <SelectItem value="sortavala">Сортавала</SelectItem>
                  <SelectItem value="other">Другой район Карелии</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Год постройки/регистрации</Label>
              <Input
                id="year"
                type="number"
                placeholder="Например: 2010"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full" variant="hero">
              Рассчитать экономию
            </Button>
          </form>

          {estimatedSavings !== null && (
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 animate-fade-in">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Предварительный расчет экономии
              </h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">
                  {estimatedSavings.toLocaleString('ru-RU')} ₽ в год
                </p>
                <p className="text-sm text-muted-foreground">
                  * Расчет примерный и может отличаться от фактического результата
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <Button 
                  onClick={onGetConsultation}
                  variant="hero" 
                  className="w-full"
                >
                  Получить точный расчет бесплатно
                </Button>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Для точного расчета экономии требуется профессиональная оценка
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;