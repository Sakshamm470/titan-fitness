import {
  Dumbbell,
  Heart,
  Flame,
  Users,
  Lock,
  Waves,
  Sparkles,
  Apple,
  ShieldCheck,
  Award,
  CalendarClock,
  HandHeart,
  Leaf,
  Sparkle,
} from "lucide-react";

export const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Expert Trainers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

export const whyChooseUs = [
  { icon: Award, title: "Certified Trainers", text: "Internationally certified coaches with decade-plus experience." },
  { icon: Dumbbell, title: "Modern Equipment", text: "Hammer Strength, Rogue and Life Fitness across every zone." },
  { icon: CalendarClock, title: "Flexible Membership", text: "Daily, monthly and annual passes — no hidden lock-ins." },
  { icon: HandHeart, title: "Personal Guidance", text: "Tailored programs reviewed every 4 weeks by your coach." },
  { icon: Apple, title: "Nutrition Support", text: "On-staff dieticians design meal plans around your goals." },
  { icon: Sparkle, title: "Spotless Environment", text: "Cleaned hourly, sanitised nightly — your space, our pride." },
];

export const facilities = [
  { icon: Heart, title: "Cardio Zone", text: "Treadmills, ellipticals and rowers with personal screens." },
  { icon: Dumbbell, title: "Weight Training", text: "Free weights up to 60kg dumbbells across two platforms." },
  { icon: Flame, title: "CrossFit Arena", text: "Rigs, sleds and Olympic platforms for high-intensity work." },
  { icon: Users, title: "Personal Training", text: "Private studios for one-on-one breakthrough sessions." },
  { icon: Lock, title: "Locker Rooms", text: "Premium showers, hairdryers and stocked vanities." },
  { icon: Waves, title: "Steam & Sauna", text: "Recover faster with our finnish sauna and steam suites." },
  { icon: Leaf, title: "Yoga Studio", text: "Heated 32°C studio for vinyasa, hatha and breath-work." },
  { icon: Sparkles, title: "Nutrition Bar", text: "Cold-pressed juices, protein shakes and clean snacks." },
];

export const equipment = [
  { name: "Commercial Treadmills", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=70", description: "20 cushioned-deck treadmills with built-in HR tracking.", usage: "Steady-state cardio, HIIT intervals, incline walks." },
  { name: "Olympic Bench Press", image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=900&q=70", description: "Rogue bench paired with calibrated steel plates.", usage: "Flat, incline and decline pressing variations." },
  { name: "Squat Racks", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=70", description: "Heavy-duty power racks with safety spotters.", usage: "Back squats, front squats, overhead pressing." },
  { name: "Dumbbell Wall", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=70", description: "Hex dumbbells from 2.5kg to 60kg, fully racked.", usage: "Hypertrophy, accessory and unilateral lifts." },
  { name: "Cable Machines", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=70", description: "Dual-stack cables with 30+ attachment options.", usage: "Pulls, presses, isolation and functional moves." },
  { name: "Leg Press", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=70", description: "45° plate-loaded press up to 500kg capacity.", usage: "Quad-focused compound lower-body training." },
  { name: "Assault Bikes", image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=70", description: "Air-resistance bikes for max-effort conditioning.", usage: "Sprints, EMOMs, finisher intervals." },
  { name: "Functional Rig", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=70", description: "Modular rig with rings, ropes and pull-up bars.", usage: "CrossFit, calisthenics, mobility flows." },
];

export const gymTour = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=900&q=70",
];

export const trainers = [
  {
    name: "Marcus Steele",
    role: "Head Strength Coach",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70",
    bio: "National-level powerlifter turned coach. Marcus has guided 200+ lifters past their first 200kg deadlift.",
    certifications: ["NSCA-CSCS", "IPF Coach L3", "FRC Specialist"],
    specialties: ["Powerlifting", "Strength", "Hypertrophy"],
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Aria Vance",
    role: "Cardio & Endurance",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70",
    bio: "Ex-collegiate triathlete who designs conditioning programs that don't grind your knees into dust.",
    certifications: ["ACE-CPT", "VO2 Performance", "NASM-CES"],
    specialties: ["HIIT", "Endurance", "Fat Loss"],
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Kenji Park",
    role: "Yoga & Mobility",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=70",
    bio: "Trained in Mysore, India. Kenji blends vinyasa with modern mobility science for athletes who can't touch their toes.",
    certifications: ["RYT-500", "FRCms", "Pre-Natal Yoga"],
    specialties: ["Vinyasa", "Mobility", "Breath-work"],
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Dr. Lena Ortiz",
    role: "Sports Nutritionist",
    experience: "9 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=70",
    bio: "PhD in Sports Nutrition. Lena builds meal plans you'll actually stick to — no chicken-and-rice dogma.",
    certifications: ["PhD Sports Nutrition", "ISSN-CISSN", "Precision Nutrition L2"],
    specialties: ["Cutting", "Recomp", "Performance"],
    social: { instagram: "#", twitter: "#" },
  },
];

export type Trainer = (typeof trainers)[number];

export const schedule = {
  Mon: [
    { time: "06:00", class: "Sunrise Yoga", trainer: "Kenji Park" },
    { time: "07:30", class: "HIIT Burn", trainer: "Aria Vance" },
    { time: "12:00", class: "Lunch Crush", trainer: "Marcus Steele" },
    { time: "18:00", class: "Strength Lab", trainer: "Marcus Steele" },
    { time: "19:30", class: "Power Yoga", trainer: "Kenji Park" },
  ],
  Tue: [
    { time: "06:30", class: "Cycle Sprint", trainer: "Aria Vance" },
    { time: "08:00", class: "Mobility Flow", trainer: "Kenji Park" },
    { time: "17:30", class: "CrossFit WOD", trainer: "Marcus Steele" },
    { time: "19:00", class: "Zumba", trainer: "Aria Vance" },
  ],
  Wed: [
    { time: "06:00", class: "Sunrise Yoga", trainer: "Kenji Park" },
    { time: "07:30", class: "Boxing Cardio", trainer: "Aria Vance" },
    { time: "18:00", class: "Squat Clinic", trainer: "Marcus Steele" },
    { time: "19:30", class: "Recovery Stretch", trainer: "Kenji Park" },
  ],
  Thu: [
    { time: "06:30", class: "Tabata", trainer: "Aria Vance" },
    { time: "12:00", class: "Lunch Crush", trainer: "Marcus Steele" },
    { time: "18:00", class: "Deadlift Lab", trainer: "Marcus Steele" },
    { time: "19:30", class: "Yin Yoga", trainer: "Kenji Park" },
  ],
  Fri: [
    { time: "06:00", class: "Sunrise Yoga", trainer: "Kenji Park" },
    { time: "07:30", class: "HIIT Burn", trainer: "Aria Vance" },
    { time: "17:30", class: "Friday Heavy", trainer: "Marcus Steele" },
    { time: "19:00", class: "Dance Cardio", trainer: "Aria Vance" },
  ],
  Sat: [
    { time: "08:00", class: "Weekend Warrior", trainer: "Marcus Steele" },
    { time: "09:30", class: "Vinyasa Flow", trainer: "Kenji Park" },
    { time: "11:00", class: "CrossFit Open", trainer: "Aria Vance" },
  ],
  Sun: [
    { time: "09:00", class: "Recovery Yoga", trainer: "Kenji Park" },
    { time: "10:30", class: "Long Run Club", trainer: "Aria Vance" },
  ],
};

export type Weekday = keyof typeof schedule;

export const allFeatures = [
  "Open Gym Access",
  "Locker & Towel Service",
  "All Group Classes",
  "Personal Trainer Sessions",
  "Custom Diet Plan",
  "Recovery Suite (Sauna/Steam)",
  "Advanced Body Tracking",
  "Priority VIP Support",
  "Guest Passes / month",
] as const;

export const plans = [
  {
    name: "Basic",
    tagline: "Get moving",
    monthly: 29,
    annual: 290,
    highlight: false,
    features: {
      "Open Gym Access": true,
      "Locker & Towel Service": true,
      "All Group Classes": false,
      "Personal Trainer Sessions": false,
      "Custom Diet Plan": false,
      "Recovery Suite (Sauna/Steam)": false,
      "Advanced Body Tracking": false,
      "Priority VIP Support": false,
      "Guest Passes / month": "0",
    },
  },
  {
    name: "Premium",
    tagline: "Most popular",
    monthly: 59,
    annual: 590,
    highlight: true,
    features: {
      "Open Gym Access": true,
      "Locker & Towel Service": true,
      "All Group Classes": true,
      "Personal Trainer Sessions": "4 / mo",
      "Custom Diet Plan": true,
      "Recovery Suite (Sauna/Steam)": true,
      "Advanced Body Tracking": false,
      "Priority VIP Support": false,
      "Guest Passes / month": "2",
    },
  },
  {
    name: "Elite",
    tagline: "All-access",
    monthly: 119,
    annual: 1190,
    highlight: false,
    features: {
      "Open Gym Access": true,
      "Locker & Towel Service": true,
      "All Group Classes": true,
      "Personal Trainer Sessions": "Unlimited",
      "Custom Diet Plan": true,
      "Recovery Suite (Sauna/Steam)": true,
      "Advanced Body Tracking": true,
      "Priority VIP Support": true,
      "Guest Passes / month": "Unlimited",
    },
  },
] as const;

export type Plan = (typeof plans)[number];

export const programs = [
  { name: "Weight Loss", duration: "12 weeks", difficulty: "Beginner", benefits: "Lose 8–15kg with sustainable habits." },
  { name: "Muscle Building", duration: "16 weeks", difficulty: "Intermediate", benefits: "Add lean mass with structured hypertrophy." },
  { name: "Strength", duration: "10 weeks", difficulty: "Intermediate", benefits: "Add 30–50kg to your big three lifts." },
  { name: "Body Transformation", duration: "20 weeks", difficulty: "All Levels", benefits: "Total recomposition — fat down, muscle up." },
  { name: "Powerlifting", duration: "12 weeks", difficulty: "Advanced", benefits: "Peak for your first meet with confidence." },
  { name: "Functional Fitness", duration: "8 weeks", difficulty: "All Levels", benefits: "Move better in life, sport and recovery." },
];

export const transformations = [
  {
    name: "Daniel R.",
    delta: "Lost 22 kg in 6 months",
    story: "Stopped chasing crash diets. Followed Marcus's program and dialled in nutrition with Lena.",
    before: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=70",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Priya K.",
    delta: "Gained 6 kg lean mass",
    story: "Trained 4×/week with Aria. Squat went from 40kg to 95kg in under a year.",
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=70",
    after: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Jordan M.",
    delta: "Deadlift PR: 220 kg",
    story: "Started barely pulling 100kg. Kenji's mobility work unlocked the hinge.",
    before: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=70",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=70",
  },
];

export const testimonials = [
  { name: "Sasha M.", rating: 5, photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=70", review: "Titan changed my relationship with training. The coaches actually listen — and the equipment is unreal." },
  { name: "Ravi P.", rating: 5, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70", review: "Best gym I've trained in across three cities. Hit my first 180kg squat here." },
  { name: "Mei L.", rating: 5, photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=70", review: "The yoga studio is a sanctuary. Kenji's classes are worth the membership alone." },
  { name: "Tomás G.", rating: 4, photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=70", review: "Clean, welcoming, never overcrowded. Lena's meal plan finally clicked for me." },
  { name: "Yara B.", rating: 5, photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=70", review: "Going from couch to my first 10K — Aria's run club is pure gold." },
];

export const faqs = [
  { q: "Do I need to book classes in advance?", a: "Members can book classes up to 7 days ahead through the app. Walk-ins are welcome if a spot is open." },
  { q: "Is there a joining fee?", a: "No. Monthly memberships are commitment-free, and annual plans save you two months." },
  { q: "Can I freeze my membership?", a: "Yes — Premium and Elite members can freeze up to 4 weeks per year at no cost." },
  { q: "Do you offer trial sessions?", a: "Absolutely. Every new member gets a complimentary 1-day pass plus a 30-minute consult with a coach." },
  { q: "What are the opening hours?", a: "Mon–Fri 05:00–23:00, Sat–Sun 07:00–21:00. Elite members get 24/7 access." },
  { q: "Is there parking on site?", a: "Two levels of underground parking, free for all members during their session." },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#trainers", label: "Trainers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#membership", label: "Membership" },
  { href: "#contact", label: "Contact" },
];
