import { whyChooseUs } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Why Titan</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Built for serious results
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six reasons our members keep showing up — and keep transforming.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand">
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand/0 blur-3xl transition-all group-hover:bg-brand/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
