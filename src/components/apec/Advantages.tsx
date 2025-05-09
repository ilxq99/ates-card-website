
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
            Международный бизнес без границ
          </Badge>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Преимущества <span className="gradient-text">карты АТЭС</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Карта АТЭС открывает новые возможности для вашего бизнеса и значительно упрощает международное сотрудничество
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              {advantages.map((advantage, index) => (
                <AdvantageItem 
                  key={index}
                  title={advantage.title}
                  description={advantage.description}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl transform rotate-3 scale-95 opacity-70"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3" 
                alt="Деловая встреча" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] z-10 relative"
              />
              
              {/* Декоративные бейджи */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg z-20 flex items-center max-w-xs border border-gray-100">
                <div className="bg-primary/20 p-2 rounded-full mr-3 shrink-0">
                  <Icon name="Globe" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">19 стран без визы</div>
                  <div className="text-sm text-muted-foreground">
                    Свободное перемещение по странам Азиатско-Тихоокеанского региона
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg z-20 flex items-center max-w-xs border border-gray-100">
                <div className="bg-accent/20 p-2 rounded-full mr-3 shrink-0">
                  <Icon name="Timer" className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold">5 лет действия</div>
                  <div className="text-sm text-muted-foreground">
                    Долгосрочный документ для ваших деловых поездок
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Дополнительный блок с преимуществами */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureBox
            icon="CreditCard"
            title="Экономия средств"
            description="Не нужно оплачивать визовые сборы при каждой поездке"
          />
          <FeatureBox
            icon="Briefcase"
            title="Бизнес-репутация"
            description="Карта АТЭС подтверждает ваш статус в деловых кругах"
          />
          <FeatureBox
            icon="FileText"
            title="Упрощенная документация"
            description="Минимальный пакет документов при пересечении границы"
          />
        </div>
      </div>
    </section>
  );
};

interface AdvantageItemProps {
  title: string;
  description: string;
  index: number;
}

const AdvantageItem = ({ title, description, index }: AdvantageItemProps) => {
  return (
    <motion.div 
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex group"
    >
      <div className="mr-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">
          {index}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

interface FeatureBoxProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:border-primary/20 transition-colors card-hover"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary group-hover:text-white transition-colors">
        <Icon name={icon} className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const advantages = [
  {
    title: "Безвизовый въезд в 19 стран",
    description: "Свободное передвижение по большинству стран Азиатско-Тихоокеанского региона для развития вашего бизнеса"
  },
  {
    title: "Срок действия 5 лет",
    description: "Долгосрочный документ, который избавляет от необходимости частого переоформления"
  },
  {
    title: "Ускоренное прохождение паспортного контроля",
    description: "Специальные полосы для владельцев карт АТЭС в аэропортах экономик-участниц"
  },
  {
    title: "Повышение статуса",
    description: "Карта является признаком высокого делового статуса и помогает укрепить авторитет в бизнес-кругах"
  }
];

export default Advantages;
