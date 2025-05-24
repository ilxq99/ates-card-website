import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { FAQItemWithCategory } from "@/types/faq";
import { CATEGORIES } from "@/data/faqData";

interface FAQItemProps {
  faq: FAQItemWithCategory;
  index: number;
}

const FAQItem = ({ faq, index }: FAQItemProps) => {
  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline group">
        <div className="flex items-center text-left">
          <div
            className={`w-8 h-8 rounded-full ${CATEGORIES[faq.category].color} flex items-center justify-center mr-3 shrink-0`}
          >
            <Icon name={CATEGORIES[faq.category].icon} className="h-4 w-4" />
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
  );
};

export default FAQItem;
