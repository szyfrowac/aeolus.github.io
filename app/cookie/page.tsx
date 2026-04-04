// `app/cookie/page.tsx`
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Cookie, ShieldCheck, Settings, Info, Plus, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

// --- Custom Fonts ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    .font-display { font-family: 'Orbitron', sans-serif; }
    .font-body { font-family: 'Exo 2', sans-serif; }
  `}</style>
);

// --- Local Floating Header (Consistency with other pages) ---
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

export default function CookiePolicy() {
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
        {/* Navigation */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')} 
            className="text-slate-400 hover:text-cyan-400 p-0 bg-transparent hover:bg-transparent group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-b border-slate-800 pb-10">
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textColor} font-display mb-4`}>
            Cookie <span className={accentColor}>Policy</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Last Updated: April 04, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 leading-relaxed text-slate-300">
          <section className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <p>
              This Cookie Policy explains how <strong>Aeolus</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          {/* What are Cookies */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Info className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>1. What are Cookies?</h2>
            </div>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          {/* Why we use them */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Settings className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>2. Why We Use Cookies</h2>
            </div>
            <p>We use first-party and third-party cookies for several reasons:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h3 className={`${textColor} font-bold mb-2`}>Essential Cookies</h3>
                <p className="text-sm text-slate-400">Strictly necessary to provide you with services available through our Website, such as theme persistence (Dark Mode).</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                <h3 className={`${textColor} font-bold mb-2`}>Analytics Cookies</h3>
                <p className="text-sm text-slate-400">Help us understand how our technical blogs are being read so we can improve our drone research content.</p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <ShieldCheck className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>3. Safety & Privacy</h2>
            </div>
            <p>
              Cookies used by Aeolus do not store sensitive personal information like your BITS ID password or private project files. They are primarily used to enhance the user experience and ensure the website operates smoothly during high-traffic recruitment cycles.
            </p>
          </section>

          {/* Control */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Cookie className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>4. Controlling Cookies</h2>
            </div>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.
            </p>
          </section>

          {/* Contact Box */}
          <section className="mt-16 p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm">
            <h2 className={`text-xl font-bold font-display ${textColor} mb-4`}>Questions about our usage?</h2>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Settings className={`h-5 w-5 ${accentColor}`} />
              </div>
              <span className="text-sm">Reach out to the Web Development team at: aeolus@hyderabad.bits-pilani.ac.in</span>
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