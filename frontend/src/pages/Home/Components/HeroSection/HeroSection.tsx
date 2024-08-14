import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import barberShopImage from "@/assets/background.jpeg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${barberShopImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-4 py-12 rounded-xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
            Companhia do Bigode
          </h1>
          <p className="mx-auto max-w-[700px] text-muted md:text-xl">
            Descubra a arte da barbearia tradicional em nosso espaço acolhedor e convidativo. Nossa equipe especializada está
            comprometida em proporcionar a você uma experiência de cuidados pessoais de alto nível.
          </p>
        </div>
        <Button className="bg-primary font-bold" asChild>
          <Link to="/agendamento">Agende seu Horário!</Link>
        </Button>
      </div>
    </section>
  );
}
