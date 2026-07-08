import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import SearchSection from "@/components/home/searchsection";
import Categories from "@/components/home/categories";
import HowItWorks from "@/components/home/howitworks";
import FeaturedSchemes from "@/components/home/featuredscheme";
import EligibilityForm from "@/components/form/eligibilityform";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Categories />
      <HowItWorks />
      <FeaturedSchemes />
      <EligibilityForm />
    </>
  );
}