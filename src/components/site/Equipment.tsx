import { useState } from "react";
import { equipment } from "@/lib/site-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

export function Equipment() {
  const [active, setActive] = useState<number | null>(null);
  const item = active !== null ? equipment[active] : null;

  return (
    <section id="equipment" className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Equipment</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Commercial-grade. Every piece.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tap any piece to see what it's for and how our coaches program it.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((e, i) => (
            <Reveal key={e.name} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setActive(i)}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-surface-elevated text-left transition-all hover:border-brand/40"
              >
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-lg uppercase tracking-wide">{e.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Tap to view</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={item !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl overflow-hidden p-0">
          {item && (
            <div className="grid md:grid-cols-2">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover md:h-full" />
              <div className="p-6">
                <DialogTitle className="font-display text-2xl uppercase tracking-wide">{item.name}</DialogTitle>
                <DialogDescription className="mt-3 text-muted-foreground">{item.description}</DialogDescription>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand">Programmed for</p>
                  <p className="mt-2 text-sm text-foreground">{item.usage}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
