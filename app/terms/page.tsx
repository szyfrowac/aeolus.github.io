"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Plus, 
  Menu, 
  X, 
  Sun, 
  Moon 
} from "lucide-react";

import { Button } from "@/components/ui/button";

// --- Custom Fonts ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    .font-display { font-family: 'Orbitron', sans-serif; }
    .font-body { font-family: 'Exo 2', sans-serif; }
  `}</style>
);

// --- Local Floating Header Component to prevent "Module Not Found" ---
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

export default function TermsOfService() {
  const router = useRouter();

  // Theme Constants
  const textColor = "text-slate-100";
  const mutedTextColor = "text-slate-400";
  const accentColor = "text-cyan-400";

  return (
    <div className="min-h-screen bg-slate-900 font-body text-slate-300 antialiased">
      <Fonts />
      
      <FloatingHeader onCreateNew={() => router.push('/#join')} />

      <main className="mx-auto w-full max-w-4xl px-4 md:px-6 py-20 md:py-28">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')} 
            className="text-slate-400 hover:text-cyan-400 p-0 bg-transparent hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </div>

        <div className="mb-16 border-b border-slate-800 pb-10">
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textColor} font-display mb-4`}>
            Terms of <span className={accentColor}>Service</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Effective Date: April 04, 2026
          </p>
        </div>

        <div className="space-y-10 leading-relaxed text-slate-300">
          <section>
            <p>
              Please read these Terms of Service carefully before using the Aeolus website and services. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold font-display ${textColor}`}>1. Club Resources</h2>
            <p>
              Aeolus provides access to drone design documentation, software repositories, and workshop schedules. These resources are for the educational use of students at BITS Pilani, Hyderabad Campus. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold font-display ${textColor}`}>2. Intellectual Property</h2>
            <p>
              The Service and its original content, including the Aeolus logo, custom flight controller code, and aerodynamic research, remain the exclusive property of the Club and its members.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold font-display ${textColor}`}>3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 border-l-2 border-cyan-500/30 ml-2">
              <li>You must not use our technical data for commercial gain without explicit permission.</li>
              <li>You agree not to engage in any activity that could damage our UAS hardware or digital infrastructure.</li>
              <li>All flight activities conducted under the Aeolus name must follow DGCA regulations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold font-display ${textColor}`}>4. Limitation of Liability</h2>
            <p>
              Aerial robotics involves inherent risks. Aeolus is not responsible for any hardware damage, personal injury, or legal issues arising from the use of designs or code found on this website. <strong>Fly safely and responsibly.</strong>
            </p>
          </section>

          <section className="mt-16 p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm">
            <h2 className={`text-xl font-bold font-display ${textColor} mb-4`}>Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${accentColor}`} />
                <span className="text-sm">aeolus@hyderabad.bits-pilani.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`h-5 w-5 ${accentColor}`} />
                <span className="text-sm">F-Block Workshop, BITS Hyderabad</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus.
      </footer>
    </div>
  );
}