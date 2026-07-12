import { FaBookOpen, FaCompass, FaCircleCheck, FaCheck } from "react-icons/fa6";
import Reveal from "./Reveal";

const columns = [
  {
    tag: "learning",
    icon: FaBookOpen,
    items: ["System design fundamentals", "Advanced MCP tool orchestration", "PostgreSQL performance tuning"],
  },
  {
    tag: "exploring",
    icon: FaCompass,
    items: ["Rust for backend services", "Vector databases for RAG", "Edge functions & Vercel"],
  },
  {
    tag: "availability",
    icon: FaCircleCheck,
    items: ["Open to full-time roles", "Open to select freelance work", "Based in Mangaluru, remote-friendly"],
  },
];

export default function Now() {
  return (
    <section id="now" className="py-16">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow">now</div>
          <h2 className="text-[28px] font-bold">Current focus</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {columns.map(({ tag, icon: Icon, items }) => (
            <Reveal key={tag}>
              <div className="bg-surface border border-border rounded-lg p-6">
                <span className="font-mono text-xs text-primary flex items-center gap-1.5 mb-3">
                  <Icon /> {tag}
                </span>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                      <FaCheck className="text-primary text-xs mt-1 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
