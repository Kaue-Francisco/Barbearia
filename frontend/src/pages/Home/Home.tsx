import CustomerSection from "./Components/CustomerSection/CustomerSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesContent from "./Components/ServicesContent/ServicesContent";
import TeamSection from "./Components/TeamSection/TeamSection";
import LocationSection from "./Components/LocationSection/LocationSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesContent />
      <TeamSection />
      <CustomerSection />
      <LocationSection />
    </main>
  );
}