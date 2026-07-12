import { FaDiagramProject, FaBug, FaBolt, FaRobot, FaGraduationCap } from "react-icons/fa6";
import Reveal from "./Reveal";

const traits = [
  { icon: FaDiagramProject, title: "Systems thinking", desc: "Architecture before code." },
  { icon: FaBug, title: "Debugging instinct", desc: "Root cause, not patches." },
  { icon: FaBolt, title: "Performance-minded", desc: "25% load-time gains at FareFirst." },
  { icon: FaRobot, title: "AI-curious", desc: "Building with MCP & OpenAI APIs." },
];

export default function About() {
  return (
    <section id="about" className="pt-6 pb-16">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">about</div>
          <h2 className="text-[28px] font-bold">Who I am</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              I&apos;m a full-stack developer who enjoys turning ambiguous problems into working
              software. My foundation is in Data Structures and Algorithms, and I spend most of
              my time in React, Node.js, and REST APIs — with a growing focus on integrating LLMs
              into real products.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              My philosophy: ship things that are simple to use and easy to maintain. I&apos;d
              rather spend an extra hour on a clean data model than leave a shortcut for someone
              to trip over later — including future me.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-surface border border-border rounded-md p-5">
                  <Icon className="text-primary text-lg mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs text-text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative pl-6 border-l border-border">
            <div className="relative pb-10">
              <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-primary" />
              <span className="font-mono text-xs text-primary">2021 — 2025</span>
              <h4 className="text-lg font-semibold my-1 flex items-center gap-2">
                <FaGraduationCap className="text-primary" /> B.E. Information Science
              </h4>
              <p className="text-sm text-text-secondary">Canara Engineering College · CGPA 8.75</p>
            </div>
            <div className="relative pb-10">
              <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-primary" />
              <span className="font-mono text-xs text-primary">2025 — Present</span>
              <h4 className="text-lg font-semibold my-1">Web Developer @ FareFirst</h4>
              <p className="text-sm text-text-secondary">Building booking workflows &amp; REST integrations.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-primary" />
              <span className="font-mono text-xs text-primary">Next</span>
              <h4 className="text-lg font-semibold my-1">Goal: Senior Full-Stack / AI Product Engineer</h4>
              <p className="text-sm text-text-secondary">Deepening system design and applied AI skills.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
