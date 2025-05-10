
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// -----------------------------------------------------------------------------
// Типы и интерфейсы
// -----------------------------------------------------------------------------
type FooterLinkItem = {
  label: string;
  href: string;
};

type SocialLinkItem = {
  platform: string;
  icon: string;
  href: string;
  ariaLabel: string;
};

interface FooterLinkGroupProps {
  title: string;
  links: FooterLinkItem[];
}

interface SocialLinkProps {
  platform: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------
// Константы и данные
// -----------------------------------------------------------------------------
const CURRENT_YEAR = new Date().getFullYear();

const COMPANY_LINKS: FooterLinkItem[] = [
  { label: "О компании", href: "#about" },
  { label: "Наши услуги", href: "#services" },
  { label: "Отзывы клиентов", href: "#testimonials" },
  { label: "Вакансии", href: "#careers" },
  { label: "Контакты", href: "#contacts" },
];

const INFORMATION_LINKS: FooterLinkItem[] = [
  { label: "Страны АТЭС", href: "#countries" },
  { label: "Процесс оформления", href: "#process" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Часто задаваемые вопросы", href: "#faq" },
  { label: "Требования к заявителям", href: "#requirements" },
];

const LEGAL_LINKS: FooterLinkItem[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  { label: "Правовая информация", href: "/legal" },
  { label: "Карта сайта", href: "/sitemap" },
];

const SOCIAL_LINKS: SocialLinkItem[] = [
  { platform: "telegram", icon: "Send", href: "https://t.me/apeccard", ariaLabel: "Мы в Telegram" },
  { platform: "vk", icon: "MessageCircle", href: "https://vk.com/apeccard", ariaLabel: "Мы ВКонтакте" },
  { platform: "instagram", icon: "Instagram", href: "https://instagram.com/apeccard", ariaLabel: "Мы в Instagram" },
  { platform: "facebook", icon: "Facebook", href: "https://facebook.com/apeccard", ariaLabel: "Мы в Facebook" },
];

// -----------------------------------------------------------------------------
// Вспомогательные компоненты
// -----------------------------------------------------------------------------

/**
 * Компонент фоновых декоративных элементов
 */
const BackgroundElements = () => (
  <>
    <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
    <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-accent/5 filter blur-3xl"></div>
  </>
);

/**
 * Компонент логотипа в футере
 */
const FooterLogo = () => (
  <div className="flex items-center mb-6">
    <div className="bg-gradient-to-r from-primary to-secondary h-10 w-10 rounded-lg flex items-center justify-center mr-3 shadow-sm">
      <span className="text-white font-bold text-xl">A</span>
    </div>
    <div>
      <span className="text-2xl font-bold gradient-text">АТЭС</span>
      <span className="text-2xl ml-1 text-white/80">карта</span>
    </div>
  </div>
);

/**
 * Компонент группы ссылок в футере
 */
const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href} 
            className="text-white/70 hover:text-white transition-colors hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Компонент ссылки на социальную сеть
 */
const SocialLink = ({ platform, icon, href, ariaLabel }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
      hover:bg-white/20 transition-colors"
  >
    <Icon name={icon} className="h-5 w-5 text-white" />
  </a>
);

/**
 * Компонент строки контактной информации
 */
const ContactItem = ({ icon, children }: ContactItemProps) => (
  <div className="flex items-start mb-4">
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
      <Icon name={icon} className="h-5 w-5 text-white/80" />
    </div>
    <div className="text-white/70">
      {children}
    </div>
  </div>
);

// -----------------------------------------------------------------------------
// Секции футера
// -----------------------------------------------------------------------------

/**
 * Верхняя секция футера с основной информацией
 */
const FooterTop = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
    {/* Информация о компании */}
    <div>
      <FooterLogo />
      <p className="text-white/70 mb-6">
        Профессиональное оформление карт АТЭС для предпринимателей и руководителей компаний. 
        Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона.
      </p>
      <div className="flex space-x-3">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink 
            key={link.platform} 
            platform={link.platform} 
            icon={link.icon} 
            href={link.href} 
            ariaLabel={link.ariaLabel} 
          />
        ))}
      </div>
    </div>

    {/* Ссылки по группам */}
    <FooterLinkGroup title="Компания" links={COMPANY_LINKS} />
    <FooterLinkGroup title="Информация" links={INFORMATION_LINKS} />

    {/* Контакты */}
    <div>
      <h3 className="text-white font-semibold mb-4">Контакты</h3>
      <ContactItem icon="MapPin">
        119034, г. Москва, Пречистенская наб., 15, стр. 1
      </ContactItem>
      <ContactItem icon="Phone">
        <a href="tel:+74951234567" className="hover:text-white transition-colors">
          +7 (495) 123-45-67
        </a>
      </ContactItem>
      <ContactItem icon="Mail">
        <a href="mailto:info@apeccard.ru" className="hover:text-white transition-colors">
          info@apeccard.ru
        </a>
      </ContactItem>
      <ContactItem icon="Clock">
        Пн-Пт: 9:00 - 19:00<br />
        Сб-Вс: выходной
      </ContactItem>
    </div>
  </div>
);

/**
 * Нижняя секция футера с правовой информацией
 */
const FooterBottom = () => (
  <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0 text-white/60 text-sm">
      © 2020-{CURRENT_YEAR} АТЭС Карта. Все права защищены.
    </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {LEGAL_LINKS.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

/**
 * Секция с призывом к действию
 */
const CallToAction = () => (
  <div className="bg-gradient-to-r from-primary/20 to-accent/20 py-10 px-8 rounded-xl mb-16 relative overflow-hidden shadow-xl">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Готовы оформить карту АТЭС?
        </h2>
        <p className="text-white/80">
          Начните процесс оформления сейчас и откройте новые возможности для вашего бизнеса. 
          Наши специалисты помогут вам на каждом этапе.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 px-6 py-6 text-lg shadow-lg">
          <Icon name="FileText" className="mr-2 h-5 w-5" />
          Оформить заявку
        </Button>
      </div>
    </div>
  </div>
);

// -----------------------------------------------------------------------------
// Основной компонент футера
// -----------------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <CallToAction />
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
