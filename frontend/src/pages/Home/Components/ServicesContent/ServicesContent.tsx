import { Link, useLocation } from "react-router-dom";
import beardShave from "@/assets/beard-shave.png";
import haircut from "@/assets/haircut.png";
import eyebrow from "@/assets/eyebrow.png";

export default function ServicesContent() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma variedade de serviços para atender às suas necessidades.
              Desde cortes de cabelo clássicos até barbas e sobrancelhas, temos tudo o que você precisa.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={haircut}
              alt="Barber cutting hair"
              className="w-full h-[300px] object-cover"
              width="500"
              height="300"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Corte de Cabelo</h3>
              <p className="text-sm text-muted-foreground">
                Escolha entre uma variedade de cortes de cabelo clássicos e modernos.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-primary font-semibold">R$30,00</div>
                <div className="text-muted-foreground text-sm">30 mins</div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={beardShave}
              alt="Barber shaving beard"
              className="w-full h-[300px] object-cover"
              width="500"
              height="300"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Barba e Bigode</h3>
              <p className="text-sm text-muted-foreground">
                Deixe sua barba e bigode em boas mãos com nossos serviços de barbearia.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-primary font-semibold">R$30,00</div>
                <div className="text-muted-foreground text-sm">30 mins</div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={eyebrow}
              alt="Eyebrow shaping"
              className="w-full h-[300px] object-cover"
              width="500"
              height="300"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Sobrancelha</h3>
              <p className="text-sm text-muted-foreground">
                Mantenha suas sobrancelhas em forma com nossos serviços de sobrancelha.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-primary font-semibold">R$5,00</div>
                <div className="text-muted-foreground text-sm">10 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}