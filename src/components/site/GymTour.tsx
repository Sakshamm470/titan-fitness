import { gymTour } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function GymTour() {
  return (
    <section id="tour" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Take the tour</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Step inside Titan
            </h2>
            <p className="mt-4 text-muted-foreground">
              A look at the space, the gear and the energy that's waiting for you.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gymTour.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.05}>
              <div
                className={`group relative overflow-hidden rounded-xl border border-border ${
                  i === 0 || i === 3 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Gym interior ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
