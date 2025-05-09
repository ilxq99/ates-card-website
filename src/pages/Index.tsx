
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">ATES</span>
            <span className="text-2xl ml-1 text-muted-foreground">.cards</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary">Главная</a>
            <a href="#cards" className="text-sm font-medium hover:text-primary">Карты</a>
            <a href="#how" className="text-sm font-medium hover:text-primary">Как это работает</a>
            <a href="#apply" className="text-sm font-medium hover:text-primary">Оформить</a>
          </nav>
          <div>
            <Button variant="outline" className="mr-2 hidden md:inline-flex">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Финансовая свобода с картами ATES
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Оформите международную карту с выгодными условиями и без посещения офиса
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">Оформить карту</Button>
                <Button size="lg" variant="outline" className="px-8">Узнать больше</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3" 
                alt="Карта ATES" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Преимущества карт ATES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Globe" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Международные переводы</h3>
              <p className="text-muted-foreground">Отправляйте деньги в любую точку мира с минимальными комиссиями и по выгодному курсу</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="ShieldCheck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Безопасность на высшем уровне</h3>
              <p className="text-muted-foreground">Многоуровневая защита данных и транзакций с использованием современных технологий</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Wallet" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">0% за обслуживание</h3>
              <p className="text-muted-foreground">Никаких скрытых платежей и комиссий за обслуживание вашей карты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Типы карт */}
      <section id="cards" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Наши карты</h2>
          
          <Tabs defaultValue="standard" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="standard">Стандарт</TabsTrigger>
              <TabsTrigger value="premium">Премиум</TabsTrigger>
              <TabsTrigger value="business">Бизнес</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <Card>
                <CardHeader>
                  <CardTitle>Карта Стандарт</CardTitle>
                  <CardDescription>Оптимальное решение для повседневных расходов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1613243555988-441165d2943d?ixlib=rb-4.0.3" 
                      alt="Карта Стандарт" 
                      className="rounded-lg shadow-lg w-48"
                    />
                    <div className="ml-6">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Бесплатное обслуживание</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Лимит снятия наличных 300 000 ₽/мес</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Кэшбэк до 3% на все покупки</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Бесплатные переводы внутри системы</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Оформить карту Стандарт</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card>
                <CardHeader>
                  <CardTitle>Карта Премиум</CardTitle>
                  <CardDescription>Расширенные возможности для активных пользователей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-4.0.3" 
                      alt="Карта Премиум" 
                      className="rounded-lg shadow-lg w-48"
                    />
                    <div className="ml-6">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Обслуживание 250 ₽/мес (бесплатно при тратах от 75 000 ₽)</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Лимит снятия наличных 700 000 ₽/мес</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Кэшбэк до 7% в выбранных категориях</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Страховка путешественника в подарок</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Оформить карту Премиум</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Карта Бизнес</CardTitle>
                  <CardDescription>Профессиональное решение для предпринимателей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1613243555789-e2b12ce6e519?ixlib=rb-4.0.3" 
                      alt="Карта Бизнес" 
                      className="rounded-lg shadow-lg w-48"
                    />
                    <div className="ml-6">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Обслуживание 490 ₽/мес (бесплатно при обороте от 200 000 ₽)</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Лимит снятия наличных 1 500 000 ₽/мес</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Кэшбэк до 5% на бизнес-расходы</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2" />
                          <span>Интеграция с бухгалтерскими системами</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Оформить карту Бизнес</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Как оформить карту ATES</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-xl font-bold">1</span>
                  <div className="absolute w-28 h-0.5 bg-primary right-0 top-1/2 translate-x-full hidden md:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Заполните заявку</h3>
                <p className="text-muted-foreground">Укажите личные данные и выберите тип карты на нашем сайте</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-xl font-bold">2</span>
                  <div className="absolute w-28 h-0.5 bg-primary right-0 top-1/2 translate-x-full hidden md:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Пройдите верификацию</h3>
                <p className="text-muted-foreground">Загрузите необходимые документы и подтвердите личность онлайн</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Получите карту</h3>
                <p className="text-muted-foreground">Мы доставим вашу карту в течение 2-3 рабочих дней после одобрения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Оформить карту ATES</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму, и мы свяжемся с вами для завершения процесса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <Input id="firstName" placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Фамилия
                      </label>
                      <Input id="lastName" placeholder="Введите вашу фамилию" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="example@domain.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Выберите тип карты
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="cardStandard" 
                            name="cardType" 
                            value="standard" 
                            className="mr-2"
                          />
                          <label htmlFor="cardStandard" className="cursor-pointer font-medium">
                            Стандарт
                          </label>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="cardPremium" 
                            name="cardType" 
                            value="premium" 
                            className="mr-2"
                          />
                          <label htmlFor="cardPremium" className="cursor-pointer font-medium">
                            Премиум
                          </label>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="cardBusiness" 
                            name="cardType" 
                            value="business" 
                            className="mr-2"
                          />
                          <label htmlFor="cardBusiness" className="cursor-pointer font-medium">
                            Бизнес
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Отправить заявку</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ATES.cards</h3>
              <p className="text-gray-400">Современные финансовые решения для жизни и бизнеса</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Продукты</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карты Стандарт</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карты Премиум</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Бизнес-решения</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Переводы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Партнерам</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Связаться с нами</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  <span>support@ates.cards</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  <span>+7 (800) 555-35-35</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 ATES. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Условия использования</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
