import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { About } from "@/components/site/About";
import { Facilities } from "@/components/site/Facilities";
import { Equipment } from "@/components/site/Equipment";
import { GymTour } from "@/components/site/GymTour";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Trainers } from "@/components/site/Trainers";
import { ClassSchedule } from "@/components/site/ClassSchedule";
import { Membership } from "@/components/site/Membership";
import { MembershipComparison } from "@/components/site/MembershipComparison";
import { Programs } from "@/components/site/Programs";
import { Transformations } from "@/components/site/Transformations";
import { TransformationJourneyCta } from "@/components/site/TransformationJourneyCta";
import { Testimonials } from "@/components/site/Testimonials";
import { Calculators } from "@/components/site/Calculators";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titan Fitness Gym — Train hard. Transform fast." },
      { name: "description", content: "Premium gym with certified trainers, modern equipment and personalized programs. Book your free trial at Titan Fitness." },
      { property: "og:title", content: "Titan Fitness Gym — Train hard. Transform fast." },
      { property: "og:description", content: "Premium gym with certified trainers, modern equipment and personalized programs. Book your free trial at Titan Fitness." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Facilities />
        <Equipment />
        <GymTour />
        <CtaBanner />
        <Trainers />
        <ClassSchedule />
        <Membership />
        <MembershipComparison />
        <CtaBanner variant="brand" headline="Your strongest year starts here." subline="Lock in your membership today and train with the city's best coaches." />
        <Programs />
        <Transformations />
        <TransformationJourneyCta />
        <Testimonials />
        <Calculators />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
