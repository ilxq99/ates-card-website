
import Icon from "@/components/ui/icon";

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Преимущества карты АТЭС</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3" 
              alt="Деловая встреча" 
              className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
          <div>
            <ul className="space-y-6">
              <AdvantageItem 
                title="Безвизовый въезд в 19 стран"
                description="Свободное передвижение по большинству стран Азиатско-Тихоокеанского региона для развития вашего бизнеса"
              />
              <AdvantageItem 
                title="Срок действия 5 лет"
                description="Долгосрочный документ, который избавляет от необходимости частого переоформления"
              />
              <AdvantageItem 
                title="Ускоренное прохождение паспортного контроля"
                description="Специальные полосы для владельцев карт АТЭС в аэропортах экономик-участниц"
              />
              <AdvantageItem 
                title="Повышение статуса"
                description="Карта является признаком высокого делового статуса и помогает укрепить авторитет в бизнес-кругах"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface AdvantageItemProps {
  title: string;
  description: string;
}

const AdvantageItem = ({ title, description }: AdvantageItemProps) => {
  return (
    <li className="flex">
      <div className="mr-4 mt-1">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Icon name="Check" className="h-5 w-5 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </li>
  );
};

export default Advantages;
