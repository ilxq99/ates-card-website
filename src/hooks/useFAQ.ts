import { useState, useMemo } from "react";
import { FAQCategory, FAQItemWithCategory } from "@/types/faq";
import { faqItems } from "@/data/faqData";

export const useFAQ = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">(
    "all",
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Фильтрация вопросов по категории и поисковому запросу
  const filteredFAQs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchTerm === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return {
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    filteredFAQs,
  };
};
