import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import SearchSection from "@/components/home/searchsection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
    </>
  );
}