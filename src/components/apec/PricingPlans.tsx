
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500 transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Тарифы на оформление карты АТЭС</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Выберите удобный для вас вариант оформления карты АТЭС в зависимости от срочности и потребностей вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <PricingCard 
            title="Экспресс"
            price="от 85 000 ₽"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
            description="Оптимальный вариант для тех, кто планирует деловые поездки заранее"
            features={[
              "Срок оформления: 2-3 месяца",
              "Полное сопровождение процесса",
              "Проверка соответствия требованиям",
              "Подготовка всех необходимых документов",
              "Консультации на всех этапах",
              "Отслеживание статуса заявки"
            ]}
            cta="Выбрать тариф"
            popular={false}
          />
          
          <PricingCard 
            title="Супер Экспресс"
            price="от 140 000 ₽"
            image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
            description="Идеальное решение для срочных деловых поездок и занятых руководителей"
            features={[
              "Срок оформления: 1-1,5 месяца",
              "Приоритетное рассмотрение заявки",
              "Полное сопровождение процесса под ключ",
              "Расширенная проверка документов перед подачей",
              "VIP-поддержка 24/7",
              "Экспресс-курьер для доставки готовой карты"
            ]}
            cta="Выбрать тариф"
            popular={true}
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center justify-center">
              <Icon name="Info" className="mr-2 h-5 w-5 text-primary" />
              Важная информация
            </h3>
            <p className="text-muted-foreground text-sm">
              Указанные цены являются базовыми. Окончательная стоимость услуг зависит от сложности вашего случая и может быть определена после консультации с нашими специалистами. Для получения точного расчета свяжитесь с нами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const PricingCard = ({ title, price, image, description, features, cta, popular }: PricingCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${popular ? 'border-primary shadow-lg' : ''}`}>
      {popular && (
        <div className="bg-primary text-white text-center py-2 text-sm font-medium relative">
          <div className="absolute -left-10 top-7 bg-primary text-white px-10 py-1 text-xs font-bold rotate-[-45deg]">
            РЕКОМЕНДУЕМ
          </div>
          <span>Оптимальный выбор</span>
        </div>
      )}
      
      <div className="h-40 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-3xl font-bold mt-1">{price}</div>
          </div>
        </div>
      </div>
      
      <CardHeader className={`pb-2 ${popular ? 'bg-primary/5' : ''}`}>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mr-3 mt-0.5 flex-shrink-0 ${popular ? 'text-primary' : 'text-gray-400'}`}>
                <Icon name="CheckCircle2" className="h-5 w-5" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`} 
          variant={popular ? "default" : "outline"}
          size="lg"
        >
          {cta}
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingPlans;
