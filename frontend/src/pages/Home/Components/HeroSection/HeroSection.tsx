import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://t4.ftcdn.net/jpg/01/15/15/13/360_F_115151341_0rJ1Do8vP1AQwSyEd3MgBdw8HXlTVlYL.jpg"
        alt="Barbershop"
        className="absolute inset-0 object-cover w-full h-full"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold">COMPANHIA DO BIGODE</h1>
        <p className="mt-2 text-lg">BARBEARIA</p>
        <Button className="mt-6 bg-primary text-white">Agende seu horário!</Button>
      </div>
    </div>
  );
}