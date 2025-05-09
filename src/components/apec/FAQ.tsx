
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FAQ = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Часто задаваемые вопросы</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQItem 
            question="Кто может получить карту АТЭС?"
            answer="Карту АТЭС могут получить руководители высшего звена (генеральный директор, заместитель генерального директора, коммерческий директор) компаний, ведущих международную торговлю или инвестиционную деятельность со странами АТЭС."
          />
          
          <FAQItem 
            question="Какие страны входят в АТЭС?"
            answer="В АТЭС входит 21 экономика: Австралия, Бруней, Вьетнам, Гонконг, Индонезия, Канада, Китай, Южная Корея, Малайзия, Мексика, Новая Зеландия, Папуа-Новая Гвинея, Перу, Россия, Сингапур, США, Таиланд, Тайвань, Филиппины, Чили, Япония."
          />
          
          <FAQItem 
            question="Какой срок действия карты АТЭС?"
            answer="Карта АТЭС выдается сроком на 5 лет. По истечении срока действия карту необходимо переоформлять."
          />
          
          <FAQItem 
            question="Заменяет ли карта АТЭС визу?"
            answer="Карта АТЭС полностью заменяет визу для большинства стран-участниц программы. Однако для США и Канады карта не является полноценной заменой визы, но обеспечивает ускоренное рассмотрение визовых заявлений."
          />
          
          <FAQItem 
            question="Сколько времени занимает оформление карты АТЭС?"
            answer="Средний срок оформления карты АТЭС составляет 2-3 месяца с момента подачи полного пакета документов. При обращении через нашу компанию мы стремимся ускорить этот процесс и сделать его максимально комфортным для клиента."
          />
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {answer}
        </p>
      </CardContent>
    </Card>
  );
};

export default FAQ;
