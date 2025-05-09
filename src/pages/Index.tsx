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

  // JSON-LD разметка для главной страницы
  const mainPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Оформление карты АТЭС (APEC) для бизнеса | Безвизовый въезд в 21 страну",
    description:
      "Профессиональное оформление карты АТЭС (APEC) для бизнесменов и руководителей. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона.",
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

  return (
    <>
      <SEO
        title="Оформление карты АТЭС (APEC) для бизнеса | Безвизовый въезд в 21 страну"
        description="Профессиональное оформление карты АТЭС (APEC) для бизнесменов и руководителей. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона."
        keywords="карта АТЭС, APEC, бизнес карта, безвизовый въезд, деловые поездки, международный бизнес, оформление АТЭС, APEC Business Travel Card"
        schema={mainPageSchema}
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
