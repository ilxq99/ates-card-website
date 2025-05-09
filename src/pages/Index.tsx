import Header from "@/components/apec/Header";
import Hero from "@/components/apec/Hero";
import AboutCard from "@/components/apec/AboutCard";
import Advantages from "@/components/apec/Advantages";
import CountriesTabs from "@/components/apec/CountriesTabs";
import ApplicationProcess from "@/components/apec/ApplicationProcess";
import PricingPlans from "@/components/apec/PricingPlans";
import ApplicationForm from "@/components/apec/ApplicationForm";
import FAQ from "@/components/apec/FAQ";
import Footer from "@/components/apec/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutCard />
      <Advantages />
      <CountriesTabs />
      <ApplicationProcess />
      <PricingPlans />
      <ApplicationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
