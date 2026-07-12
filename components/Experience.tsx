import { FaGraduationCap, FaSchool } from "react-icons/fa6";
import Reveal from "./Reveal";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-surface">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">experience</div>
          <h2 className="">Where I&apos;ve worked &amp; studied</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            {experience.map((job) => (
              <div key={job.company} className="bg-bg border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <span className="font-mono text-sm text-primary">{job.role}</span>
                  </div>
                  <span className="font-mono text-xs text-text-secondary whitespace-nowrap">{job.date}</span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm text-text-secondary pl-5 relative">
                      <span className="absolute left-0 text-primary">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal className="relative pl-6 border-l border-border">
            {education.map((ed, i) => (
              <div key={ed.title} className={`relative ${i !== education.length - 1 ? "pb-10" : ""}`}>
                <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-primary" />
                <span className="font-mono text-xs text-primary">{ed.date}</span>
                <h4 className="text-lg font-semibold my-1 flex items-center gap-2">
                  {i === 0 ? <FaGraduationCap className="text-primary" /> : <FaSchool className="text-primary" />}
                  {ed.title}
                </h4>
                <p className="text-sm text-text-secondary">{ed.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
