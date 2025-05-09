
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
            Выберите подходящий вариант
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Тарифы на оформление <span className="gradient-text">карты АТЭС</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем различные тарифные планы, адаптированные под разные потребности бизнеса и сроки оформления документов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Стандарт"
            price="от 65 000 ₽"
            image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
            description="Базовый тариф для тех, кто планирует деловые поездки заранее"
            features={[
              "Срок оформления: 3-4 месяца",
              "Подготовка документов",
              "Подача заявления",
              "Проверка соответствия требованиям",
              "Базовая поддержка",
              "Email-консультации"
            ]}
            buttonText="Выбрать тариф"
            popular={false}
            color="muted"
          />
          
          <PricingCard 
            title="Экспресс"
            price="от 85 000 ₽"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
            description="Оптимальный вариант для активно развивающегося бизнеса"
            features={[
              "Срок оформления: 2-3 месяца",
              "Полное сопровождение процесса",
              "Проверка соответствия требованиям",
              "Подготовка всех необходимых документов",
              "Консультации на всех этапах",
              "Отслеживание статуса заявки"
            ]}
            buttonText="Выбрать тариф"
            popular={true}
            color="primary"
          />
          
          <PricingCard 
            title="VIP"
            price="от 140 000 ₽"
            image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
            description="Премиальный сервис для требовательных клиентов"
            features={[
              "Срок оформления: 1-1,5 месяца",
              "Приоритетное рассмотрение заявки",
              "Полное сопровождение под ключ",
              "Расширенная проверка документов",
              "Персональный менеджер 24/7",
              "Экспресс-доставка готовой карты"
            ]}
            buttonText="Выбрать тариф"
            popular={false}
            color="accent"
          />
        </div>
        
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Lightbulb" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Нужна консультация?</h3>
              <p className="text-muted-foreground mb-6">
                Если вы не уверены, какой тариф выбрать или хотите узнать точную стоимость для вашего случая, свяжитесь с нами для бесплатной консультации. Мы поможем подобрать оптимальное решение.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8">
                <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <AdvantageItem 
              icon="ShieldCheck"
              title="Гарантия результата"
              description="В случае отказа в выдаче карты АТЭС, мы вернем полную стоимость услуг"
            />
            <AdvantageItem 
              icon="Receipt"
              title="Прозрачные цены"
              description="Никаких скрытых платежей или дополнительных комиссий"
            />
            <AdvantageItem 
              icon="CreditCard"
              title="Удобная оплата"
              description="Наличный и безналичный расчет, работаем с НДС и без НДС"
            />
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
  buttonText: string;
  popular: boolean;
  color: "primary" | "accent" | "muted";
}

const PricingCard = ({ 
  title, 
  price, 
  image, 
  description, 
  features, 
  buttonText, 
  popular,
  color
}: PricingCardProps) => {
  // Определяем классы на основе переданного цвета
  const getBadgeClass = () => {
    switch(color) {
      case "primary": return "bg-primary text-white";
      case "accent": return "bg-accent text-white";
      default: return "bg-gray-700 text-white";
    }
  };
  
  const getIconClass = () => {
    switch(color) {
      case "primary": return "text-primary";
      case "accent": return "text-accent";
      default: return "text-gray-500";
    }
  };
  
  const getButtonClass = () => {
    switch(color) {
      case "primary": return "bg-primary hover:bg-primary/90 text-white";
      case "accent": return "bg-accent hover:bg-accent/90 text-white";
      default: return "bg-gray-800 hover:bg-gray-700 text-white";
    }
  };
  
  const getBorderClass = () => {
    switch(color) {
      case "primary": return "border-primary/20";
      case "accent": return "border-accent/20";
      default: return "border-gray-200";
    }
  };
  
  return (
    <div 
      className={`h-full transform transition-transform duration-500 hover:scale-105 animate-fade-in-up ${
        popular ? 'md:-translate-y-4' : ''
      }`}
    >
      <Card 
        className={`overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow ${
          popular ? 'border-2 border-primary/30 ring-2 ring-primary/20 ring-offset-2' : 'border'
        }`}
      >
        {popular && (
          <div className={`${getBadgeClass()} py-2 text-center relative`}>
            <div className="absolute -left-10 top-7 bg-yellow-500 text-white px-10 py-1 text-xs font-bold rotate-[-45deg]">
              ПОПУЛЯРНЫЙ
            </div>
            <span className="font-medium">Оптимальный выбор</span>
          </div>
        )}
        
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-3xl font-bold mt-1">{price}</div>
          </div>
        </div>
        
        <CardHeader className="pb-0">
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow pt-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`mr-2 mt-1 ${getIconClass()}`}>
                  <Icon name="CheckCircle2" className="h-5 w-5" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-2">
          <Button 
            className={`w-full ${getButtonClass()}`}
            size="lg"
          >
            {buttonText}
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

interface AdvantageItemProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageItem = ({ icon, title, description }: AdvantageItemProps) => {
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center animate-fade-in-up">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon name={icon} className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PricingPlans;
