import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FreeTrialDialog } from "./FreeTrialDialog";
import { Reveal } from "./Reveal";
import journeyImg from "@/assets/journey-cta.jpg";

export function TransformationJourneyCta() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-surface-elevated shadow-brand">
            <img
              src={journeyImg}
              alt="Before and after transformation"
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-14">
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-brand">Your turn</p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-[1.05] md:text-5xl">
                  Join 5,000+ members who transformed their lives at Titan Fitness.
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Every transformation here started with one decision. Make yours today.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground shadow-brand">
                    <a href="#membership">
                      Join Now <ArrowRight className="ml-1 size-4" />
                    </a>
                  </Button>
                  <FreeTrialDialog>
                    <Button size="lg" variant="outline">Book Free Trial</Button>
                  </FreeTrialDialog>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
