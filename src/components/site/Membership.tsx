import { useState } from "react";
import { Check } from "lucide-react";
import { plans } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { FreeTrialDialog } from "./FreeTrialDialog";
import { Reveal } from "./Reveal";

export function Membership() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="membership" className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Membership</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Pick your level
            </h2>
            <p className="mt-4 text-muted-foreground">
              No joining fees. Cancel any time on monthly plans. Annual saves you two months.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-border bg-surface-elevated p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-1.5 text-sm transition-all ${!annual ? "bg-gradient-brand text-brand-foreground shadow-brand" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-5 py-1.5 text-sm transition-all ${annual ? "bg-gradient-brand text-brand-foreground shadow-brand" : "text-muted-foreground"}`}
              >
                Annual <span className="ml-1 text-xs opacity-80">−17%</span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => {
            const price = annual ? p.annual : p.monthly;
            const period = annual ? "/year" : "/month";
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                    p.highlight
                      ? "border-brand/60 bg-surface-elevated shadow-brand md:scale-[1.03]"
                      : "border-border bg-surface-elevated"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs uppercase tracking-widest text-brand-foreground shadow-brand">
                      Most Popular
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{p.tagline}</p>
                  <h3 className="mt-1 font-display text-3xl uppercase">{p.name}</h3>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl">${price}</span>
                    <span className="text-sm text-muted-foreground">{period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {Object.entries(p.features).map(([k, v]) =>
                      v ? (
                        <li key={k} className="flex items-start gap-2 text-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span>
                            {k}
                            {typeof v === "string" && (
                              <span className="ml-1 text-muted-foreground">— {v}</span>
                            )}
                          </span>
                        </li>
                      ) : null,
                    )}
                  </ul>
                  <FreeTrialDialog>
                    <Button
                      className={`mt-8 w-full ${p.highlight ? "bg-gradient-brand text-brand-foreground shadow-brand" : ""}`}
                      variant={p.highlight ? "default" : "outline"}
                    >
                      Join {p.name}
                    </Button>
                  </FreeTrialDialog>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
