import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FreeTrialDialog } from "./FreeTrialDialog";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Athlete deadlifting in a dark gym"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pb-20 pt-32 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand"
        >
          <span className="size-1.5 rounded-full bg-brand" /> Now enrolling — Cohort 12
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Transform your body.
          <br />
          <span className="text-gradient-brand">Transform your life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Professional trainers. Modern equipment. Personalized programs that
          actually fit your life — designed by coaches at the top of their craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild size="lg" className="h-12 bg-gradient-brand text-brand-foreground shadow-brand hover:opacity-95">
            <a href="#membership">
              Join Now <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
          <FreeTrialDialog>
            <Button size="lg" variant="outline" className="h-12 border-foreground/20 backdrop-blur-sm">
              Book Free Trial
            </Button>
          </FreeTrialDialog>
        </motion.div>

        <motion.a
          href="#why"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          <span className="flex flex-col items-center gap-1">
            Scroll
            <ChevronDown className="size-4 animate-bounce" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
