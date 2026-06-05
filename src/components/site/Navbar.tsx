import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-data";
import { useTheme } from "@/hooks/use-theme";
import { FreeTrialDialog } from "./FreeTrialDialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-md bg-gradient-brand shadow-brand">
            <Dumbbell className="size-5 text-brand-foreground" />
          </span>
          <span className="font-display text-xl tracking-widest md:text-2xl">
            TITAN<span className="text-brand">.</span>FITNESS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggle}
            className="hidden sm:inline-flex"
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <FreeTrialDialog>
            <Button variant="outline" className="hidden md:inline-flex">
              Free Trial
            </Button>
          </FreeTrialDialog>
          <Button asChild className="hidden md:inline-flex bg-gradient-brand text-brand-foreground shadow-brand hover:opacity-95">
            <a href="#membership">Join Now</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] border-l border-border bg-background">
              <div className="mt-10 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl tracking-wider text-foreground hover:text-brand"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <FreeTrialDialog>
                    <Button variant="outline" className="w-full">Free Trial</Button>
                  </FreeTrialDialog>
                  <Button asChild className="w-full bg-gradient-brand text-brand-foreground">
                    <a href="#membership" onClick={() => setOpen(false)}>Join Now</a>
                  </Button>
                  <Button variant="ghost" onClick={toggle} className="justify-start">
                    {theme === "dark" ? <Sun className="mr-2 size-4" /> : <Moon className="mr-2 size-4" />}
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
