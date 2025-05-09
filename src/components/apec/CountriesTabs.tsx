
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CountriesTabs = () => {
  return (
    <section id="countries" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Страны-участницы программы</h2>
        
        <Tabs defaultValue="asia" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="asia">Азия</TabsTrigger>
            <TabsTrigger value="americas">Америка</TabsTrigger>
            <TabsTrigger value="oceania">Океания</TabsTrigger>
          </TabsList>
          
          <TabsContent value="asia">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <CountryCard flag="🇨🇳" name="Китай" stayPeriod="до 60 дней за визит" />
              <CountryCard flag="🇯🇵" name="Япония" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇰🇷" name="Южная Корея" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇸🇬" name="Сингапур" stayPeriod="до 60 дней за визит" />
              <CountryCard flag="🇹🇭" name="Таиланд" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇭🇰" name="Гонконг" stayPeriod="до 60 дней за визит" />
            </div>
          </TabsContent>
          
          <TabsContent value="americas">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <CountryCard flag="🇺🇸" name="США" stayPeriod="Ускоренное рассмотрение визовых заявлений" />
              <CountryCard flag="🇨🇦" name="Канада" stayPeriod="Ускоренное рассмотрение визовых заявлений" />
              <CountryCard flag="🇲🇽" name="Мексика" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇵🇪" name="Перу" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇨🇱" name="Чили" stayPeriod="до 90 дней за визит" />
            </div>
          </TabsContent>
          
          <TabsContent value="oceania">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <CountryCard flag="🇦🇺" name="Австралия" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇳🇿" name="Новая Зеландия" stayPeriod="до 90 дней за визит" />
              <CountryCard flag="🇵🇬" name="Папуа-Новая Гвинея" stayPeriod="до 60 дней за визит" />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            * Карта АТЭС не является полноценной заменой визы для США и Канады, но обеспечивает ускоренное рассмотрение визовых заявлений и упрощенную процедуру оформления.
          </p>
        </div>
      </div>
    </section>
  );
};

interface CountryCardProps {
  flag: string;
  name: string;
  stayPeriod: string;
}

const CountryCard = ({ flag, name, stayPeriod }: CountryCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <span className="text-2xl mr-2">{flag}</span> {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Срок пребывания: {stayPeriod}
        </p>
      </CardContent>
    </Card>
  );
};

export default CountriesTabs;
