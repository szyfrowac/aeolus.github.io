"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
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
const AlumniMembers = [
  {
    id: "1",
    name: "Medha Nath",
    role: "President",
    dept: "2024",
    image: "/medha.png", // Replace with actual paths in /public/team/
    bio: "Leading the next generation of aerial innovators at BITS Hyderabad.",
    socials: { linkedin: "https://www.linkedin.com/in/bala-phanikar-challa/", github: "#", email: "f20230424@hyderabad.bits-pilani.ac.in" }
  },
  {
    id: "2",
    name: "Malhar Rajurkar",
    role: "Vice-President",
    dept: "2024",
    image: "/malhar.png",
    bio: "Focusing on CFD simulations and structural optimization for heavy-lift UAVs.",
    socials: { linkedin: "https://www.linkedin.com/in/rehaan-tahiliani-29111630b/", email: "ishani@example.com" }
  },
  {
    id: "3",
    name: "Bala Phanikar Challa",
    role: "Treasurer",
    dept: "2024",
    image: "/phanikar.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "4",
    name: "Aditya Ray Baruah",
    role: "Avionics Lead",
    dept: "2024",
    image: "/adiray.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "5",
    name: "Aryaman Agarwal",
    role: "Mechanical Lead",
    dept: "2024",
    image: "/aryaman.png",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "6",
    name: "Prayush Kansal",
    role: "President",
    dept: "2023",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "7",
    name: "Chaitanya Agarwal",
    role: "Vice President",
    dept: "2023",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "8",
    name: "Krishnendu Mathur",
    role: "Treasurer",
    dept: "2023",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "9",
    name: "Siddhartha Mishra",
    role: "Avionics Lead",
    dept: "2023",
    image: "/",
    bio: "Developing computer vision stacks for autonomous obstacle avoidance.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: "10",
    name: "JCS Krishna",
    role: "Mechanical Lead",
    dept: "2023",
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

export default function AlumniPage() {
  const [activeDept, setActiveDept] = useState("All");
  const router = useRouter();

  const departments = ["All", "2024", "2023", "2022", "2021", "2020"];
  const filteredAlumni = AlumniMembers.filter(m => activeDept === "All" || m.dept === activeDept);

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
            Our <span className={accentColor}>Alumni</span>
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
            {filteredAlumni.map((member) => (
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
                      {member.socials.linkedin && <Linkedin className="h-5 w-5 cursor-pointer hover:text-cyan-400" />}
                      {member.socials.github && <Github className="h-5 w-5 cursor-pointer hover:text-cyan-400" />}
                      {member.socials.email && <Mail className="h-5 w-5 cursor-pointer hover:text-cyan-400" />}
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