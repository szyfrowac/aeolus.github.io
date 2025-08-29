"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Plane, Users, Calendar, Award, Mail, MapPin, ChevronRight, Phone } from "lucide-react";

// --- Main Section Component ---
const Section = ({ id, children, className = "", hasSeparator = true }: { id: string, children: React.ReactNode, className?: string, hasSeparator?: boolean }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
      {children}
      {hasSeparator && <hr className="mt-20 md:mt-28 border-gray-200" />}
    </div>
  </section>
);

// --- Data ---
const projects = [
  {
    title: "SAE Aero Design Competition",
    blurb: "Designing and fabricating a heavy-lift, remote-controlled aircraft to compete against universities nationwide, focusing on aerodynamics, structural integrity, and payload optimization.",
    tags: ["Aerodynamics", "Fabrication", "Competition"],
  },
  {
    title: "Autonomous Drone for Delivery",
    blurb: "Developing a complete software and hardware stack for autonomous navigation and package delivery, utilizing PX4, ROS, and computer vision for obstacle avoidance.",
    tags: ["PX4/ROS", "Autonomy", "Computer Vision"],
  },
  {
    title: "FPV Drone Racing Team",
    blurb: "Building and tuning high-performance racing drones for inter-collegiate competitions, with a focus on PID tuning, frame optimization, and low-latency video systems.",
    tags: ["FPV Racing", "PID Tuning", "Hardware"],
  },
  {
    title: "UAV-based Environmental Monitoring",
    blurb: "A research-oriented project using drones equipped with sensors to collect atmospheric and agricultural data, in collaboration with university research departments.",
    tags: ["Research", "Sensor Integration", "Data Analysis"],
  },
];

const faq = [
  {
    q: "Who is eligible to join Aeolus?",
    a: "Any current student of BITS Pilani, Hyderabad Campus, from any discipline or year of study, is welcome to apply. Passion for aviation and robotics is the only prerequisite.",
  },
  {
    q: "Do I need any prior experience in robotics or aviation?",
    a: "No. We welcome beginners and provide comprehensive training and workshops through our various sub-teams. We value enthusiasm and a willingness to learn above all.",
  },
  {
    q: "What is the time commitment?",
    a: "The time commitment varies depending on your role and the project cycle. Members typically dedicate 5-10 hours per week, with more during competition seasons.",
  },
  {
    q: "How does the recruitment process work?",
    a: "We conduct a recruitment drive at the beginning of each academic year, which includes an application form followed by a short technical and personal interview.",
  },
];

// --- Main Component ---
export default function AeolusBPHC() {
  const year = new Date().getFullYear();

  // --- Theme Style Constants ---
  const textColor = "text-navy-900";
  const mutedTextColor = "text-navy-700";
  const primaryButtonClasses = "bg-crimson-600 text-white hover:bg-crimson-700 transition-colors shadow-sm";
  const secondaryButtonClasses = "bg-white text-crimson-600 border border-crimson-200 hover:bg-crimson-50 transition-colors";
  const cardClasses = "bg-white border border-gray-200 rounded-lg shadow-sm";

  const navItems = [
    { id: "about", label: "About Us" },
    { id: "projects", label: "Projects" },
    { id: "join", label: "Join Us" },
    { id: "contact", label: "Contact" },
  ];

  const Stat = ({ label, value, icon: Icon }: { label: string, value: string, icon: React.ElementType }) => (
    <div className="text-center">
      <Icon className={`mx-auto h-10 w-10 mb-2 ${textColor}`} strokeWidth={1.5} />
      <div className={`text-3xl font-bold font-serif ${textColor}`}>{value}</div>
      <div className={`text-sm ${mutedTextColor}`}>{label}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-navy-800 antialiased">
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <Plane className="h-7 w-7 text-crimson-600" />
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg ${textColor}`}>AEOLUS</span>
              <span className="text-xs text-gray-500">Aerial Robotics Club, BITS Pilani</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`text-sm font-medium ${mutedTextColor} hover:text-crimson-600 transition-colors`}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="relative h-[80vh] min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1433162653522-3827b686e098?q=80&w=2070&auto=format&fit=crop')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
                Design. Build. Fly.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-200">
                Aeolus is the premier aerial robotics club of BITS Pilani, Hyderabad, dedicated to excellence in unmanned aerial vehicle technology and innovation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#join"><Button size="lg" className={primaryButtonClasses}>Become a Member <ChevronRight className="ml-1 h-4 w-4" /></Button></a>
                <a href="#projects"><Button size="lg" className={secondaryButtonClasses}>See Our Work</Button></a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- About Section --- */}
        <Section id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`font-serif text-3xl font-bold ${textColor}`}>Welcome to Aeolus</h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedTextColor}`}>
                Founded in 2019, Aeolus is a multidisciplinary student club focused on the research, design, and fabrication of unmanned aerial vehicles (UAVs). Our mission is to provide a platform for students to gain hands-on experience in aerospace engineering and robotics, fostering skills that bridge the gap between academic theory and real-world application.
                <br/><br/>
                We participate in prestigious national and international competitions, pushing the boundaries of what student-led teams can achieve in aerial robotics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Stat label="Active Members" value="90+" icon={Users} />
              <Stat label="Founded" value="2019" icon={Calendar} />
              <Stat label="Competitions" value="4" icon={Award} />
              <Stat label="Projects" value="10+" icon={Plane} />
            </div>
          </div>
        </Section>

        {/* --- Projects Section --- */}
        <Section id="projects">
          <div className="text-center">
            <h2 className={`font-serif text-3xl font-bold ${textColor}`}>Our Fleet of Projects</h2>
            <p className={`mt-2 max-w-3xl mx-auto ${mutedTextColor}`}>
              Our members collaborate on a diverse range of projects, from competitive aircraft to cutting-edge research in autonomous systems.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className={cardClasses}>
                <CardHeader>
                  <CardTitle className={`font-serif text-lg ${textColor}`}>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${mutedTextColor}`}>{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="border-crimson-200 bg-crimson-50 text-crimson-700 font-normal">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        
        {/* --- Join Us Section --- */}
        <Section id="join">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className={`font-serif text-3xl font-bold ${textColor}`}>Join Our Squadron</h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedTextColor}`}>
                We are looking for passionate individuals to join our team. Whether you&apos;re an aspiring engineer, a programmer, or a manager, there&apos;s a place for you at Aeolus.
              </p>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                    <AccordionTrigger className={`font-medium text-left ${textColor} hover:no-underline`}>{f.q}</AccordionTrigger>
                    <AccordionContent className={`text-sm ${mutedTextColor}`}>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <Card className={cardClasses}>
              <CardHeader>
                <CardTitle className={`font-serif text-lg ${textColor}`}>Application Form</CardTitle>
                <p className={`text-sm ${mutedTextColor}`}>Fill out the form to express your interest. We&apos;ll contact you with the next steps.</p>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/your-id" method="POST" className="grid gap-4">
                  <Input name="name" placeholder="Full Name" required className="border-gray-300" />
                  <Input name="email" type="email" placeholder="BITS Email" required className="border-gray-300" />
                  <Input name="discipline" placeholder="Discipline (e.g., ECE, Mech)" className="border-gray-300" />
                  <Textarea name="interest" placeholder="Briefly describe your interest in aerial robotics..." rows={4} className="border-gray-300" />
                  <Button type="submit" className={`${primaryButtonClasses} w-full`}>Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>
        
        {/* --- Contact Section --- */}
        <Section id="contact" hasSeparator={false} className="bg-gray-50">
           <div className="text-center">
            <h2 className={`font-serif text-3xl font-bold ${textColor}`}>Get in Touch</h2>
            <p className={`mt-2 max-w-3xl mx-auto ${mutedTextColor}`}>
              For sponsorships, collaborations, or any other inquiries, please reach out to us.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`p-6 rounded-lg ${cardClasses}`}>
              <Mail className={`mx-auto h-8 w-8 mb-2 ${textColor}`} />
              <h3 className={`font-bold ${textColor}`}>Email Us</h3>
              <a href="mailto:aeolus@hyderabad.bits-pilani.ac.in" className={`text-sm ${mutedTextColor} hover:text-crimson-600`}>aeolus@hyderabad.bits-pilani.ac.in</a>
            </div>
            <div className={`p-6 rounded-lg ${cardClasses}`}>
              <Phone className={`mx-auto h-8 w-8 mb-2 ${textColor}`} />
              <h3 className={`font-bold ${textColor}`}>Call Us</h3>
              <p className={`text-sm ${mutedTextColor}`}>+91 90000 00000</p>
            </div>
            <div className={`p-6 rounded-lg ${cardClasses}`}>
              <MapPin className={`mx-auto h-8 w-8 mb-2 ${textColor}`} />
              <h3 className={`font-bold ${textColor}`}>Find Us</h3>
              <p className={`text-sm ${mutedTextColor}`}>F-Block Workshop, BITS Pilani Hyderabad</p>
            </div>
          </div>
        </Section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {year} Aeolus — BITS Pilani, Hyderabad Campus
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-crimson-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-crimson-600">Projects</a>
            <a href="#join" className="text-gray-600 hover:text-crimson-600">Join</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


