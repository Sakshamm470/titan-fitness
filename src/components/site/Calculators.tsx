import { useMemo, useState } from "react";
import { Activity, Flame } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "./Reveal";

function bmiCategory(b: number) {
  if (b < 18.5) return { label: "Underweight", color: "text-sky-400" };
  if (b < 25) return { label: "Healthy", color: "text-emerald-400" };
  if (b < 30) return { label: "Overweight", color: "text-amber-400" };
  return { label: "Obese", color: "text-brand" };
}

function BmiCalc() {
  const [h, setH] = useState("175");
  const [w, setW] = useState("72");
  const bmi = useMemo(() => {
    const m = Number(h) / 100;
    const kg = Number(w);
    if (!m || !kg) return null;
    return +(kg / (m * m)).toFixed(1);
  }, [h, w]);
  const cat = bmi ? bmiCategory(bmi) : null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="bmi-h">Height (cm)</Label>
          <Input id="bmi-h" inputMode="numeric" value={h} onChange={(e) => setH(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bmi-w">Weight (kg)</Label>
          <Input id="bmi-w" inputMode="numeric" value={w} onChange={(e) => setW(e.target.value)} />
        </div>
      </div>
      <div className="grid place-items-center rounded-xl border border-border bg-background/50 p-6 text-center">
        <Activity className="mb-2 size-6 text-brand" />
        <div className="font-display text-6xl text-foreground">{bmi ?? "—"}</div>
        <div className={`mt-2 text-sm uppercase tracking-widest ${cat?.color ?? "text-muted-foreground"}`}>
          {cat?.label ?? "Enter values"}
        </div>
        <p className="mt-3 max-w-xs text-xs text-muted-foreground">
          BMI is a starting point — body composition tells the full story. Talk to a coach.
        </p>
      </div>
    </div>
  );
}

function CaloriesCalc() {
  const [age, setAge] = useState("28");
  const [h, setH] = useState("175");
  const [w, setW] = useState("72");
  const [sex, setSex] = useState("male");
  const [activity, setActivity] = useState("1.55");

  const result = useMemo(() => {
    const a = Number(age), height = Number(h), weight = Number(w);
    if (!a || !height || !weight) return null;
    const bmr = sex === "male"
      ? 10 * weight + 6.25 * height - 5 * a + 5
      : 10 * weight + 6.25 * height - 5 * a - 161;
    return Math.round(bmr * Number(activity));
  }, [age, h, w, sex, activity]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-2">
            <Label htmlFor="cal-age">Age</Label>
            <Input id="cal-age" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label>Sex</Label>
            <Select value={sex} onValueChange={setSex}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-2">
            <Label htmlFor="cal-h">Height (cm)</Label>
            <Input id="cal-h" inputMode="numeric" value={h} onChange={(e) => setH(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cal-w">Weight (kg)</Label>
            <Input id="cal-w" inputMode="numeric" value={w} onChange={(e) => setW(e.target.value)} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Activity level</Label>
          <Select value={activity} onValueChange={setActivity}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1.2">Sedentary (little/no exercise)</SelectItem>
              <SelectItem value="1.375">Light (1–3 days/week)</SelectItem>
              <SelectItem value="1.55">Moderate (3–5 days/week)</SelectItem>
              <SelectItem value="1.725">Heavy (6–7 days/week)</SelectItem>
              <SelectItem value="1.9">Athlete (2× daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid place-items-center rounded-xl border border-border bg-background/50 p-6 text-center">
        <Flame className="mb-2 size-6 text-brand" />
        <div className="font-display text-6xl text-foreground">{result ?? "—"}</div>
        <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">kcal / day</div>
        <p className="mt-3 max-w-xs text-xs text-muted-foreground">
          Estimated maintenance using Mifflin-St Jeor. Eat below for fat loss, above for muscle gain.
        </p>
      </div>
    </div>
  );
}

export function Calculators() {
  return (
    <section id="calculators" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand">Tools</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Know your numbers
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
            <Tabs defaultValue="bmi">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bmi">BMI</TabsTrigger>
                <TabsTrigger value="cal">Calories</TabsTrigger>
              </TabsList>
              <TabsContent value="bmi" className="mt-6"><BmiCalc /></TabsContent>
              <TabsContent value="cal" className="mt-6"><CaloriesCalc /></TabsContent>
            </Tabs>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
