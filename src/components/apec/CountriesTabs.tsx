
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

// Импортируем типы для стран
interface Country {
  flag: string;
  name: string;
  stayPeriod: string;
  region: "asia" | "americas" | "oceania";
  featured?: boolean;
  visaFree?: boolean;
}

const CountriesTabs = () => {
  const [selectedTab, setSelectedTab] = useState<"asia" | "americas" | "oceania">("asia");
  
  return (
    <section id="countries" className="py-24 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5">
            21 экономика АТЭС
          </Badge>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Страны-участницы <span className="gradient-text">программы</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Карта АТЭС дает возможность безвизового въезда или упрощенного оформления виз в 21 экономику Азиатско-Тихоокеанского экономического сотрудничества
          </p>
        </div>
        
        {/* Глобус или карта в качестве иллюстрации */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl transform scale-95 opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3" 
              alt="Мировая карта" 
              className="w-full max-w-2xl h-auto rounded-2xl shadow-xl relative z-10"
            />
            <div className="absolute -top-6 -right-4 transform rotate-12">
              <img src="https://em-content.zobj.net/source/apple/354/airplane_2708-fe0f.png" alt="Airplane" className="w-12 h-12" />
            </div>
            <div className="absolute -bottom-4 -left-2 transform -rotate-12">
              <img src="https://em-content.zobj.net/source/apple/354/passport-control_1f6c2.png" alt="Passport" className="w-12 h-12" />
            </div>
          </div>
        </div>
        
        <Tabs 
          defaultValue="asia" 
          value={selectedTab}
          onValueChange={(value) => setSelectedTab(value as "asia" | "americas" | "oceania")}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 h-14 p-1 bg-slate-100/80 backdrop-blur-sm">
              <TabsTrigger 
                value="asia" 
                className="h-12 px-8 data-[state=active]:bg-white data-[state=active]:text-primary"
                onClick={() => setSelectedTab("asia")}
              >
                <Icon name="Map" className="mr-2 h-5 w-5" />
                Азия
              </TabsTrigger>
              <TabsTrigger 
                value="americas" 
                className="h-12 px-8 data-[state=active]:bg-white data-[state=active]:text-primary"
                onClick={() => setSelectedTab("americas")}
              >
                <Icon name="Map" className="mr-2 h-5 w-5" />
                Америка
              </TabsTrigger>
              <TabsTrigger 
                value="oceania" 
                className="h-12 px-8 data-[state=active]:bg-white data-[state=active]:text-primary"
                onClick={() => setSelectedTab("oceania")}
              >
                <Icon name="Map" className="mr-2 h-5 w-5" />
                Океания
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="asia" className="mt-2">
            <CountryGrid countries={countries.filter(c => c.region === "asia")} />
          </TabsContent>
          
          <TabsContent value="americas" className="mt-2">
            <CountryGrid countries={countries.filter(c => c.region === "americas")} />
          </TabsContent>
          
          <TabsContent value="oceania" className="mt-2">
            <CountryGrid countries={countries.filter(c => c.region === "oceania")} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start">
                <Icon name="Info" className="h-5 w-5 text-primary shrink-0 mt-1 mr-4" /> 
                <p className="text-muted-foreground text-left">
                  * Карта АТЭС не является полноценной заменой визы для США и Канады, но обеспечивает ускоренное рассмотрение визовых заявлений и упрощенную процедуру оформления.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface CountryGridProps {
  countries: Country[];
}

const CountryGrid = ({ countries }: CountryGridProps) => {
  // Сначала показываем featured страны
  const sortedCountries = [...countries].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedCountries.map((country, index) => (
        <CountryCard 
          key={country.name} 
          country={country} 
          index={index}
        />
      ))}
    </div>
  );
};

interface CountryCardProps {
  country: Country;
  index: number;
}

const CountryCard = ({ country, index }: CountryCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className={`h-full hover:shadow-lg transition-shadow group overflow-hidden ${country.featured ? 'border-primary/30 bg-primary/5' : 'bg-white'}`}>
        <CardHeader className="pb-2 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gray-100 transform group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 flex items-center">
            <span className="text-4xl mr-4">{country.flag}</span>
            <div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {country.name}
              </CardTitle>
              {country.visaFree !== false && (
                <Badge className="mt-1 bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none">
                  Безвизовый въезд
                </Badge>
              )}
              {country.visaFree === false && (
                <Badge variant="outline" className="mt-1 bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 border-yellow-500/20">
                  Упрощенное оформление
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center pt-2">
            <Icon name="CalendarRange" className="h-4 w-4 text-muted-foreground mr-2" />
            <p className="text-sm text-muted-foreground">
              Срок пребывания: <span className="font-medium">{country.stayPeriod}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Данные о странах
const countries: Country[] = [
  // Азия
  { flag: "🇨🇳", name: "Китай", stayPeriod: "до 60 дней за визит", region: "asia", featured: true },
  { flag: "🇯🇵", name: "Япония", stayPeriod: "до 90 дней за визит", region: "asia", featured: true },
  { flag: "🇰🇷", name: "Южная Корея", stayPeriod: "до 90 дней за визит", region: "asia" },
  { flag: "🇸🇬", name: "Сингапур", stayPeriod: "до 60 дней за визит", region: "asia" },
  { flag: "🇹🇭", name: "Таиланд", stayPeriod: "до 90 дней за визит", region: "asia" },
  { flag: "🇭🇰", name: "Гонконг", stayPeriod: "до 60 дней за визит", region: "asia" },
  { flag: "🇲🇾", name: "Малайзия", stayPeriod: "до 60 дней за визит", region: "asia" },
  { flag: "🇵🇭", name: "Филиппины", stayPeriod: "до 59 дней за визит", region: "asia" },
  { flag: "🇻🇳", name: "Вьетнам", stayPeriod: "до 60 дней за визит", region: "asia" },
  
  // Америка
  { flag: "🇺🇸", name: "США", stayPeriod: "Ускоренное рассмотрение", region: "americas", visaFree: false },
  { flag: "🇨🇦", name: "Канада", stayPeriod: "Ускоренное рассмотрение", region: "americas", visaFree: false },
  { flag: "🇲🇽", name: "Мексика", stayPeriod: "до 90 дней за визит", region: "americas", featured: true },
  { flag: "🇵🇪", name: "Перу", stayPeriod: "до 90 дней за визит", region: "americas" },
  { flag: "🇨🇱", name: "Чили", stayPeriod: "до 90 дней за визит", region: "americas" },
  
  // Океания
  { flag: "🇦🇺", name: "Австралия", stayPeriod: "до 90 дней за визит", region: "oceania", featured: true },
  { flag: "🇳🇿", name: "Новая Зеландия", stayPeriod: "до 90 дней за визит", region: "oceania" },
  { flag: "🇵🇬", name: "Папуа-Новая Гвинея", stayPeriod: "до 60 дней за визит", region: "oceania" }
];

export default CountriesTabs;
