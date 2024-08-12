import { Link, useLocation } from "react-router-dom";
import beardShave from "@/assets/beard-shave.png";
import haircut from "@/assets/haircut.png";
import eyebrow from "@/assets/eyebrow.png";

export default function ServicesContent() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="space-y-4 md:space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Oferecemos uma variedade de serviços para atender às suas necessidades. <br/>
            Desde cortes de cabelo clássicos até barbas e sobrancelhas, temos tudo o que você precisa.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src={haircut}
              alt="Haircut"
              width={450}
              height={300}
              className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
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
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src={beardShave}
              alt="Shave"
              width={450}
              height={300}
              className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
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
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src={eyebrow}
              alt="Grooming"
              width={450}
              height={300}
              className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
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