import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              In our members' words
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ loop: true, align: "start" }} className="mt-12 w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-xl border border-border bg-surface-elevated p-6">
                    <div className="flex gap-0.5 text-brand">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`size-4 ${i < t.rating ? "fill-current" : "opacity-30"}`} />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-foreground">"{t.review}"</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="size-10 rounded-full object-cover grayscale" loading="lazy" />
                      <div>
                        <div className="font-medium text-foreground">{t.name}</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Member</div>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
