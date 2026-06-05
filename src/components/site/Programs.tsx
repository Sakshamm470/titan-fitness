import { Clock, Gauge, Sparkles } from "lucide-react";
import { programs } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const difficultyColor: Record<string, string> = {
  Beginner: "text-emerald-400",
  Intermediate: "text-amber-400",
  Advanced: "text-brand",
  "All Levels": "text-sky-400",
};

export function Programs() {
  return (
    <section id="programs" className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Programs</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Programs that get results
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pick the protocol that matches your goal — your coach personalizes the rest.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-1 hover:border-brand/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl uppercase tracking-wide">{p.name}</h3>
                  <Sparkles className="size-5 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.benefits}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="size-3.5" /> {p.duration}
                  </span>
                  <span className={`flex items-center gap-1.5 ${difficultyColor[p.difficulty] ?? "text-brand"}`}>
                    <Gauge className="size-3.5" /> {p.difficulty}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
