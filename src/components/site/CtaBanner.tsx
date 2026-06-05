import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FreeTrialDialog } from "./FreeTrialDialog";
import { Reveal } from "./Reveal";

export function CtaBanner({ headline = "Ready to start your fitness journey?", subline = "Join Titan today — your first session is on us.", variant = "default" }: { headline?: string; subline?: string; variant?: "default" | "brand" }) {
  const isBrand = variant === "brand";
  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-2xl border p-8 md:p-12 ${
              isBrand
                ? "border-brand/40 bg-gradient-brand text-brand-foreground shadow-brand"
                : "border-border bg-surface-elevated"
            }`}
          >
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className={`font-display text-3xl uppercase leading-tight md:text-4xl ${isBrand ? "" : ""}`}>{headline}</h2>
                <p className={`mt-2 max-w-xl ${isBrand ? "text-brand-foreground/85" : "text-muted-foreground"}`}>{subline}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant={isBrand ? "secondary" : "default"} className={isBrand ? "" : "bg-gradient-brand text-brand-foreground shadow-brand"}>
                  <a href="#membership">
                    Join Now <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
                <FreeTrialDialog>
                  <Button size="lg" variant="outline" className={isBrand ? "border-brand-foreground/40 bg-transparent text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground" : ""}>
                    Free Trial
                  </Button>
                </FreeTrialDialog>
              </div>
            </div>
            {!isBrand && (
              <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-brand/20 blur-3xl" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
