"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
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
import { Plane, Users, Calendar, Award, Mail, MapPin, ChevronRight, Phone, Instagram, Linkedin } from "lucide-react";

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
const sectionVariants: Variants = {
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

// Add a new data array for blog posts. You can add more as needed.
const blogPosts = [
  {
    title: "The Quiet Revolution",
    blurb: "How enterprises are silently transforming their digital infrastructure.",
    image: "/aeoluscover.png",
  },
  {
    title: "Engineering the Future of Flight",
    blurb: "Our journey in designing and building autonomous aerial systems.",
    image: "/aeoluscover.png",
  },
  {
    title: "A Glimpse into our Workshop",
    blurb: "Behind the scenes of our latest project, from concept to flight.",
    image: "/aeoluscover.png",
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
    { id: "blogs", label: "Blogs" },
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
            <img
             src="/AeolsuLogo-removebg-preview.png" // Assuming logo.png is in your public folder
             alt="AEOLUS logo"
             className={`h-15 w-30 ${accentColor} object-contain`} // Use the same size and color classes
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg ${textColor} font-display`}>Aerial Robotics Club, BITS Pilani</span>
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
        <section id="home" className="relative h-screen min-h-[700px] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/aeoluscover.png')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl tracking-tight text-shadow">
                <span className={accentColor}>
                  Build. Fly. Crash.
                </span>
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

        {/* --- Blogs Section --- */}
        <Section id="blogs">
          <div className="text-center">
            <h2 className={`font-display text-3xl font-bold ${textColor}`}>From Our Blog</h2>
            <p className={`mt-2 max-w-3xl mx-auto ${mutedTextColor}`}>
              Dive deep into our technical insights, project spotlights, and team stories.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.title} className={projectCardClasses}>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                    <CardTitle className={`font-display text-lg ${textColor}`}>
                      {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className={`text-sm ${mutedTextColor}`}>
                    {post.blurb}
                   </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a href="/blogs">
              <Button className={primaryButtonClasses}>See All Blogs</Button>
            </a>
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
              <p className={`text-sm ${mutedTextColor} transition-colors duration-300 group-hover:text-slate-300`}>+91 98XXX XXXXX</p>
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
      {/* --- Footer --- */}
<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
  <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
      {/* Club Info & Socials */}
      <div className="md:col-span-1">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/AeolsuLogo-removebg-preview.png" // Your logo path
            alt="AEOLUS logo"
            className={`h-10 w-auto object-contain`} // Adjusted size for footer logo
          />
          {/* You might want to remove "Aerial Robotics Club, BITS Pilani" here if the logo itself implies it, or keep it concise */}
          {/* <span className={`font-bold text-xl ${textColor} font-display`}>AEOLUS</span> */}
        </a>
        <p className={`mt-4 text-sm ${mutedTextColor} max-w-xs`}>
          The premier aerial robotics club of BITS Pilani, Hyderabad Campus. Dedicated to innovation and excellence in UAV technology.
        </p>
        <div className="mt-6 flex gap-4">
          {/* Social Media Icons */}
          <a href="#" className={`text-slate-500 hover:${accentColor} transition-colors`}>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className={`text-slate-500 hover:${accentColor} transition-colors`}>
            <Linkedin className="h-6 w-6" />
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-8">
        {/* Column 1: Club (formerly Product) */}
        <div>
          <h3 className={`text-sm font-semibold ${textColor} mb-4`}>Club</h3>
          <ul className="space-y-3">
            <li><a href="#about" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>About Us</a></li>
            <li><a href="#projects" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Projects</a></li>
            <li><a href="#join" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Join Us</a></li>
            <li><a href="#blogs" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Blogs</a></li>
          </ul>
        </div>

        {/* Column 2: About (formerly Company) */}
        <div>
          <h3 className={`text-sm font-semibold ${textColor} mb-4`}>About</h3>
          <ul className="space-y-3">
            <li><a href="#team" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Our Team</a></li> {/* You might need to add a #team section */}
            <li><a href="#mission" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Our Mission</a></li> {/* You might need to add a #mission section */}
            <li><a href="/alumni" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Alumni</a></li> {/* Link to a new alumni page */}
            <li><a href="/careers" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Careers</a></li> {/* If you have opportunities */}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className={`text-sm font-semibold ${textColor} mb-4`}>Resources</h3>
          <ul className="space-y-3">
            <li><a href="/documentation" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Documentation</a></li>
            <li><a href="#contact" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Support</a></li>
            <li><a href="/privacy" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Privacy Policy</a></li>
            <li><a href="/terms" className={`text-sm ${mutedTextColor} hover:${accentColor} transition-colors`}>Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Copyright and Policy Links */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-8">
      <div className="text-sm text-slate-500 order-2 md:order-1 mt-4 md:mt-0">
        &copy; {year} Aeolus — BITS Pilani, Hyderabad Campus. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm order-1 md:order-2">
        <a href="/refund" className={`text-slate-400 hover:${accentColor}`}>Refund Policy</a> {/* Adjust if not applicable */}
        <a href="/privacy" className={`text-slate-400 hover:${accentColor}`}>Privacy Policy</a>
        <a href="/terms" className={`text-slate-400 hover:${accentColor}`}>Terms of Service</a>
        <a href="/cookie" className={`text-slate-400 hover:${accentColor}`}>Cookie Policy</a> {/* Adjust if not applicable */}
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}


