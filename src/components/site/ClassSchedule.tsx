import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schedule, type Weekday } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const days = Object.keys(schedule) as Weekday[];

export function ClassSchedule() {
  return (
    <section id="schedule" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Class Schedule</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Find your weekly rhythm
            </h2>
            <p className="mt-4 text-muted-foreground">
              Group classes run seven days a week. All included with Premium and Elite.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface-elevated">
            <Tabs defaultValue="Mon">
              <TabsList className="grid w-full grid-cols-7 rounded-none bg-transparent p-0">
                {days.map((d) => (
                  <TabsTrigger
                    key={d}
                    value={d}
                    className="rounded-none border-b-2 border-transparent py-4 font-display text-sm uppercase tracking-widest text-muted-foreground data-[state=active]:border-brand data-[state=active]:bg-transparent data-[state=active]:text-foreground"
                  >
                    {d}
                  </TabsTrigger>
                ))}
              </TabsList>
              {days.map((d) => (
                <TabsContent key={d} value={d} className="m-0">
                  <div className="divide-y divide-border">
                    {schedule[d].map((c) => (
                      <div
                        key={`${d}-${c.time}-${c.class}`}
                        className="grid grid-cols-[80px_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-brand/5 md:px-8"
                      >
                        <span className="font-display text-xl tracking-wider text-brand">{c.time}</span>
                        <span className="font-medium text-foreground">{c.class}</span>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{c.trainer}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
