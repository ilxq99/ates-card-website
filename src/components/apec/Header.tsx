import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" aria-label="Главная страница АТЭС карта">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-secondary h-8 w-8 rounded-lg flex items-center justify-center mr-2 shadow-sm">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-2xl font-bold gradient-text">АТЭС</span>
                  <span className="text-2xl ml-1 text-muted-foreground">
                    карта
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1"
            aria-label="Основная навигация"
          >
            <NavLink href="#">Главная</NavLink>
            <NavLink href="#advantages">Преимущества</NavLink>
            <NavLink href="#countries">Страны</NavLink>
            <NavLink href="#process">Процесс</NavLink>
            <NavLink href="#pricing">Тарифы</NavLink>
            <NavLink href="#apply">Оформление</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary"
            >
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg">
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <Icon
              name={menuOpen ? "X" : "Menu"}
              className="h-6 w-6 text-primary"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 border-t"
            role="navigation"
            aria-label="Мобильная навигация"
          >
            <div className="py-4 px-6 space-y-4">
              <MobileNavLink href="#" onClick={() => setMenuOpen(false)}>
                Главная
              </MobileNavLink>
              <MobileNavLink
                href="#advantages"
                onClick={() => setMenuOpen(false)}
              >
                Преимущества
              </MobileNavLink>
              <MobileNavLink
                href="#countries"
                onClick={() => setMenuOpen(false)}
              >
                Страны
              </MobileNavLink>
              <MobileNavLink href="#process" onClick={() => setMenuOpen(false)}>
                Процесс
              </MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setMenuOpen(false)}>
                Тарифы
              </MobileNavLink>
              <MobileNavLink href="#apply" onClick={() => setMenuOpen(false)}>
                Оформление
              </MobileNavLink>

              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Войти
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-primary to-secondary">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary group"
    aria-label={`Перейти к разделу ${children}`}
  >
    {children}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 transition-transform group-hover:scale-x-100" />
  </a>
);

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <a
    href={href}
    className="block py-2 text-base font-medium hover:text-primary"
    onClick={onClick}
    aria-label={`Перейти к разделу ${children}`}
  >
    {children}
  </a>
);

export default Header;
