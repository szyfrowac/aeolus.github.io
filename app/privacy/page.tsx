// `app/privacy/page.tsx`
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Shield, Lock, Eye, Globe, Plus, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

// --- Custom Fonts ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    .font-display { font-family: 'Orbitron', sans-serif; }
    .font-body { font-family: 'Exo 2', sans-serif; }
  `}</style>
);

// --- Local Floating Header (Consistency with Team/Terms pages) ---
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

export default function PrivacyPolicy() {
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

        {/* Hero Header */}
        <div className="mb-16 border-b border-slate-800 pb-10">
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textColor} font-display mb-4`}>
            Privacy <span className={accentColor}>Policy</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Effective Date: April 04, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 leading-relaxed text-slate-300">
          <section className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <p>
              At <strong>Aeolus</strong>, we are committed to protecting the privacy of our members, students, and website visitors. This policy outlines how we handle data collected through our digital platforms and workshop operations at BITS Pilani, Hyderabad Campus.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Eye className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>1. Data We Collect</h2>
            </div>
            <p>We collect information necessary to manage club operations and project collaborations:</p>
            <ul className="list-disc pl-6 space-y-2 border-l-2 border-cyan-500/30 ml-2">
              <li><strong>Personal Identification:</strong> Name, BITS email address, and discipline for membership and recruitment.</li>
              <li><strong>Technical Data:</strong> Information provided during workshop registrations or project submissions.</li>
              <li><strong>Usage Information:</strong> IP addresses and browser types collected automatically to improve website performance.</li>
            </ul>
          </section>

          {/* Usage */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>2. How We Use Data</h2>
            </div>
            <p>Your data is used solely for the following club-related purposes:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">Facilitating recruitment and team placements.</li>
              <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">Sending project updates and workshop notifications.</li>
              <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">Maintaining workshop security and resource logs.</li>
              <li className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">Analyzing website traffic to optimize our technical blog.</li>
            </ul>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Lock className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>3. Data Security</h2>
            </div>
            <p>
              We implement industry-standard security measures to protect your information. Membership data is stored within secured university-linked databases, and we do not sell or share personal data with third-party commercial entities.
            </p>
          </section>

          {/* International */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Globe className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>4. Cookies & Tracking</h2>
            </div>
            <p>
              Our technical blog uses cookies to remember your theme preferences (Dark/Light mode) and to provide basic analytics on which research posts are most engaging to our readers.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-16 p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm">
            <h2 className={`text-xl font-bold font-display ${textColor} mb-4`}>Data Privacy Concerns?</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Mail className={`h-5 w-5 ${accentColor}`} />
                </div>
                <span className="text-sm">aeolus@hyderabad.bits-pilani.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <span className="text-sm">Attn: Club President, BITS Hyderabad</span>
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