import Image from "next/image";
import { FaDownload, FaDiagramProject, FaPaperPlane } from "react-icons/fa6";
import Reveal from "./Reveal";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-06 md:pt-10 pb-10 relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none blur-sm"
        style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb),.18), transparent 70%)" }}
      />
      <div className="max-w-container mx-auto px-5 md:px-8 grid md:grid-cols-[340px_1fr] gap-10 md:gap-16 items-center">
        <Reveal className="relative w-[220px] h-[220px] md:w-[340px] md:h-[340px] mx-auto rounded-lg overflow-hidden border border-border shadow-card-lg bg-surface">
          {/*
            Replace /public/photo.jpg with a real photo before deploying.
            Descriptive alt text (not just "photo") helps this image surface
            in Google Image results for your name.
          */}
         <div className="relative md:h-[450px] h-[300px] w-full">
  <Image
    src="/photo.png"
    alt="Sukshem G P"
    fill
    className="object-cover"
  />
</div>
          <div className="absolute bottom-4 left-4 bg-bg border border-border rounded-full px-3.5 py-1.5 text-xs font-mono flex items-center gap-1.5 shadow-card z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-success" /> Open to work
          </div>
        </Reveal>

        <div className="text-center md:text-left">
          <Reveal>
            <div className="font-mono text-sm text-primary mb-3">// full stack developer</div>
          </Reveal>
          <Reveal>
            <h1 className="text-[30px] font-extrabold max-[480px]:text-[26px]">
              Sukshem G P
              <span className="inline-block w-1 h-10 md:h-12 bg-primary ml-1.5 align-middle animate-pulse" />
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[28px] font-bold text-text-secondary mt-2 max-[480px]:text-[24px]">
              Building for the <span className="text-primary">web</span>, backed by{" "}
              <span className="text-primary">algorithms</span>.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg text-text-secondary leading-relaxed mt-5 max-w-xl mx-auto md:mx-0">
              Full-stack developer specializing in scalable web applications, modern frontend
              engineering, backend systems, and algorithmic problem solving. Currently building
              booking experiences at FareFirst.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <a href="/resume.pdf" download className="btn-primary">
                <FaDownload /> Download Resume
              </a>
              <a href="#projects" className="btn-ghost">
                <FaDiagramProject /> View Projects
              </a>
              <a href="#contact" className="btn-ghost">
                <FaPaperPlane /> Hire Me
              </a>
            </div>
          </Reveal>
        
        </div>
      </div>
        <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-6 pt-8 border-t border-border md:mx-[7vw]">
              {stats.map((s) => (
                <div key={s.label}>
                  <b className="text-2xl font-extrabold block">{s.value}</b>
                  <span className="text-xs text-text-secondary">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
    </section>
  );
}
