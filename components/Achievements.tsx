import { FaCode, FaChartLine, FaGithub, FaGraduationCap } from "react-icons/fa6";
import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FaCode,
  chart: FaChartLine,
  github: FaGithub,
  cap: FaGraduationCap,
};

export default function Achievements() {
  return (<div></div>
    // <section id="achievements" className="py-16 bg-surface">
    //   <div className="max-w-container mx-auto px-5 md:px-8">
    //     <Reveal className="max-w-xl mb-12">
    //       <div className="eyebrow">achievements</div>
    //       <h2 className="text-[28px] font-bold">By the numbers</h2>
    //     </Reveal>
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    //       {achievements.map((a) => {
    //         const Icon = icons[a.icon];
    //         return (
    //           <Reveal key={a.label}>
    //             <div className="bg-bg border border-border rounded-lg p-5 text-center hover:-translate-y-1 transition-transform duration-200">
    //               <Icon className="text-primary text-xl mb-2 mx-auto" />
    //               <b className="text-2xl font-extrabold text-primary block">{a.value}</b>
    //               <span className="text-xs text-text-secondary">{a.label}</span>
    //             </div>
    //           </Reveal>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
  );
}
