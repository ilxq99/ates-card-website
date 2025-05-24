import { useEffect } from "react";
import Header from "@/components/apec/Header";
import Hero from "@/components/apec/Hero";
import AboutCard from "@/components/apec/AboutCard";
import Advantages from "@/components/apec/Advantages";
import CountriesTabs from "@/components/apec/CountriesTabs";
import ApplicationProcess from "@/components/apec/ApplicationProcess";
import PricingPlans from "@/components/apec/PricingPlans";
import ApplicationForm from "@/components/apec/ApplicationForm";
import Testimonials from "@/components/apec/Testimonials";
import FAQ from "@/components/apec/FAQ";
import Footer from "@/components/apec/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  // Отслеживаем скролл для аналитики и GTM
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.floor(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100,
      );

      // Отправляем данные о скролле в аналитику при достижении определенных точек
      if (
        scrollPercentage === 25 ||
        scrollPercentage === 50 ||
        scrollPercentage === 75 ||
        scrollPercentage === 90
      ) {
        // Здесь можно добавить код для отправки данных в аналитику
        console.log(`Scrolled ${scrollPercentage}%`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Расширенная JSON-LD разметка для главной страницы
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "APEC Cards Professional Service",
    url: "https://apec-cards.ru",
    logo: "https://apec-cards.ru/logo.png",
    description: "Профессиональное оформление карт АТЭС для бизнеса",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressLocality: "Москва",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-495-123-45-67",
      contactType: "customer service",
    },
    sameAs: ["https://t.me/apeccards", "https://wa.me/79151234567"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Оформление карты АТЭС (APEC Business Travel Card)",
    description:
      "Профессиональное оформление карты АТЭС для безвизового въезда в 21 страну",
    provider: {
      "@type": "Organization",
      name: "APEC Cards Professional Service",
    },
    offers: {
      "@type": "Offer",
      price: "65000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "256",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://apec-cards.ru/",
      },
    ],
  };

  const structuredDataArray = [
    organizationSchema,
    serviceSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      <SEO
        title="Карта АТЭС (APEC) — оформление для бизнеса | Безвизовый въезд в 21 страну"
        description="Профессиональное оформление карты АТЭС для бизнесменов. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона. Срок оформления 45-60 дней."
        keywords="карта АТЭС, APEC, бизнес карта, безвизовый въезд, деловые поездки, международный бизнес, оформление АТЭС, APEC Business Travel Card"
        ogUrl="https://apec-cards.ru/"
        canonical="https://apec-cards.ru/"
        structuredData={structuredDataArray}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <AboutCard />
          <Advantages />
          <CountriesTabs />
          <ApplicationProcess />
          <PricingPlans />
          <Testimonials />
          <ApplicationForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
