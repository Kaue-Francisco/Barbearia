import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import barberImage from "@/assets/mestre.jpeg";

export default function TeamSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conheça o Nosso Time</h2>
                        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Nossa equipe de barbeiros talentosos e experientes está comprometida em fornecer a você a melhor experiência de cuidados pessoais.
                        </p>
                    </div>
                </div>
                <div className="mx-auto flex justify-center py-12">
                    <Card className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={barberImage}
                            alt="Barber cutting hair"
                            className="w-full h-[400px] object-cover"
                            width="500"
                            height="400"
                            style={{ aspectRatio: "500/400", objectFit: "cover" }}
                        />
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold">Julio Cesar Francisco</h3>
                                    <p className="text-muted-foreground">30+ anos de experiência</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-muted-foreground">
                                    Julio Cesar Francisco é um barbeiro experiente e talentoso que se dedica a fornecer a você a melhor experiência de cuidados pessoais.
                                </p>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Button className="font-bold" asChild>
                                    <Link to="/agendamento">Agende agora!</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
