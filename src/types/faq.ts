// Типы для FAQ системы
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export type FAQCategory = "general" | "requirements" | "process" | "usage";

export interface FAQCategoryConfig {
  label: string;
  icon: string;
  color: string;
}

export interface FAQItemWithCategory extends FAQItem {
  category: FAQCategory;
}
