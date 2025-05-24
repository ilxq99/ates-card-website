import { FAQCategory } from "@/types/faq";
import { CATEGORIES } from "@/data/faqData";
import Icon from "@/components/ui/icon";

interface FAQCategoriesProps {
  activeCategory: FAQCategory | "all";
  setActiveCategory: (category: FAQCategory | "all") => void;
}

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

const FAQCategories = ({
  activeCategory,
  setActiveCategory,
}: FAQCategoriesProps) => {
  return (
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
};

export default FAQCategories;
