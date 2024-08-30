import TestimonialSlider from "./Components/Testimonials/TestimonialSlider"

const testimonials = [
  {
    quote:
      "Barbearia Top, o Júlio é nota 1000. Trabalha com hora agendada, muito bom! Recomendo!",
    name: "Ricardo",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXc_o9huQgUCMpQ4OlbBsn2qp7ltqnTUL3y5nEh2PDg4MC0JbcN=w60-h60-p-rp-mo-br100",
  },
  {
    quote:
      "Júlio é top, ambiente legal, recomendo demaaais",
    name: "Cauê Fabrízio",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVEboWuQcTRrsECN-YhmLiKRAhzxowHx2HMN8vpMUAmG9aW0q0weQ=w60-h60-p-rp-mo-br100",
  },
  {
    quote:
      "Ótimo profissional, bom papo, equipamentos de primeira, atenção com o cliente e com o resultado final. Preço de acordo com o que oferece e boa localização. Recomendado!",
    name: "Ernesto Gonçalves",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVI3mX-ye-Nl5rC81F7G5e7RjEqj2hyN-EP88ODWsJIV_xDizgUMQ=w60-h60-p-rp-mo-br100",
  },
  {
    quote:
      "Meu filho de 10 anos adora cortar o cabelo na Barbearia Cia do Bigode!",
    name: "Sheila Cristina vieira",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjUuZJl8aPSvoG74OeVcDZlCm3lwaqCUJ3it7KMiGH1X0XV5KIwh=w60-h60-p-rp-mo-br100",
  },
  {
    quote:
      "Barbearia Top demais! O Julio é um ótimo profissional! Trabalha somente com hora marcada!",
    name: "Kauê Francisco",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocIPgiQhld5X_cWDyOVpPl3w0x-Unaf5eMBJ83ovQLMpM9lL6Ts=w75-h75-p-rp-mo-br100",
  },
  {
    quote:
      "Melhor lugar que tem pra cortar cabelo em São José dos Campos barbeiro muito bom tá acima do excelente 👍",
    name: "Thalles Seiti",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocJ0cU2-ZtjPteH5s_SI5UjyF8u0JDCLQc2B0cw0_M1VV6Drww=w60-h60-p-rp-mo-br100",
  },
  {
    quote:
      "Show de bola. O Júlio é muito competente e o ambiente é bastante agradável.",
    name: "Professor Rogério de Oliveira",
    rating: 5,
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWFe2SDKlzrQWlJdpqULxtVvoaHlu-U-fV5OGZcnQhYROmxOfGcoQ=w60-h60-p-rp-mo-br100",
  },
];

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
        <div className="container">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}
