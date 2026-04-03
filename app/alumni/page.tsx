"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Plus,
  Menu,
  X,
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

// --- Alumni Data (Year-wise) ---
type AlumniMember = {
  id: string;
  name: string;
  role: string;
  year: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

const alumniMembers: AlumniMember[] = [
  {
    id: "1",
    name: "Medha Nath",
    role: "President",
    year: "2024",
    image: "/medha.png",
    bio: "Led Aeolus through major competition cycles while mentoring newer batches.",
    socials: { linkedin: "#" },
  },
  {
    id: "2",
    name: "Malhar Rajurkar",
    role: "Vice-President",
    year: "2024",
    image: "/malhar.png",
    bio: "Contributed to systems integration and team operations across core projects.",
    socials: { linkedin: "#" },
  },
  {
    id: "3",
    name: "Bala Phanikar Challa",
    role: "Treasurer",
    year: "2024",
    image: "/phanikar.png",
    bio: "Managed club finance and logistics while supporting technical execution.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: "4",
    name: "Aditya Ray Baruah",
    role: "Avionics Lead",
    year: "2024",
    image: "/adiray.png",
    bio: "Built and validated avionics architecture for multiple UAV prototypes.",
    socials: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Aryaman Agarwal",
    role: "Mechanical Lead",
    year: "2024",
    image: "/aryaman.png",
    bio: "Drove mechanical design iterations with a focus on reliability and weight.",
    socials: { linkedin: "#" },
  },
  {
    id: "6",
    name: "Prayush Kansal",
    role: "President",
    year: "2023",
    image: "/prayush.png",
    bio: "Led foundational project tracks and expanded technical participation.",
    socials: { linkedin: "#" },
  },
  {
    id: "7",
    name: "Chaitanya Agarwal",
    role: "Vice President",
    year: "2023",
    image: "/chaitanya.png",
    bio: "Supported strategic planning and coordinated cross-team initiatives.",
    socials: { linkedin: "#" },
  },
  {
    id: "8",
    name: "Krishnendu Mathur",
    role: "Treasurer",
    year: "2023",
    image: "/krishnendu.png",
    bio: "Managed budgeting and procurement for workshop and competition needs.",
    socials: { linkedin: "#" },
  },
  {
    id: "9",
    name: "Siddhartha Mishra",
    role: "Avionics Lead",
    year: "2023",
    image: "/siddhartha.png",
    bio: "Worked on avionics integration and robust electronics deployment.",
    socials: { linkedin: "#" },
  },
  {
    id: "10",
    name: "JCS Krishna",
    role: "Mechanical Lead",
    year: "2023",
    image: "/jcs.png",
    bio: "Contributed to structural design and manufacturing process refinement.",
    socials: { linkedin: "#" },
  },
];

// --- Floating Header (Defined locally to avoid "Module Not Found") ---
const FloatingHeader = ({ onCreateNew }: { onCreateNew: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const router = useRouter();

  const alumniByYear = useMemo(() => {
    const grouped = alumniMembers.reduce<Record<string, AlumniMember[]>>((acc, member) => {
      if (!acc[member.year]) {
        acc[member.year] = [];
      }
      acc[member.year].push(member);
      return acc;
    }, {});

    return Object.entries(grouped).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));
  }, []);

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
          <p className="mt-2 text-lg text-slate-400">Year-wise archive of the people who helped build Aeolus.</p>
        </div>

        {alumniByYear.map(([year, members]) => (
          <section key={year} className="mb-14 last:mb-0">
            <h2 className={`mb-6 text-2xl font-display font-bold ${textColor}`}>
              Batch of <span className={accentColor}>{year}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <Card className={cardClasses}>
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/aeoluscover.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <CardHeader className="relative -mt-12 bg-transparent">
                      <Badge className="bg-cyan-900/50 border-cyan-400/30 text-cyan-300 mb-2">{year}</Badge>
                      <CardTitle className={`font-display text-xl ${textColor}`}>{member.name}</CardTitle>
                      <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                    </CardHeader>

                    <CardContent>
                      <p className={`text-sm ${mutedTextColor} mb-6`}>{member.bio}</p>
                      <div className="flex gap-4 border-t border-slate-700 pt-4">
                        {member.socials.linkedin && member.socials.linkedin !== "#" && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon className="h-5 w-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                          </a>
                        )}
                        {member.socials.github && member.socials.github !== "#" && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="h-5 w-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                          </a>
                        )}
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
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus.
      </footer>
    </div>
  );
}