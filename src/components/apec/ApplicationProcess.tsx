
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const ApplicationProcess = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
            От заявки до получения
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Процесс оформления <span className="gradient-text">карты АТЭС</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Мы сопровождаем вас на каждом этапе от подачи заявления до получения готовой карты, делая процесс максимально простым и комфортным
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Линия соединения шагов */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-accent/50 hidden md:block transform -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-24 relative">
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  requirements={step.requirements}
                  icon={step.icon}
                  additionalInfo={step.additionalInfo}
                  position={index % 2 === 0 ? "left" : "right"}
                />
              ))}
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
  icon: string;
  additionalInfo?: string;
  position: "left" | "right";
}

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  requirements, 
  icon,
  additionalInfo, 
  position 
}: ProcessStepProps) => {
  return (
    <div 
      className={`flex flex-col items-center animate-fade-in-up md:items-start md:flex-row md:gap-16 ${
        position === "right" ? "md:flex-row-reverse" : ""
      }`}
      style={{ animationDelay: `${number * 0.1}s` }}
    >
      {/* Центральный круг с номером */}
      <div className="md:w-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-70 scale-110"></div>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative z-10 shadow-xl mb-6 md:mb-0">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <span className="text-2xl font-bold text-white">{number}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Контент шага */}
      <div className={`${position === "right" ? "md:text-right md:items-end" : ""} flex-1 flex flex-col`}>
        <h3 className="text-2xl font-bold mb-3 text-center md:text-left">{title}</h3>
        <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
          {description}
        </p>
        
        <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-primary rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-gray-50 to-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Icon name={icon} className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">
                  {number === 1 && "Требования к заявителю"}
                  {number === 2 && "Необходимые документы"}
                  {number === 3 && "Способы подачи"}
                  {number === 4 && "Сроки и получение"}
                </h4>
              </div>
              
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              
              {additionalInfo && (
                <div className="mt-5 p-4 bg-primary/5 rounded-md border border-primary/10">
                  <p className="text-primary flex items-start">
                    <Icon name="Info" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{additionalInfo}</span>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const processSteps = [
  {
    title: "Проверка соответствия требованиям",
    description: "Карту АТЭС могут получить владельцы и руководители компаний, занимающихся международной торговлей или инвестициями со странами АТЭС.",
    icon: "ClipboardCheck",
    requirements: [
      "Генеральный директор или руководитель высшего звена",
      "Необходимость регулярных деловых поездок в страны АТЭС",
      "Компания должна вести внешнеэкономическую деятельность",
      "Наличие загранпаспорта сроком действия не менее 5 лет"
    ]
  },
  {
    title: "Подготовка документов",
    description: "Для оформления карты АТЭС вам понадобится собрать пакет документов, подтверждающих вашу деловую активность.",
    icon: "FileText",
    requirements: [
      "Загранпаспорт (оригинал + копия)",
      "Документы, подтверждающие статус в компании",
      "Выписка из ЕГРЮЛ не старше 1 месяца",
      "Справка о деловой активности компании со странами АТЭС",
      "Фотография установленного образца",
      "Заполненная анкета-заявление"
    ]
  },
  {
    title: "Подача заявления",
    description: "После подготовки всех документов вы можете подать заявление на получение карты АТЭС.",
    icon: "Send",
    requirements: [
      "Через нашу компанию (мы берем на себя всю процедуру оформления)",
      "Через Торгово-промышленную палату РФ",
      "Через Министерство экономического развития"
    ],
    additionalInfo: "При обращении через нашу компанию мы гарантируем оформление без вашего личного присутствия и в кратчайшие сроки."
  },
  {
    title: "Получение карты",
    description: "После одобрения заявки и изготовления карты вы сможете получить ее и начать пользоваться всеми преимуществами.",
    icon: "CreditCard",
    requirements: [
      "Средний срок рассмотрения заявления — 2-3 месяца",
      "Доставка карты курьером по указанному адресу",
      "Срок действия выданной карты — 5 лет",
      "Возможность отслеживания статуса заявки через личный кабинет"
    ]
  }
];

export default ApplicationProcess;
