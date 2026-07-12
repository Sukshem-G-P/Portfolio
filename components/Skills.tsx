import { FaCode, FaDisplay, FaServer, FaDatabase, FaDiagramProject, FaRobot } from "react-icons/fa6";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FaCode,
  display: FaDisplay,
  server: FaServer,
  database: FaDatabase,
  project: FaDiagramProject,
  robot: FaRobot,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-surface">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">skills</div>
          <h2 className="text-[28px] font-bold">What I work with</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title}>
                <div className="bg-bg border border-border rounded-lg p-6  max-[480px]:p-4 h-full hover:-translate-y-1 hover:shadow-card transition-all duration-200">
                  <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                    <Icon className="text-primary" /> {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
