import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md bg-gradient-brand shadow-brand">
              <Dumbbell className="size-5 text-brand-foreground" />
            </span>
            <span className="font-display text-xl tracking-widest">
              TITAN<span className="text-brand">.</span>FITNESS
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A premium training space built for serious results, since 2014.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="size-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="size-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="size-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-brand"><Youtube className="size-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="text-foreground hover:text-brand">About</a></li>
            <li><a href="#facilities" className="text-foreground hover:text-brand">Facilities</a></li>
            <li><a href="#trainers" className="text-foreground hover:text-brand">Trainers</a></li>
            <li><a href="#schedule" className="text-foreground hover:text-brand">Schedule</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#programs" className="text-foreground hover:text-brand">Programs</a></li>
            <li><a href="#membership" className="text-foreground hover:text-brand">Membership</a></li>
            <li><a href="#calculators" className="text-foreground hover:text-brand">Tools</a></li>
            <li><a href="#contact" className="text-foreground hover:text-brand">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Visit</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            221 Iron Street, Downtown<br />
            Mon–Fri 05:00–23:00<br />
            Sat–Sun 07:00–21:00
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Titan Fitness Gym. All rights reserved.</p>
          <p>Built with grit.</p>
        </div>
      </div>
    </footer>
  );
}
