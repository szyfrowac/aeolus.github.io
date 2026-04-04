// `app/refund/page.tsx`
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Landmark, Ban, AlertCircle, Mail, Plus, Menu, X } from "lucide-react";

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

export default function RefundPolicy() {
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
            Refund <span className={accentColor}>Policy</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Last Updated: April 04, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 leading-relaxed text-slate-300">
          <section className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <p>
              This policy outlines the financial terms for workshops, events, and merchandise organized by <strong>Aeolus</strong> at BITS Pilani, Hyderabad Campus. Because our primary payment gateway is integrated with the university's SWD system, specific constraints apply.
            </p>
          </section>

          {/* SWD Integration */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Landmark className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>1. SWD Portal Payments</h2>
            </div>
            <p>
              Most financial transactions (workshop registrations, club fees, competition entries) are processed through the official <strong>BITS Pilani SWD Website</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 border-l-2 border-cyan-500/30 ml-2">
              <li>Payments made via SWD are subject to the university's central financial policies.</li>
              <li>Aeolus does not receive "direct cash" for these transactions; funds are managed by the Student Welfare Division.</li>
              <li>Requests for refunds for SWD transactions must be directed to the SWD office, and their decision is final.</li>
            </ul>
          </section>

          {/* Non-Refundable Policy */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Ban className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>2. Non-Refundable Status</h2>
            </div>
            <p>
              Unless explicitly stated otherwise at the time of purchase, all registrations for Aeolus workshops and events are <strong>non-refundable</strong>.
            </p>
            <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400 italic">
                Reasoning: Funds collected are immediately allocated for procurement of drone components, safety equipment, and logistics required for the event. Once materials are purchased based on registration counts, we cannot issue reversals.
              </p>
            </div>
          </section>

          {/* Exceptional Cases */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <AlertCircle className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>3. Exceptional Circumstances</h2>
            </div>
            <p>
              In the rare event that Aeolus or SWD BPC decides to issue a refund (e.g., event cancellation or double billing), the process will be handled as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds will only be processed if Aeolus receives the corresponding funds from SWD BPC for that specific reversal.</li>
              <li>Approved refunds may take 10-15 business days to reflect in your account or mess bill balance, depending on SWD processing cycles.</li>
            </ul>
          </section>

          {/* Contact Box */}
          <section className="mt-16 p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm">
            <h2 className={`text-xl font-bold font-display ${textColor} mb-4`}>Dispute a Transaction?</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Mail className={`h-5 w-5 ${accentColor}`} />
                </div>
                <span className="text-sm">aeolus@hyderabad.bits-pilani.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-slate-400">
                  <Landmark className="h-5 w-5" />
                </div>
                <span className="text-sm">SWD Office, BITS Pilani Hyderabad</span>
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