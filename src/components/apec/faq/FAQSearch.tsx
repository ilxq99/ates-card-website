import Icon from "@/components/ui/icon";

interface FAQSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const FAQSearch = ({ searchTerm, setSearchTerm }: FAQSearchProps) => {
  return (
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
};

export default FAQSearch;
