import { FaJava, FaBuilding, FaLayerGroup } from "react-icons/fa6";
import { SiC } from "react-icons/si";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  java: FaJava,
  c: SiC,
  building: FaBuilding,
  layers: FaLayerGroup,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">certifications</div>
          <h2 className="text-[28px] font-bold">Credentials</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certifications.map((c) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.title}>
                <div className="bg-surface border border-border rounded-lg p-5 text-center hover:-translate-y-1 transition-transform duration-200">
                  <Icon className="text-primary text-2xl mb-3 mx-auto" />
                  <h4 className="text-sm font-semibold mb-1">{c.title}</h4>
                  <span className="text-xs text-text-secondary">{c.issuer}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
