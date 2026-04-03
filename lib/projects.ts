export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  heroImage: string;
  summary: string;
  details: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "sae-aerothon-2025",
    title: "SAE AeroTHON 2025",
    year: "2025",
    type: "Competition",
    heroImage: "/aeoluscover.png",
    summary:
      "Flagship annual competition effort focused on a high-endurance autonomous UAV platform with mission planning and rapid field deployment.",
    details: [
      "The 2025 AeroTHON cycle centered on improving reliability and repeatability across full mission runs. The team redesigned subsystems for faster maintenance and cleaner data capture during tests.",
      "A major emphasis was end-to-end mission readiness: pre-flight checks, robust communication links, and post-flight telemetry analysis. This improved turnaround between trial flights and accelerated iteration.",
    ],
    highlights: ["Mission planning workflow", "Telemetry-driven iteration", "Field-ready operations"],
  },
  {
    slug: "sae-aerothon-2024",
    title: "SAE AeroTHON 2024",
    year: "2024",
    type: "Competition",
    heroImage: "/D72_2524.jpg",
    summary:
      "Competition build focused on airframe optimization, stable control loops, and payload strategy under strict event constraints.",
    details: [
      "The 2024 season established a stronger baseline architecture for the club's competition stack. Improvements in structural design and control stability enabled consistent performance under varying conditions.",
      "The project also formalized internal testing templates and documentation so future teams could inherit validated processes instead of restarting from scratch.",
    ],
    highlights: ["Airframe optimization", "Control tuning", "Reusable test process"],
  },
  {
    slug: "sae-aerothon-2023",
    title: "SAE AeroTHON 2023",
    year: "2023",
    type: "Competition",
    heroImage: "/aeoluscover.png",
    summary:
      "Foundational AeroTHON participation that built core team capability in integration, test discipline, and competition workflows.",
    details: [
      "The 2023 AeroTHON effort was a formative milestone, bringing together mechanical, avionics, and software tracks into a unified competition pipeline.",
      "This cycle emphasized practical learning: integration debugging, pre-flight validation, and operational coordination under time pressure.",
    ],
    highlights: ["Cross-team integration", "Operational readiness", "Competition foundations"],
  },
  {
    slug: "vlsid-2026-chipwings",
    title: "VLSID 2026 - ChipWings",
    year: "2026",
    type: "Internal Research",
    heroImage: "/D72_2524.jpg",
    summary:
      "An interdisciplinary concept exploring lightweight onboard intelligence for UAV decision-making under resource constraints.",
    details: [
      "ChipWings investigates embedded compute strategies for perception and autonomy where power, latency, and thermal budgets are tightly constrained.",
      "The initiative links systems architecture with algorithm design so that autonomy features remain practical for deployable airframes.",
    ],
    highlights: ["Edge intelligence", "Low-power autonomy", "Hardware-software co-design"],
  },
  {
    slug: "drone-bank",
    title: "Drone Bank",
    year: "Ongoing",
    type: "Internal Infrastructure",
    heroImage: "/aeoluscover.png",
    summary:
      "A standardized inventory and lifecycle system for components, modules, and reusable drone subsystems across projects.",
    details: [
      "Drone Bank was built to reduce duplicate purchases and speed up prototyping. It tracks modules by compatibility, condition, and usage history.",
      "By introducing structured hardware availability, project teams can begin integration faster and make decisions based on actual stock and maintenance state.",
    ],
    highlights: ["Inventory standardization", "Faster prototyping", "Lifecycle tracking"],
  },
  {
    slug: "isdc-2019",
    title: "ISDC 2019",
    year: "2019",
    type: "Competition",
    heroImage: "/D72_2524.jpg",
    summary:
      "Early competition milestone that shaped the club's systems approach and long-term UAV development culture.",
    details: [
      "ISDC 2019 represents one of the earliest large-scale external engagements for the team and helped define practical engineering expectations.",
      "The learnings from this cycle influenced later documentation standards, subsystem ownership, and structured validation routines.",
    ],
    highlights: ["Legacy milestone", "Process evolution", "Team growth"],
  },
  {
    slug: "wilp-autonomous-drone-workshop",
    title: "WILP - Autonomous Drone Workshop",
    year: "Ongoing",
    type: "Workshop",
    heroImage: "/aeoluscover.png",
    summary:
      "Hands-on workshop initiative introducing autonomous drone concepts, integration basics, and practical flight pipelines.",
    details: [
      "The workshop combines short theory modules with guided lab sessions, enabling participants to understand autonomy stacks from sensing to control.",
      "A key objective is accessibility: lowering the barrier for new learners while keeping content technically rigorous and project-relevant.",
    ],
    highlights: ["Learning pipeline", "Hands-on labs", "Autonomy fundamentals"],
  },
  {
    slug: "m4-reimagined",
    title: "M4 - Reimagined",
    year: "Ongoing",
    type: "Internal Development",
    heroImage: "/D72_2524.jpg",
    summary:
      "A redesign initiative to modernize a legacy platform with improved modularity, maintainability, and mission flexibility.",
    details: [
      "M4 - Reimagined revisits earlier architecture choices and replaces brittle coupling with clearer interfaces across payload, compute, and actuation layers.",
      "The project is intended to become a reusable baseline platform for experimentation, demonstrations, and rapid mission adaptation.",
    ],
    highlights: ["Modular redesign", "Maintainability", "Flexible mission profiles"],
  },
  {
    slug: "chakravaat",
    title: "Chakravaat",
    year: "Ongoing",
    type: "Internal Research",
    heroImage: "/aeoluscover.png",
    summary:
      "A mission-oriented UAV concept focused on robust operation in dynamic and uncertain field conditions.",
    details: [
      "Chakravaat prioritizes resilience in navigation and control during rapidly changing environmental scenarios.",
      "Workstreams include robustness testing, mission safety rules, and adaptive control behavior under disturbances.",
    ],
    highlights: ["Resilient control", "Adaptive behavior", "Mission safety"],
  },
  {
    slug: "pralaya",
    title: "Pralaya",
    year: "Ongoing",
    type: "Internal Research",
    heroImage: "/D72_2524.jpg",
    summary:
      "A capability development track centered on high-impact mission planning, rapid response workflows, and systems robustness.",
    details: [
      "Pralaya explores frameworks for time-critical UAV operations where quick deployment and dependable execution are both essential.",
      "The project emphasizes operational discipline, fallback handling, and clear decision support during live missions.",
    ],
    highlights: ["Rapid response pipeline", "Fallback strategies", "Operational reliability"],
  },
  {
    slug: "drone-testbench",
    title: "Drone Testbench",
    year: "Ongoing",
    type: "Internal Infrastructure",
    heroImage: "/aeoluscover.png",
    summary:
      "A controlled validation environment for repeatable subsystem and full-stack testing before field trials.",
    details: [
      "The Drone Testbench standardizes how teams validate avionics, communication, and software behaviors prior to flight.",
      "With repeatable scenarios and logs, it reduces risk in outdoor trials and improves debugging quality.",
    ],
    highlights: ["Repeatable validation", "Pre-flight confidence", "Safer field trials"],
  },
  {
    slug: "swarm-robotics",
    title: "Swarm Robotics",
    year: "Ongoing",
    type: "Internal Research",
    heroImage: "/D72_2524.jpg",
    summary:
      "Multi-agent coordination research for distributed aerial systems, collaborative behaviors, and scalable mission logic.",
    details: [
      "Swarm Robotics investigates how multiple UAVs can coordinate tasks through decentralized decision-making and robust communication.",
      "The project studies formation control, workload allocation, and fault-tolerant behavior to unlock larger collaborative missions.",
    ],
    highlights: ["Multi-agent coordination", "Distributed autonomy", "Scalable missions"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
