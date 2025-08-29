"use client";
import React from "react";
import { motion } from "framer-motion";
// Note: You'll need to install these dependencies if you haven't already
// npm install lucide-react framer-motion
// Also, the following are likely custom components from ShadCN UI or similar.
// This code assumes they are set up in your project.
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Plane, Users, Calendar, Award, Mail, MapPin, ChevronRight, Phone } from "lucide-react";

// --- Google Font Import ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    
    .font-display {
      font-family: 'Orbitron', sans-serif;
    }
    
    .font-body {
      font-family: 'Exo 2', sans-serif;
    }
  `}</style>
);

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- Main Section Component (with animation) ---
const Section = ({ id, children, className = "", hasSeparator = true }: { id: string, children: React.ReactNode, className?: string, hasSeparator?: boolean }) => (
  <motion.section
    id={id}
    className={`py-20 md:py-28 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
      {children}
      {hasSeparator && <hr className="mt-20 md:mt-28 border-slate-700" />}
    </div>
  </motion.section>
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
  const textColor = "text-slate-100";
  const mutedTextColor = "text-slate-400";
  const accentColor = "text-cyan-400";
  
  const heroPrimaryButtonClasses = "bg-fuchsia-500 text-white hover:bg-fuchsia-600 focus:ring-fuchsia-400 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-fuchsia-500/30";
  const heroSecondaryButtonClasses = "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-105";

  const primaryButtonClasses = `bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/30`;
  const projectCardClasses = "bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
  const formCardClasses = "bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 relative ring-1 ring-transparent hover:ring-cyan-500/50";

  const navItems = [
    { id: "about", label: "About Us" },
    { id: "projects", label: "Projects" },
    { id: "join", label: "Join Us" },
    { id: "contact", label: "Contact" },
  ];

  const Stat = ({ label, value, icon: Icon }: { label: string, value: string, icon: React.ElementType }) => (
    <div className="text-center">
      <Icon className={`mx-auto h-10 w-10 mb-2 ${accentColor}`} strokeWidth={1.5} />
      <div className={`text-3xl font-bold font-display ${textColor}`}>{value}</div>
      <div className={`text-sm ${mutedTextColor} font-body`}>{label}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 font-body text-slate-300 antialiased">
      <Fonts />
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/60 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <Plane className={`h-7 w-7 ${accentColor}`} />
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg ${textColor} font-display`}>AEOLUS</span>
              <span className="text-xs text-slate-500">Aerial Robotics Club, BITS Pilani</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`text-sm font-medium ${mutedTextColor} hover:${accentColor} transition-colors`}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="relative h-screen min-h-[700px] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://github.com/szyfrowac/aeolus.github.io/blob/main/public/D72_2524.jpg?raw=true')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl tracking-tight text-shadow">
                Build. Fly. Crash.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-200 text-shadow-sm">
                Aeolus is the premier aerial robotics club of BITS Pilani, Hyderabad, dedicated to excellence in unmanned aerial vehicle technology and innovation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#join"><Button size="lg" className={heroPrimaryButtonClasses}>Become a Member <ChevronRight className="ml-1 h-4 w-4" /></Button></a>
                <a href="#projects"><Button size="lg" className={heroSecondaryButtonClasses}>See Our Work</Button></a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- About Section --- */}
        <Section id="about">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working on robotics"
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/0f172a/38bdf8?text=Our+Workshop'; }}
              />
            </motion.div>
            <div className="md:col-span-3">
              <h2 className={`font-display text-3xl font-bold ${textColor}`}>Welcome to <span className={accentColor}>Aeolus</span></h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedTextColor}`}>
                Founded in 2019, Aeolus is a multidisciplinary student club focused on the research, design, and fabrication of unmanned aerial vehicles (UAVs). Our mission is to provide a platform for students to gain hands-on experience in aerospace engineering and robotics, fostering skills that bridge the gap between academic theory and real-world application.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <Stat label="Active Members" value="90+" icon={Users} />
                <Stat label="Founded" value="2019" icon={Calendar} />
                <Stat label="Competitions" value="4" icon={Award} />
                <Stat label="Projects" value="10+" icon={Plane} />
              </div>
            </div>
          </div>
        </Section>

        {/* --- Projects Section --- */}
        <Section id="projects">
          <div className="text-center">
            <h2 className={`font-display text-3xl font-bold ${textColor}`}>Our Fleet of Projects</h2>
            <p className={`mt-2 max-w-3xl mx-auto ${mutedTextColor}`}>
              Our members collaborate on a diverse range of projects, from competitive aircraft to cutting-edge research in autonomous systems.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className={projectCardClasses}>
                <CardHeader>
                  <CardTitle className={`font-display text-lg ${textColor}`}>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${mutedTextColor}`}>{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="border-cyan-400/30 bg-cyan-900/30 text-cyan-300 font-normal">{t}</Badge>
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
              <h2 className={`font-display text-3xl font-bold ${textColor}`}>Join Our Squadron</h2>
              <p className={`mt-4 text-base leading-relaxed ${mutedTextColor}`}>
                We are looking for passionate individuals to join our team. Whether you&apos;re an aspiring engineer, a programmer, or a manager, there&apos;s a place for you at Aeolus.
              </p>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-700">
                    <AccordionTrigger className={`font-medium text-left ${textColor} hover:no-underline hover:${accentColor}`}>{f.q}</AccordionTrigger>
                    <AccordionContent className={`text-sm ${mutedTextColor}`}>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <Card className={formCardClasses}>
              <CardHeader>
                <CardTitle className={`font-display text-lg ${textColor}`}>Application Form</CardTitle>
                <p className={`text-sm ${mutedTextColor}`}>Fill out the form to express your interest. We&apos;ll contact you with the next steps.</p>
              </CardHeader>
              <CardContent>
                <form action="#" method="POST" className="grid gap-4">
                  <Input name="name" placeholder="Full Name" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500" />
                  <Input name="email" type="email" placeholder="BITS Email" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500" />
                  <Input name="discipline" placeholder="Discipline (e.g., ECE, Mech)" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500" />
                  <Textarea name="interest" placeholder="Briefly describe your interest..." rows={4} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500" />
                  <Button type="submit" className={`${primaryButtonClasses} w-full`}>Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>
        
        {/* --- Contact Section --- */}
        <Section id="contact" hasSeparator={false} className="bg-slate-900">
           <div className="relative text-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
            <h2 className={`font-display text-3xl font-bold ${textColor}`}>Get in Touch</h2>
            <p className={`mt-2 max-w-3xl mx-auto ${mutedTextColor}`}>
              For sponsorships, collaborations, or any other inquiries, please reach out to us.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`group text-center p-6 rounded-lg ${projectCardClasses}`}>
              <Mail className={`mx-auto h-8 w-8 mb-4 ${accentColor} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]`} />
              <h3 className={`font-bold ${textColor} mb-1 transition-colors duration-300 group-hover:text-white`}>Email Us</h3>
              <a href="mailto:aeolus@hyderabad.bits-pilani.ac.in" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors duration-300 group-hover:text-cyan-300`}>aeolus@hyderabad.bits-pilani.ac.in</a>
            </div>
            <div className={`group text-center p-6 rounded-lg ${projectCardClasses}`}>
              <Phone className={`mx-auto h-8 w-8 mb-4 ${accentColor} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]`} />
              <h3 className={`font-bold ${textColor} mb-1 transition-colors duration-300 group-hover:text-white`}>Call Us</h3>
              <p className={`text-sm ${mutedTextColor} transition-colors duration-300 group-hover:text-slate-300`}>+91 90000 00000</p>
            </div>
            <div className={`group text-center p-6 rounded-lg ${projectCardClasses}`}>
              <MapPin className={`mx-auto h-8 w-8 mb-4 ${accentColor} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]`} />
              <h3 className={`font-bold ${textColor} mb-1 transition-colors duration-300 group-hover:text-white`}>Find Us</h3>
              <p className={`text-sm ${mutedTextColor} transition-colors duration-300 group-hover:text-slate-300`}>F-Block Workshop, BITS Pilani Hyderabad</p>
            </div>
          </div>
        </Section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="text-sm text-slate-500">
            &copy; {year} Aeolus — BITS Pilani, Hyderabad Campus
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className={`text-slate-400 hover:${accentColor}`}>About</a>
            <a href="#projects" className={`text-slate-400 hover:${accentColor}`}>Projects</a>
            <a href="#join" className={`text-slate-400 hover:${accentColor}`}>Join</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


