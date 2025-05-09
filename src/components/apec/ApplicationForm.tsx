import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useToast } from "@/components/ui/toast";

// -------------------------
// Типы и интерфейсы
// -------------------------
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  tariff: string;
  message: string;
  hasPassport: boolean;
  hasTradeRelations: boolean;
  hasTopPosition: boolean;
  agreeTerms: boolean;
}

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

interface CheckboxItemProps {
  id: string;
  label: React.ReactNode;
  required?: boolean;
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

interface TestimonialCardProps {
  author: string;
  position: string;
  content: string;
  avatar: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
}

// -------------------------
// Константы
// -------------------------
const INITIAL_FORM_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  tariff: "",
  message: "",
  hasPassport: false,
  hasTradeRelations: false,
  hasTopPosition: false,
  agreeTerms: false
};

const FEATURES = [
  {
    icon: "Award",
    title: "97% успешных заявок",
    description: "Благодаря нашему опыту практически все наши клиенты получают карту АТЭС"
  },
  {
    icon: "Clock3",
    title: "Экономия времени",
    description: "Мы берем на себя всю рутинную работу по подготовке и подаче документов"
  },
  {
    icon: "FileText",
    title: "Юридическая поддержка",
    description: "Наши специалисты помогут правильно составить все необходимые документы"
  },
  {
    icon: "HeadsetHelp",
    title: "Персональный менеджер",
    description: "Вы будете иметь персонального менеджера на всех этапах оформления"
  }
];

// -------------------------
// Вспомогательные компоненты
// -------------------------
const Label = ({ htmlFor, children }: LabelProps) => (
  <label 
    htmlFor={htmlFor} 
    className="text-sm font-medium text-gray-700 block mb-1"
  >
    {children}
  </label>
);

const FormField = ({ id, label, type = "text", placeholder, required = false, children }: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    
    {children || (
      <Input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        required={required} 
        aria-required={required}
      />
    )}
  </div>
);

const CheckboxItem = ({ id, label, required }: CheckboxItemProps) => (
  <div className="flex items-start space-x-2">
    <Checkbox id={id} required={required} aria-required={required} />
    <label
      htmlFor={id}
      className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  </div>
);

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex items-start" data-testid={`feature-${title.toLowerCase().replace(/\s/g, '-')}`}>
    <div className="mr-4 mt-1">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon name={icon} className="h-5 w-5 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ author, position, content, avatar }: TestimonialCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative animate-fade-in-up" aria-label={`Отзыв от ${author}`}>
    <div className="absolute top-4 left-4 text-4xl text-primary/10">"</div>
    <div className="relative z-10">
      <p className="italic text-muted-foreground mb-4">{content}</p>
      <div className="flex items-center">
        <div className="mr-3">
          <img 
            src={avatar} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" 
            loading="lazy"
          />
        </div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
        </div>
      </div>
    </div>
  </div>
);

// -------------------------
// Секции формы
// -------------------------
const FormHeader = () => (
  <CardHeader>
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
        <Icon name="ClipboardEdit" className="h-5 w-5 text-primary" />
      </div>
      <CardTitle>Заполните заявку</CardTitle>
    </div>
    <CardDescription>
      Укажите ваши данные, и мы свяжемся с вами для консультации по оформлению карты АТЭС
    </CardDescription>
  </CardHeader>
);

const PersonalInfoFields = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <FormField
      id="firstName"
      label="Имя"
      placeholder="Иван"
      required
    />
    <FormField
      id="lastName"
      label="Фамилия"
      placeholder="Иванов"
      required
    />
  </div>
);

const ContactInfoFields = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <FormField
      id="email"
      label="Email"
      type="email"
      placeholder="name@company.com"
      required
    />
    <FormField
      id="phone"
      label="Телефон"
      placeholder="+7 (___) ___-__-__"
      required
    />
  </div>
);

const CompanyInfoFields = () => (
  <>
    <FormField
      id="company"
      label="Название компании"
      placeholder="ООО «Компания»"
      required
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormField
        id="position"
        label="Должность"
        placeholder="Генеральный директор"
        required
      />
      <FormField
        id="tariff"
        label="Интересующий тариф"
        required
      >
        <select 
          id="tariff" 
          className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue=""
          required
          aria-required="true"
        >
          <option value="" disabled>Выберите тариф</option>
          <option value="standard">Стандарт</option>
          <option value="express">Экспресс</option>
          <option value="vip">VIP</option>
        </select>
      </FormField>
    </div>
  </>
);

const MessageField = () => (
  <FormField
    id="message"
    label="Дополнительная информация"
  >
    <Textarea 
      id="message" 
      placeholder="Укажите любую дополнительную информацию, которая может быть полезна..." 
      rows={4}
    />
  </FormField>
);

const RequirementsCheckboxes = () => (
  <div className="pt-3">
    <div className="text-sm font-medium mb-3">Проверка соответствия требованиям:</div>
    <div className="space-y-4">
      <CheckboxItem 
        id="hasPassport"
        label="У меня есть загранпаспорт, действительный более 5 лет"
        required
      />
      <CheckboxItem 
        id="hasTradeRelations"
        label="Моя компания ведет международную торговлю со странами АТЭС"
        required
      />
      <CheckboxItem 
        id="hasTopPosition"
        label="Я являюсь руководителем высшего звена в компании"
        required
      />
    </div>
  </div>
);

const TermsAgreement = () => (
  <div className="pt-2">
    <CheckboxItem 
      id="agreeTerms"
      label={<span>Я согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и даю согласие на обработку моих персональных данных</span>}
      required
    />
  </div>
);

const SubmitButton = ({ loading, onClick }: { loading: boolean; onClick: (e: React.FormEvent) => void }) => (
  <Button 
    type="submit" 
    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
    size="lg"
    onClick={onClick}
    disabled={loading}
    aria-busy={loading}
  >
    {loading ? (
      <>
        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
        Отправка...
      </>
    ) : (
      <>
        Отправить заявку
        <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
      </>
    )}
  </Button>
);

const PrivacyNotice = () => (
  <div className="mt-6 text-center text-sm text-muted-foreground">
    <div className="flex items-center justify-center">
      <Icon name="ShieldCheck" className="mr-2 h-5 w-5 text-green-500" />
      <span>Ваши данные надежно защищены и не будут переданы третьим лицам</span>
    </div>
  </div>
);

const BackgroundDecorations = () => (
  <>
    <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
  </>
);

// -------------------------
// Основные компоненты
// -------------------------
const ApplicationFormSidebar = () => (
  <div className="lg:w-5/12">
    <div className="sticky top-20">
      <h2 className="text-4xl font-bold mb-6">
        Оформите <span className="gradient-text">карту АТЭС</span> с нашими экспертами
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Мы предлагаем полное сопровождение от проверки соответствия требованиям до получения готового документа. 
        Заполните форму, и наш эксперт свяжется с вами.
      </p>
      
      <div className="space-y-6 mt-10">
        <TestimonialCard 
          author="Александр Петров"
          position="CEO, InternationalTrade LLC"
          content="Благодаря карте АТЭС я смог значительно упростить организацию деловых поездок и сэкономить время на оформлении виз. Специалисты компании помогли оформить карту всего за 2 месяца."
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
      
      <div className="space-y-6 mt-10">
        {FEATURES.map((feature, index) => (
          <FeatureItem 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </div>
);

const ApplicationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заявка отправлена!",
        description: "Наш специалист свяжется с вами в ближайшее время",
        variant: "default",
      });
    }, 1500);
  };
  
  return (
    <section id="apply" className="py-24 relative overflow-hidden bg-gray-50">
      <BackgroundDecorations />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <ApplicationFormSidebar />
            
            <div className="lg:w-7/12">
              <ApplicationFormCard 
                loading={loading} 
                handleSubmit={handleSubmit} 
              />
              <PrivacyNotice />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplicationFormCard = ({ 
  loading, 
  handleSubmit 
}: { 
  loading: boolean; 
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <Card className="rounded-xl shadow-xl border-0 bg-white/90 backdrop-blur-sm">
    <FormHeader />
    
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-5">
        <PersonalInfoFields />
        <ContactInfoFields />
        <CompanyInfoFields />
        <MessageField />
        <RequirementsCheckboxes />
        <TermsAgreement />
      </form>
    </CardContent>
    
    <CardFooter className="border-t pt-6">
      <SubmitButton loading={loading} onClick={handleSubmit} />
    </CardFooter>
  </Card>
);

export default ApplicationForm;
