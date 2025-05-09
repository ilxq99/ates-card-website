
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ApplicationForm = () => {
  return (
    <section id="apply" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Оформите карту АТЭС с нашими экспертами</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы предлагаем полное сопровождение процесса оформления карты АТЭС от проверки соответствия требованиям до получения готового документа.
              </p>
              <div className="space-y-6 mt-8">
                <FeatureItem 
                  icon="Award"
                  title="97% успешных заявок"
                  description="Благодаря нашему опыту практически все наши клиенты получают карту АТЭС"
                />
                <FeatureItem 
                  icon="Clock3"
                  title="Экономия времени"
                  description="Мы берем на себя всю рутинную работу по подготовке и подаче документов"
                />
                <FeatureItem 
                  icon="FileText"
                  title="Юридическая поддержка"
                  description="Наши специалисты помогут правильно составить все необходимые документы"
                />
                <FeatureItem 
                  icon="HeadsetHelp"
                  title="Персональный менеджер"
                  description="Вы будете иметь персонального менеджера на всех этапах оформления"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму, и наш специалист свяжется с вами для консультации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                        ФИО
                      </label>
                      <Input id="fullName" placeholder="Иванов Иван Иванович" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Телефон
                        </label>
                        <Input id="phone" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="name@company.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Название компании
                      </label>
                      <Input id="company" placeholder="ООО «Компания»" />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium mb-1">
                        Должность
                      </label>
                      <Input id="position" placeholder="Генеральный директор" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Проверка соответствия требованиям
                      </label>
                      <div className="space-y-2">
                        <CheckboxItem 
                          id="hasPassport"
                          label="У меня есть загранпаспорт, действительный более 5 лет"
                        />
                        <CheckboxItem 
                          id="hasTradeRelations"
                          label="Моя компания ведет международную торговлю со странами АТЭС"
                        />
                        <CheckboxItem 
                          id="hasTopPosition"
                          label="Я являюсь руководителем высшего звена в компании"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Отправить заявку</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name={icon} className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

interface CheckboxItemProps {
  id: string;
  label: string;
}

const CheckboxItem = ({ id, label }: CheckboxItemProps) => {
  return (
    <div className="flex items-start">
      <input type="checkbox" id={id} className="mt-1 mr-2" />
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </label>
    </div>
  );
};

export default ApplicationForm;
