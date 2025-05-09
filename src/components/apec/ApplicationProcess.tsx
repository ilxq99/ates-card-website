
import { Card, CardContent } from "@/components/ui/card";

const ApplicationProcess = () => {
  return (
    <section id="process" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Процесс оформления</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Линия соединения шагов */}
            <div className="absolute left-[39px] top-[70px] bottom-0 w-[2px] bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-16 relative">
              <ProcessStep 
                number={1}
                title="Проверка соответствия требованиям"
                description="Карту АТЭС могут получить владельцы и руководители компаний, занимающихся международной торговлей или инвестициями со странами АТЭС."
                requirements={[
                  "Генеральный директор или руководитель высшего звена",
                  "Необходимость регулярных деловых поездок в страны АТЭС",
                  "Компания должна вести внешнеэкономическую деятельность",
                  "Наличие загранпаспорта сроком действия не менее 5 лет"
                ]}
              />
              
              <ProcessStep 
                number={2}
                title="Подготовка документов"
                description="Для оформления карты АТЭС вам понадобится собрать пакет документов, подтверждающих вашу деловую активность."
                requirements={[
                  "Загранпаспорт (оригинал + копия)",
                  "Документы, подтверждающие статус в компании",
                  "Выписка из ЕГРЮЛ не старше 1 месяца",
                  "Справка о деловой активности компании со странами АТЭС",
                  "Фотография установленного образца",
                  "Заполненная анкета-заявление"
                ]}
              />
              
              <ProcessStep 
                number={3}
                title="Подача заявления"
                description="После подготовки всех документов вы можете подать заявление на получение карты АТЭС."
                requirements={[
                  "Через нашу компанию (мы берем на себя всю процедуру оформления)",
                  "Через Торгово-промышленную палату РФ",
                  "Через Министерство экономического развития"
                ]}
                additionalInfo="При обращении через нашу компанию мы гарантируем оформление без вашего личного присутствия и в кратчайшие сроки."
              />
              
              <ProcessStep 
                number={4}
                title="Получение карты"
                description="После одобрения заявки и изготовления карты вы сможете получить ее и начать пользоваться всеми преимуществами."
                requirements={[
                  "Средний срок рассмотрения заявления — 2-3 месяца",
                  "Доставка карты курьером по указанному адресу",
                  "Срок действия выданной карты — 5 лет",
                  "Возможность отслеживания статуса заявки через личный кабинет"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  requirements: string[];
  additionalInfo?: string;
}

const ProcessStep = ({ number, title, description, requirements, additionalInfo }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-20 flex justify-center">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground mb-4">
          {description}
        </p>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <h4 className="font-medium mb-3">
              {number === 1 && "Требования к заявителю:"}
              {number === 2 && "Необходимые документы:"}
              {number === 3 && "Способы подачи:"}
              {number === 4 && "Сроки и получение:"}
            </h4>
            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            {additionalInfo && (
              <p className="mt-4 text-primary font-medium">
                {additionalInfo}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationProcess;
