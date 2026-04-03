"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Mail,
  Linkedin as LinkedinIcon, // Alias the icon
  Github as GithubIcon,     // Alias the icon
  Plus,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight
} from "lucide-react";

// Using your uploaded UI components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- Google Font Import (Matching your page.tsx) ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    
    .font-display { font-family: 'Orbitron', sans-serif; }
    .font-body { font-family: 'Exo 2', sans-serif; }
  `}</style>
);

// --- Team Data Structure ---
const teamMembers = [
  {
    id: "1",
    name: "Bala Phanikar Challa",
    role: "President",
    dept: "Nucleus",
    image: "/bala_phanikar_challa.png", // Replace with actual paths in /public/team/
    bio: "Leading the next generation of aerial innovators at BITS Hyderabad.",
    socials: { linkedin: "https://www.linkedin.com/in/bala-phanikar-challa/", github: "#", email: "f20230424@hyderabad.bits-pilani.ac.in" }
  },
  {
    id: "2",
    name: "Rehaan Tahiliani",
    role: "Vice-President",
    dept: "Nucleus",
    image: "/rehaan.png",
    bio: "Focusing on CFD simulations and structural optimization for heavy-lift UAVs.",
    socials: { linkedin: "https://www.linkedin.com/in/rehaan-tahiliani-29111630b/", email: "ishani@example.com" }
  },
  {
    id: "3",
    name: "Valluru Ishaan",
    role: "Treasurer",
    dept: "Nucleus",
    image: "/ishaan.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/valluru-ishaan-87b920392/" }
  },
  {
    id: "4",
    name: "Ananya Kulkarni",
    role: "Managment Lead",
    dept: "Nucleus",
    image: "/ananyakulkarni.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "5",
    name: "Aditya Sinha",
    role: "",
    dept: "Mechanical",
    image: "/aditya_sinha.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/aditya-sinha-2a861930b/" }
  },
  {
    id: "6",
    name: "Pranavi Shrimali",
    role: "",
    dept: "Mechanical",
    image: "/pranavi_shrimali.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/pranavi-shrimali-5b0b81349/" }
  },
  {
    id: "7",
    name: "Pavan Agrawal",
    role: "",
    dept: "Avionics",
    image: "/pavan_agrawal.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/pavan-agrawal-833567311/" }
  },
  {
    id: "8",
    name: "Srijan Nadimpalli",
    role: "",
    dept: "Mechanical",
    image: "/srijan.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/srijan-nadimpalli-1734203ab/" }
  },
  {
    id: "9",
    name: "Lavanya Agarwal",
    role: "",
    dept: "Mechanical",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "10",
    name: "Kaveesh Chaudhari",
    role: "",
    dept: "Mechanical",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "11",
    name: "Rishit Gotecha",
    role: "",
    dept: "Avionics",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "12",
    name: "Yarnav Tanwar",
    role: "",
    dept: "Avionics",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "13",
    name: "Aayush Bhore",
    role: "",
    dept: "Avionics",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "14",
    name: "Srujan Mishrikotkar",
    role: "",
    dept: "Avionics",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  }
];

// --- Floating Header (Defined locally to avoid "Module Not Found") ---
const FloatingHeader = ({ onCreateNew }: { onCreateNew: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const navItems = [
      { id: "about", label: "About Us" },
      { id: "projects", label: "Projects" },
      { id: "blogs", label: "Blogs" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-1 z-20 mx-auto px-4 max-w-7xl">
            <motion.div 
                className="rounded-full bg-slate-900/90 border border-gray-700/50 backdrop-blur-lg shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="flex items-center justify-between h-14 px-4 sm:px-6 relative space-x-3">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/AeolsuLogo-removebg-preview.png" alt="Logo" className="h-10 w-auto object-contain" />
                        <div className="flex flex-col leading-tight hidden sm:flex">
                            <span className="font-bold text-sm text-slate-100 font-display">Aeolus</span>
                            <span className="text-xs text-slate-400 font-body">BITS Hyderabad</span>
                        </div>
                    </Link>
                    
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((n) => (
                            <a key={n.id} href={`/#${n.id}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                                {n.label}
                            </a>
                        ))}
                        <Button onClick={onCreateNew} size="sm" className="bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-cyan-500/30">
                            <Plus className="h-4 w-4 mr-2" /> Join Us
                        </Button>
                    </nav>

                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </motion.div>
        </header>
    );
};

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState("All");
  const router = useRouter();

  const departments = ["All", "Nucleus", "Mechanical", "Avionics"];
  const filteredTeam = teamMembers.filter(m => activeDept === "All" || m.dept === activeDept);

  // Styling constants matching your blogs page
  const textColor = "text-slate-100";
  const mutedTextColor = "text-slate-400";
  const accentColor = "text-cyan-400";
  const cardClasses = "bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 overflow-hidden group";

  return (
    <div className="min-h-screen bg-slate-900 font-body text-slate-300 antialiased">
      <Fonts />
      <FloatingHeader onCreateNew={() => router.push('/#join')} />

      <main className="mx-auto w-full max-w-6xl px-4 md:px-6 py-20">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => router.push('/')} className="text-gray-400 hover:text-cyan-400 p-0">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </div>

        <div className="mb-12 text-center md:text-left">
          <h1 className={`text-4xl font-bold tracking-tight ${textColor} font-display`}>
            Our <span className={accentColor}>Team</span>
          </h1>
          <p className="mt-2 text-lg text-slate-400">The minds engineering the future of flight at BITS Hyderabad.</p>
        </div>

        {/* Dept Filters */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center md:justify-start">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeDept === dept ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Card className={cardClasses}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  
                  <CardHeader className="relative -mt-12 bg-transparent">
                    <Badge className="bg-cyan-900/50 border-cyan-400/30 text-cyan-300 mb-2">{member.dept}</Badge>
                    <CardTitle className={`font-display text-xl ${textColor}`}>{member.name}</CardTitle>
                    <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                  </CardHeader>

                  <CardContent>
                    <p className={`text-sm ${mutedTextColor} mb-6`}>{member.bio}</p>
                    <div className="flex gap-4 border-t border-slate-700 pt-4">
                      {/* LinkedIn Link */}
                      {member.socials.linkedin && member.socials.linkedin !== "#" && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="h-5 w-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                        </a>
                      )}

                      {/* GitHub Link */}
                      {member.socials.github && member.socials.github !== "#" && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-5 w-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                        </a>
                      )}

                      {/* Email Link */}
                      {member.socials.email && (
                        <a href={`mailto:${member.socials.email}`}>
                          <Mail className="h-5 w-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus.
      </footer>
    </div>
  );
}