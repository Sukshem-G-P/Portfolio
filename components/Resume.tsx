import { FaDownload, FaEye } from "react-icons/fa6";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-surface">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-bg border border-border rounded-lg p-8 md:p-12">
            <div className="w-[160px] h-[200px] bg-surface border border-border rounded shadow-card flex-shrink-0 p-3.5 flex flex-col gap-1.5">
              <div className="h-1 w-3/5 bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-2" />
              <div className="h-1 w-3/5 bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-2" />
              <div className="h-1 w-3/5 bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
              <div className="h-1 w-full bg-border rounded" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">One-page overview, right this way.</h3>
              <p className="text-text-secondary mb-5">
                Education, experience, projects and skills — condensed into a single PDF, kept current.
              </p>
              <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                {/* Place your real resume file at /public/resume.pdf */}
                <a href="/resume.pdf" download className="btn-primary">
                  <FaDownload /> Download Resume
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <FaEye /> View Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
