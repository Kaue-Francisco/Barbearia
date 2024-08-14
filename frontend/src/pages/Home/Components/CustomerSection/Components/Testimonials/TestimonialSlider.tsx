import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "./types/testimonial";
import { Star } from 'lucide-react';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <section className="w-full py-4">
      <div className="mx-auto lg:max-w-6xl px-3">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <q className="flex-1 text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </q>
                  <div className="mt-6 flex gap-3">
                    <span className="inline-flex rounded-full">
                      <img
                        className="h-10 w-10 rounded-full"
                        height={40}
                        width={40}
                        alt={testimonial.name}
                        src={testimonial.imgSrc}
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={i < testimonial.rating ? "h-4 w-4 fill-current text-yellow-500" : "h-4 w-4 fill-current text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}
