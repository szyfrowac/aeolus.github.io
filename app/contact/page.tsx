// `app/support/page.tsx`
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  LifeBuoy, 
  BookOpen, 
  MessageSquare, 
  AlertTriangle, 
  Activity,
  Mail,
  Plus,
  Menu,
  X
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

// --- Local Floating Header (Consistency with Team/Terms/Privacy pages) ---
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

export default function SupportPage() {
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
            Support <span className={accentColor}>Center</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Last Updated: April 04, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 leading-relaxed text-slate-300">
          <section className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <p>
              Welcome to the Aeolus Support Center. Whether you are a club member working in the workshop or a partner interested in our UAV research, we are here to assist you with technical resources and guidance.
            </p>
          </section>

          {/* FAQ & Documentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <LifeBuoy className={`h-6 w-6 ${accentColor}`} />
                <h2 className={`text-2xl font-bold font-display ${textColor}`}>FAQs</h2>
              </div>
              <p className="text-sm">
                Quick answers to common questions about recruitment, workshop hours, and project eligibility can be found in our <Link href="/#join" className={accentColor}>FAQ section</Link>.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen className={`h-6 w-6 ${accentColor}`} />
                <h2 className={`text-2xl font-bold font-display ${textColor}`}>Guides</h2>
              </div>
              <p className="text-sm">
                Access step-by-step tutorials on flight controller setup and aerodynamic simulations on our <Link href="/documentation" className={accentColor}>Documentation page</Link>.
              </p>
            </section>
          </div>

          {/* Contact Support */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <MessageSquare className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>Contact the Team</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 space-y-4">
              <p>Can't find what you're looking for? Reach out to our technical leads:</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className={`h-5 w-5 ${accentColor}`} />
                  <span className="text-sm font-medium">aeolus@hyderabad.bits-pilani.ac.in</span>
                </li>
                <li className="text-sm text-slate-400 italic">
                  Response Time: 24-48 business hours.
                </li>
              </ul>
            </div>
          </section>

          {/* Issue Reporting */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <AlertTriangle className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>Report an Issue</h2>
            </div>
            <p>
              Encountered a bug on the site or a safety concern in the workshop? Please notify the Web Team or Safety Officers immediately. Provide project details, screenshots, or logs where applicable.
            </p>
          </section>

          {/* Status Page */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Activity className={`h-6 w-6 ${accentColor}`} />
              <h2 className={`text-2xl font-bold font-display ${textColor}`}>Service Status</h2>
            </div>
            <p>
              Monitor the status of our internal flight servers and simulation environments on our <Link href="/status" className={accentColor}>Status Page</Link>.
            </p>
          </section>

          {/* Feedback */}
          <section className="mt-16 p-8 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-sm">
            <h2 className={`text-xl font-bold font-display ${textColor} mb-4`}>Feedback</h2>
            <p className="text-sm mb-4">
              We are constantly optimizing our digital tools and workshop protocols. Share your suggestions with the Nucleus team to help us improve.
            </p>
            {/* Wrap the button in an anchor tag for external redirection */}
            <a 
                href="https://forms.gle/your-feedback-form-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
            >
                <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                    Submit Feedback
                </Button>
            </a>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus.
      </footer>
    </div>
  );
}