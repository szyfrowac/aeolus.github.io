"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { 
  ArrowLeft, 
  Loader2, 
  Send, 
  Plus, 
  Menu, 
  X 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Custom Fonts ---
const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
    .font-display { font-family: 'Orbitron', sans-serif; }
    .font-body { font-family: 'Exo 2', sans-serif; }
  `}</style>
);

// --- Local Floating Header (Consistent with Team/Terms/Privacy pages) ---
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

type JoinFormData = {
  name: string;
  idNumber: string;
  email: string;
  whyJoin: string;
  team: string;
  githubLink: string;
  projectsWorkedOn: string;
};

const initialFormData: JoinFormData = {
  name: "",
  idNumber: "",
  email: "",
  whyJoin: "",
  team: "",
  githubLink: "",
  projectsWorkedOn: "",
};

export default function JoinPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<JoinFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  // Theme Constants
  const textColor = "text-slate-100";
  const mutedTextColor = "text-slate-400";
  const accentColor = "text-cyan-400";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsError(false);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Failed to submit the form.");
      }

      setStatusMessage("Application submitted successfully. We will reach out soon.");
      setFormData(initialFormData);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setIsError(true);
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-body text-slate-300 antialiased">
      <Fonts />
      
      <FloatingHeader onCreateNew={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <main className="mx-auto w-full max-w-3xl px-4 md:px-6 py-20 md:py-28">
        {/* Back Button */}
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
        <div className="mb-12 text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textColor} font-display mb-4`}>
            Join Our <span className={accentColor}>Squadron</span>
          </h1>
          <p className={`${mutedTextColor} text-lg`}>
            Ready to build the future of aerial robotics? Fill out the flight application below.
          </p>
        </div>

        <Card className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className={`text-xl font-display ${textColor}`}>Application Form</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  required
                  className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                />

                <Input
                  name="idNumber"
                  placeholder="BITS ID Number"
                  value={formData.idNumber}
                  onChange={(event) => setFormData((prev) => ({ ...prev, idNumber: event.target.value }))}
                  required
                  className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="BITS Email Address"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />

              <Input
                name="team"
                placeholder="Preferred Team (e.g., Aerodynamics, Avionics, Nucleus)"
                value={formData.team}
                onChange={(event) => setFormData((prev) => ({ ...prev, team: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />

              <Input
                name="githubLink"
                type="url"
                placeholder="GitHub Profile Link (Optional)"
                value={formData.githubLink}
                onChange={(event) => setFormData((prev) => ({ ...prev, githubLink: event.target.value }))}
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />

              <Textarea
                name="whyJoin"
                placeholder="Tell us why you want to join Aeolus..."
                value={formData.whyJoin}
                onChange={(event) => setFormData((prev) => ({ ...prev, whyJoin: event.target.value }))}
                required
                className="min-h-[120px] border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />

              <Textarea
                name="projectsWorkedOn"
                placeholder="List any technical projects or relevant experience..."
                value={formData.projectsWorkedOn}
                onChange={(event) => setFormData((prev) => ({ ...prev, projectsWorkedOn: event.target.value }))}
                required
                className="min-h-[120px] border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 font-bold text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>

              {statusMessage && (
                <p className={`text-center text-sm font-medium ${isError ? "text-red-400" : "text-emerald-400"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aeolus — BITS Pilani, Hyderabad Campus.
      </footer>
    </div>
  );
}