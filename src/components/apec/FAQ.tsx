import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useFAQ } from "@/hooks/useFAQ";
import type { FAQCategory, FAQItem } from "@/types/faq";
import { CATEGORIES } from "@/data/faqData";

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Что такое АТЭС?",
    answer:
      "Азиатско-Тихоокеанское экономическое сотрудничество (АТЭС) — это межправительственный форум для 21 экономики в Тихоокеанском регионе, который способствует свободной торговле в Азиатско-Тихоокеанском регионе.",
    category: "general",
  },
  {
    id: 2,
    question: "Когда состоится саммит АТЭС 2024?",
    answer: "Саммит АТЭС 2024 пройдёт в ноябре 2024 года в Лиме, Перу.",
    category: "general",
  },
];

const FAQ = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    filteredFAQs,
  } = useFAQ();

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
          <FAQSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <FAQCategories
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
    <Badge
      variant="outline"
      className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5"
    >
      Отвечаем на ваши вопросы
    </Badge>
    <h2 className="text-4xl font-bold mb-6 tracking-tight">
      Часто задаваемые <span className="gradient-text">вопросы</span>
    </h2>
    <p className="text-lg text-muted-foreground">
      Здесь собраны ответы на самые распространенные вопросы о картах АТЭС,
      процессе получения и использования. Если вы не нашли ответа на свой
      вопрос, свяжитесь с нами для консультации.
    </p>
  </div>
);

const FAQSearch = SearchBar;
const FAQCategories = CategoryTabs;

// Компонент поиска
const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="relative mb-6">
    <Icon
      name="Search"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      placeholder="Поиск по вопросам..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
    />
  </div>
);

// FAQ данные
const faqData: FAQItem[] = [
  {
    id: 1,
    category: "general",
    question: "Что такое АТЭС?",
    answer:
      "Азиатско-Тихоокеанское экономическое сотрудничество (АТЭС) — это межправительственный форум для 21 экономики в Тихоокеанском регионе, который способствует свободной торговле по всему Азиатско-Тихоокеанскому региону.",
  },
];

// Табы категорий
interface CategoryTabsProps {
  activeCategory: FAQCategory | "all";
  setActiveCategory: (category: FAQCategory | "all") => void;
}

const CategoryTabs = ({
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) => (
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

const CategoryTab = ({
  isActive,
  onClick,
  label,
  icon,
  color,
}: CategoryTabProps) => (
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
        <Icon
          name="SearchX"
          className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-50"
        />
        <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
        <p className="text-muted-foreground">
          К сожалению, по вашему запросу не найдено вопросов. Попробуйте
          изменить поисковый запрос или категорию.
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
                <div
                  className={`w-8 h-8 rounded-full ${CATEGORIES[faq.category].color} flex items-center justify-center mr-3 shrink-0`}
                >
                  <Icon
                    name={CATEGORIES[faq.category].icon}
                    className="h-4 w-4"
                  />
                </div>
                <span className="text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1">
              <div className="pl-11">
                <div className="text-muted-foreground">{faq.answer}</div>
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
          Если вы не нашли ответа на свой вопрос, наши специалисты всегда готовы
          проконсультировать вас по любым аспектам оформления и использования
          карты АТЭС.
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
