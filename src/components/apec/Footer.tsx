
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">АТЭС карта</h3>
            <p className="text-gray-400">Профессиональное оформление визазаменяющих карт АТЭС для представителей бизнеса</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Оформление карты АТЭС</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Продление карты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Консультации</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Юридическая поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Страны АТЭС</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Icon name="MapPin" className="h-5 w-5 mr-2" />
                <span>Москва, ул. Тверская, д. 1, офис 150</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="Mail" className="h-5 w-5 mr-2" />
                <span>info@ates-card.ru</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Telegram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ATEC card. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
