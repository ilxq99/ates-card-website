
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

// Типы
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  location?: string;
  date?: string;
  businessType?: string;
}

interface RatingStarsProps {
  rating: number;
}

interface TestimonialPreviewProps {
  testimonial: Testimonial;
  side: "left" | "right";
  onClick: () => void;
}

interface StatCardProps {
  number: string;
  label: string;
  icon: string;
}

// Константы и данные
const AUTO_PLAY_INTERVAL = 5000;
const AUTO_PLAY_PAUSE_DURATION = 10000;

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр Петров",
    position: "Генеральный директор",
    company: "Global Trade LLC",
    content: "Благодаря карте АТЭС мой бизнес вышел на новый уровень. Теперь я могу организовывать деловые поездки в страны Азии без оформления виз, что экономит огромное количество времени и ресурсов. Сервис компании на высшем уровне, все сделали точно в срок.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Москва",
    businessType: "Импорт/Экспорт"
  },
  {
    id: 2,
    name: "Екатерина Смирнова",
    position: "Коммерческий директор",
    company: "East-West Partners",
    content: "Оформила карту АТЭС через эту компанию и осталась очень довольна. Профессиональный подход, подробные консультации и поддержка на всех этапах. Карту получила даже раньше обещанного срока. Теперь посещаю Китай, Японию и другие страны АТЭС без лишних хлопот.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Санкт-Петербург",
    businessType: "Консалтинг"
  },
  {
    id: 3,
    name: "Дмитрий Ковалев",
    position: "Директор по развитию",
    company: "Инновационные Технологии",
    content: "Мы расширяем бизнес в Азии, и карта АТЭС стала незаменимым инструментом. За год использования сэкономил не менее 200 тысяч рублей на визах и массу времени. Специалисты компании помогли подготовить идеальный пакет документов, благодаря чему процесс прошел гладко.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Екатеринбург",
    businessType: "IT"
  },
  {
    id: 4,
    name: "Марина Козлова",
    position: "CEO",
    company: "Pacific Bridge",
    content: "Потрясающий сервис! Получила карту АТЭС в течение 2 месяцев. Все процессы отлажены, менеджеры всегда на связи и готовы ответить на любые вопросы. Теперь регулярно летаю в Сингапур, Южную Корею и Гонконг без необходимости оформления визы. Очень рекомендую!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Владивосток",
    businessType: "Логистика"
  },
  {
    id: 5,
    name: "Игорь Соколов",
    position: "Руководитель департамента ВЭД",
    company: "Евроазиатский концерн",
    content: "Несмотря на некоторые задержки в процессе оформления, в целом остался доволен. Карта действительно работает во всех странах АТЭС, как и обещали. Отдельное спасибо консультантам, которые объяснили все нюансы использования карты в разных странах.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Новосибирск",
    businessType: "Производство"
  },
  {
    id: 6,
    name: "Анна Нестерова",
    position: "Заместитель директора",
    company: "Silk Route Trading",
    content: "Пользуюсь картой АТЭС уже второй год, это настоящее спасение для тех, кто часто путешествует по работе. Очень довольна услугами компании — все четко, профессионально, без лишних вопросов. Буду рекомендовать коллегам и партнерам!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Москва",
    businessType: "Торговля"
  }
];

// Главный компонент
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayIntervalRef = useRef<number | null>(null);
  
  // Хуки
  useEffect(() => {
    if (autoPlay) {
      autoPlayIntervalRef.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, AUTO_PLAY_INTERVAL);
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [autoPlay]);
  
  // Обработчики
  const handleTestimonialChange = (index: number) => {
    setActiveIndex(index);
    pauseAutoPlay();
  };
  
  const pauseAutoPlay = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), AUTO_PLAY_PAUSE_DURATION);
  };
  
  const handlePrevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    handleTestimonialChange(newIndex);
  };
  
  const handleNextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    handleTestimonialChange(newIndex);
  };
  
  // Данные для текущего отображения
  const currentTestimonial = testimonials[activeIndex];
  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white">
      <BackgroundDecorations />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />
        <TestimonialSlider 
          currentTestimonial={currentTestimonial} 
          activeIndex={activeIndex}
          onPrev={handlePrevTestimonial}
          onNext={handleNextTestimonial}
          onSelectIndex={handleTestimonialChange}
          prevTestimonial={testimonials[prevIndex]}
          nextTestimonial={testimonials[nextIndex]}
        />
        <StatisticsAndCTA />
      </div>
    </section>
  );
};

// Компоненты декораций
const BackgroundDecorations = () => (
  <>
    <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
    <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"></div>
  </>
);

// Компонент заголовка секции
const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
      Нам доверяют
    </Badge>
    <h2 className="text-4xl font-bold mb-6 tracking-tight">
      Отзывы наших <span className="gradient-text">клиентов</span>
    </h2>
    <p className="text-lg text-muted-foreground">
      Более 2000 предпринимателей уже оценили преимущества карты АТЭС и качество наших услуг
    </p>
  </div>
);

// Компонент слайдера отзывов
interface TestimonialSliderProps {
  currentTestimonial: Testimonial;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
  prevTestimonial: Testimonial;
  nextTestimonial: Testimonial;
}

const TestimonialSlider = ({
  currentTestimonial,
  activeIndex,
  onPrev,
  onNext,
  onSelectIndex,
  prevTestimonial,
  nextTestimonial
}: TestimonialSliderProps) => (
  <div className="max-w-5xl mx-auto">
    <CurrentTestimonialCard 
      testimonial={currentTestimonial} 
      activeIndex={activeIndex}
      onPrev={onPrev}
      onNext={onNext}
      onSelectIndex={onSelectIndex}
    />
    
    <div className="hidden md:grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <TestimonialPreview
        testimonial={prevTestimonial}
        side="left"
        onClick={onPrev}
      />
      <TestimonialPreview
        testimonial={nextTestimonial}
        side="right"
        onClick={onNext}
      />
    </div>
  </div>
);

// Компонент карточки текущего отзыва
interface CurrentTestimonialCardProps {
  testimonial: Testimonial;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

const CurrentTestimonialCard = ({
  testimonial,
  activeIndex,
  onPrev,
  onNext,
  onSelectIndex
}: CurrentTestimonialCardProps) => (
  <div className="relative mb-12">
    <Card className="border-0 bg-white shadow-lg p-2 transform transition-all duration-500">
      <CardContent className="p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <TestimonialAuthorInfo testimonial={testimonial} />
          <TestimonialContent 
            testimonial={testimonial} 
            activeIndex={activeIndex}
            onPrev={onPrev}
            onNext={onNext}
            onSelectIndex={onSelectIndex}
          />
        </div>
      </CardContent>
    </Card>
  </div>
);

// Компонент с информацией об авторе отзыва
interface TestimonialAuthorInfoProps {
  testimonial: Testimonial;
}

const TestimonialAuthorInfo = ({ testimonial }: TestimonialAuthorInfoProps) => (
  <div className="md:col-span-4 flex flex-col items-center md:items-start">
    <div className="relative mb-4">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-50 scale-110"></div>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-md z-10"
      />
      <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-md p-1 z-20">
        <div className="bg-yellow-400 flex items-center justify-center rounded-full w-8 h-8">
          <Icon name="Quote" className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-center md:text-left">{testimonial.name}</h3>
    <p className="text-muted-foreground text-center md:text-left">{testimonial.position}</p>
    <p className="text-sm font-medium text-primary mt-1 text-center md:text-left">{testimonial.company}</p>
    
    <div className="flex items-center mt-4">
      <RatingStars rating={testimonial.rating} />
    </div>
    
    {testimonial.location && (
      <TestimonialMetaItem icon="MapPin" text={testimonial.location} />
    )}
    
    {testimonial.businessType && (
      <TestimonialMetaItem icon="Briefcase" text={testimonial.businessType} />
    )}
  </div>
);

// Компонент мета-информации отзыва
interface TestimonialMetaItemProps {
  icon: string;
  text: string;
}

const TestimonialMetaItem = ({ icon, text }: TestimonialMetaItemProps) => (
  <div className="flex items-center mt-2 text-sm text-muted-foreground">
    <Icon name={icon} className="h-4 w-4 mr-1" />
    <span>{text}</span>
  </div>
);

// Компонент содержания отзыва
interface TestimonialContentProps {
  testimonial: Testimonial;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

const TestimonialContent = ({ 
  testimonial,
  activeIndex,
  onPrev,
  onNext,
  onSelectIndex
}: TestimonialContentProps) => (
  <div className="md:col-span-8">
    <div className="relative">
      <Icon name="Quote" className="absolute -top-8 -left-4 h-16 w-16 text-gray-100" />
      <div className="relative z-10">
        <p className="text-lg md:text-xl leading-relaxed text-slate-700">
          {testimonial.content}
        </p>
        
        <div className="mt-6 flex items-center justify-between">
          <TestimonialDots 
            count={testimonials.length} 
            activeIndex={activeIndex}
            onSelectIndex={onSelectIndex}
          />
          
          <TestimonialControls onPrev={onPrev} onNext={onNext} />
        </div>
      </div>
    </div>
  </div>
);

// Компонент навигационных точек
interface TestimonialDotsProps {
  count: number;
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

const TestimonialDots = ({ count, activeIndex, onSelectIndex }: TestimonialDotsProps) => (
  <div className="flex space-x-1">
    {Array.from({ length: count }, (_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full transition-all ${
          index === activeIndex ? "bg-primary scale-110" : "bg-gray-300"
        }`}
        onClick={() => onSelectIndex(index)}
        aria-label={`Перейти к отзыву ${index + 1}`}
      />
    ))}
  </div>
);

// Компонент кнопок управления
interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TestimonialControls = ({ onPrev, onNext }: TestimonialControlsProps) => (
  <div className="flex space-x-2">
    <Button
      variant="outline"
      size="icon"
      onClick={onPrev}
      className="rounded-full"
      aria-label="Предыдущий отзыв"
    >
      <Icon name="ChevronLeft" className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="rounded-full"
      aria-label="Следующий отзыв"
    >
      <Icon name="ChevronRight" className="h-4 w-4" />
    </Button>
  </div>
);

// Компонент отображения рейтинга звездами
const RatingStars = ({ rating }: RatingStarsProps) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <Icon
        key={star}
        name="Star"
        className={`h-5 w-5 ${
          star <= rating ? "text-yellow-400" : "text-gray-200"
        }`}
        fill={star <= rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

// Компонент превью отзыва
const TestimonialPreview = ({ testimonial, side, onClick }: TestimonialPreviewProps) => (
  <div 
    className={`opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
      side === "left" ? "text-right" : "text-left"
    }`}
    onClick={onClick}
  >
    <div className={`flex items-center ${side === "left" ? "flex-row-reverse" : "flex-row"} gap-4`}>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
      />
      <div>
        <h4 className="font-bold">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
      {testimonial.content}
    </p>
  </div>
);

// Компонент статистики и призыва к действию
const StatisticsAndCTA = () => (
  <div className="mt-20 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <StatisticsGrid />
      <CallToAction />
    </div>
  </div>
);

// Компонент сетки статистики
const StatisticsGrid = () => (
  <div className="grid grid-cols-2 gap-8">
    <StatCard
      number="2000+"
      label="Довольных клиентов"
      icon="Users"
    />
    <StatCard
      number="97%"
      label="Положительных отзывов"
      icon="ThumbsUp"
    />
    <StatCard
      number="5 лет"
      label="Средний опыт специалистов"
      icon="Trophy"
    />
    <StatCard
      number="21"
      label="Страна АТЭС доступна"
      icon="Globe"
    />
  </div>
);

// Компонент для статистической карточки
const StatCard = ({ number, label, icon }: StatCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
    <div className="flex items-center mb-3">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
        <Icon name={icon} className="h-6 w-6 text-primary" />
      </div>
    </div>
    <div className="text-3xl font-bold text-slate-800 mb-1">{number}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

// Компонент призыва к действию
const CallToAction = () => (
  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border border-gray-100 shadow-md">
    <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нашим клиентам</h3>
    <p className="text-muted-foreground mb-6">
      Оформите карту АТЭС с нашими экспертами и откройте новые возможности для своего бизнеса. Мы сделаем весь процесс максимально простым и комфортным.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6">
        <Icon name="FileText" className="mr-2 h-5 w-5" />
        Оформить заявку
      </Button>
      <Button variant="outline" className="bg-white border-primary/30 hover:bg-primary/5 px-8 py-6">
        <Icon name="Phone" className="mr-2 h-5 w-5" />
        Связаться с нами
      </Button>
    </div>
  </div>
);

export default Testimonials;
