
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Деловые поездки без визовых ограничений
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Карта АТЭС (APEC) — ваш пропуск в 21 экономику Азиатско-Тихоокеанского региона без оформления виз
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">Оформить карту</Button>
              <Button size="lg" variant="outline" className="px-8">Узнать условия</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1586174036004-59ab2ada4770?ixlib=rb-4.0.3" 
              alt="Карта АТЭС" 
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
