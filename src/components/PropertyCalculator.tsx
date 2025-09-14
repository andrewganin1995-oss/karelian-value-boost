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
    market: {
      "Первичный": {
        value: 1.0,
        label: "(1.0)"
      },
      "Вторичный": {
        value: 0.85,
        label: "(0.85)"
      }
    },
    district: {
      "Высокий": {
        value: 1.00,
        label: "(1.00)"
      },
      "Средний": {
        value: 0.86,
        label: "(0.86)"
      },
      "Низкий": {
        value: 0.71,
        label: "(0.71)"
      }
    },
    material: {
      "Кирпич/Монолит": {
        value: 1.00,
        label: "(1.00)"
      },
      "Панель": {
        value: 0.86,
        label: "(0.86)"
      },
      "Дерево": {
        value: 0.71,
        label: "(0.71)"
      }
    },
    houseCondition: {
      "Отличное": {
        value: 1.00,
        label: "(1.00)"
      },
      "Хорошее": {
        value: 0.85,
        label: "(0.85)"
      },
      "Удовлетворительное": {
        value: 0.75,
        label: "(0.75)"
      }
    },
    floor: {
      "Средний": {
        value: 1.00,
        label: "(1.00)"
      },
      "Последний": {
        value: 0.97,
        label: "(0.97)"
      },
      "Первый": {
        value: 0.94,
        label: "(0.94)"
      }
    },
    finishQuality: {
      "Без отделки": {
        value: 0.89,
        label: "(0.89)"
      },
      "Предчистовая": {
        value: 1.00,
        label: "(1.00)"
      },
      "Простая": {
        value: 1.07,
        label: "(1.07)"
      },
      "Улучшенная": {
        value: 1.18,
        label: "(1.18)"
      }
    },
    finishCondition: {
      "Новое": {
        value: 1.00,
        label: "(1.00)"
      },
      "Удовлетворительное": {
        value: 0.70,
        label: "(0.70)"
      },
      "Неудовлетворительное": {
        value: 0.20,
        label: "(0.20)"
      }
    }
  };

  // Фиксированная стоимость за м²
  const basePriceMin = 200000;
  const basePriceMax = 250000;
  const calculatePrice = () => {
    if (!market) return null;
    const currentArea = area[0];

    // Формула: A * B * C * D * E * F * X * Y * P
    const kMarket = market ? coefficients.market[market as keyof typeof coefficients.market]?.value || 1 : 1;
    const kDistrict = district ? coefficients.district[district as keyof typeof coefficients.district]?.value || 1 : 1;
    const kMaterial = material ? coefficients.material[material as keyof typeof coefficients.material]?.value || 1 : 1;
    const kHouseCondition = houseCondition ? coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition]?.value || 1 : 1;
    const kFloor = floor ? coefficients.floor[floor as keyof typeof coefficients.floor]?.value || 1 : 1;
    const kFinishQuality = finishQuality ? coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality]?.value || 1 : 1;
    const kFinishCondition = finishCondition ? coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition]?.value || 1 : 1;
    const totalCoeff = kMarket * kDistrict * kMaterial * kHouseCondition * kFloor * kFinishQuality * kFinishCondition;
    const minPrice = Math.round(currentArea * basePriceMin * totalCoeff);
    const maxPrice = Math.round(currentArea * basePriceMax * totalCoeff);
    return {
      min: minPrice,
      max: maxPrice
    };
  };
  const result = calculatePrice();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };
  return <section className="py-20 bg-gradient-section">
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
            <Slider value={area} onValueChange={setArea} max={300} min={20} step={5} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>20 м²</span>
              <span>300 м²</span>
            </div>
          </div>

          {/* Рынок */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Рынок {market && coefficients.market[market as keyof typeof coefficients.market] && <span className="text-primary text-sm">
                  {coefficients.market[market as keyof typeof coefficients.market].label}
                </span>}
            </label>
            <Select value={market} onValueChange={setMarket}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип рынка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Первичный">Первичный (1.0)</SelectItem>
                <SelectItem value="Вторичный">Вторичный (0.85)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Уровень района */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Уровень района {district && coefficients.district[district as keyof typeof coefficients.district] && <span className="text-primary text-sm">
                  {coefficients.district[district as keyof typeof coefficients.district].label}
                </span>}
            </label>
            <Select value={district} onValueChange={setDistrict}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите уровень района" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Высокий">Высокий (1.00)</SelectItem>
                <SelectItem value="Средний">Средний (0.86)</SelectItem>
                <SelectItem value="Низкий">Низкий (0.71)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Материал дома */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Материал дома {material && coefficients.material[material as keyof typeof coefficients.material] && <span className="text-primary text-sm">
                  {coefficients.material[material as keyof typeof coefficients.material].label}
                </span>}
            </label>
            <Select value={material} onValueChange={setMaterial}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите материал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Кирпич/Монолит">Кирпич/Монолит (1.00)</SelectItem>
                <SelectItem value="Панель">Панель (0.86)</SelectItem>
                <SelectItem value="Дерево">Дерево (0.71)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Состояние дома */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Состояние дома {houseCondition && coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition] && <span className="text-primary text-sm">
                  {coefficients.houseCondition[houseCondition as keyof typeof coefficients.houseCondition].label}
                </span>}
            </label>
            <Select value={houseCondition} onValueChange={setHouseCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите состояние" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Отличное">Отличное (1.00)</SelectItem>
                <SelectItem value="Хорошее">Хорошее (0.85)</SelectItem>
                <SelectItem value="Удовлетворительное">Удовлетворительное (0.75)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Этаж */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Этаж {floor && coefficients.floor[floor as keyof typeof coefficients.floor] && <span className="text-primary text-sm">
                  {coefficients.floor[floor as keyof typeof coefficients.floor].label}
                </span>}
            </label>
            <Select value={floor} onValueChange={setFloor}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите этаж" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Средний">Средний (1.00)</SelectItem>
                <SelectItem value="Последний">Последний (0.97)</SelectItem>
                <SelectItem value="Первый">Первый (0.94)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Качество отделки */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Качество отделки {finishQuality && coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality] && <span className="text-primary text-sm">
                  {coefficients.finishQuality[finishQuality as keyof typeof coefficients.finishQuality].label}
                </span>}
            </label>
            <Select value={finishQuality} onValueChange={setFinishQuality}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите качество отделки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Без отделки">Без отделки (0.89)</SelectItem>
                <SelectItem value="Предчистовая">Предчистовая (1.00)</SelectItem>
                <SelectItem value="Простая">Простая (1.07)</SelectItem>
                <SelectItem value="Улучшенная">Улучшенная (1.18)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Состояние отделки */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Состояние отделки {finishCondition && coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition] && <span className="text-primary text-sm">
                  {coefficients.finishCondition[finishCondition as keyof typeof coefficients.finishCondition].label}
                </span>}
            </label>
            <Select value={finishCondition} onValueChange={setFinishCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите состояние отделки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Новое">Новое (1.00)</SelectItem>
                <SelectItem value="Удовлетворительное">Удовлетворительное (0.70)</SelectItem>
                <SelectItem value="Неудовлетворительное">Неудовлетворительное (0.20)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Результат */}
          {result && <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Расчетная стоимость</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                от {formatPrice(result.min)} до {formatPrice(result.max)} ₽
              </div>
              <p className="text-muted-foreground">
                Точная сумма будет рассчитана после осмотра объекта
              </p>
              
            </div>}
        </Card>
      </div>
    </section>;
};
export default PropertyCalculator;