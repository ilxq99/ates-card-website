import { useMemo } from "react";

// Мемоизированные данные для FAQ
export const useMemoizedFAQData = () => {
  return useMemo(
    () => ({
      categories: {
        general: {
          label: "Общие вопросы",
          icon: "HelpCircle",
          color: "bg-blue-100 text-blue-700",
        },
        requirements: {
          label: "Требования",
          icon: "ClipboardList",
          color: "bg-amber-100 text-amber-700",
        },
        process: {
          label: "Процесс оформления",
          icon: "FileText",
          color: "bg-emerald-100 text-emerald-700",
        },
        usage: {
          label: "Использование",
          icon: "Briefcase",
          color: "bg-purple-100 text-purple-700",
        },
      },
      items: [
        {
          question: "Что такое карта АТЭС?",
          answer:
            "Карта АТЭС (APEC Business Travel Card) — это документ, который позволяет предпринимателям...",
          category: "general",
        },
        // остальные элементы
      ],
    }),
    [],
  );
};

// Мемоизированные данные для стран
export const useMemoizedCountriesData = () => {
  return useMemo(
    () => ({
      // данные стран
    }),
    [],
  );
};
