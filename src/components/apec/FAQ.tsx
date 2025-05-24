
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

// Типы для FAQ вопросов
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Категории вопросов
type FAQCategory = "general" | "requirements" | "process" | "usage";

// Константы для категорий
const CATEGORIES: Record<FAQCategory, { label: string; icon: string; color: string }> = {
  general: { 
    label: "Общие вопросы", 
    icon: "HelpCircle", 
    color: "bg-blue-100 text-blue-700" 
  },
  requirements: { 
    label: "Требования", 
    icon: "ClipboardList", 
    color: "bg-amber-100 text-amber-700" 
  },
  process: { 
    label: "Процесс оформления", 
    icon: "FileText", 
    color: "bg-emerald-100 text-emerald-700" 
  },
  usage: { 
    label: "Использование", 
    icon: "Briefcase", 
    color: "bg-purple-100 text-purple-700" 
  }
};

// Данные FAQ
const faqItems: (FAQItem & { category: FAQCategory })[] = [
  {
    question: "Что такое карта АТЭС?",
    answer: "Карта АТЭС (APEC Business Travel Card) — это документ, который позволяет предпринимателям и бизнесменам многократно посещать страны-участницы Азиатско-Тихоокеанского экономического сотрудничества без оформления визы на срок до 90 дней.",
    category: "general"
  },
  {
    question: "Кто может получить карту АТЭС?",
    answer: "Карту АТЭС могут получить руководители высшего звена (генеральный директор, заместитель генерального директора, коммерческий директор) компаний, ведущих международную торговлю или инвестиционную деятельность со странами АТЭС.",
    category: "requirements"
  },
  {
    question: "Какие страны входят в АТЭС?",
    answer: "В АТЭС входит 21 экономика: Австралия, Бруней, Вьетнам, Гонконг, Индонезия, Канада, Китай, Южная Корея, Малайзия, Мексика, Новая Зеландия, Папуа-Новая Гвинея, Перу, Россия, Сингапур, США, Таиланд, Тайвань, Филиппины, Чили, Япония.",
    category: "general"
  },
  {
    question: "Какой срок действия карты АТЭС?",
    answer: "Карта АТЭС выдается сроком на 5 лет. По истечении срока действия карту необходимо переоформлять.",
    category: "usage"
  },
  {
    question: "Заменяет ли карта АТЭС визу?",
    answer: "Карта АТЭС полностью заменяет визу для большинства стран-участниц программы. Однако для США и Канады карта не является полноценной заменой визы, но обеспечивает ускоренное рассмотрение визовых заявлений.",
    category: "usage"
  },
  {
    question: "Сколько времени занимает оформление карты АТЭС?",
    answer: "Средний срок оформления карты АТЭС составляет 2-3 месяца с момента подачи полного пакета документов. При обращении через нашу компанию мы стремимся ускорить этот процесс и сделать его максимально комфортным для клиента.",
    category: "process"
  },
  {
    question: "Какие документы нужны для оформления карты АТЭС?",
    answer: "Для оформления карты АТЭС необходимы: загранпаспорт, документы, подтверждающие должность в компании, выписка из ЕГРЮЛ, справка о деловой активности компании со странами АТЭС, фотография и заполненная анкета-заявление.",
    category: "process"
  },
  {
    question: "Могу ли я оформить карту АТЭС, если я не руководитель компании?",
    answer: "Нет, карта АТЭС выдается только руководителям высшего звена компаний. Однако возможны исключения для топ-менеджеров, которые активно участвуют в международной деятельности компании.",
    category: "requirements"
  },
  {
    question: "Как часто я могу использовать карту АТЭС?",
    answer: "Вы можете использовать карту АТЭС неограниченное количество раз в течение срока ее действия, соблюдая установленные периоды пребывания в каждой стране.",
    category: "usage"
  },
  {
    question: "Можно ли продлить карту АТЭС?",
    answer: "Нет, карту АТЭС нельзя продлить. По истечении срока действия необходимо оформить новую карту, пройдя весь процесс заново.",
    category: "process"
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Фильтрация вопросов по категории и поисковому запросу
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <SectionHeader />
        
        {/* Поиск и категории */}
        <div className="max-w-4xl mx-auto mb-12">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
          
          <CategoryTabs 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
        
        {/* Аккордеон с вопросами */}
        <FAQAccordion faqs={filteredFAQs} />
        
        {/* Блок с призывом к действию */}
        <CTABlock />
      </div>
    </section>
  );
};

// Заголовок секции
const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
      Отвечаем на ваши вопросы
    </Badge>
    <h2 className="text-4xl font-bold mb-6 tracking-tight">
      Часто задаваемые <span className="gradient-text">вопросы</span>
    </h2>
    <p className="text-lg text-muted-foreground">
      Здесь собраны ответы на самые распространенные вопросы о картах АТЭС, процессе получения и использования. Если вы не нашли ответа на свой вопрос, свяжитесь с нами для консультации.
    </p>
  </div>
);

// Строка поиска
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => (
  <div className="relative mb-8">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon name="Search" className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      className="bg-white w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
      placeholder="Поиск вопросов и ответов..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {searchTerm && (
      <button
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        onClick={() => setSearchTerm("")}
      >
        <Icon name="X" className="h-5 w-5" />
      </button>
    )}
  </div>
);

// Табы категорий
interface CategoryTabsProps {
  activeCategory: FAQCategory | "all";
  setActiveCategory: (category: FAQCategory | "all") => void;
}

const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => (
  <div className="flex flex-wrap justify-center gap-2 mb-6">
    <CategoryTab
      isActive={activeCategory === "all"}
      onClick={() => setActiveCategory("all")}
      label="Все вопросы"
      icon="LayersThree"
      color="bg-gray-100 text-gray-700"
    />
    
    {(Object.keys(CATEGORIES) as FAQCategory[]).map((category) => (
      <CategoryTab
        key={category}
        isActive={activeCategory === category}
        onClick={() => setActiveCategory(category)}
        label={CATEGORIES[category].label}
        icon={CATEGORIES[category].icon}
        color={CATEGORIES[category].color}
      />
    ))}
  </div>
);

// Компонент таба категории
interface CategoryTabProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
  icon: string;
  color: string;
}

const CategoryTab = ({ isActive, onClick, label, icon, color }: CategoryTabProps) => (
  <button
    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
      isActive 
        ? "bg-primary text-white shadow-md" 
        : `${color} hover:bg-opacity-80`
    }`}
    onClick={onClick}
  >
    <Icon name={icon} className="mr-2 h-4 w-4" />
    {label}
  </button>
);

// Аккордеон с вопросами
interface FAQAccordionProps {
  faqs: (FAQItem & { category: FAQCategory })[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  // Если нет вопросов после фильтрации
  if (faqs.length === 0) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center">
        <Icon name="SearchX" className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-50" />
        <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
        <p className="text-muted-foreground">
          К сожалению, по вашему запросу не найдено вопросов. Попробуйте изменить поисковый запрос или категорию.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline group">
              <div className="flex items-center text-left">
                <div className={`w-8 h-8 rounded-full ${CATEGORIES[faq.category].color} flex items-center justify-center mr-3 shrink-0`}>
                  <Icon name={CATEGORIES[faq.category].icon} className="h-4 w-4" />
                </div>
                <span className="text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1">
              <div className="pl-11">
                <div className="text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// Блок с призывом к действию
const CTABlock = () => (
  <div className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
    <div className="relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
        <h3 className="text-xl font-bold mb-2">Остались вопросы?</h3>
        <p className="text-muted-foreground mb-4">
          Если вы не нашли ответа на свой вопрос, наши специалисты всегда готовы проконсультировать вас по любым аспектам оформления и использования карты АТЭС.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
            Задать вопрос
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Позвонить нам
          </button>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="HelpingHand" className="h-12 w-12 text-primary" />
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
