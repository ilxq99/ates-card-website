import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative pb-20 pt-32 overflow-hidden bg-gray-50">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Декоративные круги */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary/30 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-10 w-10 h-10 rounded-full bg-accent/20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-blue-300/30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Бизнес без границ
            </div>

            <h1 className="font-bold leading-tight mb-6">
              <span className="gradient-text">Деловые поездки</span> без визовых
              ограничений
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Карта АТЭС (APEC) — ваш пропуск в 21 экономику
              Азиатско-Тихоокеанского региона без оформления виз. Откройте новые
              возможности для вашего бизнеса.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="marketing-button group">
                Оформить карту
                <Icon
                  name="ArrowRight"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
              >
                <Icon name="Info" className="mr-2 h-4 w-4" />
                Узнать условия
              </Button>
            </div>

            <div className="mt-8 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 mr-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span>
                Присоединяйтесь к{" "}
                <span className="text-primary font-medium">2,500+</span>{" "}
                предпринимателям
              </span>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl transform -translate-x-10 -translate-y-10 opacity-70"></div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-md transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1586174036004-59ab2ada4770?ixlib=rb-4.0.3"
                alt="Карта АТЭС"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover relative z-10"
              />

              {/* Декоративные бейджи */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg flex items-center z-20 animate-float">
                <div className="bg-blue-400/20 p-2 rounded-full mr-2">
                  <Icon name="Clock" className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium text-sm">Экономия времени</div>
                  <div className="text-xs text-muted-foreground">
                    Безвизовый въезд
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg flex items-center z-20 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="bg-accent/20 p-2 rounded-full mr-2">
                  <Icon name="Globe" className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm">21 страна</div>
                  <div className="text-xs text-muted-foreground">
                    Азиатско-Тихоокеанский регион
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Логотипы партнеров/доверия */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Присоединяйтесь к ведущим компаниям, использующим карты АТЭС
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-6 md:h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6 md:h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-7 md:h-9"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-6 md:h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              className="h-5 md:h-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
