
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
            Ваш ключ к международному бизнесу
          </Badge>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Что такое <span className="gradient-text">карта АТЭС?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            APEC Business Travel Card (ABTC) или карта АТЭС — это документ, который позволяет бизнесменам и предпринимателям многократно посещать страны Азиатско-Тихоокеанского экономического сотрудничества без оформления виз на срок до 90 дней в каждой стране.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            icon="Clock"
            color="primary"
            title="Экономия времени"
            description="Отсутствие необходимости оформлять визы на каждую деловую поездку экономит ваше время и ресурсы."
            delay={0}
          />
          <FeatureCard 
            icon="Building"
            color="secondary"
            title="Приоритетное обслуживание"
            description="Специальные коридоры для владельцев карт в аэропортах стран-участниц обеспечивают быстрое прохождение контроля."
            delay={0.2}
          />
          <FeatureCard 
            icon="Globe"
            color="accent"
            title="Многократный въезд"
            description="Возможность посещать страны АТЭС неограниченное количество раз в течение срока действия карты."
            delay={0.4}
          />
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="relative z-10 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3" 
                    alt="АТЭС карта" 
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <Badge className="bg-primary/10 text-primary border-none mb-4">
                  <Icon name="Star" className="mr-1 h-3 w-3" /> 
                  Преимущество
                </Badge>
                <h3 className="text-2xl font-bold mb-4">Упрощённый въезд в 21 экономику АТЭС</h3>
                <p className="text-muted-foreground mb-6">
                  Карта АТЭС позволяет предпринимателям и бизнесменам сосредоточиться на развитии бизнеса, а не на административных вопросах при пересечении границ. Это ваш персональный ключ к свободному перемещению по Азиатско-Тихоокеанскому региону.
                </p>
                <div className="flex items-center text-sm text-primary">
                  <span className="font-medium">Узнать подробнее</span>
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  color: 'primary' | 'secondary' | 'accent';
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, color, title, description, delay }: FeatureCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent"
  };
  
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group card-hover"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative p-8 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm z-10">
        <div className={`w-14 h-14 ${colorClasses[color]} rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
          <Icon name={icon} className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutCard;
