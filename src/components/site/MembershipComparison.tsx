import { Check, Minus } from "lucide-react";
import { plans, allFeatures } from "@/lib/site-data";
import { Reveal } from "./Reveal";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-brand" />;
  if (value === false) return <Minus className="mx-auto size-4 text-muted-foreground/50" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

export function MembershipComparison() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Compare plans</p>
            <h2 className="mt-3 font-display text-3xl uppercase md:text-4xl">
              Everything that's included
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface-elevated">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 text-left text-xs uppercase tracking-widest text-muted-foreground">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.name} className="px-6 py-5 text-center">
                      <div className="font-display text-xl uppercase text-foreground">{p.name}</div>
                      <div className="mt-1 text-xs font-normal text-muted-foreground">${p.monthly}/mo</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((f, i) => (
                  <tr
                    key={f}
                    className={`border-b border-border/60 ${i % 2 ? "bg-background/40" : ""}`}
                  >
                    <td className="px-6 py-4 text-foreground">{f}</td>
                    {plans.map((p) => (
                      <td key={p.name} className="px-6 py-4 text-center">
                        <Cell value={p.features[f]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
