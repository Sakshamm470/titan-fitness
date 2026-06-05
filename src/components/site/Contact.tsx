import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addLead } from "@/lib/leads-store";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(20),
  message: z.string().trim().min(5).max(1000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    addLead({ type: "contact", ...values });
    await new Promise((r) => setTimeout(r, 400));
    toast.success("Message sent — we'll be in touch within 24h.");
    reset();
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-brand">Contact</p>
          <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
            Drop by. Or drop us a line.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'll respond within a day — usually much sooner.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <MapPin className="size-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <div className="text-foreground">221 Iron Street, Downtown</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <Phone className="size-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <a href="tel:+15550101234" className="text-foreground hover:text-brand">+1 (555) 010-1234</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <Mail className="size-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a href="mailto:hello@titanfitness.com" className="text-foreground hover:text-brand">hello@titanfitness.com</a>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Titan Fitness location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.70%2C-73.99%2C40.72&layer=mapnik"
              className="h-56 w-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="c-name">Name</Label>
                <Input id="c-name" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive">Name is too short</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="c-phone">Phone</Label>
                <Input id="c-phone" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive">Enter a valid phone</p>}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">Enter a valid email</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-msg">Message</Label>
              <Textarea id="c-msg" rows={5} {...register("message")} />
              {errors.message && <p className="text-xs text-destructive">Message is too short</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="mt-2 bg-gradient-brand text-brand-foreground shadow-brand">
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
