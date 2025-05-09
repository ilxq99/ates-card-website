import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">АТЭС</span>
          <span className="text-2xl ml-1 text-muted-foreground">карта</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary">
            Главная
          </a>
          <a
            href="#advantages"
            className="text-sm font-medium hover:text-primary"
          >
            Преимущества
          </a>
          <a
            href="#countries"
            className="text-sm font-medium hover:text-primary"
          >
            Страны
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary">
            Процесс
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">
            Тарифы
          </a>
          <a href="#apply" className="text-sm font-medium hover:text-primary">
            Оформление
          </a>
        </nav>
        <div>
          <Button variant="outline" className="mr-2 hidden md:inline-flex">
            Войти
          </Button>
          <Button>Консультация</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
