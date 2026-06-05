import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addLead } from "@/lib/leads-store";
import type { ReactNode } from "react";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  goal: z.string().min(1, "Pick a goal"),
});

type FormValues = z.infer<typeof schema>;

export function FreeTrialDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const { register, handleSubmit, setValue, watch, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { goal: "" } });

  const onSubmit = async (values: FormValues) => {
    addLead({ type: "trial", ...values });
    await new Promise((r) => setTimeout(r, 400));
    setDone(true);
  };

  const goal = watch("goal");

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setTimeout(() => {
            setDone(false);
            reset();
          }, 200);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="size-14 text-brand" />
            <DialogTitle className="font-display text-3xl tracking-wide">You're in.</DialogTitle>
            <DialogDescription className="max-w-xs">
              We'll call you within 24 hours to schedule your free trial session. Get ready to lift.
            </DialogDescription>
            <Button onClick={() => setOpen(false)} className="mt-2 bg-gradient-brand text-brand-foreground">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl tracking-wide">Book your free trial</DialogTitle>
              <DialogDescription>One session. No commitment. Just bring your training shoes.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="trial-name">Name</Label>
                <Input id="trial-name" placeholder="Alex Carter" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="trial-email">Email</Label>
                <Input id="trial-email" type="email" placeholder="you@email.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="trial-phone">Phone</Label>
                <Input id="trial-phone" placeholder="+1 555 010 1234" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label>Fitness goal</Label>
                <Select value={goal} onValueChange={(v) => setValue("goal", v, { shouldValidate: true })}>
                  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight-loss">Weight loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle gain</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="general">General fitness</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.goal && <p className="text-xs text-destructive">{errors.goal.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="mt-2 bg-gradient-brand text-brand-foreground shadow-brand">
                {isSubmitting ? "Booking…" : "Book my trial"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
