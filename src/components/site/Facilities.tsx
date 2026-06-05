import { facilities } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Facilities() {
  return (
    <section id="facilities" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand">Facilities</p>
              <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
                Every zone you'll ever need
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              From heavy lifting to hot yoga, we've engineered each space for one purpose: results.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-6 grid size-12 place-items-center rounded-lg bg-brand/10 text-brand">
                  <f.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
