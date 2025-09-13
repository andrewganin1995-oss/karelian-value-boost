import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const PropertyCalculator = () => {
  const [area, setArea] = useState([50]);
  const [market, setMarket] = useState("");
  const [district, setDistrict] = useState("");
  const [material, setMaterial] = useState("");
  const [houseCondition, setHouseCondition] = useState("");
  const [floor, setFloor] = useState("");
  const [finishQuality, setFinishQuality] = useState("");
  const [finishCondition, setFinishCondition] = useState("");

  const coefficients = {
    district: {
      "Центр": { value: 1.1, label: "+10%" },
      "Спальный район": { value: 1.0, label: "0%" },
      "Окраина": { value: 0.9, label: "-10%" }
    },
    material: {
      "Кирпич": { value: 1.1, label: "+10%" },
      "Панель": { value: 1.0, label: "0%" },
      "Дерево": { value: 0.9, label: "-10%" }
    },
    houseCondition: {
      "Отличное": { value: 1.1, label: "+10%" },
      "Хорошее": { value: 1.0, label: "0%" },
      "Удовлетворительное": { value: 0.9, label: "-10%" },
      "Плохое": { value: 0.8, label: "-20%" }
    },
    floor: {
      "1": { value: 0.95, label: "-5%" },
      "2-5": { value: 1.0, label: "0%" },
      "6-9": { value: 1.05, label: "+5%" },
      "10+": { value: 0.95, label: "-5%" }
    },
    finishQuality: {
      "Евроремонт": { value: 1.15, label: "+15%" },
      "Хороший ремонт": { value: 1.05, label: "+5%" },
      "Обычный ремонт": { value: 1.0, label: "0%" },
      "Косметический": { value: 0.95, label: "-5%" },
      "Без ремонта": { value: 0.8, label: "-20%" }
    },
    finishCondition: {
      "Отличное": { value: 1.0, label: "0%" },
      "Хорошее": { value: 0.95, label: "-5%" },
      "Удовлетворительное": { value: 0.9, label: "-10%" },
      "Требует обновления": { value: 0.85, label: "-15%" }
    }
  };

  const basePrices = {
    "Первичный рынок": { min: 200000, max: 250000 },
    "Вторичный рынок": { min: 170000, max: 212500 }
  };

  const calculatePrice = () => {
    if (!market) return null;
    
    const basePrice = basePrices[market as keyof typeof basePrices];
    const currentArea = area[0];
    
    let kDistrict = district ? coefficients.district[district as keyof typeof coefficients.district]?.value || 1 : 1;
    let kMaterial = material ? coefficients.material[material as keyof typeof coefficients.material]?.value || 1 : 1;
    let kHouseCondition = houseCondition ? coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition]?.value || 1 : 1;
    let kFloor = floor ? coefficients.floor[floor as keyof typeof coefficients.floor]?.value || 1 : 1;
    let kFinishQuality = finishQuality ? coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality]?.value || 1 : 1;
    let kFinishCondition = finishCondition ? coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition]?.value || 1 : 1;
    
    const totalCoeff = kDistrict * kMaterial * kHouseCondition * kFloor * kFinishQuality * kFinishCondition;
    
    const minPrice = Math.round(currentArea * basePrice.min * totalCoeff);
    const maxPrice = Math.round(currentArea * basePrice.max * totalCoeff);
    
    return { min: minPrice, max: maxPrice };
  };

  const result = calculatePrice();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Калькулятор <span className="text-primary">стоимости</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Рассчитайте примерную стоимость вашей недвижимости
          </p>
        </div>

        <Card className="p-8 space-y-6">
          {/* Площадь */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Площадь: {area[0]} м²
            </label>
            <Slider
              value={area}
              onValueChange={setArea}
              max={300}
              min={20}
              step={5}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>20 м²</span>
              <span>300 м²</span>
            </div>
          </div>

          {/* Рынок */}
          <div>
            <label className="block text-lg font-semibold mb-4">Рынок</label>
            <Select value={market} onValueChange={setMarket}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип рынка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Первичный рынок">Первичный рынок</SelectItem>
                <SelectItem value="Вторичный рынок">Вторичный рынок</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Район */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Район {district && coefficients.district[district as keyof typeof coefficients.district] && (
                <span className="text-primary text-sm">
                  ({coefficients.district[district as keyof typeof coefficients.district].label})
                </span>
              )}
            </label>
            <Select value={district} onValueChange={setDistrict}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите район" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Центр">Центр (+10%)</SelectItem>
                <SelectItem value="Спальный район">Спальный район (0%)</SelectItem>
                <SelectItem value="Окраина">Окраина (-10%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Материал */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Материал дома {material && coefficients.material[material as keyof typeof coefficients.material] && (
                <span className="text-primary text-sm">
                  ({coefficients.material[material as keyof typeof coefficients.material].label})
                </span>
              )}
            </label>
            <Select value={material} onValueChange={setMaterial}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите материал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Кирпич">Кирпич (+10%)</SelectItem>
                <SelectItem value="Панель">Панель (0%)</SelectItem>
                <SelectItem value="Дерево">Дерево (-10%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Состояние дома */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Состояние дома {houseCondition && coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition] && (
                <span className="text-primary text-sm">
                  ({coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition].label})
                </span>
              )}
            </label>
            <Select value={houseCondition} onValueChange={setHouseCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите состояние" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Отличное">Отличное (+10%)</SelectItem>
                <SelectItem value="Хорошее">Хорошее (0%)</SelectItem>
                <SelectItem value="Удовлетворительное">Удовлетворительное (-10%)</SelectItem>
                <SelectItem value="Плохое">Плохое (-20%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Этаж */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Этаж {floor && coefficients.floor[floor as keyof typeof coefficients.floor] && (
                <span className="text-primary text-sm">
                  ({coefficients.floor[floor as keyof typeof coefficients.floor].label})
                </span>
              )}
            </label>
            <Select value={floor} onValueChange={setFloor}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите этаж" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 этаж (-5%)</SelectItem>
                <SelectItem value="2-5">2-5 этаж (0%)</SelectItem>
                <SelectItem value="6-9">6-9 этаж (+5%)</SelectItem>
                <SelectItem value="10+">10+ этаж (-5%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Качество отделки */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Качество отделки {finishQuality && coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality] && (
                <span className="text-primary text-sm">
                  ({coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality].label})
                </span>
              )}
            </label>
            <Select value={finishQuality} onValueChange={setFinishQuality}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите качество отделки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Евроремонт">Евроремонт (+15%)</SelectItem>
                <SelectItem value="Хороший ремонт">Хороший ремонт (+5%)</SelectItem>
                <SelectItem value="Обычный ремонт">Обычный ремонт (0%)</SelectItem>
                <SelectItem value="Косметический">Косметический (-5%)</SelectItem>
                <SelectItem value="Без ремонта">Без ремонта (-20%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Состояние отделки */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Состояние отделки {finishCondition && coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition] && (
                <span className="text-primary text-sm">
                  ({coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition].label})
                </span>
              )}
            </label>
            <Select value={finishCondition} onValueChange={setFinishCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите состояние отделки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Отличное">Отличное (0%)</SelectItem>
                <SelectItem value="Хорошее">Хорошее (-5%)</SelectItem>
                <SelectItem value="Удовлетворительное">Удовлетворительное (-10%)</SelectItem>
                <SelectItem value="Требует обновления">Требует обновления (-15%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Результат */}
          {result && (
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Расчетная стоимость</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                от {formatPrice(result.min)} до {formatPrice(result.max)} ₽
              </div>
              <p className="text-muted-foreground">
                Точная сумма будет рассчитана после осмотра объекта
              </p>
              <Button variant="outline" className="mt-4">
                <Download className="w-4 h-4 mr-2" />
                Скачать PDF-отчёт
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default PropertyCalculator;