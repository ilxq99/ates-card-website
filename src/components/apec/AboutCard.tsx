
import Icon from "@/components/ui/icon";

const AboutCard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Что такое карта АТЭС?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            APEC Business Travel Card (ABTC) или карта АТЭС — это документ, который позволяет бизнесменам и предпринимателям многократно посещать страны Азиатско-Тихоокеанского экономического сотрудничества без оформления виз на срок до 90 дней в каждой стране.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mt-12">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Экономия времени</h3>
              <p className="text-muted-foreground">Отсутствие необходимости оформлять визы на каждую деловую поездку</p>
            </div>
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Building" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Приоритетное обслуживание</h3>
              <p className="text-muted-foreground">Специальные коридоры для владельцев карт в аэропортах стран-участниц</p>
            </div>
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Globe" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Многократный въезд</h3>
              <p className="text-muted-foreground">Возможность посещать страны АТЭС неограниченное количество раз в течение срока действия карты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
