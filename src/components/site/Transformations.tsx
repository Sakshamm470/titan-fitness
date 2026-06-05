import { transformations } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Transformations() {
  return (
    <section id="transformations" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Transformations</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Real members. Real proof.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {transformations.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="overflow-hidden rounded-xl border border-border bg-surface-elevated">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4]">
                    <img src={t.before} alt={`${t.name} before`} loading="lazy" className="size-full object-cover grayscale" />
                    <span className="absolute left-2 top-2 rounded bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">Before</span>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <img src={t.after} alt={`${t.name} after`} loading="lazy" className="size-full object-cover" />
                    <span className="absolute left-2 top-2 rounded bg-brand px-2 py-0.5 text-[10px] uppercase tracking-widest text-brand-foreground">After</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl uppercase">{t.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand">{t.delta}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{t.story}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
