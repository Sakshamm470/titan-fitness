import { useState } from "react";
import { Instagram, Twitter, Award } from "lucide-react";
import { trainers, type Trainer } from "@/lib/site-data";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./Reveal";

export function Trainers() {
  const [active, setActive] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Coaches</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Meet the team in your corner
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tap a coach to see their full bio, certifications and specialties.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <button
                onClick={() => setActive(t)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-surface-elevated text-left transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="size-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand">{t.role}</p>
                    <h3 className="font-display text-2xl uppercase">{t.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{t.experience} experience</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs text-muted-foreground">View profile</span>
                  <div className="flex gap-2 text-muted-foreground">
                    <Instagram className="size-4" />
                    <Twitter className="size-4" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl overflow-hidden p-0">
          {active && (
            <div className="grid md:grid-cols-[260px_1fr]">
              <img src={active.image} alt={active.name} className="h-64 w-full object-cover md:h-full" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-brand">{active.role}</p>
                <DialogTitle className="mt-1 font-display text-3xl uppercase">{active.name}</DialogTitle>
                <DialogDescription className="mt-3 text-muted-foreground">{active.bio}</DialogDescription>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">Specialties</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.specialties.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground">Certifications</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {active.certifications.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Award className="size-4 text-brand" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex gap-3 text-muted-foreground">
                  <a href={active.social.instagram} aria-label={`${active.name} on Instagram`} className="hover:text-brand"><Instagram className="size-5" /></a>
                  <a href={active.social.twitter} aria-label={`${active.name} on Twitter`} className="hover:text-brand"><Twitter className="size-5" /></a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
