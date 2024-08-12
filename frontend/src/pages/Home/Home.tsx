
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesContent from "./Components/ServicesContent/ServicesContent";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesContent />
    </main>
  );
}