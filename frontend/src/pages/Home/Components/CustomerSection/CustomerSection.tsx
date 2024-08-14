import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function CustomerSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Avaliações dos Clientes</h2>	
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Veja o que nossos clientes têm a dizer sobre suas experiências em nossa barbearia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="Customer 1" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground">John Doe</h3>
                    <p className="text-muted-foreground">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been coming to this barber shop for years and I\n absolutely love it. The staff is always
                  friendly and\n professional, and they do an amazing job with my haircuts and\n shaves."
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="Customer 2" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground">Jane Arden</h3>
                    <p className="text-muted-foreground">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been coming to this barber shop for years and I\n absolutely love it. The staff is always
                  friendly and\n professional, and they do an amazing job with my haircuts and\n shaves."
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}
