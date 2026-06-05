import { stats } from "@/lib/site-data";
import { useCountUp } from "@/hooks/use-count-up";
import { Reveal } from "./Reveal";

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="border-l-2 border-brand/60 pl-5">
      <span ref={ref} className="font-display text-5xl text-foreground md:text-6xl">
        {v}
        {suffix}
      </span>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-gradient-surface py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-brand">About Titan</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[1.05] md:text-5xl">
            Ten years of building stronger humans.
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Titan Fitness opened in 2014 with a simple mission: give serious lifters,
            runners and movers a space that takes their goals as seriously as they do.
            A decade later we're the city's most trusted training floor — coaching
            beginners through their first squat and athletes through their next podium.
          </p>
          <p className="mt-4 max-w-lg text-muted-foreground">
            <strong className="text-foreground">Mission:</strong> Help every member move
            better, lift heavier and live longer.<br />
            <strong className="text-foreground">Vision:</strong> A community where
            transformation is the rule, not the exception.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 rounded-2xl border border-border bg-surface-elevated p-8 shadow-elevated">
            {stats.map((s) => (
              <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
