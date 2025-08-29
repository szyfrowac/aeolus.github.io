"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Rocket, Drone, Cpu, Cog, Calendar, Users2, Star, Mail, MapPin, ChevronRight, Github, Linkedin, Instagram, Phone, Download, Sun, Moon, ShieldCheck, NotebookText } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

// --- Helper components ---

// Define the types for the Section component's props
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string; // The '?' makes it optional
}

const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

// Define types for the Stat component's props
interface StatProps {
  label: string;
  value: string;
  icon: React.ElementType; // This is the type for a component (like an icon)
}

const Stat = ({ label, value, icon: Icon }: StatProps) => (
  <div className="flex items-center gap-3">
    <div className="rounded-2xl border p-3"><Icon className="h-5 w-5" /></div>
    <div>
      <div className="text-2xl font-semibold leading-none">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  </div>
);

// --- Data ---
const growth = [
  { year: "2021", members: 18 },
  { year: "2022", members: 36 },
  { year: "2023", members: 54 },
  { year: "2024", members: 72 },
  { year: "2025", members: 96 },
];

const projects = [
  {
    title: "Autonomous Drone – SAE AeroTHON 2025",
    blurb: "PX4/MAVSDK stack with autonomous mission logic, payload drop, and thermal+RGB fusion for disaster detection.",
    tags: ["PX4", "MAVSDK", "YOLO", "Thermal-RGB"],
  },
  {
    title: "URC Rover – Visual Odometry",
    blurb: "Robust VO pipeline for rough terrain with feature tracking and outlier rejection.",
    tags: ["OpenCV", "VO", "Robotics"],
  },
  {
    title: "Drone Racing League",
    blurb: "High-speed racing and tuning; PID, frame optimization, and safety SOPs.",
    tags: ["Tuning", "PID", "SOPs"],
  },
  {
    title: "FFT-on-FPGA for Edge Perception",
    blurb: "8-point radix-2 pipeline with shared FP IP, stage-wise FSM control.",
    tags: ["FPGA", "Verilog", "DSP"],
  },
];

const faq = [
  {
    q: "Who can join Aeolus?",
    a: "Any BITS Pilani–Hyderabad student passionate about drones, robotics, or systems engineering—across all disciplines."
  },
  {
    q: "Do I need prior experience?",
    a: "No. We run bootcamps in avionics (CV, path planning), mechanical (CAD, CFD, manufacturing), and ops (web, content, sponsorship)."
  },
  {
    q: "How do teams work?",
    a: "Teams are cross-functional: Avionics, Mechanical, and Management (sponsorship, web dev, design, content). You can rotate in your first semester."
  },
  {
    q: "How do I get sponsorship details?",
    a: "Download our pitch deck and PDR highlights from the Sponsors section below or email us."
  },
];

// --- Main ---
export default function AeolusBPHC() {
  const [dark, setDark] = useState(false);
  const year = new Date().getFullYear();

  // toggle dark on <html> for tailwind preview
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "teams", label: "Teams" },
    { id: "projects", label: "Projects" },
    { id: "events", label: "Events" },
    { id: "sponsors", label: "Sponsors" },
    { id: "join", label: "Join Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border">
              <Drone className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-muted-foreground">BITS Pilani, Hyderabad</span>
              <span className="text-lg font-semibold">Aeolus — Aerial Robotics</span>
            </div>
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="rounded-full px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                {n.label}
              </a>
            ))}
            <Button onClick={() => setDark((d) => !d)} variant="outline" size="icon" className="ml-2" aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Pill><ShieldCheck className="mr-1 h-3 w-3" /> National Top-10 PDR</Pill>
              <Pill><Star className="mr-1 h-3 w-3" /> Drone Racing League</Pill>
              <Pill><Cpu className="mr-1 h-3 w-3" /> CV • Path Planning</Pill>
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Building high‑performance autonomous drones & robots
            </h1>
            <p className="mt-4 max-w-prose text-lg text-muted-foreground">
              We’re Aeolus, the aerial robotics club at BITS Pilani—Hyderabad. From autonomous mission stacks to race-tuned quads, we design, build, and compete.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join"><Button size="lg">Join the Team <ChevronRight className="ml-1 h-4 w-4" /></Button></a>
              <a href="#sponsors"><Button size="lg" variant="outline">Sponsor Us</Button></a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <Stat label="Active Members" value="90+" icon={Users2} />
              <Stat label="Competitions" value="Aerothon, URC" icon={Calendar} />
              <Stat label="Domains" value="Avionics, Mech, Ops" icon={Cog} />
              <Stat label="Founded" value="2019" icon={Rocket} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl">Club Snapshot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growth} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopOpacity={0.4} />
                          <stop offset="95%" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" tickLine={false} axisLine={false} />
                      <YAxis allowDecimals={false} width={28} tickLine={false} axisLine={false} />
                      <Tooltip cursor={{ opacity: 0.1 }} />
                      <Area type="monotone" dataKey="members" strokeWidth={2} fillOpacity={1} fill="url(#g)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">Membership growth over the years.</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">About Aeolus</h2>
            <p className="mt-4 text-muted-foreground">
              Aeolus is BPHC’s hub for aerial and field robotics. We compete nationally and run campus-wide Drone Racing Leagues. Our technical focus spans avionics—computer vision, perception, controls, and path planning—and mechanical—material selection, frame design, CFD, and manufacturing. We also operate a Management vertical for sponsorships, web, design, and content.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">What we build</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Autonomous drones (PX4/MAVSDK), disaster-detection payloads (YOLO + thermal), race quads, rover subsystems, and custom tools (e.g., FPGA DSP, test benches).</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">How we work</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Project pods, code reviews, flight-test days, and design-for-manufacture. Safety-first and documentation-driven.</CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Card className="h-full">
              <CardHeader className="pb-2"><CardTitle className="text-base">Open Roles</CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between"><span>Avionics – CV/Perception</span><Badge>Hiring</Badge></div>
                <div className="flex items-center justify-between"><span>Avionics – Planning/Controls</span><Badge>Hiring</Badge></div>
                <div className="flex items-center justify-between"><span>Mechanical – CAD/CFD</span><Badge>Hiring</Badge></div>
                <div className="flex items-center justify-between"><span>Ops – Sponsorship & Web</span><Badge>Hiring</Badge></div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-2 w-full" variant="secondary">View Skill Tracks</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Skill Tracks</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 text-sm text-muted-foreground">
                      <div>
                        <div className="font-medium text-foreground">Avionics</div>
                        <ul className="ml-4 list-disc">
                          <li>Vision: OpenCV, YOLOv8, tracking, thermal fusion</li>
                          <li>Autonomy: MAVSDK, PX4, mission logic, failsafes</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Mechanical</div>
                        <ul className="ml-4 list-disc">
                          <li>Frame design, material selection, CFD/FEA</li>
                          <li>Manufacturing and test jigs</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Operations</div>
                        <ul className="ml-4 list-disc">
                          <li>Sponsorships, outreach, web/content</li>
                          <li>Event ops & documentation</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Teams */}
      <Section id="teams">
        <h2 className="text-3xl font-bold">Teams</h2>
        <Tabs defaultValue="avionics" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="avionics">Avionics</TabsTrigger>
            <TabsTrigger value="mechanical">Mechanical</TabsTrigger>
            <TabsTrigger value="ops">Management</TabsTrigger>
          </TabsList>
          <TabsContent value="avionics" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Computer Vision</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Object detection (YOLO), tracking, optical flow, and thermal-RGB fusion for disaster detection. Integration on PX4 via MAVSDK.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Autonomy & Controls</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Mission planning, waypoint logic, state estimation, precision landing, and robust failsafes.</CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="mechanical" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Frame & Materials</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Lightweight, stiff frames with serviceability in mind; material selection and fabrication workflows.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>CFD & FEA</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Aerodynamic optimization, thermal management, and structural integrity checks for reliability.</CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="ops" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Sponsorships & Outreach</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Partner engagement, proposals, and brand collaborations to sustain R&D and competitions.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Web, Design, Content</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Club website, social media presence, technical documentation, and event coverage.</CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge variant="secondary">Ongoing</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Events */}
      <Section id="events">
        <h2 className="text-3xl font-bold">Events</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { title: "Drone Racing League", desc: "Semestral time trials and finals with safety SOPs.", when: "Every Semester" },
            { title: "OpenCV for Drones Workshop", desc: "Two-day bootcamp: detection, tracking, obstacle avoidance.", when: "Twice a year" },
            { title: "Inductions", desc: "Recruitment across Avionics, Mechanical, and Management.", when: "Start of Sem" },
          ].map((e) => (
            <Card key={e.title}>
              <CardHeader>
                <CardTitle className="text-lg">{e.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
                <div className="mt-3 flex items-center gap-2 text-sm"><Calendar className="h-4 w-4" />{e.when}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sponsors */}
      <Section id="sponsors">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Sponsors & Partners</h2>
          <div className="flex gap-2">
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Pitch Deck (PDF)</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> PDR Highlights</Button>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground">We collaborate with industry leaders for components, tooling, software, and mentorship.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["IdeaForge", "Robu.in", "PX4", "NVIDIA", "STMicro", "AMD", "PCBPower", "SolidWorks"].map((name) => (
            <div key={name} className="flex h-24 items-center justify-center rounded-2xl border text-sm font-medium">
              {name}
            </div>
          ))}
        </div>
        <Card className="mt-6">
          <CardHeader><CardTitle>Why sponsor Aeolus?</CardTitle></CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="font-medium">Campus Reach</div>
              <div className="text-sm text-muted-foreground">Visibility across 5k+ students and national events.</div>
            </div>
            <div>
              <div className="font-medium">Talent Pipeline</div>
              <div className="text-sm text-muted-foreground">Hands-on engineers with competition-proven skills.</div>
            </div>
            <div>
              <div className="font-medium">Technical Stories</div>
              <div className="text-sm text-muted-foreground">Co-branded case studies and workshops.</div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Join Us */}
      <Section id="join">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Join Aeolus</h2>
            <p className="mt-4 text-muted-foreground">We recruit across avionics, mechanical, and management. Complete the form and we’ll get back to you after a quick screening task.</p>
            <Accordion type="single" collapsible className="mt-4">
              {faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <Card>
            <CardHeader><CardTitle>Application Form</CardTitle></CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/your-id" method="POST" className="grid gap-3">
                <Input name="name" placeholder="Full name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="roll" placeholder="BITS ID" />
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <label className="col-span-3">Preferred vertical</label>
                  <div className="col-span-3 flex flex-wrap gap-2">
                    {[
                      "Avionics – CV/Perception",
                      "Avionics – Planning/Controls",
                      "Mechanical – CAD/CFD",
                      "Operations – Sponsorship/Web"
                    ].map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-2 rounded-full border px-3 py-2">
                        <input type="checkbox" name="vertical" value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <Textarea name="why" placeholder="Why Aeolus? Tell us in 3–5 lines." rows={4} />
                <Button type="submit">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4 text-muted-foreground">Have a collaboration in mind or want to host a workshop? Reach out.</p>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> aeolus@hyderabad.bits-pilani.ac.in</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-90000-00000</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> F-Block, BITS Pilani Hyderabad Campus</div>
              <div className="mt-2 flex gap-3">
                <a className="inline-flex items-center gap-1 text-sm underline" href="#"><Instagram className="h-4 w-4" /> Instagram</a>
                <a className="inline-flex items-center gap-1 text-sm underline" href="#"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a className="inline-flex items-center gap-1 text-sm underline" href="#"><Github className="h-4 w-4" /> GitHub</a>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader><CardTitle>Send us a message</CardTitle></CardHeader>
            <CardContent>
              <form className="grid gap-3" action="mailto:aeolus@hyderabad.bits-pilani.ac.in" method="post">
                <Input name="subject" placeholder="Subject" />
                <Textarea name="message" placeholder="Your message" rows={5} />
                <Button type="submit">Send Email</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="text-sm text-muted-foreground">© {year} Aeolus — BITS Pilani, Hyderabad Campus</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#sponsors" className="hover:underline">Sponsors</a>
            <a href="#join" className="hover:underline">Join</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

