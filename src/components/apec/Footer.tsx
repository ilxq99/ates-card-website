import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

// Типы
interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialButtonProps {
  icon: string;
  href: string;
  color: string;
  label: string;
}

interface ContactItemProps {
  icon: string;
  title: string;
  details: string[];
}

// Константы
const socialLinks: SocialLink[] = [
  { 
    name: "Telegram", 
    icon: "Send", 
    href: "https://t.me/atec_card", 
    color: "bg-blue-500 hover:bg-blue-600" 
  },
  { 
    name: "WhatsApp", 
    icon: "MessageCircle", 
    href: "https://wa.me/79991234567", 
    color: "bg-green-500 hover:bg-green-600" 
  },
  { 
    name: "LinkedIn", 
    icon: "Linkedin", 
    href: "https://linkedin.com/company/atec-card", 
    color: "bg-blue-700 hover:bg-blue-800" 
  },
  { 
    name: "Instagram", 
    icon: "Instagram", 
    href: "https://instagram.com/atec_card", 
    color: "bg-pink-600 hover:bg-pink-700" 
  }
];

const footerColumns: FooterColumn[] = [
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Наша команда", href: "/team" },
      { label: "Карьера", href: "/careers" },
      { label: "Контакты", href: "/contacts" }
    ]
  },
  {
    title: "Услуги",
    links: [
      { label: "Карта АТЭС", href: "/services/apec" },
      { label: "Консультации", href: "/services/consultations" },
      { label: "Визовая поддержка", href: "/services/visa-support" },
      { label: "Юридическое сопровождение", href: "/services/legal" }
    ]
  },
  {
    title: "Информация",
    links: [
      { label: "Страны АТЭС", href: "/countries" },
      { label: "Процесс оформления", href: "/process" },
      { label: "Тарифы", href: "/pricing" },
      { label: "Вопросы и ответы", href: "/faq" }
    ]
  },
  {
    title: "Правовая информация",
    links: [
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Условия использования", href: "/terms" },
      { label: "Договор оферты", href: "/offer" },
      { label: "Проверка статуса заявки", href: "/check-status" }
    ]
  }
];

// Компоненты
const SocialButton = ({ icon, href, color, label }: SocialButtonProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`${color} w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110`}
    title={label}
    aria-label={`Перейти в ${label}`}
  >
    <Icon name={icon} className="h-5 w-5 text-white" />
    <span className="sr-only">{label}</span>
  </a>
);

const ContactItem = ({ icon, title, details }: ContactItemProps) => (
  <div className="flex">
    <div className="mr-4">
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
        <Icon name={icon} className="h-6 w-6 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-slate-400">{detail}</p>
      ))}
    </div>
  </div>
);

const FooterCompanyInfo = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 500);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-primary to-secondary h-10 w-10 rounded-lg flex items-center justify-center mr-3 shadow-sm">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-white">АТЭС</span>
          <span className="text-2xl ml-1 text-slate-400">карта</span>
        </div>
      </div>
      
      <p className="text-slate-400 mb-8 max-w-md">
        Профессиональное сопровождение в оформлении карт АТЭС для предпринимателей и бизнесменов с 2012 года. Более 2000 успешно оформленных карт.
      </p>
      
      <NewsletterForm 
        email={email}
        setEmail={setEmail}
        subscribed={subscribed}
        handleSubscribe={handleSubscribe}
      />
      
      <SocialLinks />
    </div>
  );
};

interface NewsletterFormProps {
  email: string;
  setEmail: (email: string) => void;
  subscribed: boolean;
  handleSubscribe: (e: React.FormEvent) => void;
}

const NewsletterForm = ({ email, setEmail, subscribed, handleSubscribe }: NewsletterFormProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium mb-4 text-white">Будьте в курсе новостей</h3>
    {subscribed ? (
      <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center">
        <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mb-2 mx-auto" />
        <p className="text-green-200">
          Спасибо за подписку! Мы отправили вам письмо для подтверждения.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubscribe} className="flex space-x-2">
        <div className="flex-grow">
          <Input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-800 border-slate-700 text-white h-11"
            required
            aria-label="Email для подписки на новости"
          />
        </div>
        <Button type="submit" className="bg-primary hover:bg-primary/90 h-11">
          Подписаться
        </Button>
      </form>
    )}
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-lg font-medium mb-4 text-white">Мы в соцсетях</h3>
    <div className="flex space-x-3">
      {socialLinks.map((social) => (
        <SocialButton
          key={social.name}
          icon={social.icon}
          href={social.href} 
          color={social.color}
          label={social.name}
        />
      ))}
    </div>
  </div>
);

const FooterNavColumns = () => (
  <>
    {footerColumns.map((column, index) => (
      <div key={index} className="space-y-4">
        <h3 className="text-lg font-medium text-white">{column.title}</h3>
        <ul className="space-y-3">
          {column.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors flex items-center"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                <Icon name="ChevronRight" className="h-4 w-4 mr-1 text-primary" />
                {link.label}
                {link.isExternal && (
                  <Icon name="ExternalLink" className="h-3 w-3 ml-1 text-slate-500" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

const ContactInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <ContactItem
      icon="MapPin"
      title="Адрес"
      details={[
        "123456, Москва",
        "ул. Тверская, д. 1, офис 150"
      ]}
    />
    
    <ContactItem
      icon="Phone"
      title="Телефоны"
      details={[
        "+7 (495) 123-45-67",
        "+7 (495) 765-43-21"
      ]}
    />
    
    <ContactItem
      icon="Mail"
      title="Email"
      details={[
        "info@atec-card.ru",
        "support@atec-card.ru"
      ]}
    />
  </div>
);

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        © 2012-{currentYear} ООО "АТЭС Карт". Все права защищены.
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href="/policy" className="hover:text-white transition-colors">
          Политика конфиденциальности
        </a>
        <a href="/terms" className="hover:text-white transition-colors">
          Пользовательское соглашение
        </a>
        <a href="/sitemap" className="hover:text-white transition-colors">
          Карта сайта
        </a>
      </div>
    </div>
  );
};

const BackgroundDecorations = () => (
  <>
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
  </>
);

// Основной компонент футера
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Нижняя часть сайта</h2>
      <BackgroundDecorations />
      
      {/* Верхняя часть футера */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <FooterCompanyInfo />
          <FooterNavColumns />
        </div>
        
        {/* Контактная информация */}
        <div className="mt-16 pt-6 border-t border-slate-800">
          <ContactInfo />
        </div>
        
        <Separator className="my-8 bg-slate-800" />
        
        {/* Нижняя часть футера */}
        <Copyright />
      </div>
      
      {/* Полоска копирайта */}
      <div className="bg-slate-950 py-3 text-center text-xs text-slate-600 relative z-10">
        <div className="container mx-auto px-4">
          Разработано с ❤️ в России | Сайт использует cookies
        </div>
      </div>
    </footer>
  );
};

export default Footer;