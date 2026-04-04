"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Cpu, 
  Wind, 
  ShieldAlert, 
  Code2, 
  Menu, 
  X, 
  Plus, 
  BookOpen,
  ChevronRight
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

// --- Local Floating Header ---
const FloatingHeader = ({ onCreateNew }: { onCreateNew: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="sticky top-1 z-20 mx-auto px-4 max-w-7xl">
            <motion.div 
                className="rounded-full bg-slate-900/90 border border-slate-700/50 backdrop-blur-lg shadow-lg"
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
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <Link href="/blogs" className="hover:text-cyan-400 transition-colors">Blogs</Link>
                        <Link href="/team" className="hover:text-cyan-400 transition-colors">Team</Link>
                        <Button onClick={onCreateNew} size="sm" className="bg-cyan-500 text-slate-900 hover:bg-cyan-400">
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

export default function DocumentationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 font-body text-slate-300 antialiased">
      <Fonts />
      <FloatingHeader onCreateNew={() => router.push('/join')} />

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Simple Navigation Back */}
        <button 
          onClick={() => router.push('/')} 
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 mb-10 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>

        {/* Page Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-display text-slate-100 mb-4">
            Technical <span className="text-cyan-400">Documentation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Standard operating procedures, design guidelines, and software stack specifications for Aeolus aerial systems.
          </p>
        </div>

        {/* Technical Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sidebar-style Index (Functional) */}
          <div className="md:col-span-1 space-y-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 sticky top-24">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4 font-display">Index</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#mechanical" className="flex items-center text-slate-300 hover:text-cyan-400 group"><ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Airframe Design</a></li>
                <li><a href="#avionics" className="flex items-center text-slate-300 hover:text-cyan-400 group"><ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Flight Controller</a></li>
                <li><a href="#software" className="flex items-center text-slate-300 hover:text-cyan-400 group"><ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> ROS2 & Simulation</a></li>
                <li><a href="#safety" className="flex items-center text-slate-300 hover:text-cyan-400 group"><ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" /> Safety Protocols</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Mechanical Section */}
            <section id="mechanical" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-3 text-slate-100 mb-4">
                <Wind className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold font-display">Mechanical Engineering</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Aeolus frames are designed for high strength-to-weight ratios. We primarily utilize 3K Carbon Fiber and 3D-printed TPU for vibration dampening.
              </p>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm">
                <p className="text-cyan-400 font-bold mb-2">Design Standards:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-500">
                  <li>Standard 5" Racing Quad geometry</li>
                  <li>Structural stress analysis using SolidWorks Simulation</li>
                  <li>Tolerance standards for motor mount holes (M3 standard)</li>
                </ul>
              </div>
            </section>

            {/* Avionics Section */}
            <section id="avionics" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-3 text-slate-100 mb-4">
                <Cpu className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold font-display">Avionics & Electronics</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Our flight stacks are built on high-performance STM32-based controllers. Reliability in power distribution and EMI shielding is critical.
              </p>
              <div className="grid grid-cols-1 gap-4">
                 <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stack Specification</span>
                    <p className="text-slate-300 mt-1">PX4 / ArduPilot compatible hardware with ELRS 2.4GHz for ultra-low latency control links.</p>
                 </div>
              </div>
            </section>

            {/* Software Section */}
            <section id="software" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-3 text-slate-100 mb-4">
                <Code2 className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold font-display">Software Stack</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Autonomous navigation is handled via onboard companion computers running ROS2.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" /> <strong>Environment:</strong> Ubuntu 22.04 LTS</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" /> <strong>Framework:</strong> ROS2 Humble</li>
                <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" /> <strong>Simulation:</strong> Gazebo Garden / SITL</li>
              </ul>
            </section>

            {/* Safety Section */}
            <section id="safety" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-3 text-slate-100 mb-4">
                <ShieldAlert className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold font-display">Safety Protocols</h2>
              </div>
              <div className="border-l-2 border-red-500/50 pl-6 py-2">
                <p className="text-sm font-bold text-red-400 mb-1">Pre-Arm Requirement</p>
                <p className="text-slate-400 text-sm">Props must be removed for all bench testing involving motor signal calibration. No exceptions.</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus. Technical Data Version 1.2.0
      </footer>
    </div>
  );
}